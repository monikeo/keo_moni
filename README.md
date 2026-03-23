# Keo Moni - Official Digital Portfolio

A high-performance, strictly localized personal portfolio for Keo Moni—Freestyle Poomsae Athlete, Cybersecurity Student, and Dojang Founder. This platform bridges the intersection of elite martial arts performance and digital design, serving as a unified ecosystem for Gravzero TKD, Infinity TKD, and GZ Studio.

## Architecture & Tech Stack

This project is built from the ground up focusing on speed, minimalism, and strict structural aesthetics without reliance on heavy frontend utility UI libraries.

- **Framework**: Next.js 14 (App Router)
- **Library**: React 18
- **Styling**: Vanilla CSS utilizing CSS Variables (`.css`) for seamless Day/Night mode toggling and zero-bloat performance.
- **Icons**: `lucide-react`
- **Global State**: React Context API (`ThemeContext`, `LanguageContext`)
- **Localization**: Static modular JSON architectures (`en`, `km`, `zh`) allowing instant hot-swapping between English, Khmer, and Chinese.
- **Security**: Custom hardened `next.config.mjs` injecting restrictive CSP, XSS Protection, and Referrer policies.

## Key Features

- **Tri-Lingual Engine**: A custom translation layer rendering localized biography, stats, and milestones instantly without router reloading.
- **Dynamic Visual Archives**: A dedicated dual-filtering system sorting content by *Topics* (Performance, Commercial) and *Formats* (Photo, Video). 
- **Native Social Integration**: Embedded TikTok and Instagram iframes seamlessly framed into a natively rendered 9/16 Lightbox overlay and Pinned Highlights grid, utilizing `loading="lazy"`.
- **Glassmorphic Ecosystem**: A sharp, edge-driven design utilizing translucent backdrops, tight typography bindings, and strict `clamp()` calculations for infinite responsiveness across all mobile, tablet, and desktop views.
- **Blog Pipeline**: Secure dynamic routes mapped for future article integrations (`/blog/[id]`).

## Local Development

```bash
# Install dependencies
npm install

# Run the development server locally on port 3015
npm run dev
```

Open [http://localhost:3015](http://localhost:3015) in your browser to view the application.

## Maintainer
Owned and operated by Keo Moni (Gravzero).
