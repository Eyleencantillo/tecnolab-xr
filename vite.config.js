import { defineConfig } from 'vite';

export default defineConfig({
  // GitHub Pages serves the app from a repository subpath; Vercel serves it from the domain root.
  base: process.env.GITHUB_ACTIONS === 'true' ? '/tecnolab-xr/' : '/'
});
