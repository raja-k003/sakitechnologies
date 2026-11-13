import { image, SiteImage } from './images';

export interface RoPurifier {
  name: string;
  brand: string;
  price: number;
  mounting: string;
  stages: string[];
  highlights: string[];
  image: SiteImage;
}

export const RO_PURIFIERS: RoPurifier[] = [
  {
    name: 'Aqua 2090 RO + UF + UV',
    brand: 'Aqua',
    price: 9990,
    mounting: 'Wall or tabletop',
    stages: ['RO', 'UF', 'UV', 'Alkaline', 'Copper'],
    highlights: ['LED display', 'Compact cabinet'],
    image: image('ro-aqua-2090', 'Aqua 2090 RO UF UV water purifier, front view'),
  },
  {
    name: 'Emerald RO + UV + Alkaline',
    brand: 'Aqua',
    price: 15990,
    mounting: 'Wall mount',
    stages: ['RO', 'UF', 'UV', 'Alkaline', 'Copper'],
    highlights: ['11 W UV lamp', 'Suits input TDS below 500 ppm', 'LED indicators'],
    image: image('ro-uv-alkaline-water-purifier', 'Wall-mounted RO + UV + alkaline water purifier with its box'),
  },
  {
    name: 'Euro Hot & Normal RO (Marino Hot)',
    brand: 'Euro',
    price: 21990,
    mounting: 'Wall mount',
    stages: ['RO', 'UV', 'Alkaline', 'Copper'],
    highlights: ['Hot and normal water', 'Smart glass touch panel', 'Auto level sensor', 'Food-grade ABS body'],
    image: image('ro-hot-normal-water-purifier', 'Hot and normal RO + UV water purifiers with glass touch panels'),
  },
  {
    name: 'Kent Sterling Star (Under-counter)',
    brand: 'Kent',
    price: 24990,
    mounting: 'Under-counter',
    stages: ['RO', 'UV', 'Alkaline', 'Copper'],
    highlights: ['LED display', 'Auto flush', 'Toughened glass front'],
    image: image('ro-kent-sterling-star-under-counter', 'Kent Sterling Star RO purifier installed under a kitchen counter'),
  },
  {
    name: 'Kent Crystal Star (Black)',
    brand: 'Kent',
    price: 25000,
    mounting: 'Wall or tabletop',
    stages: ['RO', 'UV', 'Alkaline', 'Copper'],
    highlights: ['Smart LED display', 'Auto flush'],
    image: image('ro-kent-crystal-star-black', 'Kent Crystal Star black RO water purifier'),
  },
];

/** Illustrated avatar (original artwork, not a photo of a real person). Set `photo` only for a customer who agreed to appear. */
export interface Avatar {
  gender: 'f' | 'm';
  skin: string;
  hair: string;
  cloth: string;
  stache?: boolean;
  glasses?: boolean;
  photo?: string;
}

export interface Testimonial {
  name: string;
  quote: string;
  avatar?: Avatar;
}

export const TESTIMONIALS: Testimonial[] = [
  { name: 'Meenakshi Sundaram', avatar: { gender: 'f', skin: '#b9774f', hair: '#1d1410', cloth: '#d9487b' }, quote: 'Life-changing! Soft water improved my skin and appliances. The water softener’s quality exceeded my expectations — a must-have for every household.' },
  { name: 'Thamarai Selvi', avatar: { gender: 'f', skin: '#a86a45', hair: '#17100d', cloth: '#0f9d8a' }, quote: 'Soft water made a huge difference at home. The softener’s efficiency and durability are unmatched. Highly recommended!' },
  { name: 'Senthil Vel', avatar: { gender: 'm', skin: '#8a5636', hair: '#16100d', cloth: '#3558d6', stache: true }, quote: 'An incredible impact on our laundry and plumbing. A small investment brought a significant positive change.' },
  { name: 'Priya Dharshini', avatar: { gender: 'f', skin: '#c2855c', hair: '#221611', cloth: '#e0932a' }, quote: 'This water softener exceeded expectations. Showering is a delight now and my skin thanks me. A must for every home.' },
  { name: 'Rajesh Annamalai', avatar: { gender: 'm', skin: '#9c6340', hair: '#1a1411', cloth: '#2f8f5b', glasses: true }, quote: 'Clear water and our appliances are working well. The softener has exceeded our expectations.' },
  { name: 'Janani Ramesh', avatar: { gender: 'f', skin: '#b17a52', hair: '#1b130f', cloth: '#7a4fd1' }, quote: 'We noticed the improvement immediately — no more scale build-up on taps and tiles. Top-notch softener.' },
];

