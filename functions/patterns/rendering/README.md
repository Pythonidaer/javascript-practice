# Rendering Patterns Overview

This document describes various rendering patterns used in web development.

- **Static**: HTML is generated at build time and served as-is.
- **Basic/Plain Static**: Simple static HTML, no dynamic data.
- **Static Rendering with Client-Side Fetch**: HTML is static, but dynamic data is fetched in the browser.
- **Incremental Static Regeneration (ISR)**: Static pages are regenerated in the background after deployment, on a schedule or on-demand.
- **On-demand ISR**: Pages are regenerated only when requested, not on a schedule.
- **Server-Side Rendering (SSR)**: HTML is generated on the server for each request.
- **Edge SSR + HTTP Streaming**: HTML is generated at the edge, streamed to the client as it is produced for faster TTFB.
