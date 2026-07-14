import {
  ArrowRight,
  Baby,
  Building2,
  CalendarCheck,
  Car,
  CheckCircle2,
  ClipboardCheck,
  MessageCircle,
  Mountain,
  Plane,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Seo from "../components/Seo";
import SiteFooter from "../components/SiteFooter";
import WhatsAppButton from "../components/WhatsAppButton";
import WorkflowAiPilot from "../components/WorkflowAiPilot";
import { trackButtonClick, trackEvent } from "../lib/analytics";
import { buildTripWhatsAppMessage, getWhatsAppUrl } from "../lib/whatsapp";
import { localizedPath } from "../pageConfig";

const highlightIcons = [Plane, Baby, Car];
const serviceIcons = [Plane, Car, Sparkles];
const routeIcons = [Plane, Mountain, Building2];
const processIcons = [MessageCircle, ClipboardCheck, Car];

function QuickPlanner({ language }) {
  const { t } = useTranslation();
  const serviceOptions = t("quickQuote.serviceOptions", { returnObjects: true });
  const [trip, setTrip] = useState({
    service: serviceOptions[0]?.label || "",
    pickup: "",
    destination: "",
    date: "",
    passengers: "",
  });

  function updateField(field, value) {
    setTrip((current) => ({ ...current, [field]: value }));
  }

  function submitTrip(event) {
    event.preventDefault();
    trackButtonClick("hero_trip_planner", { language, service_type: trip.service });
    trackEvent("whatsapp_click", {
      language,
      service_type: trip.service,
      source: "hero_trip_planner",
    });
    window.open(
      getWhatsAppUrl(buildTripWhatsAppMessage(trip, language)),
      "_blank",
      "noopener,noreferrer"
    );
  }

  return (
    <form onSubmit={submitTrip} className="hero-planner">
      <p className="eyebrow">{t("quickQuote.eyebrow")}</p>
      <h2>{t("quickQuote.title")}</h2>
      <p className="hero-planner-intro">{t("quickQuote.subtitle")}</p>

      <div className="mt-5 grid grid-cols-3 gap-2">
        {serviceOptions.map((option) => (
          <button
            type="button"
            key={option.label}
            onClick={() => updateField("service", option.label)}
            className={
              trip.service === option.label
                ? "planner-option planner-option-active"
                : "planner-option"
            }
          >
            {option.label}
          </button>
        ))}
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <label className="planner-field">
          <span>{t("quickQuote.fields.pickup")}</span>
          <input
            required
            value={trip.pickup}
            onChange={(event) => updateField("pickup", event.target.value)}
            placeholder={t("quickQuote.placeholders.pickup")}
          />
        </label>
        <label className="planner-field">
          <span>{t("quickQuote.fields.destination")}</span>
          <input
            required
            value={trip.destination}
            onChange={(event) => updateField("destination", event.target.value)}
            placeholder={t("quickQuote.placeholders.destination")}
          />
        </label>
        <label className="planner-field">
          <span>{t("quickQuote.fields.date")}</span>
          <input
            required
            type="date"
            value={trip.date}
            onChange={(event) => updateField("date", event.target.value)}
          />
        </label>
        <label className="planner-field">
          <span>{t("quickQuote.fields.passengers")}</span>
          <input
            required
            min="1"
            type="number"
            inputMode="numeric"
            value={trip.passengers}
            onChange={(event) => updateField("passengers", event.target.value)}
            placeholder={t("quickQuote.placeholders.passengers")}
          />
        </label>
      </div>

      <button type="submit" className="btn-primary mt-5 w-full justify-center">
        <MessageCircle className="h-5 w-5" aria-hidden="true" />
        <span>{t("quickQuote.cta")}</span>
      </button>
      <p className="mt-3 text-center text-xs leading-5 text-slate-500">
        {t("quickQuote.note")}
      </p>
    </form>
  );
}

export default function LandingPage({ language }) {
  const { t } = useTranslation();
  const highlights = t("highlights.items", { returnObjects: true });
  const services = t("services.items", { returnObjects: true });
  const routes = t("routes.items", { returnObjects: true }).slice(0, 3);
  const process = t("process.items", { returnObjects: true }).slice(0, 3);
  const trust = t("trust.items", { returnObjects: true }).slice(0, 3);
  const faqs = t("faq.items", { returnObjects: true }).slice(0, 4);

  const heroStyle = useMemo(
    () => ({
      backgroundImage:
        "linear-gradient(90deg, rgba(5,18,35,0.97) 0%, rgba(10,25,47,0.88) 48%, rgba(10,25,47,0.48) 100%), url('/images/hero-charter-japan.jpg')",
    }),
    []
  );

  return (
    <>
      <Seo language={language} />
      <WorkflowAiPilot />
      <div className="min-h-screen bg-white text-ink">
        <main>
          <section className="relative min-h-[820px] overflow-hidden bg-midnight text-white">
            <Header language={language} />
            <div className="absolute inset-0 bg-cover bg-center" style={heroStyle} />
            <div className="relative z-10 mx-auto grid min-h-[820px] max-w-7xl gap-12 px-4 pb-16 pt-32 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8">
              <div className="max-w-3xl">
                <p className="eyebrow text-gold">{t("hero.eyebrow")}</p>
                <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.08] text-white sm:text-5xl lg:text-6xl">
                  {t("hero.title")}
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82 sm:text-xl">
                  {t("hero.subtitle")}
                </p>
                <ul className="mt-7 flex flex-wrap gap-3 text-sm font-semibold text-white/90">
                  {t("hero.points", { returnObjects: true }).map((point) => (
                    <li
                      key={point}
                      className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-midnight/55 px-4 py-2 backdrop-blur"
                    >
                      <CheckCircle2 className="h-4 w-4 text-gold" aria-hidden="true" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <WhatsAppButton
                    language={language}
                    label={t("cta.whatsapp")}
                    buttonName="hero_whatsapp"
                    className="btn-primary"
                  />
                  <Link
                    to={localizedPath(language, "request-quote")}
                    className="btn-secondary-dark"
                  >
                    <CalendarCheck className="h-5 w-5" aria-hidden="true" />
                    <span>{t("cta.request")}</span>
                  </Link>
                </div>
              </div>
              <QuickPlanner key={language} language={language} />
            </div>
          </section>

          <section className="relative z-20 mx-auto -mt-8 max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid overflow-hidden rounded-xl border border-slate-200 bg-white shadow-soft md:grid-cols-3">
              {highlights.map((item, index) => {
                const Icon = highlightIcons[index] || CheckCircle2;
                return (
                  <article key={item.title} className="highlight-item">
                    <Icon className="h-7 w-7 shrink-0 text-gold" aria-hidden="true" />
                    <div>
                      <h2>{item.title}</h2>
                      <p>{item.description}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>

          <section className="section-shell bg-white pt-24">
            <div className="section-heading">
              <p className="eyebrow">{t("services.eyebrow")}</p>
              <h2>{t("services.title")}</h2>
              <p>{t("services.subtitle")}</p>
            </div>
            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {services.map((service, index) => {
                const Icon = serviceIcons[index] || Car;
                return (
                  <article key={service.title} className="service-card home-preview-card">
                    <div className="service-icon-wrap">
                      <Icon className="h-7 w-7 text-gold" aria-hidden="true" />
                    </div>
                    <p className="service-label">{service.label}</p>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <Link to={localizedPath(language, "services")} className="btn-card">
                      <span>{t("pageLinks.services")}</span>
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </article>
                );
              })}
            </div>
          </section>

          <section className="section-shell bg-porcelain">
            <div className="section-heading">
              <p className="eyebrow">{t("routes.eyebrow")}</p>
              <h2>{t("routes.title")}</h2>
              <p>{t("routes.subtitle")}</p>
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {routes.map((item, index) => {
                const Icon = routeIcons[index] || Plane;
                return (
                  <article key={item.title} className="route-card">
                    <div className="flex items-center justify-between gap-4">
                      <Icon className="h-6 w-6 text-gold" aria-hidden="true" />
                      <span>{item.type}</span>
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <Link to={localizedPath(language, "routes")} className="route-link">
                      <span>{t("pageLinks.routes")}</span>
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </article>
                );
              })}
            </div>
          </section>

          <section className="section-shell bg-white">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
              <div>
                <p className="eyebrow">{t("process.eyebrow")}</p>
                <h2 className="mt-3 text-3xl font-semibold text-midnight sm:text-4xl">
                  {t("process.title")}
                </h2>
                <p className="mt-4 max-w-3xl leading-8 text-slate-600">{t("process.subtitle")}</p>
                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  {process.map((step, index) => {
                    const Icon = processIcons[index] || ArrowRight;
                    return (
                      <article key={step.title} className="process-step">
                        <span>{index + 1}</span>
                        <Icon className="mt-5 h-7 w-7 text-gold" aria-hidden="true" />
                        <h3>{step.title}</h3>
                        <p>{step.description}</p>
                      </article>
                    );
                  })}
                </div>
              </div>
              <aside className="rounded-2xl bg-midnight p-7 text-white shadow-soft sm:p-9">
                <ShieldCheck className="h-9 w-9 text-gold" aria-hidden="true" />
                <p className="eyebrow mt-6 text-gold">{t("trust.eyebrow")}</p>
                <h2 className="mt-3 text-2xl font-semibold">{t("trust.title")}</h2>
                <div className="mt-6 space-y-5">
                  {trust.map((item) => (
                    <div key={item.title}>
                      <h3 className="font-semibold text-white">{item.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-white/65">{item.description}</p>
                    </div>
                  ))}
                </div>
                <Link
                  to={localizedPath(language, "how-it-works")}
                  className="btn-secondary-dark mt-7"
                >
                  <span>{t("pageLinks.process")}</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </aside>
            </div>
          </section>

          <section className="section-shell bg-porcelain">
            <div className="section-heading">
              <p className="eyebrow">{t("faq.eyebrow")}</p>
              <h2>{t("faq.title")}</h2>
              <p>{t("faq.subtitle")}</p>
            </div>
            <div className="mx-auto mt-10 max-w-4xl divide-y divide-slate-200 overflow-hidden rounded-xl border border-slate-200">
              {faqs.map((item) => (
                <details key={item.question} className="faq-row">
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link to={localizedPath(language, "faq")} className="btn-secondary-light">
                <span>{t("pageLinks.faq")}</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </section>

          <section className="section-shell bg-white">
            <div className="flex flex-col items-center justify-between gap-6 rounded-2xl bg-midnight p-7 text-center text-white sm:p-10 lg:flex-row lg:text-start">
              <div className="max-w-3xl">
                <p className="eyebrow text-gold">{t("form.eyebrow")}</p>
                <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">{t("form.title")}</h2>
                <p className="mt-4 leading-7 text-white/70">{t("form.subtitle")}</p>
              </div>
              <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
                <Link
                  to={localizedPath(language, "request-quote")}
                  className="btn-primary justify-center"
                >
                  <span>{t("pageLinks.quote")}</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <WhatsAppButton
                  language={language}
                  label={t("cta.whatsappShort")}
                  buttonName="home_final_whatsapp"
                  className="btn-secondary-dark justify-center"
                />
              </div>
            </div>
          </section>
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
