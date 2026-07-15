import {
  ArrowRight,
  Baby,
  Building2,
  CalendarCheck,
  Car,
  CheckCircle2,
  MessageCircle,
  Mountain,
  Plane,
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
const routeIcons = [Plane, Mountain, Building2];

function QuickPlanner({ language }) {
  const { t } = useTranslation();
  const serviceOptions = t("quickQuote.serviceOptions", { returnObjects: true });
  const airportLocationOptions = t("quickQuote.airportLocationOptions", { returnObjects: true });
  const charterConfig = t("quickQuote.charter", { returnObjects: true });
  const [trip, setTrip] = useState({
    serviceId: serviceOptions[0]?.id || "airport",
    pickup: "",
    destination: "",
    serviceArea: "",
    duration: "",
    date: "",
    startTime: "",
    passengers: "",
  });
  const selectedService =
    serviceOptions.find((option) => option.id === trip.serviceId) || serviceOptions[0];
  const serviceLabel = selectedService?.label || "";
  const isAirportService = trip.serviceId === "airport";
  const isCharterService = trip.serviceId === "charter";

  function updateField(field, value) {
    setTrip((current) => ({ ...current, [field]: value }));
  }

  function submitTrip(event) {
    event.preventDefault();
    const messageTrip = isCharterService
      ? { ...trip, service: serviceLabel, destination: "" }
      : {
          ...trip,
          service: serviceLabel,
          serviceArea: "",
          duration: "",
          startTime: "",
        };
    trackButtonClick("hero_trip_planner", { language, service_type: serviceLabel });
    trackEvent("whatsapp_click", {
      language,
      service_type: serviceLabel,
      source: "hero_trip_planner",
    });
    window.open(
      getWhatsAppUrl(buildTripWhatsAppMessage(messageTrip, language)),
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
            key={option.id}
            aria-pressed={trip.serviceId === option.id}
            onClick={() => updateField("serviceId", option.id)}
            className={
              trip.serviceId === option.id
                ? "planner-option planner-option-active"
                : "planner-option"
            }
          >
            {option.label}
          </button>
        ))}
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {isCharterService ? (
          <>
            <label className="planner-field">
              <span>{charterConfig.pickupLabel}</span>
              <input
                required
                value={trip.pickup}
                onChange={(event) => updateField("pickup", event.target.value)}
                placeholder={charterConfig.pickupPlaceholder}
              />
            </label>
            <label className="planner-field">
              <span>{charterConfig.areaLabel}</span>
              <select
                required
                className="planner-main-select"
                data-testid="charter-area-select"
                value={trip.serviceArea}
                onChange={(event) => updateField("serviceArea", event.target.value)}
              >
                <option value="" disabled>
                  {charterConfig.areaPlaceholder}
                </option>
                {Array.isArray(charterConfig.areaOptions) &&
                  charterConfig.areaOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
              </select>
            </label>
            <label className="planner-field">
              <span>{charterConfig.durationLabel}</span>
              <select
                required
                className="planner-main-select"
                data-testid="charter-duration-select"
                value={trip.duration}
                onChange={(event) => updateField("duration", event.target.value)}
              >
                <option value="" disabled>
                  {charterConfig.durationPlaceholder}
                </option>
                {Array.isArray(charterConfig.durationOptions) &&
                  charterConfig.durationOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
              </select>
            </label>
          </>
        ) : (
          <>
            <div className="planner-field">
              <label htmlFor={`hero-pickup-${language}`}>
                <span>{t("quickQuote.fields.pickup")}</span>
                <input
                  id={`hero-pickup-${language}`}
                  required
                  value={trip.pickup}
                  onChange={(event) => updateField("pickup", event.target.value)}
                  placeholder={t("quickQuote.placeholders.pickup")}
                />
              </label>
              {isAirportService && Array.isArray(airportLocationOptions) && (
                <select
                  className="planner-preset-select"
                  data-testid="airport-pickup-select"
                  aria-label={t("quickQuote.airportPickupLabel")}
                  value={airportLocationOptions.includes(trip.pickup) ? trip.pickup : ""}
                  onChange={(event) => updateField("pickup", event.target.value)}
                >
                  <option value="" disabled>
                    {t("quickQuote.airportPickupPlaceholder")}
                  </option>
                  {airportLocationOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              )}
            </div>
            <div className="planner-field">
              <label htmlFor={`hero-destination-${language}`}>
                <span>{t("quickQuote.fields.destination")}</span>
                <input
                  id={`hero-destination-${language}`}
                  required
                  value={trip.destination}
                  onChange={(event) => updateField("destination", event.target.value)}
                  placeholder={t("quickQuote.placeholders.destination")}
                />
              </label>
              {isAirportService && Array.isArray(airportLocationOptions) && (
                <select
                  className="planner-preset-select"
                  data-testid="airport-dropoff-select"
                  aria-label={t("quickQuote.airportDropoffLabel")}
                  value={
                    airportLocationOptions.includes(trip.destination) ? trip.destination : ""
                  }
                  onChange={(event) => updateField("destination", event.target.value)}
                >
                  <option value="" disabled>
                    {t("quickQuote.airportDropoffPlaceholder")}
                  </option>
                  {airportLocationOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              )}
            </div>
          </>
        )}
        <label className="planner-field">
          <span>
            {isCharterService ? charterConfig.dateLabel : t("quickQuote.fields.date")}
          </span>
          <input
            required
            type="date"
            value={trip.date}
            onChange={(event) => updateField("date", event.target.value)}
          />
        </label>
        {isCharterService && (
          <label className="planner-field">
            <span>{charterConfig.startTimeLabel}</span>
            <input
              required
              type="time"
              value={trip.startTime}
              onChange={(event) => updateField("startTime", event.target.value)}
            />
          </label>
        )}
        <label className="planner-field">
          <span>
            {isCharterService
              ? charterConfig.passengersLabel
              : t("quickQuote.fields.passengers")}
          </span>
          <input
            required
            min="1"
            type="number"
            inputMode="numeric"
            value={trip.passengers}
            onChange={(event) => updateField("passengers", event.target.value)}
            placeholder={
              isCharterService
                ? charterConfig.passengersPlaceholder
                : t("quickQuote.placeholders.passengers")
            }
          />
        </label>
        {isCharterService && <p className="planner-charter-hint">{charterConfig.hint}</p>}
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
  const routes = t("routes.items", { returnObjects: true }).slice(0, 3);
  const trust = t("trust.items", { returnObjects: true });

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
      <div className="min-h-screen bg-white pb-20 text-ink sm:pb-0">
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
                  <div className="hidden sm:block">
                    <WhatsAppButton
                      language={language}
                      label={t("cta.whatsapp")}
                      buttonName="hero_whatsapp"
                      className="btn-primary"
                    />
                  </div>
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

          <section className="section-shell bg-midnight text-white">
            <div className="section-heading section-heading-dark">
              <p className="eyebrow">{t("trust.eyebrow")}</p>
              <h2>{t("trust.title")}</h2>
              <p>{t("trust.subtitle")}</p>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {trust.map((item) => (
                <article key={item.title} className="trust-item">
                  <CheckCircle2 className="h-6 w-6 text-gold" aria-hidden="true" />
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
            <p className="mx-auto mt-7 max-w-4xl border-s-2 border-gold ps-4 text-sm leading-7 text-white/60">
              {t("trust.notice")}
            </p>
          </section>

        </main>
        <SiteFooter />
      </div>
    </>
  );
}
