import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PAGES } from '../../core/config/pages';
import { SITE } from '../../core/config/site.config';
import { sortedPosts } from '../../core/data/blog';
import { GALLERY, TESTIMONIALS } from '../../core/data/content';
import { image } from '../../core/data/images';
import { PRODUCTS, PRODUCT_CATEGORIES, ProductCategory, lowestPrice } from '../../core/data/products';
import { localBusinessSchema, websiteSchema } from '../../core/seo/schema';
import { SeoService } from '../../core/seo/seo.service';
import { HeroOrbit } from './hero-orbit';
import { ReviewCarousel } from './review-carousel';
import { BlogAccordion } from './blog-accordion';
// import { BenefitWheel } from './benefit-wheel';
import { FoldCard } from '../../shared/ui/fold-card';
import { ButtonDirective } from '../../shared/ui/button';
// import { CtaBand } from '../../shared/ui/cta-band';
import { Icon } from '../../shared/ui/icon';
import { SectionHeading } from '../../shared/ui/section-heading';

@Component({
  selector: 'app-home',
  imports: [ReviewCarousel, BlogAccordion, HeroOrbit, FoldCard, NgOptimizedImage, RouterLink, ButtonDirective, Icon, SectionHeading],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { '(document:keydown)': 'onKey($event)' },
})
export class Home {
  protected readonly site = SITE;

  /** Hero title split into words → characters for the staggered 3D reveal (words never break mid-word). */
  protected readonly heroTitleText = 'Commercial water solutions that keep your business running';
  protected readonly heroTitle = (() => {
    const accent = new Set(['commercial', 'water']);
    const words = this.heroTitleText.split(' ');
    const accentChars = words.filter((w) => accent.has(w.toLowerCase().replace(/[^a-z]/g, ''))).join('').length;
    let i = 0, a = 0;
    return words.map((word) => {
      const isAccent = accent.has(word.toLowerCase().replace(/[^a-z]/g, ''));
      // `p` (0–100) is the character's position along the accent gradient
      const chars = [...word].map((ch) => ({ ch, i: i++, p: isAccent ? Math.round((a++ / Math.max(1, accentChars - 1)) * 100) : 0 }));
      i++; // the space between words counts as one stagger step
      return { accent: isAccent, chars };
    });
  })();
  protected readonly heroStats = [
    { value: `${SITE.yearsOfExperience}+`, label: 'Years of expertise' },
    { value: `${SITE.warrantyYears}-year`, label: 'Warranty' },
    { value: 'Free', label: 'On-site water audit' },
  ];
  /** Initials-in-circles social proof, taken from real testimonial names. */
  protected readonly proofAvatars = TESTIMONIALS.slice(0, 4).map((t, i) => ({ initial: t.name[0], tone: [0, 40, 75, 20][i] }));
  protected readonly roHighlights = ['RO + UV purification', 'Alkaline and copper stages', 'Kent, Aqua and more', 'Safe drinking water'];
  protected readonly products = PRODUCTS.map((p) => ({ ...p, fromPrice: lowestPrice(p) }));
  private readonly foldStyle: Record<string, { icon: string; tone: number; shade: number; shortName: string }> = {
    'water-softeners': { icon: 'drop', tone: 0, shade: 10, shortName: 'softeners' },
    'purolite-softener-resin': { icon: 'bubbles', tone: 35, shade: 14, shortName: 'resin' },
    'sand-filters': { icon: 'layers', tone: 70, shade: 26, shortName: 'sand filters' },
    'iron-filters': { icon: 'magnet', tone: 0, shade: 34, shortName: 'iron filters' },
    'carbon-filters': { icon: 'leaf', tone: 55, shade: 22, shortName: 'carbon filters' },
  };
  /** Folding cards in the products section: every product, then the RO purifiers. */
  protected readonly foldCards = [
    ...this.products.map((p) => ({
      category: p.category, name: p.name, summary: p.summary, link: `/products/${p.slug}`, image: p.image, fromPrice: p.fromPrice,
      detailTitle: p.highlightsTitle, points: p.highlights.slice(0, 3), ...this.foldStyle[p.slug],
    })),
    {
      category: 'purifiers' as ProductCategory, name: 'RO water purifiers', summary: 'RO + UV purifiers with alkaline and copper stages for safe drinking water, from Kent, Aqua and more.',
      link: '/products/ro-water-purifiers', image: image('ro-kent-crystal-star-black', 'Kent Crystal Star black RO + UV water purifier'), fromPrice: 9990 as number | undefined,
      detailTitle: 'Why choose our RO purifiers', points: this.roHighlights.slice(0, 3), icon: 'sparkle', tone: 100, shade: 30, shortName: 'RO purifiers',
    },
  ];
  protected readonly foldTabs: { id: 'all' | ProductCategory; label: string }[] = [{ id: 'all', label: 'All products' }, ...PRODUCT_CATEGORIES];
  protected readonly foldFilter = signal<'all' | ProductCategory>('all');
  protected readonly visibleFold = computed(() => this.foldCards.filter((c) => this.foldFilter() === 'all' || c.category === this.foldFilter()));
  protected readonly roImage = image('ro-kent-crystal-star-black', 'Kent Crystal Star black RO + UV water purifier');
  protected readonly testimonials = TESTIMONIALS.slice(0, 3);
  protected readonly allTestimonials = TESTIMONIALS;
  protected readonly posts = sortedPosts().slice(0, 5);


