# Tech Stack — transparent PNG logo assets

All PNG files are separate 512×512 transparent images, containing only the logo (no card or label text). They are optimized for a dark charcoal website.

## Categories

### Frontend
- `react.png` — React
- `typescript.png` — TypeScript
- `javascript.png` — JavaScript
- `html5.png` — HTML5
- `css3.png` — CSS3
- `tailwind-css.png` — Tailwind CSS
- `nextjs.png` — Next.js

### Backend
- `java.png` — Java
- `spring-boot.png` — Spring Boot
- `spring-security.png` — Spring Security
- `spring-data-jpa.png` — Spring Data JPA
- `rest-apis.png` — REST APIs
- `jwt.png` — JWT
- `php.png` — PHP
- `python.png` — Python
- `flask.png` — Flask

### Databases
- `postgresql.png` — PostgreSQL
- `mysql.png` — MySQL
- `mongodb.png` — MongoDB

### Tools & Testing
- `git.png` — Git
- `github.png` — GitHub
- `postman.png` — Postman
- `junit.png` — JUnit
- `mockito.png` — Mockito
- `swagger.png` — Swagger / OpenAPI
- `vercel.png` — Vercel
- `figma.png` — Figma

## Notes about logos
- Most icons use actual Simple Icons brand glyphs, recolored with recognisable brand colors. They are monochrome logo silhouettes except for color-segmented Figma, Python, and JWT.
- `java.png` is from the genuine Font Awesome Java brand icon.
- `spring-data-jpa.png` uses the general Spring brand mark; Spring Data JPA has no separate widely recognized official logo.
- `rest-apis.png` is a generic API symbol; REST APIs are not a brand and have no official logo.
- `mockito.png` is a generic testing/beaker symbol because Mockito's common identity is wordmark-style; this is NOT an official Mockito logo.
- Your site's single 'Python / Flask' item is split here into `python.png` and `flask.png` so each technology has its own file.
- White icons such as GitHub, Flask, Next.js and Vercel are intentionally white to stand out on your black/charcoal site, and may seem invisible in viewers with white backgrounds.
- Original brand colors can change; these are intended as clean practical assets for your portfolio rather than authoritative brand guideline packages.

## Usage (Vite / React)
1. Place files into `public/images/tech/`.
2. Point the image src at paths like `/images/tech/react.png` or `/images/tech/spring-boot.png`.
3. Display at about 40–64 CSS pixels. Files are 512px for crisp rendering.

## Asset sources and credit
- Most silhouettes from **Simple Icons** (https://simpleicons.org/, CC0 icon package, subject to each brand's trademark and logo usage guidelines).
- Java silhouette from **Font Awesome Free Brands** (https://fontawesome.com/license/free, icon license CC BY 4.0, Fonticons Inc.).
- Generic non-brand artwork (REST APIs and Mockito substitute) created for this package.

Technology names and marks belong to their respective trademark owners. Use these for identification and follow their brand requirements as applicable.
