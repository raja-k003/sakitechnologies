import { SiteImage } from './images';

export interface BlogPost {
  slug: string;
  title: string;
  /** Shorter title for search results (aim for 41 characters or fewer); falls back to `title`. */
  seoTitle?: string;
  description: string;
  excerpt: string;
  published: string; // ISO date
  updated?: string;
  author: string;
  readingMinutes: number;
  image: SiteImage;
  /** Old WordPress path, 301-redirected to the new URL by the server. */
  legacyPath?: string;
  relatedProduct?: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'signs-of-hard-water',
    title: 'Common signs of hard water and why a water softener is essential',
    seoTitle: 'Signs of Hard Water at Home',
    description: 'Scale on taps, soap scum, stiff laundry and spotty glasses are all signs of hard water. Learn what causes them and how a water softener helps.',
    excerpt: 'White scale on taps, soap that will not lather and stiff, dull laundry all point to the same cause.',
    published: '2023-12-09',
    author: 'Saki Technologies',
    readingMinutes: 4,
    image: { src: '/assets/blogs/blog-7.webp', alt: 'Softener vessels, control unit and steel storage tank installed in a utility room' },
    legacyPath: '/2023/12/09/common-signs-of-hard-water-and-why-a-water-softener-is-essential-2',
    relatedProduct: 'water-softeners',
  },
  {
    slug: 'water-softener-maintenance-tips',
    title: 'DIY maintenance tips for your water softener system',
    seoTitle: 'Water Softener Maintenance Tips',
    description: 'Simple maintenance steps that keep a water softener working: salt levels, salt bridges, brine tank cleaning, resin care and hardness testing.',
    excerpt: 'A few minutes of regular care keeps your softener working at full capacity for years.',
    published: '2023-12-08',
    author: 'Saki Technologies',
    readingMinutes: 4,
    image: { src: '/assets/blogs/blog-2.webp', alt: 'Stainless steel water treatment skid with blue filter housings and a booster pump' },
    legacyPath: '/2023/12/08/diy-maintenance-tips-for-your-water-softener-system',
    relatedProduct: 'water-softeners',
  },
  {
    slug: 'choosing-the-right-water-softener',
    title: 'Choosing the right water softener: a complete guide',
    seoTitle: 'How to Choose a Water Softener',
    description: 'How to choose a water softener: test your hardness, compare salt-based and salt-free systems, size the capacity and flow rate, and plan running costs.',
    excerpt: 'Hardness, household size, regeneration type and running cost all decide which softener is right for you.',
    published: '2023-12-08',
    author: 'Saki Technologies',
    readingMinutes: 5,
    image: { src: '/assets/blogs/blog-4.webp', alt: 'Large water treatment systems lined up in a Saki Technologies workshop' },
    legacyPath: '/2023/12/08/common-signs-of-hard-water-and-why-a-water-softener-is-essential',
    relatedProduct: 'water-softeners',
  },
  {
    slug: 'iron-in-borewell-water',
    title: 'Iron in borewell water: signs, risks and how an iron filter fixes it',
    seoTitle: 'Iron in Borewell Water: Signs & Fix',
    description: 'Rust-coloured water, orange stains and a metallic taste are classic signs of iron in borewell water. Learn what causes it and how an iron removal filter helps.',
    excerpt: 'Orange stains, a metallic taste and water that turns rusty on standing all point to dissolved iron.',
    published: '2024-01-15',
    author: 'Saki Technologies',
    readingMinutes: 4,
    image: { src: '/assets/blogs/blog-3.webp', alt: 'Saki Technologies iron filter and softener vessels installed beside an overhead tank' },
    relatedProduct: 'iron-filters',
  },
  {
    slug: 'sand-filter-vs-carbon-filter',
    title: 'Sand filter vs carbon filter: which one does your home need?',
    seoTitle: 'Sand Filter vs Carbon Filter',
    description: 'A sand filter removes silt and suspended solids; an activated carbon filter removes chlorine, odour and taste. See how they differ and when to use both.',
    excerpt: 'One removes the dirt you can see, the other the taste and smell you cannot. Here is how to choose.',
    published: '2024-02-12',
    author: 'Saki Technologies',
    readingMinutes: 4,
    image: { src: '/assets/blogs/blog-6.webp', alt: 'Two blue filter vessels with a control panel and pre-filters on a steel frame' },
    relatedProduct: 'sand-filters',
  },
];

export const BLOG_SLUGS = new Set(BLOG_POSTS.map((p) => p.slug));

export const findPost = (slug: string | null | undefined): BlogPost | undefined =>
  slug ? BLOG_POSTS.find((p) => p.slug === slug) : undefined;

/** Posts sorted newest first. */
export const sortedPosts = (): BlogPost[] =>
  [...BLOG_POSTS].sort((a, b) => b.published.localeCompare(a.published));
