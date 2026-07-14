import { useRef, useState } from "react";
import { MessageCircle, Send, ShieldCheck } from "lucide-react";
import { useTranslation } from "react-i18next";
import { isSupabaseConfigured } from "../config";
import { trackButtonClick, trackEvent } from "../lib/analytics";
import { normalizeLead, saveLead } from "../lib/leads";
import { executeRecaptcha } from "../lib/recaptcha";
import { buildLeadWhatsAppMessage, getWhatsAppUrl } from "../lib/whatsapp";

const initialForm = {
  name: "",
  country: "",
  whatsapp: "",
  preferred_month: "",
  service_type: "",
  message: "",
  company: "",
};

function validate(form, t) {
  if (form.company) return t("form.errors.spam");
  if (form.name.trim().length < 2) return t("form.errors.name");
  if (!form.country.trim()) return t("form.errors.country");
  if (!/^[+\d][\d\s().-]{6,}$/.test(form.whatsapp.trim())) {
    return t("form.errors.whatsapp");
  }
  if (!form.preferred_month.trim()) return t("form.errors.month");
  if (!form.service_type.trim()) return t("form.errors.service");
  if (form.message.length > 1000) return t("form.errors.message");
  return "";
}

export default function LeadForm({ language, services }) {
  const { t } = useTranslation();
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const startedAt = useRef(Date.now());

  function updateField(field, value) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus({ type: "idle", message: "" });

    const error = validate(form, t);
    if (error) {
      setStatus({ type: "error", message: error });
      return;
    }

    if (Date.now() - startedAt.current < 1800) {
      setStatus({ type: "error", message: t("form.errors.spam") });
      return;
    }

    if (!isSupabaseConfigured) {
      setStatus({ type: "error", message: t("form.errors.supabase") });
      return;
    }

    const lead = normalizeLead(form, language);
    setStatus({ type: "loading", message: t("form.sending") });

    try {
      trackButtonClick("lead_form_submit", {
        language,
        service_type: lead.service_type,
      });
      trackEvent("form_submit", {
        language,
        service_type: lead.service_type,
      });

      const recaptchaToken = await executeRecaptcha("lead_submit");
      await saveLead(lead, recaptchaToken);

      trackEvent("lead_created", {
        language,
        service_type: lead.service_type,
        country: lead.country,
      });
      trackEvent("whatsapp_click", {
        language,
        service_type: lead.service_type,
        source: "lead_form",
      });

      window.location.href = getWhatsAppUrl(buildLeadWhatsAppMessage(lead));
    } catch (error) {
      setStatus({
        type: "error",
        message: error.message || t("form.errors.submit"),
      });
    }
  }

  return (
    <form onSubmit={handleSubmit} className="lead-form" noValidate>
      <div className="hidden" aria-hidden="true">
        <label>
          Company
          <input
            type="text"
            value={form.company}
            tabIndex="-1"
            autoComplete="off"
            onChange={(event) => updateField("company", event.target.value)}
          />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="form-field">
          <span>{t("form.fields.name")}</span>
          <input
            type="text"
            value={form.name}
            autoComplete="name"
            maxLength={120}
            onChange={(event) => updateField("name", event.target.value)}
          />
        </label>
        <label className="form-field">
          <span>{t("form.fields.country")}</span>
          <input
            type="text"
            value={form.country}
            autoComplete="country-name"
            maxLength={120}
            onChange={(event) => updateField("country", event.target.value)}
          />
        </label>
        <label className="form-field">
          <span>{t("form.fields.whatsapp")}</span>
          <input
            type="tel"
            value={form.whatsapp}
            autoComplete="tel"
            maxLength={60}
            onChange={(event) => updateField("whatsapp", event.target.value)}
          />
        </label>
        <label className="form-field">
          <span>{t("form.fields.month")}</span>
          <input
            type="month"
            value={form.preferred_month}
            onChange={(event) =>
              updateField("preferred_month", event.target.value)
            }
          />
        </label>
        <label className="form-field sm:col-span-2">
          <span>{t("form.fields.service")}</span>
          <select
            value={form.service_type}
            onChange={(event) => updateField("service_type", event.target.value)}
          >
            <option value="">{t("form.servicePlaceholder")}</option>
            {services.map((service) => (
              <option
                key={service.title}
                value={service.label || service.title}
              >
                {service.label || service.title}
              </option>
            ))}
          </select>
        </label>
        <label className="form-field sm:col-span-2">
          <span>{t("form.fields.message")}</span>
          <textarea
            value={form.message}
            rows="5"
            maxLength={1000}
            onChange={(event) => updateField("message", event.target.value)}
          />
        </label>
      </div>

      {status.message ? (
        <p
          className={
            status.type === "error"
              ? "mt-4 text-sm text-red-700"
              : "mt-4 text-sm text-midnight"
          }
          role="status"
        >
          {status.message}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status.type === "loading"}
        className="btn-primary mt-6 w-full justify-center sm:w-auto"
      >
        <Send className="h-5 w-5" aria-hidden="true" />
        <span>{t("form.submit")}</span>
      </button>

      <div className="mt-6 grid gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-600">
        <p className="flex items-start gap-3">
          <MessageCircle className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
          <span>{t("form.afterSubmit")}</span>
        </p>
        <p className="flex items-start gap-3">
          <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
          <span>{t("form.privacy")}</span>
        </p>
      </div>
    </form>
  );
}
