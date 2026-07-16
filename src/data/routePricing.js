/**
 * Public reference fares (JPY) aligned with the operational model used on
 * jpairport.com airport pricing:
 * - Alphard-class is the base vehicle
 * - City routes: base + km rate, with airport minimums (HND ¥10k / NRT ¥20k)
 * - Airport↔airport and resort zones: fixed anchors
 * - Full-day charter: fixed day rates
 * Final quote is always confirmed before booking.
 */

export const VEHICLE_NOTE = {
  base: "alphard",
  hiaceSurchargeYen: 5000,
};

export const WAITING = {
  pickupMinutes: 90,
  dropoffMinutes: 30,
};

/** Popular journey cards shown on the routes page and homepage. */
export const popularRouteCards = [
  {
    id: "hnd-tokyo",
    fare: 10000,
    icon: "plane",
  },
  {
    id: "nrt-tokyo",
    fare: 20000,
    icon: "plane",
  },
  {
    id: "nrt-hnd",
    fare: 25000,
    icon: "plane",
  },
  {
    id: "hnd-hakone",
    fare: 40000,
    icon: "mountain",
  },
  {
    id: "hnd-fuji",
    fare: 45000,
    icon: "mountain",
  },
  {
    id: "tokyo-full-day",
    fare: 60000,
    icon: "building",
  },
  {
    id: "fuji-full-day",
    fare: 70000,
    icon: "mountain",
  },
  {
    id: "kix-osaka-kyoto",
    fare: 16000,
    icon: "plane",
  },
  {
    id: "cts-niseko",
    fare: 45000,
    icon: "snow",
  },
];

/**
 * Tokyo 23 wards — one-way airport transfer reference fares (JPY).
 * Rounded to ¥1,000. Calibrated to HND min ¥10,000 / NRT min ¥20,000
 * and distance-tier logic (south/central cheaper from HND; east cheaper from NRT).
 */
export const tokyoWardFares = [
  { id: "chiyoda", hnd: 14000, nrt: 25000 },
  { id: "chuo", hnd: 14000, nrt: 24000 },
  { id: "minato", hnd: 13000, nrt: 25000 },
  { id: "shinjuku", hnd: 12000, nrt: 24000 },
  { id: "bunkyo", hnd: 14000, nrt: 25000 },
  { id: "taito", hnd: 14000, nrt: 23000 },
  { id: "sumida", hnd: 14000, nrt: 23000 },
  { id: "koto", hnd: 14000, nrt: 23000 },
  { id: "shinagawa", hnd: 11000, nrt: 25000 },
  { id: "meguro", hnd: 12000, nrt: 25000 },
  { id: "ota", hnd: 10000, nrt: 26000 },
  { id: "setagaya", hnd: 15000, nrt: 27000 },
  { id: "shibuya", hnd: 14000, nrt: 25000 },
  { id: "nakano", hnd: 15000, nrt: 26000 },
  { id: "suginami", hnd: 16000, nrt: 27000 },
  { id: "toshima", hnd: 15000, nrt: 25000 },
  { id: "kita", hnd: 16000, nrt: 25000 },
  { id: "arakawa", hnd: 15000, nrt: 24000 },
  { id: "itabashi", hnd: 16000, nrt: 26000 },
  { id: "nerima", hnd: 17000, nrt: 28000 },
  { id: "adachi", hnd: 16000, nrt: 22000 },
  { id: "katsushika", hnd: 16000, nrt: 22000 },
  { id: "edogawa", hnd: 15000, nrt: 21000 },
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
