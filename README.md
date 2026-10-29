# MUDIT.EXE — Experimental Developer Portfolio

> **"ENGINEER THE UNEXPECTED."**  
> *Personal portfolio for Mudit Katre — Full-Stack Developer, AI Engineer & Creative Developer.*

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Three.js](https://img.shields.io/badge/Three.js-R3F-black?logo=three.js&logoColor=white)](https://threejs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)

---

## 1. System Overview

**MUDIT.EXE** is an experimental, minimal developer portfolio engineered for **Mudit Katre** (Nagpur, India; expected graduation 2027, B.Tech Computer Engineering at Bajaj Institute of Technology).

The site features:
- **Interactive 3D Sculptural Centerpiece**: Procedural chrome/graphite mathematical torus knot with coordinate orbital particles and fine geodesic wireframe cages using **React Three Fiber** and **Three.js**.
- **Oversized Kinetic Typography**: Editorial typography with responsive `clamp()` scaling, deliberate negative space, and disciplined asymmetric layouts.
- **5 Distinct Project Showcases**:
  1. **VarshaMitra**: Regime-aware monsoon rainfall bias calibration with animated radar contours and U-Net / XGBoost metrics (SIH 2026 problem-solving project).
  2. **AICTE Sentinel**: 8-stage hierarchical statutory approval pipeline with MinIO encryption and PostgreSQL audit logging (SIH 2026 submission).
  3. **HomeGen**: Parametric layout synthesis with interactive 2D blueprint and 3D spatial viewport (Three.js & Shapely).
  4. **Verified Domestic Helper System**: Trust verification pipeline with document vetting and service dispatch (PHP & MySQL).
  5. **Fire Department Monitoring Suite**: Real-time NOC inspection lifecycle dashboard (SIH 2024 National Finalist).
- **Accessible Project Detail Dossiers**: In-depth modal dialogs presenting problem statements, architecture flows, verified implementation status, and documented contributions.
- **Technical Constellation**: Categorized stack matrix (Languages, Frontend, Backend, Databases, AI/ML, DevOps, AI Integration) with real-time search filtering.
- **Experience Timeline**: Verified track record covering data analytics (Thiranex), cybersecurity (NIIT Foundation), hackathon leadership (SIH 2024-2026, L&T TECHgium), and college forum governance (StartBIT).
- **Verified Resume & Direct Channels**: One-click download of the verified `public/resume.pdf` (170 KB) and 1-click clipboard copy with celebratory confetti feedback.

---

## 2. Quickstart & Commands

### Prerequisites
- Node.js `v18+` (Tested on Node v23.3.0)
- npm `v9+`

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
# Server accessible at http://localhost:3000/
```

### Production Build & Typecheck
```bash
npm run build
# Compiles TypeScript and builds optimized distribution in /dist
```

### Local Production Preview
```bash
npm run preview
# Preview server accessible at http://localhost:4173/
```

---

## 3. Project Structure

```
mudit-portfolio/
├── dist/                     # Optimized static distribution build
├── public/
│   ├── favicon.svg           # Custom MUDIT.EXE circuit monogram
│   └── resume.pdf            # Mudit Katre's verified resume PDF (170 KB)
├── src/
│   ├── components/
│   │   ├── project-visuals/  # Distinct interactive canvases per project
│   │   │   ├── VarshaMitraVisual.tsx
│   │   │   ├── SentinelVisual.tsx
│   │   │   ├── HomeGenVisual.tsx
│   │   │   ├── HelperVisual.tsx
│   │   │   └── FireDeptVisual.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── CustomCursor.tsx
│   │   ├── EducationSection.tsx
│   │   ├── ExperienceTimeline.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navigation.tsx
│   │   ├── ProjectDetailModal.tsx
│   │   ├── ProjectShowcase.tsx
│   │   ├── Scene3D.tsx
│   │   └── SkillsSection.tsx
│   ├── data/
│   │   ├── experience.ts     # Verified work, leadership, and education data
│   │   ├── projects.ts       # Detailed project specifications and links
│   │   └── skills.ts         # Resume-indexed skill groups
│   ├── styles/
│   │   └── index.css         # Experimental minimal Tailwind & scanline styles
│   ├── types/
│   │   └── index.ts          # Core TypeScript interfaces
│   ├── App.tsx
│   └── main.tsx
├── index.html                # SEO, OpenGraph tags, Google Fonts
├── package.json
├── tailwind.config.js        # Obsidian, Acid Lime, and accent tokens
├── tsconfig.json
└── vite.config.ts
```

---

## 4. Deployment Instructions (Vercel / Netlify / Static Host)

### Deploy to Vercel
1. Install Vercel CLI (`npm i -g vercel`) or push the repo to GitHub.
2. In the Vercel dashboard:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
3. Deploy!

### Deploy to Netlify
1. Connect repository or run `netlify deploy --prod --dir=dist`.
2. Set build command to `npm run build` and publish directory to `dist`.

---

## 5. Verified Profile Credentials

- **Name**: Mudit Katre
- **Email**: [muditkatre.mk@gmail.com](mailto:muditkatre.mk@gmail.com)
- **LinkedIn**: [linkedin.com/in/mudit-katre-a37685428](https://www.linkedin.com/in/mudit-katre-a37685428)
- **GitHub**: [github.com/muditk-dev](https://github.com/muditk-dev)
- **Location**: Nagpur, Maharashtra, India
