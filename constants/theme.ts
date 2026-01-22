/**
 * SEALTH Unified Design System v1.0
 * "Smart Living. Simple Health."
 * 
 * This is the single source of truth for all visual design decisions
 * All dashboards, pages, and components must reference this system
 */

// ============================================================================
// TYPOGRAPHY SCALE
// ============================================================================
// Inspired by: 3:4 (perfect fourth) ratio for organic scaling
// Base: 16px (1rem)

export const TYPOGRAPHY = {
  // Display sizes (marketing, hero sections)
  display: {
    xl: 'text-8xl', // 128px
    lg: 'text-7xl', // 112px
    md: 'text-6xl', // 96px
    sm: 'text-5xl', // 80px
  },
  // Heading sizes (page titles, section headers)
  heading: {
    h1: 'text-4xl', // 48px
    h2: 'text-3xl', // 36px
    h3: 'text-2xl', // 32px
    h4: 'text-xl',  // 20px
    h5: 'text-lg',  // 18px
  },
  // Body text sizes
  body: {
    lg: 'text-lg',  // 18px
    md: 'text-base', // 16px
    sm: 'text-sm',  // 14px
    xs: 'text-xs',  // 12px
  },
  // Label/caption sizes
  label: {
    lg: 'text-sm',  // 14px
    md: 'text-xs',  // 12px
    sm: 'text-[10px]', // 10px
  },
};

// ============================================================================
// FONT WEIGHTS & STYLES (Plus Jakarta Sans primary)
// ============================================================================
export const FONTS = {
  weight: {
    regular: 'font-normal',      // 400
    semibold: 'font-semibold',   // 600
    bold: 'font-bold',           // 700
    black: 'font-black',         // 900
  },
  style: {
    // Use italics ONLY for semantic emphasis (brand names, special terms)
    emphasis: 'italic',
    // Use serif (Instrument Serif) ONLY for premium callouts
    serif: 'font-serif italic',
  },
  // Full combinations (use these, not ad-hoc mixtures)
  preset: {
    // Hero / Display text
    heroHeading: 'font-black tracking-tighter leading-[0.85]', // "Wellness that works"
    heroSubheading: 'font-bold tracking-tight leading-relaxed',
    
    // Section headers
    sectionTitle: 'font-black tracking-tight',
    sectionSubtitle: 'font-medium text-slate-500',
    
    // Card titles
    cardTitle: 'font-black tracking-tight',
    cardSubtitle: 'font-medium text-slate-600 dark:text-slate-400',
    
    // Button text
    buttonText: 'font-black text-sm uppercase tracking-widest',
    
    // Label / metadata
    label: 'font-black uppercase tracking-[0.2em] text-slate-400',
    
    // Body copy
    body: 'font-medium leading-relaxed',
  },
};

// ============================================================================
// COLOR SYSTEM
// ============================================================================
// Primary: Teal (calm, health-associated, premium)
// Secondary: Amber (energy, warmth, food/nutrition)
// Semantic: Emerald (success), Rose (alert), Blue (info), Amber (warning)

export const COLORS = {
  // Brand colors
  primary: {
    DEFAULT: '#14B8A6', // Main teal
    light: '#2DD4BF',   // Lighter teal (hover states, accents)
    dark: '#0D9488',    // Darker teal (active, disabled)
  },
  secondary: {
    DEFAULT: '#F59E0B', // Main amber
    light: '#FBBF24',   // Lighter amber
    dark: '#D97706',    // Darker amber
  },
  
  // Semantic colors
  semantic: {
    success: { bg: 'bg-emerald-50', text: 'text-emerald-600', dark: { bg: 'dark:bg-emerald-500/10', text: 'dark:text-emerald-400' } },
    warning: { bg: 'bg-amber-50', text: 'text-amber-600', dark: { bg: 'dark:bg-amber-500/10', text: 'dark:text-amber-400' } },
    error: { bg: 'bg-rose-50', text: 'text-rose-600', dark: { bg: 'dark:bg-rose-500/10', text: 'dark:text-rose-400' } },
    info: { bg: 'bg-blue-50', text: 'text-blue-600', dark: { bg: 'dark:bg-blue-500/10', text: 'dark:text-blue-400' } },
  },
  
  // Neutral palette (Slate)
  neutral: {
    50: '#F8FAFC',   // Very light (backgrounds)
    100: '#F1F5F9',
    200: '#E2E8F0',
    300: '#CBD5E1',
    400: '#94A3B8',
    500: '#64748B',
    600: '#475569',
    700: '#334155',
    800: '#1E293B',
    900: '#0F172A',
    950: '#020617', // Almost black
  },
};

// ============================================================================
// SPACING SYSTEM
// ============================================================================
// Based on 4px unit (Tailwind default)
// Use consistent increments: 2, 4, 6, 8, 12, 16, 20, 24, 32, 40, 48, 64

export const SPACING = {
  // Use for padding/margin in components
  xs: '0.5rem',    // 8px
  sm: '1rem',      // 16px
  md: '1.5rem',    // 24px
  lg: '2rem',      // 32px
  xl: '2.5rem',    // 40px
  '2xl': '3rem',   // 48px
  '3xl': '4rem',   // 64px
  
  // Preset gap/gap patterns
  section: {
    padding: 'px-6 lg:px-8', // Horizontal padding for sections
    gap: 'gap-8 lg:gap-12',  // Gap between sections
    py: 'py-12 lg:py-20',    // Vertical padding for sections
  },
  
  container: {
    max: 'max-w-7xl',
    padding: 'px-6 lg:px-8',
    horizontal: 'mx-auto',
    full: 'max-w-7xl mx-auto px-6 lg:px-8',
  },
};

