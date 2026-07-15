/**
 * Tokyo 23 special wards — one-way airport transfer reference fares (JPY).
 * Vehicle class: luxury van (Alphard-class). Final quote confirmed before booking.
 *
 * Pricing logic:
 * - Haneda (HND, Ota): lower toward south/central wards, higher northwest
 * - Narita (NRT, east Chiba): lower toward east wards, higher west/northwest
 */

export const airportOptions = [
  { id: "hnd", code: "HND" },
  { id: "nrt", code: "NRT" },
];

/** @typedef {{ id: string; hnd: number; nrt: number }} TokyoWardFare */

/** @type {TokyoWardFare[]} */
export const tokyoWardFares = [
  { id: "chiyoda", hnd: 14500, nrt: 25000 },
  { id: "chuo", hnd: 14000, nrt: 24500 },
  { id: "minato", hnd: 13000, nrt: 25000 },
  { id: "shinjuku", hnd: 15000, nrt: 25500 },
  { id: "bunkyo", hnd: 15000, nrt: 25000 },
  { id: "taito", hnd: 15000, nrt: 24000 },
  { id: "sumida", hnd: 15000, nrt: 23500 },
  { id: "koto", hnd: 14000, nrt: 23000 },
  { id: "shinagawa", hnd: 11000, nrt: 25500 },
  { id: "meguro", hnd: 12000, nrt: 25500 },
  { id: "ota", hnd: 10000, nrt: 26000 },
  { id: "setagaya", hnd: 14500, nrt: 27000 },
  { id: "shibuya", hnd: 14000, nrt: 25500 },
  { id: "nakano", hnd: 16000, nrt: 26500 },
  { id: "suginami", hnd: 17000, nrt: 28000 },
  { id: "toshima", hnd: 16000, nrt: 25500 },
  { id: "kita", hnd: 16500, nrt: 25500 },
  { id: "arakawa", hnd: 16000, nrt: 24500 },
  { id: "itabashi", hnd: 17500, nrt: 27000 },
  { id: "nerima", hnd: 18000, nrt: 28500 },
  { id: "adachi", hnd: 17000, nrt: 23000 },
  { id: "katsushika", hnd: 17500, nrt: 22500 },
  { id: "edogawa", hnd: 16500, nrt: 22000 },
];

export function formatYen(value) {
  return `¥${new Intl.NumberFormat("en-US").format(value)}`;
}

export function getWardFare(wardId, airportId) {
  const ward = tokyoWardFares.find((item) => item.id === wardId);
  if (!ward) return null;
  return airportId === "nrt" ? ward.nrt : ward.hnd;
}

export function sortWardsByFare(airportId, order = "asc") {
  const key = airportId === "nrt" ? "nrt" : "hnd";
  return [...tokyoWardFares].sort((a, b) =>
    order === "desc" ? b[key] - a[key] : a[key] - b[key]
  );
}
