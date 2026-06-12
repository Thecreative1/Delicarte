# Security Headers

The site is currently deployed through GitHub Pages. GitHub Pages serves HTTPS and handles the HTTP to HTTPS redirect, but it does not allow this repository to define arbitrary HTTP response headers.

The HTML entry files include a static Content Security Policy and referrer policy. For stronger browser hardening, configure these response headers at the hosting or CDN layer:

```text
Content-Security-Policy: default-src 'self'; base-uri 'self'; object-src 'none'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com; connect-src 'self' https://www.google-analytics.com https://region1.google-analytics.com https://www.googletagmanager.com; img-src 'self' data: https://delicarte.pt https://www.google-analytics.com; style-src 'self' 'unsafe-inline'; font-src 'self'; frame-src 'none'; form-action 'self'; upgrade-insecure-requests
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=()
X-Frame-Options: DENY
```

Use a host or CDN that supports custom headers, such as Cloudflare, Cloudflare Pages, Netlify, or Vercel, if these headers need to be enforced as real HTTP response headers.