  protected readonly benefits = [
    { icon: 'gauge', title: 'High output', text: 'Maximise efficiency. High output and low maintenance for superior water solutions.', link: '/products/water-softeners' },
    { icon: 'wrench', title: 'Low maintenance', text: 'Effortless upkeep. Low maintenance for sustained, hassle-free water solutions.', link: '/services' },
    { icon: 'timer', title: 'Longevity', text: 'Enduring excellence. Longevity for appliances, fabrics and a life well-lived.', link: '/products' },
    { icon: 'sparkle', title: 'Smooth skin', text: 'Gentle luxury. Smooth skin with advanced water softening solutions.', link: '/products/water-softeners' },
    { icon: 'bubbles', title: 'Enhanced lather', text: 'Rich lather, less soap. Elevate your bathing experience effortlessly.', link: '/products/water-softeners' },
    { icon: 'utensils', title: 'Cleaner vessels', text: 'Stain-free vessels. Our solution ensures cleaner, pristine kitchenware effortlessly.', link: '/products/water-softeners' },
    { icon: 'shirt', title: 'Softer clothes', text: 'Gentle fabrics. Our technology ensures softer, more vibrant clothes effortlessly.', link: '/products/water-softeners' },
  ];

  /** Set `photo` (e.g. '/images/benefit-skin.webp') to show a real photo instead of the illustrated panel. hue shifts the panel colour. */
  protected readonly softenerBenefits: { icon: string; title: string; text: string; hue: number; photo?: string }[] = [
    { icon: 'flame', title: 'Heats water faster', text: 'Softened water speeds up the heating process. Reduced energy consumption and lower utility bills.', hue: 0, photo: '/images/benefit-heats-water-faster.webp' },
    { icon: 'sparkle', title: 'Soft skin and soft hair', text: 'Soft water helps soaps lather and rinse, making your skin and hair much softer.', hue: 18, photo: '/images/benefit-soft-skin-hair.webp' },
    { icon: 'shield', title: 'Longer-lasting appliances', text: 'A water softener makes soaps work more efficiently and elongates the life of your appliances.', hue: -14, photo: '/images/benefit-longer-lasting-appliances.webp' },
    { icon: 'utensils', title: 'Saves dishes', text: 'Helps keep your dishes spotless and makes silverware and glasses cleaner and shinier.', hue: 10, photo: '/images/benefit-saves-dishes.webp' },
    { icon: 'layers', title: 'Improves life of linens', text: 'A water softener helps prevent colour fading and keeps your linens soft.', hue: -8, photo: '/images/benefit-life-of-linens.webp' },
    { icon: 'shirt', title: 'Softer fabrics', text: 'Soft water preserves fabrics, enhancing durability and vibrancy effortlessly.', hue: 22, photo: '/images/benefit-softer-fabrics.webp' },
  ];

  protected readonly certs = ['ISO 18001:2007', 'ISO 9001:2015', 'ISO 14001:2015'];

  /** The nine most recent installations, shown as a photo grid with a lightbox. */
  protected readonly activity = GALLERY.slice(0, 9);
  protected readonly lightbox = signal<number | null>(null);
  protected readonly current = computed(() => (this.lightbox() === null ? null : this.activity[this.lightbox()!]));

  protected openLightbox(i: number): void {
    this.lightbox.set(i);
  }

  protected closeLightbox(): void {
    this.lightbox.set(null);
  }

  protected step(delta: number): void {
    const i = this.lightbox();
    if (i !== null) this.lightbox.set((i + delta + this.activity.length) % this.activity.length);
  }

  protected onKey(e: KeyboardEvent): void {
    if (this.lightbox() === null) return;
    if (e.key === 'Escape') this.closeLightbox();
    else if (e.key === 'ArrowRight') this.step(1);
    else if (e.key === 'ArrowLeft') this.step(-1);
  }

  protected readonly steps = [
    { icon: 'calendar', title: 'Book a visit', text: 'Call, WhatsApp or send an enquiry to schedule a convenient time.' },
    { icon: 'drop', title: 'Free water test', text: 'We test hardness, iron and turbidity on site and explain the results.' },
    { icon: 'wrench', title: 'Expert installation', text: 'Our technicians install the right system — no civil work required.' },
    { icon: 'shield', title: 'Ongoing support', text: 'Recharging guidance, servicing and a 1-year warranty for peace of mind.' },
  ];

