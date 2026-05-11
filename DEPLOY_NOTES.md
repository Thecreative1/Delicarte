# Deploy Notes

This project is a Vite app published under the GitHub Pages repository path:

https://thecreative1.github.io/Delicarte/

GitHub Pages must serve the production build from `dist`, not the repository root.

## Required GitHub Pages Setting

In the GitHub repository, open:

Settings -> Pages

Set:

Source: GitHub Actions

Do not use:

Deploy from branch -> main -> /root

The root `index.html` is only for local Vite development and contains:

```html
<script type="module" src="/src/main.tsx"></script>
```

That file is not valid for production on GitHub Pages.

## Workflow

The deploy workflow is:

`.github/workflows/deploy.yml`

It runs:

```bash
npm ci
npm run build
```

Then it uploads only:

```text
dist
```

using `actions/upload-pages-artifact`.

## Expected Production Output

After `npm run build`, `dist/index.html` must reference assets under:

```text
/Delicarte/assets/
```

Example:

```html
<script type="module" crossorigin src="/Delicarte/assets/...js"></script>
<link rel="stylesheet" crossorigin href="/Delicarte/assets/...css">
```

If the public site is blank and the browser shows `/src/main.tsx`, GitHub Pages is still serving `main/root` instead of the GitHub Actions artifact.
