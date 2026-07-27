// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: "https://cheesecakecorp.org",
  base: "/",
  trailingSlash: "ignore",
  adapter: cloudflare({ imageService: true }),
});