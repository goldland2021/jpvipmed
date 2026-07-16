import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CalendarCheck,
  Car,
  CheckCircle2,
  Clock3,
  Globe2,
  Hotel,
  Languages,
  Luggage,
  MapPin,
  Mountain,
  Navigation,
  Plane,
  ReceiptText,
  Snowflake,
  Users,
  Waves,
} from "lucide-react";
import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import LeadForm from "../components/LeadForm";
import Seo from "../components/Seo";
import SiteFooter from "../components/SiteFooter";
import WhatsAppButton from "../components/WhatsAppButton";
import WorkflowAiPilot from "../components/WorkflowAiPilot";
import {
  formatYen,
  popularRouteCards,
  sortWardsByFare,
} from "../data/routePricing";
import { localizedPath, pageConfig } from "../pageConfig";

const includedIcons = [Navigation, Luggage, MapPin, Clock3, Languages, ReceiptText];
const serviceIcons = [Plane, Car, CalendarCheck];
const vehicleIcons = [Car, Users, BadgeCheck];
const coverageIcons = [Building2, Hotel, Mountain, Snowflake, Waves, Globe2];

const routeIconMap = {
  plane: Plane,
  mountain: Mountain,
  building: Building2,
  snow: Snowflake,
};

function PageHero({ language, page }) {
  const { t } = useTranslation();
  const meta = pageConfig[page];

  return (
    <section className="relative overflow-hidden bg-midnight text-white">
      <Header language={language} />
      <div className="relative mx-auto max-w-5xl px-4 pb-20 pt-32 text-center sm:px-6 sm:pb-24 lg:px-8">
        <Link
          to={localizedPath(language)}
          className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition hover:text-gold"
        >
          <span aria-hidden="true">{language === "ar" ? "→" : "←"}</span>
          <span>{t("pageLinks.home")}</span>
        </Link>
        <p className="eyebrow mt-8 text-gold">{t(meta.eyebrowKey)}</p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight text-white sm:text-5xl">
          {t(meta.heroTitleKey)}
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/75">
          {t(meta.descriptionKey)}
        </p>
      </div>
    </section>
  );
}

function QuoteCta({ language }) {
  const { t } = useTranslation();

  return (
    <section className="section-shell bg-porcelain">
      <div className="flex flex-col items-center justify-between gap-6 rounded-2xl bg-midnight p-7 text-center text-white sm:p-10 lg:flex-row lg:text-start">
        <div className="max-w-3xl">
          <p className="eyebrow text-gold">{t("form.eyebrow")}</p>
          <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">{t("form.title")}</h2>
          <p className="mt-4 leading-7 text-white/70">{t("form.subtitle")}</p>
        </div>
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
          <Link to={localizedPath(language, "request-quote")} className="btn-primary justify-center">
            <span>{t("pageLinks.quote")}</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <WhatsAppButton
            language={language}
            label={t("cta.whatsappShort")}
            buttonName="content_page_whatsapp"
            className="btn-secondary-dark justify-center"
          />
        </div>
      </div>
    </section>
  );
}