export interface Faq {
  q: string;
  a: string;
}

export const FAQ_GROUPS: { title: string; items: Faq[] }[] = [
  {
    title: 'Water softeners',
    items: [
      { q: 'Why invest in a water softener?', a: 'A softener stops scale from forming on taps, tiles, geysers and washing machines, so appliances last longer and work more efficiently. Soap and shampoo lather better, and many people find their skin and hair feel softer.' },
      { q: 'How does ion exchange work?', a: 'Hard water flows through a bed of resin beads. The beads hold on to calcium and magnesium ions and release sodium ions in their place, so the water leaving the softener no longer forms scale. A brine wash recharges the beads when they are saturated.' },
      { q: 'Is softened water safe to drink?', a: 'Generally yes, when the system is set up correctly. Softened water contains a little more sodium, so if you are on a low-sodium diet we can fit a drinking-water bypass or pair the softener with an RO purifier.' },
      { q: 'Can I use softened water for plants?', a: 'It is fine for most plants. For sodium-sensitive plants, use water from a bypass tap.' },
      { q: 'How long does a water softener last?', a: 'With regular recharging and periodic resin cleaning, a well-built softener can last 20 years or more.' },
    ],
  },
  {
    title: 'Installation and maintenance',
    items: [
      { q: 'Is installation complicated?', a: 'No. Our systems are compact and need no civil work. We recommend professional installation so the unit is sized, plumbed and set up correctly for your water.' },
      { q: 'What maintenance is required?', a: 'Very little: keep the brine tank topped up with softener salt and recharge the resin as advised. Filters need a periodic backwash. We can do a yearly service visit if you prefer.' },
      { q: 'Do the systems need electricity?', a: 'Manual (M-series) softeners and our sand, iron and carbon filters work without electricity and at low water pressure. Automatic (A-series) models use a small amount of power for the control valve.' },
      { q: 'What warranty do you offer?', a: 'Our products come with a 1-year warranty.' },
    ],
  },
];

export const ALL_FAQS: Faq[] = FAQ_GROUPS.flatMap((g) => g.items);

export interface JobOpening {
  title: string;
  type: string;
  summary: string;
}

export const JOB_OPENINGS: JobOpening[] = [];

export interface GalleryItem {
  image: SiteImage;
  caption: string;
}

