import { defineConfig } from 'astro/config';

// Deployed as a GitHub "user site": repository must be named  Cyre-gy.github.io
// Live address:  https://cyre-gy.github.io/
// (If you use a differently named repository instead, set base: '/REPO_NAME' and site stays the same.)
export default defineConfig({
  site: 'https://cyre-gy.github.io',
  base: '/',
  trailingSlash: 'always',
});
