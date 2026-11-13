import { RenderMode, ServerRoute } from '@angular/ssr';
import { PRERENDER_STATIC_PATHS } from './core/config/pages';
import { BLOG_POSTS } from './core/data/blog';
import { PRODUCTS } from './core/data/products';

/**
 * Rendering strategy per route:
 * - Prerender (SSG) for static content: fastest TTFB, fully rendered HTML.
 * - /products and /blog are prerendered too (GitHub Pages is static); their query-string views
 *   (?category=, ?page=) are applied in the browser after hydration.
 * - Everything else hits the wildcard: server-rendered with HTTP 404 (on GitHub Pages: 404.html).
 */
export const serverRoutes: ServerRoute[] = [
  { path: '', renderMode: RenderMode.Prerender },
  ...PRERENDER_STATIC_PATHS.filter((p) => p !== '').map((path) => ({ path, renderMode: RenderMode.Prerender as const })),
  {
    path: 'products/:slug',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => PRODUCTS.map((p) => ({ slug: p.slug })),
  },
  {
    path: 'blog/:slug',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => BLOG_POSTS.map((p) => ({ slug: p.slug })),
  },
  { path: '**', renderMode: RenderMode.Server, status: 404, headers: { 'Cache-Control': 'no-store' } },
];
