/**
 * Loading, Error, and Empty State Components
 * Reusable across all pages and dashboards
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Button, Card, Icon, cn } from './UI';
import { AlertCircle, RefreshCw, Package } from 'lucide-react';

// ============================================================================
// LOADING STATE
// ============================================================================
export const LoadingState: React.FC<{ 
  title?: string; 
  subtitle?: string; 
  fullPage?: boolean;
  variant?: 'default' | 'compact';
}> = ({ 
  title = 'Loading data',
  subtitle = 'Please wait while we fetch your information.',
  fullPage = false,
  variant = 'default'
}) => {
  if (variant === 'compact') {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="w-8 h-8 border-4 border-slate-200 dark:border-slate-700 border-t-primary rounded-full animate-spin" />
      </div>
    );
  }

  const content = (
    <div className="flex flex-col items-center justify-center text-center p-12">
      <div className="mb-8">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        >
          <div className="w-16 h-16 rounded-full border-4 border-slate-100 dark:border-slate-800 border-t-primary shadow-lg shadow-primary/10" />
        </motion.div>
      </div>
      <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2">{title}</h3>
      <p className="text-slate-500 max-w-sm font-medium">{subtitle}</p>
    </div>
  );

  if (fullPage) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950">
        {content}
      </div>
    );
  }

  return <Card className="p-12">{content}</Card>;
};

// ============================================================================
// ERROR STATE
// ============================================================================
export const ErrorState: React.FC<{
  title?: string;
  message?: string;
  action?: () => void;
  actionLabel?: string;
  fullPage?: boolean;
  variant?: 'default' | 'compact';
}> = ({
  title = 'Something went wrong',
  message = 'We encountered an error while loading your data. Please try again.',
  action,
  actionLabel = 'Try Again',
  fullPage = false,
  variant = 'default'
}) => {
  if (variant === 'compact') {
    return (
      <div className="flex items-center gap-3 p-4 bg-rose-50 dark:bg-rose-500/10 border border-rose-200 dark:border-rose-500/20 rounded-2xl">
        <AlertCircle className="w-5 h-5 text-rose-600 dark:text-rose-400 shrink-0" />
        <div className="text-sm font-medium text-rose-600 dark:text-rose-400">{title}</div>
      </div>
    );
  }

  const content = (
    <div className="flex flex-col items-center justify-center text-center p-12">
      <div className="w-20 h-20 bg-rose-50 dark:bg-rose-500/10 rounded-full flex items-center justify-center mb-6">
        <AlertCircle className="w-10 h-10 text-rose-500" />
      </div>
      <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2">{title}</h3>
      <p className="text-slate-500 max-w-sm font-medium mb-8">{message}</p>
      {action && (
        <Button onClick={action} className="gap-2">
          <RefreshCw className="w-4 h-4" />
          {actionLabel}
        </Button>
      )}
    </div>
  );

  if (fullPage) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950">
        {content}
      </div>
    );
  }

  return <Card className="p-12 border-rose-200/50 dark:border-rose-500/10 bg-rose-50/30 dark:bg-rose-500/5">{content}</Card>;
};

// ============================================================================
// EMPTY STATE
// ============================================================================
export const EmptyState: React.FC<{
  title?: string;
  message?: string;
  icon?: React.ReactNode;
  action?: () => void;
  actionLabel?: string;
  fullPage?: boolean;
  variant?: 'default' | 'compact';
}> = ({
  title = 'No data yet',
  message = 'When you have something to show, it will appear here.',
  icon = <Package className="w-10 h-10 text-slate-400" />,
  action,
  actionLabel = 'Get Started',
  fullPage = false,
  variant = 'default'
}) => {
  if (variant === 'compact') {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mb-4 text-slate-400">
          {icon}
        </div>
        <p className="text-sm font-medium text-slate-500">{title}</p>
      </div>
    );
  }

  const content = (
    <div className="flex flex-col items-center justify-center text-center p-12">
      <div className="w-24 h-24 bg-slate-50 dark:bg-slate-800 rounded-full flex items-center justify-center mb-6 text-slate-400">
        {icon}
      </div>
      <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2">{title}</h3>
      <p className="text-slate-500 max-w-sm font-medium mb-8">{message}</p>
      {action && (
        <Button onClick={action} variant="primary">
          {actionLabel}
        </Button>
      )}
    </div>
  );

  if (fullPage) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950">
        {content}
      </div>
    );
  }

  return <Card className="p-12 border-dashed border-slate-300 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-900/30">{content}</Card>;
};

// ============================================================================
// SUCCESS STATE
// ============================================================================
export const SuccessState: React.FC<{
  title?: string;
  message?: string;
  actionLabel?: string;
  onDismiss?: () => void;
}> = ({
  title = 'Success!',
  message = 'Your action has been completed successfully.',
  actionLabel = 'Got it',
  onDismiss
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.95 }}
    className="fixed bottom-6 right-6 max-w-md z-50"
  >
    <Card className="p-6 border-emerald-200/50 dark:border-emerald-500/10 bg-emerald-50 dark:bg-emerald-500/5">
      <div className="flex gap-4">
        <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
          <Icon name="check_circle" className="text-xl" />
        </div>
        <div className="flex-1">
          <h4 className="font-black text-emerald-900 dark:text-emerald-200 mb-1">{title}</h4>
          <p className="text-sm font-medium text-emerald-700 dark:text-emerald-300">{message}</p>
        </div>
        <button
          onClick={onDismiss}
          aria-label="Dismiss message"
          title="Dismiss message"
          className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors"
        >
          <Icon name="close" className="text-xl" />
        </button>
      </div>
    </Card>
  </motion.div>
);

// ============================================================================
// SKELETON LOADER (for list items)
// ============================================================================
export const SkeletonCard: React.FC<{ count?: number; className?: string }> = ({ 
  count = 3, 
  className = "gap-6" 
}) => (
  <div className={cn("grid gap-6", className)}>
    {Array.from({ length: count }).map((_, i) => (
      <Card key={i} className="p-8 space-y-4">
        <div className="h-6 w-1/3 bg-slate-200 dark:bg-slate-800 rounded-lg animate-pulse" />
        <div className="h-4 w-full bg-slate-200 dark:bg-slate-800 rounded-lg animate-pulse" />
        <div className="h-4 w-5/6 bg-slate-200 dark:bg-slate-800 rounded-lg animate-pulse" />
      </Card>
    ))}
  </div>
);
