
import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

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
      "bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200/50 dark:border-slate-800/50 rounded-3xl shadow-xl shadow-slate-200/20 dark:shadow-none",
      className
    )}
    {...props}
  >
    {children}
  </motion.div>
);

export const Button: React.FC<{
  children: React.ReactNode,
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost',
  className?: string,
  onClick?: () => void,
  type?: 'button' | 'submit'
} & HTMLMotionProps<"button">> = ({ children, variant = 'primary', className = "", onClick, type = 'button', ...props }) => {
  const variants = {
    primary: "bg-primary text-white hover:bg-primary-dark shadow-lg shadow-primary/20",
    secondary: "bg-secondary text-white hover:bg-secondary-dark shadow-lg shadow-secondary/20",
    outline: "border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-900 dark:text-white",
    ghost: "hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      type={type}
      onClick={onClick}
      className={cn(
        "px-8 py-3 rounded-2xl font-bold transition-all flex items-center justify-center gap-2",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export const Badge: React.FC<{ children: React.ReactNode, variant?: 'success' | 'warning' | 'error' | 'info', className?: string }> = ({ children, variant = 'info', className = "" }) => {
  const variants = {
    success: "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400",
    warning: "bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400",
    error: "bg-rose-100 text-rose-700 dark:bg-rose-500/10 dark:text-rose-400",
    info: "bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400"
  };

  return (
    <span className={cn(
      "px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest",
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
