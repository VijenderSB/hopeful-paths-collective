# DeAddictify — Self-hosting guide (Node.js SSR)

The site is a TanStack Start (React 19 + Vite) app. All content (conditions,
programs, services, cities, blog, legal pages) is compiled into the bundle, so
**no database or external service is required** — the lead form is client-side
and conversions happen through phone/WhatsApp.

## 1. Requirements

- Node.js 20 or 22 (LTS)
- npm, pnpm or bun
- A reverse proxy (Nginx/Caddy) terminating HTTPS

## 2. Configure the domain (important for SEO/GEO)

Canonical URLs, `og:url`, `/sitemap.xml` and `/robots.txt` all read one value.
Copy `.env.example` to `.env` and set your live domain **before building**:

```bash
cp .env.example .env
# .env
VITE_SITE_URL=https://www.deaddictify.com
```

This value is baked in at build time — rebuild after changing it.

## 3. Install and build

```bash
npm ci            # or: bun install
npm run build:node
```

Output is written to `.output/`:

- `.output/server/index.mjs` — the SSR server
- `.output/public/` — hashed static assets

## 4. Run

```bash
PORT=3000 node .output/server/index.mjs
```

Keep it alive with systemd:

```ini
# /etc/systemd/system/deaddictify.service
[Unit]
Description=DeAddictify website
After=network.target

[Service]
WorkingDirectory=/var/www/deaddictify
Environment=NODE_ENV=production
Environment=PORT=3000
ExecStart=/usr/bin/node .output/server/index.mjs
Restart=always
User=www-data

[Install]
WantedBy=multi-user.target
```

```bash
sudo systemctl enable --now deaddictify
```

## 5. Nginx reverse proxy

```nginx
server {
  listen 443 ssl http2;
  server_name www.deaddictify.com deaddictify.com;

  # ssl_certificate ... (use certbot)

  location / {
    proxy_pass http://127.0.0.1:3000;
    proxy_http_version 1.1;
    proxy_set_header Host $host;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
  }
}
```

Redirect `deaddictify.com` → `www.deaddictify.com` (or the reverse) and always
force HTTPS so canonical URLs match the served URL.

## 6. Verify SEO & GEO after deploy

```bash
curl -s https://www.deaddictify.com/robots.txt
curl -s https://www.deaddictify.com/sitemap.xml | grep -c "<loc>"   # ~135 URLs
curl -s https://www.deaddictify.com/ | grep -E 'canonical|og:url|geo\.'
```

Then submit `https://www.deaddictify.com/sitemap.xml` in Google Search Console
and add the business in Google Business Profile for Delhi NCR (GEO signals:
`geo.region`, `geo.placename` and `MedicalBusiness` JSON-LD are already in the
markup).

## 7. Adding a database later

Nothing in the app assumes a database today. If you later want lead capture
stored server-side, add a Postgres instance and a `createServerFn` mutation —
the form component (`src/components/site/LeadForm.tsx`) is the only place that
needs changing.

## 8. GitHub

This project isn't connected to GitHub yet. In Lovable open the top-right
GitHub menu → **Connect to GitHub**, authorise the Lovable app and create the
repository. Every change made in Lovable is then pushed automatically, and you
can `git clone` / `git pull` on the server before running step 3.
