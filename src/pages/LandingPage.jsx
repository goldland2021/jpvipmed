import {
  ArrowRight,
  BriefcaseBusiness,
  CalendarCheck,
  Car,
  CheckCircle2,
  ClipboardCheck,
  GraduationCap,
  HeartPulse,
  Languages,
  LockKeyhole,
  MessageCircle,
  Mountain,
  ShieldCheck,
} from "lucide-react";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import Header from "../components/Header";
import LeadForm from "../components/LeadForm";
import Seo from "../components/Seo";
import WhatsAppButton from "../components/WhatsAppButton";
import { trackButtonClick } from "../lib/analytics";

const serviceIcons = [Car, Mountain, HeartPulse, GraduationCap, BriefcaseBusiness];
const advantageIcons = [
  Car,
  CalendarCheck,
  Languages,
  ShieldCheck,
  LockKeyhole,
  CheckCircle2,
];
const trustIcons = [LockKeyhole, ShieldCheck, Languages, CheckCircle2];
const processIcons = [MessageCircle, ClipboardCheck, Car, CalendarCheck, CheckCircle2];

export default function LandingPage({ language }) {
  const { t } = useTranslation();
  const services = t("services.items", { returnObjects: true });
  const advantages = t("advantages.items", { returnObjects: true });
  const process = t("process.items", { returnObjects: true });
  const trust = t("trust.items", { returnObjects: true });
  const faqs = t("faq.items", { returnObjects: true });

  const heroStyle = useMemo(
    () => ({
      backgroundImage:
        "linear-gradient(90deg, rgba(10,25,47,0.94) 0%, rgba(10,25,47,0.78) 42%, rgba(10,25,47,0.34) 100%), url('/images/hero-charter-japan.jpg')",
    }),
    []
  );

  function scrollToForm() {
    trackButtonClick("request_charter_consultation", { language });
    document.getElementById("consultation")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <>
      <Seo language={language} />
      <div className="min-h-screen bg-white text-ink">
        <section className="relative min-h-[720px] overflow-hidden bg-midnight text-white">
          <Header language={language} />
          <div className="absolute inset-0 bg-cover bg-center" style={heroStyle} />
          <div className="relative z-10 mx-auto flex min-h-[720px] max-w-7xl items-center px-4 pb-16 pt-28 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="eyebrow text-gold">{t("hero.eyebrow")}</p>
              <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                {t("hero.title")}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85 sm:text-xl">
                {t("hero.subtitle")}
              </p>
              <ul className="mt-6 grid max-w-2xl gap-3 text-start text-sm font-semibold leading-6 text-white sm:text-base">
                {t("hero.points", { returnObjects: true }).map((point) => (
                  <li
                    key={point}
                    className="inline-flex items-start gap-3 rounded-md border border-gold/45 bg-midnight/70 px-4 py-3 shadow-soft backdrop-blur"
                  >
                    <CheckCircle2
                      className="mt-0.5 h-5 w-5 shrink-0 text-gold"
                      aria-hidden="true"
                    />
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
                <button
                  type="button"
                  onClick={scrollToForm}
                  className="btn-secondary-dark"
                >
                  <CalendarCheck className="h-5 w-5" aria-hidden="true" />
                  <span>{t("cta.request")}</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell bg-white" id="services">
          <div className="section-heading">
            <p className="eyebrow">{t("services.eyebrow")}</p>
            <h2>{t("services.title")}</h2>
            <p>{t("services.subtitle")}</p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {services.map((service, index) => {
              const Icon = serviceIcons[index] || HeartPulse;
              return (
                <article key={service.title} className="service-card">
                  <Icon className="h-8 w-8 text-gold" aria-hidden="true" />
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <ul>
                    {service.points.map((point) => (
                      <li key={point}>
                        <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <WhatsAppButton
                    language={language}
                    serviceName={service.title}
                    label={t("cta.card")}
                    buttonName="service_card_whatsapp"
                    className="btn-card"
                  />
                </article>
              );
            })}
          </div>
        </section>

        <section className="section-shell bg-porcelain">
          <div className="section-heading">
            <p className="eyebrow">{t("advantages.eyebrow")}</p>
            <h2>{t("advantages.title")}</h2>
            <p>{t("advantages.subtitle")}</p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {advantages.map((advantage, index) => {
              const Icon = advantageIcons[index] || ShieldCheck;
              return (
                <article key={advantage.title} className="advantage-tile">
                  <Icon className="h-7 w-7 text-sage" aria-hidden="true" />
                  <h3>{advantage.title}</h3>
                  <p>{advantage.description}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="section-shell bg-white">
          <div className="section-heading">
            <p className="eyebrow">{t("process.eyebrow")}</p>
            <h2>{t("process.title")}</h2>
            <p>{t("process.subtitle")}</p>
          </div>
          <div className="mt-10 grid gap-4 lg:grid-cols-5">
            {process.map((step, index) => {
              const Icon = processIcons[index] || ArrowRight;
              return (
                <article key={step.title} className="process-step">
                  <span>{index + 1}</span>
                  <Icon className="h-7 w-7 text-gold" aria-hidden="true" />
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="section-shell bg-midnight text-white">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="eyebrow text-gold">{t("trust.eyebrow")}</p>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
                {t("trust.title")}
              </h2>
              <p className="mt-5 text-base leading-8 text-white/80">
                {t("trust.subtitle")}
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {trust.map((item, index) => {
                const Icon = trustIcons[index] || ShieldCheck;
                return (
                  <article key={item.title} className="trust-item">
                    <Icon className="h-7 w-7 text-gold" aria-hidden="true" />
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section-shell bg-white">
          <div className="section-heading">
            <p className="eyebrow">{t("faq.eyebrow")}</p>
            <h2>{t("faq.title")}</h2>
            <p>{t("faq.subtitle")}</p>
          </div>
          <div className="mx-auto mt-10 max-w-4xl divide-y divide-slate-200 rounded-md border border-slate-200">
            {faqs.map((item) => (
              <details key={item.question} className="faq-row">
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="section-shell bg-porcelain" id="consultation">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="eyebrow">{t("form.eyebrow")}</p>
              <h2 className="mt-3 text-3xl font-semibold text-midnight sm:text-4xl">
                {t("form.title")}
              </h2>
              <p className="mt-5 leading-8 text-slate-600">{t("form.subtitle")}</p>
              <div className="mt-8 rounded-md border border-gold/30 bg-white p-5 text-sm leading-7 text-slate-700 shadow-soft">
                {t("form.notice")}
              </div>
            </div>
            <div className="rounded-md border border-slate-200 bg-white p-5 shadow-soft sm:p-8">
              <LeadForm language={language} services={services} />
            </div>
          </div>
        </section>

        <footer className="bg-midnight px-4 py-8 text-sm text-white/70 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} {t("brand.name")}</p>
            <p>{t("footer.disclaimer")}</p>
          </div>
        </footer>
      </div>
    </>
  );
}
