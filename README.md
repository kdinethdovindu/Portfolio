# Dineth Dovindu Portfolio

Dark, responsive React portfolio for Dineth Dovindu, built with Vite, TypeScript, Motion for React, Lucide, React Icons, and Formspree.

## Run locally

```bash
npm install
npm run dev
```

Production checks:

```bash
npm run typecheck
npm run lint
npm run build
npm run preview
```

Run the full pre-deployment check with:

```bash
npm run check
```

## Edit the portfolio

All editable content lives in [src/data.ts](src/data.ts): personal details, social links, navigation, technology cards, projects, education, and certificates.

- Replace the profile image at `public/images/Professional_Portrait.png` if needed.
- Replace project images in `public/images/projects/` and update each `image` path in `src/data.ts`.
- Add GitHub and demo URLs by changing `github` and `demo` from `null` in `src/data.ts`. A null URL stays disabled and never redirects to a fake destination.
- Add certificate verification URLs in each `credentialUrl` field.
- Set `cvAvailable` in `src/data.ts` to control the Download CV button. The current file is `public/resume/Dineth_Dovindu_v.2 CV.pdf`.

## Formspree

1. Create a form at [Formspree](https://formspree.io/).
2. Copy its form ID.
3. Create `.env` from `.env.example` and set `VITE_FORMSPREE_FORM_ID=your-id`.
4. Configure the same variable in Vercel project settings before deploying.
5. Test a real submission in the deployed site.

If the variable is empty, the form explains that setup is pending and the **Email Me Instead** mailto fallback remains available.

## Deploy to Vercel

1. Push this repository to GitHub.
2. Import the repository in Vercel.
3. Keep the detected Vite settings: build command `npm run build`, output directory `dist`.
4. Add `VITE_FORMSPREE_FORM_ID` in Project Settings → Environment Variables.
5. Deploy. Future pushes trigger new deployments automatically.
6. Add a custom domain later from Project Settings → Domains. No production domain is hardcoded in the app.

## Placeholder policy

Certificate links can be added in `src/data.ts` when verification URLs are available. Project links and the current profile, education, screenshot, and CV assets are already wired to the site.