export const GALLERY: GalleryItem[] = [
  { image: { src: '/assets/activity/activity-01.webp', alt: 'Saki Technologies completed water treatment installation, photo 1' }, caption: 'Completed installation 1' },
  { image: { src: '/assets/activity/activity-02.webp', alt: 'Saki Technologies completed water treatment installation, photo 2' }, caption: 'Completed installation 2' },
  { image: { src: '/assets/activity/activity-03.webp', alt: 'Saki Technologies completed water treatment installation, photo 3' }, caption: 'Completed installation 3' },
  { image: { src: '/assets/activity/activity-04.webp', alt: 'Saki Technologies completed water treatment installation, photo 4' }, caption: 'Completed installation 4' },
  { image: { src: '/assets/activity/activity-05.webp', alt: 'Saki Technologies completed water treatment installation, photo 5' }, caption: 'Completed installation 5' },
  { image: { src: '/assets/activity/activity-06.webp', alt: 'Saki Technologies completed water treatment installation, photo 6' }, caption: 'Completed installation 6' },
  { image: { src: '/assets/activity/activity-07.webp', alt: 'Saki Technologies completed water treatment installation, photo 7' }, caption: 'Completed installation 7' },
  { image: { src: '/assets/activity/activity-08.webp', alt: 'Saki Technologies completed water treatment installation, photo 8' }, caption: 'Completed installation 8' },
  { image: { src: '/assets/activity/activity-09.webp', alt: 'Saki Technologies completed water treatment installation, photo 9' }, caption: 'Completed installation 9' },
  { image: { src: '/assets/activity/activity-10.webp', alt: 'Saki Technologies completed water treatment installation, photo 10' }, caption: 'Completed installation 10' },
  { image: { src: '/assets/activity/activity-11.webp', alt: 'Saki Technologies completed water treatment installation, photo 11' }, caption: 'Completed installation 11' },
  { image: { src: '/assets/activity/activity-12.webp', alt: 'Saki Technologies completed water treatment installation, photo 12' }, caption: 'Completed installation 12' },
  { image: { src: '/assets/activity/activity-13.webp', alt: 'Saki Technologies completed water treatment installation, photo 13' }, caption: 'Completed installation 13' },
  { image: { src: '/assets/activity/activity-14.webp', alt: 'Saki Technologies completed water treatment installation, photo 14' }, caption: 'Completed installation 14' },
  { image: { src: '/assets/activity/activity-15.webp', alt: 'Saki Technologies completed water treatment installation, photo 15' }, caption: 'Completed installation 15' },
  { image: { src: '/assets/activity/activity-16.webp', alt: 'Saki Technologies completed water treatment installation, photo 16' }, caption: 'Completed installation 16' },
  { image: { src: '/assets/activity/activity-17.webp', alt: 'Saki Technologies completed water treatment installation, photo 17' }, caption: 'Completed installation 17' },
  { image: { src: '/assets/activity/activity-18.webp', alt: 'Saki Technologies completed water treatment installation, photo 18' }, caption: 'Completed installation 18' },
  { image: { src: '/assets/activity/activity-19.webp', alt: 'Saki Technologies completed water treatment installation, photo 19' }, caption: 'Completed installation 19' },
  { image: { src: '/assets/activity/activity-20.webp', alt: 'Saki Technologies completed water treatment installation, photo 20' }, caption: 'Completed installation 20' },
  { image: { src: '/assets/activity/activity-21.webp', alt: 'Saki Technologies completed water treatment installation, photo 21' }, caption: 'Completed installation 21' },
  { image: { src: '/assets/activity/activity-22.webp', alt: 'Saki Technologies completed water treatment installation, photo 22' }, caption: 'Completed installation 22' },
  { image: { src: '/assets/activity/activity-23.webp', alt: 'Saki Technologies completed water treatment installation, photo 23' }, caption: 'Completed installation 23' },
  { image: { src: '/assets/activity/activity-24.webp', alt: 'Saki Technologies completed water treatment installation, photo 24' }, caption: 'Completed installation 24' },
  { image: { src: '/assets/activity/activity-25.webp', alt: 'Saki Technologies completed water treatment installation, photo 25' }, caption: 'Completed installation 25' },
  { image: { src: '/assets/activity/activity-26.webp', alt: 'Saki Technologies completed water treatment installation, photo 26' }, caption: 'Completed installation 26' },
  { image: { src: '/assets/activity/activity-27.webp', alt: 'Saki Technologies completed water treatment installation, photo 27' }, caption: 'Completed installation 27' },
  { image: { src: '/assets/activity/activity-28.webp', alt: 'Saki Technologies completed water treatment installation, photo 28' }, caption: 'Completed installation 28' },
  { image: { src: '/assets/activity/activity-29.webp', alt: 'Saki Technologies completed water treatment installation, photo 29' }, caption: 'Completed installation 29' },
  { image: { src: '/assets/activity/activity-30.webp', alt: 'Saki Technologies completed water treatment installation, photo 30' }, caption: 'Completed installation 30' },
  { image: { src: '/assets/activity/activity-31.webp', alt: 'Saki Technologies completed water treatment installation, photo 31' }, caption: 'Completed installation 31' },
  { image: { src: '/assets/activity/activity-32.webp', alt: 'Saki Technologies completed water treatment installation, photo 32' }, caption: 'Completed installation 32' },
];

export interface GalleryVideo {
  src: string;
  title: string;
  /** Length shown on the player, m:ss. */
  duration: string;
}

export const GALLERY_VIDEOS: GalleryVideo[] = [
  { src: '/assets/videos/installation-01.mp4', title: 'Installation video 1', duration: '0:51' },
  { src: '/assets/videos/installation-02.mp4', title: 'Installation video 2', duration: '2:08' },
  { src: '/assets/videos/installation-03.mp4', title: 'Installation video 3', duration: '2:18' },
  { src: '/assets/videos/installation-04.mp4', title: 'Installation video 4', duration: '0:36' },
  { src: '/assets/videos/installation-05.mp4', title: 'Installation video 5', duration: '0:49' },
  { src: '/assets/videos/installation-06.mp4', title: 'Installation video 6', duration: '0:34' },
  { src: '/assets/videos/installation-07.mp4', title: 'Installation video 7', duration: '1:24' },
  { src: '/assets/videos/installation-08.mp4', title: 'Installation video 8', duration: '2:15' },
  { src: '/assets/videos/installation-09.mp4', title: 'Installation video 9', duration: '0:03' },
  { src: '/assets/videos/installation-10.mp4', title: 'Installation video 10', duration: '0:08' },
];

/** Featured YouTube video (YouTube video ID). */
export const GALLERY_YOUTUBE = { id: 'aqz-KE-bpKQ', title: 'Saki Technologies water solutions' };
