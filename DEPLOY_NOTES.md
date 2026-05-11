# Deploy Notes

This project is a Vite app published under the GitHub Pages repository path:

https://thecreative1.github.io/Delicarte/

The site is published from the `gh-pages` branch.

## Required GitHub Pages Setting

In the GitHub repository, open:

Settings -> Pages

Set:

Source: Deploy from a branch

Branch:

gh-pages

Folder:

/root

Do not use:

main -> /root

Do not serve the repository root `index.html` as the production site.

## Development Index

The root `index.html` must stay as the Vite development entry:

```html
<script type="module" src="/src/main.tsx"></script>
```

Do not replace it with a production `dist/index.html`.

## Deploy Command

After changes, publish with:

```bash
npm run deploy
```

The `deploy` script builds the app and publishes only the `dist` folder to the `gh-pages` branch:

```json
"predeploy": "npm run build",
"deploy": "node scripts/deploy-gh-pages.mjs"
```

The deploy script creates a temporary branch worktree from `dist`, adds `.nojekyll`, and force-pushes it to `gh-pages`.

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

If the public site is blank and the browser shows `/src/main.tsx`, GitHub Pages is still serving `main / root` instead of `gh-pages / root`.
