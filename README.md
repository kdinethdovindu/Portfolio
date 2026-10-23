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

## Edit the portfolio

All editable content lives in [src/data.ts](src/data.ts): personal details, social links, navigation, technology cards, projects, education, and certificates.

- Replace `public/images/profile-placeholder.svg` with `public/images/profile.jpg` and update the profile image path in `src/App.tsx`.
- Replace project placeholders in `public/images/projects/` and update each `image` path in `src/data.ts`.
- Add GitHub and demo URLs by changing `github` and `demo` from `null` in `src/data.ts`. A null URL stays disabled and never redirects to a fake destination.
- Add certificate verification URLs in each `credentialUrl` field.
- Add the supplied CV at `public/resume/Dineth_Dovindu_CV.pdf`, then set `cvAvailable: true` in `src/data.ts` to enable the Download CV button.

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

Project links, certificate links, the profile photo, screenshots, education logos, and the CV are replacement-ready placeholders. No invented credential or project destination is included.
