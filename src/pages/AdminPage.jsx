import { useEffect, useMemo, useState } from "react";
import { Download, LogOut, Search, ShieldCheck } from "lucide-react";
import { isSupabaseConfigured } from "../config";
import { STATUS_OPTIONS } from "../lib/leads";
import { supabase } from "../lib/supabase";

const emptyFilters = {
  search: "",
  country: "",
  language: "",
  status: "",
  dateFrom: "",
  dateTo: "",
};

function exportCsv(rows) {
  const headers = [
    "created_at",
    "name",
    "country",
    "whatsapp",
    "preferred_month",
    "service_type",
    "message",
    "status",
    "source",
    "gclid",
    "language",
    "ip_country",
  ];

  const escape = (value) => {
    const text = String(value ?? "");
    return `"${text.replace(/"/g, '""')}"`;
  };

  const csv = [
    headers.join(","),
    ...rows.map((row) => headers.map((key) => escape(row[key])).join(",")),
  ].join("\n");

  const blob = new Blob([`\uFEFF${csv}`], {
    type: "text/csv;charset=utf-8",
  });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `jpvipmedical-leads-${new Date().toISOString().slice(0, 10)}.csv`;
  link.click();
  URL.revokeObjectURL(url);
}

function LoginPanel({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setMessage("");
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    setLoading(false);
    if (error) {
      setMessage(error.message);
      return;
    }
    onLogin();
  }

  return (
    <main className="grid min-h-screen place-items-center bg-porcelain px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md rounded-md border border-slate-200 bg-white p-8 shadow-soft"
      >
        <div className="mb-6 flex items-center gap-3 text-midnight">
          <ShieldCheck className="h-7 w-7 text-gold" aria-hidden="true" />
          <div>
            <h1 className="text-2xl font-semibold">Lead Admin</h1>
            <p className="text-sm text-slate-500">Supabase protected access</p>
          </div>
        </div>
        <label className="form-field">
          <span>Email</span>
          <input
            type="email"
            value={email}
            autoComplete="email"
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <label className="form-field mt-4">
          <span>Password</span>
          <input
            type="password"
            value={password}
            autoComplete="current-password"
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        {message ? <p className="mt-4 text-sm text-red-700">{message}</p> : null}
        <button
          type="submit"
          disabled={loading}
          className="btn-primary mt-6 w-full justify-center"
        >
          <span>{loading ? "Signing in..." : "Sign in"}</span>
        </button>
      </form>
    </main>
  );
}