// ============================================================================
// BORDER & RADIUS SYSTEM
// ============================================================================
export const BORDERS = {
  radius: {
    // sm: for small UI elements
    sm: 'rounded-lg',     // 8px
    md: 'rounded-xl',     // 12px
    lg: 'rounded-2xl',    // 16px
    xl: 'rounded-3xl',    // 24px
    full: 'rounded-[2rem]', // 32px (premium cards)
    circle: 'rounded-full',
  },
  
  width: {
    thin: 'border-[0.5px]',
    DEFAULT: 'border',
    thick: 'border-2',
  },
  
  color: {
    light: 'border-slate-200/60',
    lightDark: 'dark:border-slate-800/60',
    focus: 'border-primary',
  },
};

// ============================================================================
// SHADOW SYSTEM
// ============================================================================
// Used for elevation and depth
export const SHADOWS = {
  none: 'shadow-none',
  xs: 'shadow-sm',
  sm: 'shadow-md shadow-slate-200/20 dark:shadow-none',
  md: 'shadow-lg shadow-slate-200/30 dark:shadow-none',
  lg: 'shadow-xl shadow-slate-200/40 dark:shadow-none',
  xl: 'shadow-2xl shadow-slate-200/50 dark:shadow-none',
  primary: 'shadow-xl shadow-primary/20',
  secondary: 'shadow-xl shadow-secondary/20',
};

// ============================================================================
// LAYOUT GRID SYSTEM
// ============================================================================
// Responsive grid configurations for different dashboard components
export const GRIDS = {
  // Responsive grid patterns
  responsive: {
    cols1: 'grid-cols-1',
    cols2: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-2',
    cols3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    cols4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
    cols6: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-6',
  },
  gap: {
    sm: 'gap-4',
    md: 'gap-6',
    lg: 'gap-8 lg:gap-12',
  },
};

// ============================================================================
// COMPONENT PRESETS
// ============================================================================
// Complete styles for common patterns

export const COMPONENT_PRESETS = {
  // Card base style (used everywhere)
  card: {
    base: 'bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 rounded-[2rem] overflow-hidden',
    padding: 'p-8 lg:p-10',
    shadow: 'shadow-sm',
    hover: 'hover:border-primary/50 transition-all',
  },
  
  // Button base style
  button: {
    base: 'rounded-2xl font-black transition-all flex items-center justify-center gap-2',
    sizes: {
      sm: 'px-4 py-2 text-xs',
      md: 'px-6 py-2.5 text-sm',
      lg: 'px-8 py-4 h-12 text-base',
      xl: 'px-10 py-5 h-16 text-lg',
    },
  },
  
  // Badge base style
  badge: {
    base: 'px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border',
  },
  
  // Input base style
  input: {
    base: 'w-full px-4 py-4 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl outline-none transition-all',
    focus: 'focus:ring-4 focus:ring-primary/10 focus:border-primary focus:bg-white dark:focus:bg-slate-800',
  },
};

// ============================================================================
// ROLE-BASED COLOR THEMING (Dashboard role identifiers)
// ============================================================================
// Each role gets subtle visual branding

export const ROLE_THEMES = {
  CUSTOMER: { 
    accent: '#14B8A6', // Primary teal
    bg: 'bg-primary/5',
    icon: 'text-primary',
    label: 'Patient' 
  },
  DOCTOR: { 
    accent: '#8B5CF6', // Purple
    bg: 'bg-purple-50 dark:bg-purple-500/10',
    icon: 'text-purple-600 dark:text-purple-400',
    label: 'Clinician' 
  },
  COACH: { 
    accent: '#F59E0B', // Amber
    bg: 'bg-amber-50 dark:bg-amber-500/10',
    icon: 'text-amber-600 dark:text-amber-400',
    label: 'Coach' 
  },
  KITCHEN: { 
    accent: '#EC4899', // Pink
    bg: 'bg-pink-50 dark:bg-pink-500/10',
    icon: 'text-pink-600 dark:text-pink-400',
    label: 'Kitchen' 
  },
  DELIVERY: { 
    accent: '#06B6D4', // Cyan
    bg: 'bg-cyan-50 dark:bg-cyan-500/10',
    icon: 'text-cyan-600 dark:text-cyan-400',
    label: 'Logistics' 
  },
  ADMIN: { 
    accent: '#6366F1', // Indigo
    bg: 'bg-indigo-50 dark:bg-indigo-500/10',
    icon: 'text-indigo-600 dark:text-indigo-400',
    label: 'Admin' 
  },
};

// ============================================================================
// ANIMATION PRESETS
// ============================================================================
export const ANIMATIONS = {
  entrance: {
    fadeIn: 'animate-fade-in',
    slideUp: 'animate-slide-up',
    slideDown: 'animate-slide-down',
  },
  interaction: {
    scale: 'scale-100 hover:scale-105 transition-transform',
    lift: '-translate-y-1 hover:translate-y-0 transition-transform',
    shimmer: 'animate-pulse',
  },
};

// ============================================================================
// BREAKPOINTS
// ============================================================================
export const BREAKPOINTS = {
  xs: '320px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};
