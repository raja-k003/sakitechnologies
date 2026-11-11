import { BLOG_POSTS } from '../data/blog';
import { PRODUCTS } from '../data/products';
import { buildRobotsTxt, buildSitemapXml, sitemapEntries } from './sitemap';

describe('sitemap', () => {
  const xml = buildSitemapXml(sitemapEntries(), 'https://sakitechnologies.com');

  it('contains every product and post with canonical URLs', () => {
    for (const p of PRODUCTS) expect(xml).toContain(`<loc>https://sakitechnologies.com/products/${p.slug}</loc>`);
    for (const p of BLOG_POSTS) expect(xml).toContain(`<loc>https://sakitechnologies.com/blog/${p.slug}</loc>`);
    expect(xml).toContain('<loc>https://sakitechnologies.com/</loc>');
  });

  it('excludes non-indexable pages and has no duplicates', () => {
    expect(xml).not.toContain('/404');
    const locs = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);
    expect(new Set(locs).size).toBe(locs.length);
    expect(locs.every((l) => !l.endsWith('/') || l === 'https://sakitechnologies.com/')).toBe(true);
  });

  it('uses real post dates as lastmod', () => {
    expect(xml).toMatch(/blog\/signs-of-hard-water<\/loc>\s*<lastmod>2023-12-09<\/lastmod>/);
  });

  it('escapes XML and drops invalid dates', () => {
    const out = buildSitemapXml([{ path: '/a?x=1&y=2', lastmod: 'nope' }], 'https://e.com');
    expect(out).toContain('<loc>https://e.com/a?x=1&amp;y=2</loc>');
    expect(out).not.toContain('<lastmod>');
  });

  it('robots.txt points to the sitemap and blocks everything on staging', () => {
    expect(buildRobotsTxt('https://sakitechnologies.com', true)).toContain('Sitemap: https://sakitechnologies.com/sitemap.xml');
    expect(buildRobotsTxt('https://sakitechnologies.com', true)).not.toMatch(/Disallow: \/\n/);
    expect(buildRobotsTxt('https://x', false)).toBe('User-agent: *\nDisallow: /\n');
  });
});