export default function AdminPage() {
  const [session, setSession] = useState(null);
  const [leads, setLeads] = useState([]);
  const [filters, setFilters] = useState(emptyFilters);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  async function refreshLeads() {
    if (!supabase) return;
    setLoading(true);
    const { data, error } = await supabase
      .from("leads")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) setMessage(error.message);
    else setLeads(data || []);
    setLoading(false);
  }

  useEffect(() => {
    document.title = "Lead Admin | JPVIPMedical";
    document.documentElement.dir = "ltr";
    document.documentElement.lang = "en";
  }, []);

  useEffect(() => {
    if (!supabase) return;

    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      if (data.session) refreshLeads();
      else setLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, nextSession) => {
      setSession(nextSession);
      if (nextSession) refreshLeads();
    });

    return () => subscription.unsubscribe();
  }, []);

  const countries = useMemo(
    () =>
      Array.from(new Set(leads.map((lead) => lead.country).filter(Boolean))).sort(),
    [leads]
  );

  const filteredLeads = useMemo(() => {
    const term = filters.search.trim().toLowerCase();
    return leads.filter((lead) => {
      const created = lead.created_at ? lead.created_at.slice(0, 10) : "";
      const matchesSearch =
        !term ||
        [lead.name, lead.country, lead.whatsapp, lead.service_type, lead.message]
          .filter(Boolean)
          .some((value) => value.toLowerCase().includes(term));
      const matchesCountry = !filters.country || lead.country === filters.country;
      const matchesLanguage =
        !filters.language || lead.language === filters.language;
      const matchesStatus = !filters.status || lead.status === filters.status;
      const matchesFrom = !filters.dateFrom || created >= filters.dateFrom;
      const matchesTo = !filters.dateTo || created <= filters.dateTo;
      return (
        matchesSearch &&
        matchesCountry &&
        matchesLanguage &&
        matchesStatus &&
        matchesFrom &&
        matchesTo
      );
    });
  }, [filters, leads]);

  async function updateStatus(id, status) {
    const { error } = await supabase
      .from("leads")
      .update({ status })
      .eq("id", id);

    if (error) {
      setMessage(error.message);
      return;
    }

    setLeads((current) =>
      current.map((lead) => (lead.id === id ? { ...lead, status } : lead))
    );
  }

  async function signOut() {
    await supabase.auth.signOut();
    setSession(null);
    setLeads([]);
  }

  if (!isSupabaseConfigured) {
    return (
      <main className="grid min-h-screen place-items-center bg-porcelain px-4">
        <div className="max-w-lg rounded-md border border-slate-200 bg-white p-8 shadow-soft">
          <h1 className="text-2xl font-semibold text-midnight">
            Supabase setup required
          </h1>
          <p className="mt-3 text-slate-600">
            Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to your Vercel
            environment before using the protected lead admin.
          </p>
        </div>
      </main>
    );
  }

  if (!session) {
    return <LoginPanel onLogin={refreshLeads} />;
  }

  return (
    <main className="min-h-screen bg-porcelain">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="eyebrow">Admin</p>
            <h1 className="mt-2 text-3xl font-semibold text-midnight">
              WhatsApp Consultation Leads
            </h1>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => exportCsv(filteredLeads)}
              className="btn-secondary-light"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              <span>Export CSV</span>
            </button>
            <button type="button" onClick={signOut} className="btn-secondary-light">
              <LogOut className="h-4 w-4" aria-hidden="true" />
              <span>Sign out</span>
            </button>
          </div>
        </div>

        <section className="mt-8 rounded-md border border-slate-200 bg-white p-4 shadow-soft">
          <div className="grid gap-3 md:grid-cols-3 xl:grid-cols-6">
            <label className="form-field md:col-span-2">
              <span>Search</span>
              <div className="relative">
                <Search
                  className="pointer-events-none absolute left-3 top-3 h-4 w-4 text-slate-400"
                  aria-hidden="true"
                />
                <input
                  className="pl-9"
                  type="search"
                  value={filters.search}
                  onChange={(event) =>
                    setFilters((current) => ({
                      ...current,
                      search: event.target.value,
                    }))
                  }
                />
              </div>
            </label>
            <label className="form-field">
              <span>Country</span>
              <select
                value={filters.country}
                onChange={(event) =>
                  setFilters((current) => ({
                    ...current,
                    country: event.target.value,
                  }))
                }
              >
                <option value="">All</option>
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </label>
            <label className="form-field">
              <span>Language</span>
              <select
                value={filters.language}
                onChange={(event) =>
                  setFilters((current) => ({
                    ...current,
                    language: event.target.value,
                  }))
                }
              >
                <option value="">All</option>
                <option value="en">English</option>
                <option value="zh-hk">Traditional Chinese</option>
                <option value="ar">Arabic</option>
              </select>
            </label>
            <label className="form-field">
              <span>Status</span>
              <select
                value={filters.status}
                onChange={(event) =>
                  setFilters((current) => ({
                    ...current,
                    status: event.target.value,
                  }))
                }
              >
                <option value="">All</option>
                {STATUS_OPTIONS.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </label>
            <label className="form-field">
              <span>Date from</span>
              <input
                type="date"
                value={filters.dateFrom}
                onChange={(event) =>
                  setFilters((current) => ({
                    ...current,
                    dateFrom: event.target.value,
                  }))
                }
              />
            </label>
            <label className="form-field">
              <span>Date to</span>
              <input
                type="date"
                value={filters.dateTo}
                onChange={(event) =>
                  setFilters((current) => ({
                    ...current,
                    dateTo: event.target.value,
                  }))
                }
              />
            </label>
          </div>
        </section>

        {message ? <p className="mt-4 text-sm text-red-700">{message}</p> : null}

        <section className="mt-6 overflow-hidden rounded-md border border-slate-200 bg-white shadow-soft">
          <div className="overflow-x-auto">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Created</th>
                  <th>Name</th>
                  <th>Country</th>
                  <th>WhatsApp</th>
                  <th>Preferred Month</th>
                  <th>Service</th>
                  <th>Language</th>
                  <th>Status</th>
                  <th>Message</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan="9">Loading leads...</td>
                  </tr>
                ) : filteredLeads.length ? (
                  filteredLeads.map((lead) => (
                    <tr key={lead.id}>
                      <td>{new Date(lead.created_at).toLocaleString()}</td>
                      <td>{lead.name}</td>
                      <td>{lead.country}</td>
                      <td>{lead.whatsapp}</td>
                      <td>{lead.preferred_month}</td>
                      <td>{lead.service_type}</td>
                      <td>{lead.language}</td>
                      <td>
                        <select
                          value={lead.status || "new"}
                          onChange={(event) =>
                            updateStatus(lead.id, event.target.value)
                          }
                        >
                          {STATUS_OPTIONS.map((status) => (
                            <option key={status} value={status}>
                              {status}
                            </option>
                          ))}
                        </select>
                      </td>
                      <td className="max-w-sm whitespace-normal">{lead.message}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="9">No leads match the current filters.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
}
