# Rendering Modes Comparison

This document provides a detailed comparison of various rendering modes:

| Mode                         | HTML Generated On          | JavaScript for Hydration | SPA Behaviour | Crawler Readability | Caching      | TTFB        | TTI / FCP   | Implemented Using           | Suitable For                         |
|------------------------------|----------------------------|-------------------------|---------------|---------------------|-------------|-------------|-------------|-----------------------------|--------------------------------------|
| Classic SSR                  | Server request             | Optional                | Optional      | Excellent           | CDN/Server  | Medium      | Medium      | Express, Next.js SSR        | Dynamic, SEO-critical pages          |
| SSR with Hydration           | Server request             | Yes                     | Yes           | Excellent           | CDN/Server  | Medium      | Fast        | Next.js, Nuxt.js            | Interactive, SEO, dynamic content    |
| Streaming                    | Server/Edge (streamed)     | Yes                     | Yes           | Excellent           | CDN/Server  | Fast        | Fast        | React 18, Next.js, Node.js  | Large, dynamic, fast-interactive     |
| Progressive Hydration        | Server/Edge                | Yes (in stages)         | Yes           | Excellent           | CDN/Server  | Fast        | Fast        | React 18, Astro, Next.js    | Large, interactive, performance      |
| Static Generation            | Build time                 | Optional                | Optional      | Excellent           | CDN         | Fast        | Fast        | Jekyll, Hugo, Next.js SSG   | Blogs, docs, mostly-static sites     |
| Incremental Static Generation| Build time + on-demand     | Optional                | Optional      | Excellent           | CDN/Server  | Fast        | Fast        | Next.js ISR, Gatsby         | Large, mostly-static, some dynamic   |
| CSR (Client-Side Rendering)  | Client runtime             | N/A                     | Yes           | Poor                | Browser     | Slow        | Slow        | React, Vue, Angular         | SPAs, apps with little SEO need      |

**Legend:**
- TTFB: Time to First Byte
- TTI: Time to Interactive
- FCP: First Contentful Paint