function ServicesContent({ language }) {
  const { t } = useTranslation();
  const services = t("services.items", { returnObjects: true });
  const included = t("included.items", { returnObjects: true });
  const vehicles = t("vehicles.items", { returnObjects: true });

  return (
    <>
      <section className="section-shell bg-white">
        <div className="grid gap-5 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = serviceIcons[index] || Car;
            return (
            <article key={service.title} className="service-card">
              <div className="service-icon-wrap">
                <Icon className="h-7 w-7 text-gold" aria-hidden="true" />
              </div>
              <p className="service-label">{service.label}</p>
              <h2 className="mt-2 text-xl font-semibold text-midnight">{service.title}</h2>
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
                buttonName="services_page_whatsapp"
                className="btn-card"
              />
            </article>
            );
          })}
        </div>
      </section>

      <section className="section-shell bg-porcelain">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="lg:sticky lg:top-24">
            <p className="eyebrow">{t("included.eyebrow")}</p>
            <h2 className="mt-3 text-3xl font-semibold text-midnight sm:text-4xl">
              {t("included.title")}
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">{t("included.subtitle")}</p>
            <div className="mt-7 rounded-xl border border-gold/30 bg-white p-5 text-sm leading-7 text-slate-700 shadow-soft">
              {t("included.notice")}
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {included.map((item, index) => {
              const Icon = includedIcons[index] || CheckCircle2;
              return (
                <article key={item.title} className="included-card">
                  <Icon className="h-7 w-7 text-sage" aria-hidden="true" />
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-shell bg-midnight text-white">
        <div className="section-heading section-heading-dark">
          <p className="eyebrow text-gold">{t("vehicles.eyebrow")}</p>
          <h2>{t("vehicles.title")}</h2>
          <p>{t("vehicles.subtitle")}</p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {vehicles.map((item, index) => {
            const Icon = vehicleIcons[index] || Car;
            return (
              <article key={item.title} className="vehicle-card">
                <Icon className="h-8 w-8 text-gold" aria-hidden="true" />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span>{item.note}</span>
              </article>
            );
          })}
        </div>
        <p className="mx-auto mt-7 max-w-3xl text-center text-sm leading-7 text-white/60">
          {t("vehicles.notice")}
        </p>
      </section>
      <QuoteCta language={language} />
    </>
  );
}

function FarePrice({ fare }) {
  const { t } = useTranslation();
  return (
    <p className="fare-price">
      <span className="fare-price-label">{t("routes.from")}</span>
      <span className="fare-price-value">{formatYen(fare)}</span>
      <span className="fare-price-unit">{t("routes.jpy")}</span>
    </p>
  );
}

function PopularRouteCards({ language }) {
  const { t } = useTranslation();

  return (
    <section className="section-shell bg-white" id="popular-routes">
      <div className="section-heading max-w-3xl">
        <p className="eyebrow">{t("routes.eyebrow")}</p>
        <h2>{t("routes.title")}</h2>
        <p>{t("routes.subtitle")}</p>
      </div>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {popularRouteCards.map((route) => {
          const copy = t(`routes.cards.${route.id}`, { returnObjects: true });
          const Icon = routeIconMap[route.icon] || MapPin;
          const title = copy?.title || route.id;
          return (
            <article key={route.id} className="fare-card">
              <div className="flex items-center justify-between gap-3">
                <div className="fare-card-icon">
                  <Icon className="h-5 w-5 text-gold" aria-hidden="true" />
                </div>
                <span className="fare-card-type">{copy?.type}</span>
              </div>
              <h2 className="mt-5 text-lg font-semibold leading-snug text-midnight">
                {title}
              </h2>
              <FarePrice fare={route.fare} />
              <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
                {copy?.description}
              </p>
              <WhatsAppButton
                language={language}
                serviceName={title}
                label={t("routes.cta")}
                buttonName="routes_page_whatsapp"
                className="route-link"
              >
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </WhatsAppButton>
            </article>
          );
        })}
      </div>
      <p className="mt-6 text-center text-sm leading-6 text-slate-500">
        {t("routes.vehicleNote")}
      </p>
      <p className="mt-2 text-center text-sm leading-6 text-slate-500">
        {t("routes.refNote")}
      </p>
      <div className="mt-8 rounded-xl bg-porcelain p-6 text-center">
        <h2 className="text-xl font-semibold text-midnight">{t("routes.customTitle")}</h2>
        <p className="mx-auto mt-3 max-w-3xl text-sm leading-7 text-slate-600">
          {t("routes.customText")}
        </p>
      </div>
    </section>
  );
}

function TokyoWardPricing({ language }) {
  const { t } = useTranslation();
  const [airport, setAirport] = useState("hnd");
  const [sortOrder, setSortOrder] = useState("asc");

  const wards = useMemo(
    () => sortWardsByFare(airport, sortOrder),
    [airport, sortOrder]
  );

  return (
    <section className="section-shell bg-porcelain" id="tokyo-wards">
      <div className="section-heading max-w-3xl">
        <p className="eyebrow">{t("routes.tokyoWards.eyebrow")}</p>
        <h2>{t("routes.tokyoWards.title")}</h2>
        <p>{t("routes.tokyoWards.subtitle")}</p>
      </div>

      <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-soft sm:flex-row sm:flex-wrap sm:items-end sm:justify-between sm:p-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            {t("routes.tokyoWards.airportLabel")}
          </p>
          <div
            className="mt-2 flex flex-wrap gap-2"
            role="group"
            aria-label={t("routes.tokyoWards.airportLabel")}
          >
            {[
              { id: "hnd", label: t("routes.tokyoWards.hndLabel") },
              { id: "nrt", label: t("routes.tokyoWards.nrtLabel") },
            ].map((option) => (
              <button
                key={option.id}
                type="button"
                aria-pressed={airport === option.id}
                onClick={() => setAirport(option.id)}
                className={
                  airport === option.id
                    ? "ward-airport-btn ward-airport-btn-active"
                    : "ward-airport-btn"
                }
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
        <label className="block min-w-[200px]">
          <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            {t("routes.tokyoWards.sortLabel")}
          </span>
          <select
            className="ward-sort-select mt-2 w-full"
            value={sortOrder}
            onChange={(event) => setSortOrder(event.target.value)}
          >
            <option value="asc">{t("routes.tokyoWards.sortAsc")}</option>
            <option value="desc">{t("routes.tokyoWards.sortDesc")}</option>
          </select>
        </label>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {wards.map((ward) => {
          const wardName = t(`routes.tokyoWards.wards.${ward.id}`);
          const fare = airport === "nrt" ? ward.nrt : ward.hnd;
          const airportLabel =
            airport === "nrt"
              ? t("routes.tokyoWards.nrtLabel")
              : t("routes.tokyoWards.hndLabel");
          const serviceName = `${airportLabel} → ${wardName}`;

          return (
            <article key={ward.id} className="ward-fare-card">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-base font-semibold text-midnight">{wardName}</h3>
                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    {t("routes.tokyoWards.direction", { ward: wardName })}
                  </p>
                </div>
                <MapPin className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
              </div>
              <FarePrice fare={fare} />
              <WhatsAppButton
                language={language}
                serviceName={serviceName}
                label={t("routes.tokyoWards.cta")}
                buttonName="tokyo_ward_quote"
                className="ward-quote-btn mt-auto w-full justify-center"
              />
            </article>
          );
        })}
      </div>

      <p className="mt-5 text-sm leading-7 text-slate-600">
        {t("routes.tokyoWards.includes")}
      </p>
      <p className="mt-2 text-sm leading-7 text-slate-500">
        {t("routes.tokyoWards.note")}
      </p>
    </section>
  );
}

function RoutesContent({ language }) {
  const { t } = useTranslation();
  const coverage = t("coverage.items", { returnObjects: true });

  return (
    <>
      <PopularRouteCards language={language} />
      <TokyoWardPricing language={language} />

      <section className="section-shell bg-white">
        <div className="section-heading">
          <p className="eyebrow">{t("coverage.eyebrow")}</p>
          <h2>{t("coverage.title")}</h2>
          <p>{t("coverage.subtitle")}</p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {coverage.map((item, index) => {
            const Icon = coverageIcons[index] || Globe2;
            return (
              <article key={item.title} className="coverage-card">
                <Icon className="h-6 w-6 text-gold" aria-hidden="true" />
                <h3>{item.title}</h3>
                <p>{item.places}</p>
              </article>
            );
          })}
        </div>
      </section>
      <QuoteCta language={language} />
    </>
  );
}

function FaqContent({ language }) {
  const { t } = useTranslation();
  const faqs = t("faq.items", { returnObjects: true });

  return (
    <>
      <section className="section-shell bg-white">
        <div className="mx-auto max-w-4xl divide-y divide-slate-200 overflow-hidden rounded-xl border border-slate-200">
          {faqs.map((item) => (
            <details key={item.question} className="faq-row">
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>
      <QuoteCta language={language} />
    </>
  );
}

function LegalContent({ language, doc }) {
  const { t } = useTranslation();
  const sections = t(`legal.${doc}.sections`, { returnObjects: true });

  return (
    <>
      <section className="section-shell bg-white">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm text-slate-500">{t("legal.updated")}</p>
          <div className="mt-8 space-y-8">
            {sections.map((section, index) => (
              <div key={section.heading}>
                <h2 className="text-xl font-semibold text-midnight">
                  {index + 1}. {section.heading}
                </h2>
                <p className="mt-3 leading-8 text-slate-600">{section.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 rounded-xl border border-gold/30 bg-porcelain p-5 text-sm leading-7 text-slate-700">
            {t("legal.contact")}
          </p>
        </div>
      </section>
      <QuoteCta language={language} />
    </>
  );
}

function QuoteContent({ language }) {
  const { t } = useTranslation();
  const services = t("services.items", { returnObjects: true });

  return (
    <section className="section-shell bg-porcelain">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div>
          <p className="eyebrow">{t("quickQuote.eyebrow")}</p>
          <h2 className="mt-3 text-3xl font-semibold text-midnight sm:text-4xl">
            {t("quickQuote.title")}
          </h2>
          <p className="mt-5 leading-8 text-slate-600">{t("form.subtitle")}</p>
          <div className="mt-8 rounded-xl border border-gold/30 bg-white p-5 text-sm leading-7 text-slate-700 shadow-soft">
            {t("form.notice")}
          </div>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-soft sm:p-8">
          <LeadForm language={language} services={services} />
        </div>
      </div>
    </section>
  );
}

export default function ContentPage({ language, page }) {
  const meta = pageConfig[page];
  const content = {
    services: <ServicesContent language={language} />,
    routes: <RoutesContent language={language} />,
    faq: <FaqContent language={language} />,
    "request-quote": <QuoteContent language={language} />,
    privacy: <LegalContent language={language} doc="privacy" />,
    terms: <LegalContent language={language} doc="terms" />,
  }[page];

  return (
    <>
      <Seo
        language={language}
        page={page}
        titleKey={meta.seoTitleKey}
        descriptionKey={meta.descriptionKey}
      />
      <WorkflowAiPilot />
      <div className="min-h-screen bg-white pb-20 text-ink sm:pb-0">
        <PageHero language={language} page={page} />
        <main>{content}</main>
        <SiteFooter />
      </div>
    </>
  );
}
