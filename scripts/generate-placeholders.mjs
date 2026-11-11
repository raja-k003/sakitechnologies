/**
 * Generates dummy placeholder images (same file names / sizes as the real ones)
 * so the site renders fully before client artwork is supplied.
 * Usage: node scripts/generate-placeholders.mjs
 * Replace any file in public/images with the real asset, keeping the file name.
 */
import sharp from 'sharp';
import { readdirSync, writeFileSync, existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const dir = new URL('../public/images/', import.meta.url).pathname;
const BRAND = '#3857f1';
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');

function placeholderSvg(w, h, label) {
  const fs = Math.max(12, Math.min(w, h) / 14);
  const icon = Math.min(w, h) * 0.22;
  const cx = w / 2, cy = h / 2 - fs;
  const showText = w >= 200 && h >= 120;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#eef2fc"/><stop offset="1" stop-color="#d9e0f0"/></linearGradient></defs>
  <rect width="${w}" height="${h}" fill="url(#g)"/>
  <g stroke="#b9c4e4" stroke-width="2" fill="none"><path d="M0 0L${w} ${h}M${w} 0L0 ${h}" opacity=".5"/></g>
  <g transform="translate(${cx - icon / 2} ${cy - icon / 2})" fill="none" stroke="${BRAND}" stroke-width="${Math.max(2, icon / 14)}" stroke-linejoin="round" stroke-linecap="round" opacity=".7">
    <rect width="${icon}" height="${icon * 0.75}" rx="${icon / 12}"/>
    <circle cx="${icon * 0.3}" cy="${icon * 0.27}" r="${icon * 0.08}"/>
    <path d="M${icon * 0.06} ${icon * 0.68}L${icon * 0.36} ${icon * 0.4}L${icon * 0.56} ${icon * 0.58}L${icon * 0.72} ${icon * 0.45}L${icon * 0.94} ${icon * 0.68}"/>
  </g>
  ${showText ? `<text x="${w / 2}" y="${h / 2 + icon * 0.75}" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-size="${fs}" fill="#475569">${esc(label)}</text>
  <text x="${w / 2}" y="${h / 2 + icon * 0.75 + fs * 1.4}" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-size="${fs * 0.7}" fill="#64748b">${w} × ${h} · dummy image</text>` : ''}
</svg>`;
}

const logoSvg = (w, h, bg) => `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  ${bg ? `<rect width="${w}" height="${h}" fill="${bg}"/>` : ''}
  <g transform="translate(${w * 0.5 - h * 0.6} ${h * 0.5}) ">
    <rect x="${-h * 0.2}" y="${-h * 0.17}" width="${h * 0.34}" height="${h * 0.34}" rx="${h * 0.08}" fill="${BRAND}"/>
    <text x="${-h * 0.03}" y="${h * 0.09}" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="${h * 0.24}" fill="#fff">S</text>
    <text x="${h * 0.22}" y="${h * 0.07}" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="${h * 0.2}" fill="#0f172a">Saki <tspan fill="${BRAND}">Technologies</tspan></text>
  </g></svg>`;

for (const f of readdirSync(dir)) {
  const path = join(dir, f);
  const m = await sharp(path).metadata();
  const { width: w, height: h } = m;
  const name = f.replace(/\.[a-z]+$/, '');
  let svg;
  if (name === 'saki-logo') svg = logoSvg(w, h, null);
  else if (name === 'saki-og') svg = logoSvg(w, h, '#f6f8fe');
  else svg = placeholderSvg(w, h, name.replace(/-/g, ' '));
  let img = sharp(Buffer.from(svg));
  if (f.endsWith('.webp')) img = img.webp({ quality: 70 });
  else if (f.endsWith('.png')) img = img.png();
  else img = img.jpeg({ quality: 80 });
  writeFileSync(path, await img.toBuffer());
  console.log('placeholder', f, `${w}x${h}`);
}

// Favicon (SVG + PNG-in-ICO)
const fav = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" rx="8" fill="${BRAND}"/><text x="16" y="23" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="20" fill="#fff">S</text></svg>`;
writeFileSync(new URL('../public/favicon.svg', import.meta.url), fav);
const png = await sharp(Buffer.from(fav)).resize(48, 48).png().toBuffer();
const hdr = Buffer.alloc(22);
hdr.writeUInt16LE(0, 0); hdr.writeUInt16LE(1, 2); hdr.writeUInt16LE(1, 4);
hdr[6] = 48; hdr[7] = 48; hdr.writeUInt16LE(1, 10); hdr.writeUInt16LE(32, 12);
hdr.writeUInt32LE(png.length, 14); hdr.writeUInt32LE(22, 18);
writeFileSync(new URL('../public/favicon.ico', import.meta.url), Buffer.concat([hdr, png]));
