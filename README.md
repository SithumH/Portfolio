<div align="center">

# 🚀 Sithum Himsara — Portfolio

**Full Stack Developer · Sri Lanka 🇱🇰**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-06b6d4?style=for-the-badge&logo=cloudflare&logoColor=white)](https://portfolio-sithum.pages.dev)
[![GitHub](https://img.shields.io/badge/GitHub-SithumH-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/SithumH)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/sithum-himsara)

</div>

---

## ✨ Overview

Personal portfolio website built from scratch with a modern **glass morphism** design system. Features smooth animations, a real-time comments system, and a fully responsive layout across all screen sizes.

---

## 📸 Pages

| Page | Description |
|------|-------------|
| **Home** | Hero section with typing code animation, featured projects, skill pills marquee, product teaser, about snippet & CTA |
| **Projects** | Filterable project grid with tech stack tags, GitHub & live demo links |
| **Products** | Product showcase (SourceClip) with features list and real-time visitor comments |
| **About** | Bio, education, internship experience, skills and contact form |

---

## 🛠️ Tech Stack

| Technology | Usage |
|------------|-------|
| **React 18** | Frontend UI |
| **TypeScript** | Type safety |
| **Tailwind CSS v3** | Styling & responsive design |
| **React Router v6** | Client-side routing |
| **Supabase** | Comments database (PostgreSQL) |
| **Vite** | Build tool & dev server |
| **Cloudflare Pages** | Free hosting & CDN |

---

## 🎨 Design Highlights

- **Glass morphism** — `backdrop-blur` cards with subtle gradient borders
- **Deep dark theme** — `#03050a` base with cyan/teal accent system
- **Typing animation** — Hero code block types out line by line
- **Scroll animations** — Sections fade up on intersection
- **Marquee skills strip** — Infinite scrolling skill pills (both directions)
- **Fully responsive** — Mobile drawer nav, fluid grids, adaptive typography

---

## 🚀 Getting Started

### Prerequisites

- Node.js `v18+`
- npm `v9+`

### Installation

```bash
# 1. Clone the repo
git clone https://github.com/SithumH/Portfolio.git
cd Portfolio

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env
# Fill in your Supabase URL and anon key

# 4. Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build      # Creates optimised dist/ folder
npm run preview    # Preview the production build locally
```

---

## 🗄️ Supabase Setup (Comments Feature)

1. Create a free project at [supabase.com](https://supabase.com)
2. Run this SQL in the **SQL Editor**:

```sql
create table comments (
  id          bigserial primary key,
  product_id  text        not null,
  name        text        not null,
  message     text        not null,
  created_at  timestamptz not null default now()
);

-- Allow anyone to read and insert (public comments)
alter table comments enable row level security;

create policy "Anyone can read comments"
  on comments for select using (true);

create policy "Anyone can insert comments"
  on comments for insert with check (true);
```

3. Copy your **Project URL** and **anon key** from `Settings → API`
4. Add them to `.env`:

```env
VITE_SUPABASE_URL=https://xxxx.supabase.co
VITE_SUPABASE_ANON_KEY=your_anon_key_here
```

---

## ☁️ Deployment (Cloudflare Pages)

1. Push code to GitHub
2. Go to **Cloudflare → Workers & Pages → Create → Pages**
3. Connect your GitHub repo
4. Set build config:
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
5. Add environment variables (Supabase keys) under **Settings → Environment variables**
6. Hit **Deploy** 🎉

---

## 📁 Project Structure

```
portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.tsx        # Sticky nav + mobile drawer
│   │   ├── Footer.tsx        # Site footer with links
│   │   ├── ProjectCard.tsx   # Reusable project card
│   │   ├── SkillBar.tsx      # Animated skill progress bar
│   │   └── Comments.tsx      # Supabase real-time comments
│   ├── data/
│   │   ├── projects.ts       # Project data
│   │   ├── products.ts       # Product data
│   │   └── skills.ts         # Skills & levels
│   ├── lib/
│   │   └── supabase.ts       # Supabase client
│   ├── pages/
│   │   ├── Home.tsx          # Landing page
│   │   ├── Projects.tsx      # Projects page
│   │   ├── Products.tsx      # Products page
│   │   └── About.tsx         # About & contact page
│   ├── App.tsx               # Router setup
│   ├── main.tsx              # Entry point
│   └── index.css             # Global styles + Tailwind
├── .env.example              # Environment variable template
├── tailwind.config.js
├── vite.config.ts
└── package.json
```

---

## 📬 Contact

| | |
|--|--|
| 📧 Email | [sithum@example.com](mailto:sithum@example.com) |
| 💼 LinkedIn | [linkedin.com/in/sithum-himsara](https://linkedin.com/in/sithum-himsara) |
| 🐙 GitHub | [github.com/SithumH](https://github.com/SithumH) |

---

<div align="center">

Made with ❤️ by **Sithum Himsara** · Built with React & Tailwind CSS

</div>
