# Cafe Dungaa - Next.js Website

A polished, responsive customer-facing website for **Cafe Dungaa, Jwagal, Lalitpur**.

## What is improved

- Proper Next.js App Router structure
- Working pages: Home, Menu, About, Gallery, Contact
- Protected pages: Member Account and Admin Dashboard
- Responsive mobile navbar
- Tailwind CSS design system with conversion-focused sections
- Working reservation form UI with server-side validation
- API route at `/api/reservation`
- Authentication routes for login, registration, logout and session checks
- HTTP-only signed auth cookie
- Role-based authorization for `/admin`
- Google Maps embed
- WhatsApp floating button
- Generated hero image plus lightweight gallery assets
- Real Cafe Dungaa social links added: Instagram and TikTok
- Public profile details added: Jwagal, Lalitpur and Sun–Fri, 10:00 AM – 7:30 PM
- SEO metadata and clean component structure

## Run locally

```bash
cd cafe-dungaa
npm install
npm run dev
```

Then open:

```bash
http://localhost:3000
```

## Authentication

Customer login accepts any email with a password of at least 6 characters.

Admin login:

- Email: `admin@cafedungaa.com`
- Password: set `ADMIN_PASSWORD` in `.env.local`

For local development only, the fallback admin password is defined in `lib/auth.ts`. Replace `AUTH_SECRET` and `ADMIN_PASSWORD` before deployment.

## Important edits before showing to a real client

1. Check and replace the demo phone number in:
   - `components/Footer.tsx`
   - `app/contact/page.tsx`
   - `.env.example` / your `.env.local`

2. Replace or add real cafe photos in:
   - `public/images/cafe-hero.png`
   - `public/images/coffee.svg`
   - `public/images/food.svg`
   - `public/images/interior.svg`

3. Confirm current opening hours and address in:
   - `data/site.ts`

4. Replace demo menu items in:
   - `data/menu.ts`

5. Connect the reservation form to a real service:
   - EmailJS
   - Firebase
   - Google Sheets
   - Supabase
   - Your own backend

Right now, the form posts to `/api/reservation`, validates the payload and logs the request in the terminal.

## Deploy to Vercel

1. Push the folder to GitHub.
2. Go to Vercel.
3. Import the GitHub repository.
4. Click Deploy.

## Folder structure

```text
cafe-dungaa/
├── app/
│   ├── api/reservation/route.ts
│   ├── api/auth/
│   ├── account/page.tsx
│   ├── admin/page.tsx
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── gallery/page.tsx
│   ├── menu/page.tsx
│   ├── register/page.tsx
│   ├── sign-in/page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
├── data/
├── public/images/
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## Social links added

- Instagram: `https://www.instagram.com/cafedungaa/`
- TikTok: `https://www.tiktok.com/@cafe.dungaa`

Both are stored in `data/site.ts`, so you can update them from one place.
