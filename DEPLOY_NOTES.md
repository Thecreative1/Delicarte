# Deploy Notes

This project is a Vite app published with GitHub Pages on the custom domain:

https://delicarte.pt/

The domain is set by `public/CNAME`, and `vite.config.ts` uses `base: "/"`.

## How Deploys Work

Every push to `main` runs the GitHub Actions workflow `.github/workflows/deploy.yml`:

1. `npm ci`
2. `npm run build` (Vite build + SSR prerender of every route into static HTML)
3. Uploads `dist` and deploys it to GitHub Pages.

The workflow can also be started by hand from the Actions tab (`workflow_dispatch`).

There is no manual deploy command. `dist/` is generated locally and is not committed.

## Required GitHub Pages Setting

In the GitHub repository, open:

Settings -> Pages

Source must be:

GitHub Actions

The old `gh-pages` branch is no longer used to serve the site.

## Checking A Deploy

After pushing, check that the latest "Deploy Delicarte to GitHub Pages" run in the Actions tab succeeded:

```bash
gh run list --limit 3
```

If the deploy step fails with "Deployment failed, try again later", it is a temporary GitHub error. Re-run the workflow from the Actions tab.

## Development Index

The root `index.html` must stay as the Vite development entry:

```html
<script type="module" src="/src/main.tsx"></script>
```

Do not replace it with a production `dist/index.html`.

## Expected Production Output

After `npm run build`, `dist/` contains prerendered HTML for:

- `/`
- `/tratamentos/drenagem-linfatica-guimaraes/`
- `/tratamentos/drenagem-pos-operatorio-guimaraes/`

Assets are referenced from `/assets/`.
