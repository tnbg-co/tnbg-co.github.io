# Rishabh Dubey's Consultant Profile

Modern Vite + React website for a professional engineering consultant profile. The site is responsive, SEO-ready, and configured for GitHub Pages deployment.

## Stack

- Vite
- React
- React Router
- Tailwind CSS
- EmailJS-ready contact form
- GitHub Actions deployment to GitHub Pages

## Local Setup

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```

## Contact Form Setup

The contact form is wired for EmailJS and falls back to a handled error state when EmailJS environment variables are not configured.

Create a `.env.local` file:

```bash
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

The submitted template parameters are:

- `from_name`
- `from_email`
- `message`
- `to_email`

## GitHub Pages Deployment

The workflow in `.github/workflows/deploy.yml` builds the project on pushes to `main` and publishes `dist` to the `gh-pages` branch with `peaceiris/actions-gh-pages`.

For a custom domain, keep `public/CNAME` set to:

```text
tnbg.co.in
```

Repository Pages settings should point to the `gh-pages` branch.
