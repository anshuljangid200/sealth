
import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { COMPONENT_PRESETS, BORDERS, SHADOWS } from '../constants/theme';

/**
 * Utility for merging tailwind classes safely
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const Card: React.FC<{ children: React.ReactNode, className?: string } & HTMLMotionProps<"div">> = ({ children, className = "", ...props }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={cn(
      COMPONENT_PRESETS.card.base,
      COMPONENT_PRESETS.card.padding,
      COMPONENT_PRESETS.card.shadow,
      className
    )}
    {...props}
  >
    {children}
  </motion.div>
);

export const Button: React.FC<{
  children: React.ReactNode,
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'glass',
  className?: string,
  onClick?: () => void,
  type?: 'button' | 'submit'
} & HTMLMotionProps<"button">> = ({ children, variant = 'primary', className = "", onClick, type = 'button', ...props }) => {
  const variants = {
    primary: "bg-primary text-white hover:bg-primary-dark shadow-md shadow-primary/10",
    secondary: "bg-secondary text-white hover:bg-secondary-dark shadow-md shadow-secondary/10",
    outline: "border-2 border-slate-200 dark:border-slate-800 hover:border-primary/50 text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800/50",
    ghost: "hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300",
    glass: "bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      type={type}
      onClick={onClick}
      className={cn(
        "px-6 py-2.5 rounded-2xl font-bold transition-all flex items-center justify-center gap-2 text-sm",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export const Badge: React.FC<{ children: React.ReactNode, variant?: 'success' | 'warning' | 'error' | 'info' | 'outline', className?: string }> = ({ children, variant = 'info', className = "" }) => {
  const variants = {
    success: "bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400",
    warning: "bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400",
    error: "bg-rose-50 text-rose-600 dark:bg-rose-500/10 dark:text-rose-400",
    info: "bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400",
    outline: "bg-transparent text-slate-500 border-slate-200 dark:border-slate-800"
  };

  return (
    <span className={cn(
      "px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-current opacity-90",
      variants[variant],
      className
    )}>
      {children}
    </span>
  );
};

export const Icon: React.FC<{ name: string, className?: string }> = ({ name, className = "" }) => (
  <span className={cn("material-icons-round", className)}>{name}</span>
);

export const Container: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className = "" }) => (
  <div className={cn("max-w-7xl mx-auto px-6 lg:px-8 w-full", className)}>
    {children}
  </div>
);

export const Section: React.FC<{ children: React.ReactNode, className?: string, id?: string }> = ({ children, className = "", id }) => (
  <section id={id} className={cn("py-12 lg:py-20", className)}>
    {children}
  </section>
);

export const Grid: React.FC<{ children: React.ReactNode, cols?: number, className?: string }> = ({ children, cols = 3, className = "" }) => {
  const colClasses = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  };
  return (
    <div className={cn("grid gap-6 lg:gap-8", colClasses[cols as keyof typeof colClasses], className)}>
      {children}
    </div>
  );
};

export const Stack: React.FC<{ children: React.ReactNode, direction?: 'row' | 'col', className?: string }> = ({ children, direction = 'col', className = "" }) => (
  <div className={cn("flex gap-4", direction === 'row' ? "flex-row items-center" : "flex-col", className)}>
    {children}
  </div>
);

export const Skeleton: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div className={cn("animate-pulse bg-slate-200 dark:bg-slate-800 rounded-xl", className)} />
);
