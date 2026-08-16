// Canonical site origin. Override per-deployment with VITE_SITE_URL
// (e.g. VITE_SITE_URL=https://www.deaddictify.com) before building.
export const SITE_URL: string =
  (import.meta.env.VITE_SITE_URL as string | undefined)?.replace(/\/$/, "") ||
  `${SITE_URL}`;
