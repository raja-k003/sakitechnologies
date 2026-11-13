export interface ThemeTokens {
  primary: string;
  primaryHover: string;
  onPrimary: string;
  primarySoft: string;
  accent: string;
  bg: string;
  surface: string;
  surfaceAlt: string;
  text: string;
  textMuted: string;
  border: string;
  success: string;
  danger: string;
  warning?: string;
  info?: string;
}

export interface ThemePreset {
  id: string;
  label: string;
  description: string;
  scheme: 'light' | 'dark';
  tokens: ThemeTokens;
}

/**
 * The built-in presets (BigBite, Violet, Rose, Amber, Slate, Cyber, Saki). Every text/background pair here is checked for
 * WCAG AA contrast (4.5:1) by theme.spec.ts.
 */
// export const THEME_PRESETS: ThemePreset[] = [
//   {
//     id: 'aqua',
//     label: 'Aqua',
//     description: 'Saki Technologies brand blue',
//     scheme: 'light',
//     tokens: {
//       primary: '#3857f1', primaryHover: '#2440d4', onPrimary: '#ffffff', primarySoft: '#e9eeff', accent: '#0ea5e9',
//       bg: '#f6f8fe', surface: '#ffffff', surfaceAlt: '#eef2fc', text: '#0f172a', textMuted: '#475569', border: '#d9e0f0', ...status,
//     },
//   },
//   {
//     id: 'ocean',
//     label: 'Ocean',
//     description: 'Calm teal',
//     scheme: 'light',
//     tokens: {
//       primary: '#0f766e', primaryHover: '#0b5c56', onPrimary: '#ffffff', primarySoft: '#e3f4f1', accent: '#14b8a6',
//       bg: '#f4faf9', surface: '#ffffff', surfaceAlt: '#e9f4f2', text: '#0f1f1d', textMuted: '#45605c', border: '#d3e5e2', ...status,
//     },
//   },
//   {
//     id: 'forest',
//     label: 'Forest',
//     description: 'Fresh green',
//     scheme: 'light',
//     tokens: {
//       primary: '#166534', primaryHover: '#114d28', onPrimary: '#ffffff', primarySoft: '#e6f4ea', accent: '#22c55e',
//       bg: '#f6faf6', surface: '#ffffff', surfaceAlt: '#ecf5ee', text: '#122016', textMuted: '#4a5f50', border: '#d6e6d9', success: '#166534', danger: '#b91c1c',
//     },
//   },
//   {
//     id: 'sunset',
//     label: 'Sunset',
//     description: 'Warm terracotta',
//     scheme: 'light',
//     tokens: {
//       primary: '#c2410c', primaryHover: '#9a330a', onPrimary: '#ffffff', primarySoft: '#fdeee4', accent: '#f59e0b',
//       bg: '#fffaf6', surface: '#ffffff', surfaceAlt: '#fbf0e8', text: '#24150d', textMuted: '#6b5446', border: '#efdccf', ...status,
//     },
//   },
//   {
//     id: 'midnight',
//     label: 'Midnight',
//     description: 'Dark mode',
//     scheme: 'dark',
//     tokens: {
//       primary: '#8ea6ff', primaryHover: '#b0c1ff', onPrimary: '#0b1120', primarySoft: '#1d2948', accent: '#38bdf8',
//       bg: '#0b1120', surface: '#121a2f', surfaceAlt: '#18223b', text: '#e6ebf5', textMuted: '#a3afc4', border: '#26324f', success: '#4ade80', danger: '#f87171',
//     },
//   },
// ];

