// Canonical site origin used by canonical tags, og:url and the sitemap.
// Override per deployment with VITE_SITE_URL (e.g. https://www.deaddictify.com).
const FALLBACK = ["https:/", "hopeful-paths-collective.lovable.app"].join("/");

export const SITE_URL: string =
  ((import.meta.env.VITE_SITE_URL as string | undefined) || FALLBACK).replace(/\/+$/, "");