  constructor() {
    const page = PAGES.home;
    inject(SeoService).setPage({
      title: page.title,
      rawTitle: true,
      description: page.description,
      path: page.path,
      jsonLd: [localBusinessSchema(), websiteSchema()],
    });
  }

  /** Decorative water shapes around the hero image: x/y in %, size in rem, d = parallax depth. */
  protected readonly shapes: { kind: 'drop' | 'bubble' | 'ripple'; x: number; y: number; size: number; d: number; delay: number; dur: number }[] = [
    { kind: 'drop', x: 78, y: 2, size: 4.5, d: 28, delay: 0, dur: 7 },
    { kind: 'drop', x: 2, y: 8, size: 3.2, d: -22, delay: -2, dur: 8 },
    { kind: 'drop', x: 90, y: 40, size: 2.4, d: 36, delay: -4, dur: 6 },
    { kind: 'drop', x: -4, y: 52, size: 5.5, d: -30, delay: -1, dur: 9 },
    { kind: 'drop', x: 70, y: 82, size: 3.6, d: 24, delay: -3, dur: 7.5 },
    { kind: 'drop', x: 30, y: 90, size: 2.2, d: -38, delay: -5, dur: 6.5 },
    { kind: 'drop', x: 46, y: -4, size: 2, d: 20, delay: -6, dur: 8.5 },
    { kind: 'drop', x: 92, y: 66, size: 4.2, d: -26, delay: -2.5, dur: 10 },
    { kind: 'bubble', x: 14, y: 30, size: 2.4, d: 34, delay: -1, dur: 6 },
    { kind: 'bubble', x: 84, y: 22, size: 1.6, d: -32, delay: -3, dur: 5 },
    { kind: 'bubble', x: 6, y: 74, size: 3.2, d: 26, delay: -4, dur: 8 },
    { kind: 'bubble', x: 58, y: 94, size: 1.4, d: -20, delay: -2, dur: 5.5 },
    { kind: 'bubble', x: 96, y: 88, size: 2.2, d: 30, delay: -6, dur: 7 },
    { kind: 'bubble', x: 22, y: 2, size: 1.2, d: -28, delay: -1.5, dur: 6 },
    { kind: 'ripple', x: 62, y: 70, size: 9, d: 12, delay: 0, dur: 5 },
    { kind: 'ripple', x: 8, y: 20, size: 7, d: -14, delay: -2.5, dur: 6 },
  ];

  /** Bubbles rising inside the water at the foot of the hero: x in %, y = start height in % of the water layer. */
  protected readonly bubbles = [
    { x: 3, y: 12, size: 2.2, delay: -0.0, dur: 5 },
    { x: 7, y: 30, size: 1.2, delay: -0.9, dur: 7 },
    { x: 11, y: 8, size: 3.2, delay: -1.8, dur: 9 },
    { x: 15, y: 24, size: 1.6, delay: -2.7, dur: 6 },
    { x: 19, y: 40, size: 2.6, delay: -3.6, dur: 8 },
    { x: 24, y: 14, size: 1.1, delay: -4.5, dur: 5 },
    { x: 5, y: 48, size: 1.8, delay: -5.4, dur: 7 },
    { x: 30, y: 10, size: 1.4, delay: -6.3, dur: 9 },
    { x: 38, y: 22, size: 2, delay: -0.20000000000000018, dur: 6 },
    { x: 46, y: 6, size: 1.2, delay: -1.0999999999999996, dur: 8 },
    { x: 54, y: 26, size: 1.7, delay: -2.0, dur: 5 },
    { x: 62, y: 12, size: 2.4, delay: -2.9000000000000004, dur: 7 },
    { x: 70, y: 30, size: 1.3, delay: -3.8000000000000007, dur: 9 },
    { x: 78, y: 8, size: 1.8, delay: -4.700000000000001, dur: 6 },
    { x: 85, y: 22, size: 2.8, delay: -5.6, dur: 8 },
    { x: 91, y: 14, size: 1.4, delay: -6.5, dur: 5 },
    { x: 95, y: 36, size: 2, delay: -0.40000000000000036, dur: 7 },
    { x: 1, y: 64, size: 1.3, delay: -1.3000000000000007, dur: 9 },
    { x: 13, y: 58, size: 1.1, delay: -2.1999999999999993, dur: 6 },
    { x: 97, y: 56, size: 1.5, delay: -3.1000000000000014, dur: 8 },
  ];

  protected track(e: PointerEvent): void {
    const el = e.currentTarget as HTMLElement;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--px', String((e.clientX - r.left) / r.width - 0.5));
    el.style.setProperty('--py', String((e.clientY - r.top) / r.height - 0.5));
  }
}