export const THEME_PRESETS: ThemePreset[] = [
  // 0. BigBite – warm cream, maroon, red and mustard (from the BigBite CodePen theme)
  {
    id: 'bigbite',
    label: 'BigBite',
    description: 'Warm cream, maroon & red',
    scheme: 'light',
    tokens: {
      primary: '#8A1C14',
      primaryHover: '#5E100B',
      onPrimary: '#FFFFFF',
      primarySoft: '#FFE9D2',
      accent: '#E2331F',

      bg: '#FFF7EC',
      surface: '#FFFFFF',
      surfaceAlt: '#FFEFD9',

      text: '#3A0D0A',
      textMuted: '#6B4A3A',
      border: '#E6C9B0',

      success: '#15803D',
      warning: '#B45309',
      danger: '#B91C1C',
      info: '#2563EB',
    },
  },

  // 1. Violet – Premium Purple
  {
    id: 'violet',
    label: 'Violet',
    description: 'Premium purple',
    scheme: 'light',
    tokens: {
      primary: '#7C3AED',
      primaryHover: '#6D28D9',
      onPrimary: '#FFFFFF',
      primarySoft: '#F0EAFE',
      accent: '#C026D3',

      bg: '#FAF8FF',
      surface: '#FFFFFF',
      surfaceAlt: '#F1EDFA',

      text: '#241638',
      textMuted: '#6B5B80',
      border: '#E5DDF0',

      success: '#15803D',
      warning: '#B45309',
      danger: '#DC2626',
      info: '#2563EB',
    },
  },

  // 2. Rose – Elegant Pink
  {
    id: 'rose',
    label: 'Rose',
    description: 'Elegant rose',
    scheme: 'light',
    tokens: {
      primary: '#BE185D',
      primaryHover: '#9D174D',
      onPrimary: '#FFFFFF',
      primarySoft: '#FCE7F3',
      accent: '#E11D48',

      bg: '#FFF8FA',
      surface: '#FFFFFF',
      surfaceAlt: '#FCEFF4',

      text: '#301523',
      textMuted: '#795567',
      border: '#F0DCE5',

      success: '#15803D',
      warning: '#B45309',
      danger: '#DC2626',
      info: '#2563EB',
    },
  },

  // 3. Amber – Luxury Gold
  {
    id: 'amber',
    label: 'Amber',
    description: 'Luxury golden',
    scheme: 'light',
    tokens: {
      primary: '#92400E',
      primaryHover: '#78350F',
      onPrimary: '#FFFFFF',
      primarySoft: '#FEF3C7',
      accent: '#D97706',

      bg: '#FFFCF5',
      surface: '#FFFFFF',
      surfaceAlt: '#F9F2E3',

      text: '#29200F',
      textMuted: '#756448',
      border: '#E9DFC9',

      success: '#15803D',
      warning: '#B45309',
      danger: '#DC2626',
      info: '#2563EB',
    },
  },

  // 4. Slate – Minimal Professional
  {
    id: 'slate',
    label: 'Slate',
    description: 'Minimal neutral',
    scheme: 'light',
    tokens: {
      primary: '#334155',
      primaryHover: '#1E293B',
      onPrimary: '#FFFFFF',
      primarySoft: '#E2E8F0',
      accent: '#6366F1',

      bg: '#F8FAFC',
      surface: '#FFFFFF',
      surfaceAlt: '#F1F5F9',

      text: '#0F172A',
      textMuted: '#5F6F85', // was #64748B (4.34:1 on surfaceAlt, below the 4.5:1 AA minimum)
      border: '#CBD5E1',

      success: '#15803D',
      warning: '#B45309',
      danger: '#DC2626',
      info: '#2563EB',
    },
  },

  // 5. Cyber – Modern Dark
  {
    id: 'cyber',
    label: 'Cyber',
    description: 'Modern dark neon',
    scheme: 'dark',
    tokens: {
      primary: '#A78BFA',
      primaryHover: '#C4B5FD',
      onPrimary: '#1E1B4B',
      primarySoft: '#312E55',
      accent: '#2DD4BF',

      bg: '#11111B',
      surface: '#1C1C2B',
      surfaceAlt: '#27273A',

      text: '#F5F3FF',
      textMuted: '#B6B2CC',
      border: '#3B3A50',

      success: '#4ADE80',
      warning: '#FBBF24',
      danger: '#FB7185',
      info: '#38BDF8',
    },
  },
  // 6. Saki – logo blue, cyan and lime
  {
    id: 'saki',
    label: 'Saki',
    description: 'Logo blue, cyan & lime',
    scheme: 'light',
    tokens: {
      primary: '#16609F',
      primaryHover: '#0F4A7C',
      onPrimary: '#FFFFFF',
      primarySoft: '#E1F1F8',
      accent: '#8DB62A',

      bg: '#F4FAFC',
      surface: '#FFFFFF',
      surfaceAlt: '#E8F3F8',

      text: '#0B2538',
      textMuted: '#42617A',
      border: '#CCE1EC',

      success: '#15803D',
      warning: '#B45309',
      danger: '#B91C1C',
      info: '#0078C0',
    },
  },
];

export const DEFAULT_THEME_ID = 'saki';
export const THEME_STORAGE_KEY = 'smp-theme';
export const THEME_VARS_STORAGE_KEY = 'smp-theme-vars';
export const THEME_CUSTOM_STORAGE_KEY = 'smp-theme-custom';

export const findPreset = (id: string | null | undefined): ThemePreset | undefined =>
  THEME_PRESETS.find((t) => t.id === id);

const kebab = (s: string) => s.replace(/[A-Z]/g, (m) => '-' + m.toLowerCase());

export function tokensToCssVars(tokens: Partial<ThemeTokens>): Record<string, string> {
  return Object.fromEntries(Object.entries(tokens).map(([k, v]) => [`--color-${kebab(k)}`, v as string]));
}

/** CSS for all presets. Rendered once into <head> during SSR. */
export function buildThemeCss(presets: ThemePreset[] = THEME_PRESETS, defaultId = DEFAULT_THEME_ID): string {
  const block = (t: ThemePreset) => {
    const vars = Object.entries(tokensToCssVars(t.tokens))
      .map(([k, v]) => `${k}:${v}`)
      .join(';');
    return `${vars};color-scheme:${t.scheme}`;
  };
  const def = findPreset(defaultId) ?? presets[0];
  return [`:root{${block(def)}}`, ...presets.map((t) => `:root[data-theme="${t.id}"]{${block(t)}}`)].join('\n');
}
