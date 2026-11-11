/**
 * Single source of truth for business details and SEO defaults.
 * Change `baseUrl` before deploying to a different domain: canonical URLs,
 * Open Graph URLs, the sitemap and JSON-LD are all derived from it.
 */
export const SITE = {
  baseUrl: 'https://sakitechnologies.com',
  name: 'Saki Technologies',
  shortName: 'Saki Technologies',
  legalName: 'Saki Technologies',
  tagline: 'Water softeners, sand, iron and carbon filters in Chennai',
  titleTemplate: '%s | Saki Technologies',
  defaultTitle: 'Water Softeners & Filters in Chennai | Saki Technologies',
  defaultDescription:
    'Water softeners, sand, iron and carbon filters and RO purifiers for Chennai homes and businesses. 25 years of experience and a 1-year warranty.',
  lang: 'en-IN',
  ogLocale: 'en_IN',
  yearsOfExperience: 25,
  warrantyYears: 1,
  logo: {
    url: '/images/saki-logo.png',
    width: 600,
    height: 325,
  },
  /** 1200×630 social-share image used when a page has no image of its own. */
  defaultOgImage: {
    url: '/images/saki-og.jpg',
    alt: 'Saki Technologies water softeners and filters in Chennai',
    width: 1200,
    height: 630,
  },
  brochureUrl: '/brochures/saki-brochure.pdf',
  phones: [
    { display: '+91 86107 57583', e164: '+918610757583' },
  ],
  whatsapp: { display: '+91 86107 57583', number: '918610757583' },
  email: 'hello@sakitechnologies.com',
  address: {
    street: '141/2, Mettu St',
    locality: 'Kuppusamy Nagar, Ayanavaram',
    city: 'Chennai',
    region: 'Tamil Nadu',
    postalCode: '600023',
    country: 'IN',
  },
  /** Google Maps embed URL (Share → Embed a map → copy the iframe src). */
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.074615374851!2d80.23038421175094!3d13.094457587178665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ccdb554335%3A0x67f6f7d5e465d090!2sSaki%20Technologies!5e0!3m2!1sen!2sin!4v1794387333917!5m2!1sen!2sin',
  hours: { label: 'Mon – Sat, 9 am – 5 pm', days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '09:00', closes: '17:00' },
  social: [
    { name: 'Facebook', url: 'https://www.facebook.com/sakitechnologies', icon: 'facebook' },
    { name: 'Instagram', url: 'https://www.instagram.com/sakitechnologies', icon: 'instagram' },
    { name: 'YouTube', url: 'https://www.youtube.com/@sakitechnologies', icon: 'youtube' },
  ],
  /** Date the static page copy was last meaningfully changed (used as sitemap lastmod). */
  contentUpdated: '2026-10-28',
  blogPageSize: 6,
} as const;

export const fullAddress = (): string => {
  const a = SITE.address;
  return `${a.street}, ${a.locality}, ${a.city} – ${a.postalCode}`;
};

export const whatsappLink = (text = 'Hi Saki Technologies, I would like to know more about your water solutions.'): string =>
  `https://wa.me/${SITE.whatsapp.number}?text=${encodeURIComponent(text)}`;
