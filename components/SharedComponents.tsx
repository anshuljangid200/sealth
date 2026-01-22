/**
 * Shared Reusable Components
 * Extracted from dashboard patterns for consistency across all roles
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Card, Button, Badge, Icon, cn } from './UI';
import { Star, MessageSquare, Phone, MapPin, IndianRupee, Clock, TrendingUp, ArrowRight } from 'lucide-react';

// ============================================================================
// STATS CARD
// ============================================================================
/**
 * Standard KPI card used across Admin, Doctor, Coach dashboards
 * Displays a metric with icon, trend, and value
 */
export const StatsCard: React.FC<{
  label: string;
  value: string | number;
  trend?: string;
  trendType?: 'positive' | 'negative' | 'neutral';
  icon?: React.ReactNode;
  iconBg?: string;
  iconColor?: string;
  onClick?: () => void;
}> = ({
  label,
  value,
  trend,
  trendType = 'neutral',
  icon,
  iconBg = 'bg-slate-50',
  iconColor = 'text-slate-400',
  onClick
}) => (
  <motion.div
    whileHover={{ y: -4 }}
    onClick={onClick}
    className={cn(onClick && "cursor-pointer")}
  >
    <Card className="p-8 group hover:-translate-y-1 transition-all duration-300">
      <div className="flex justify-between items-start mb-6">
        {icon && (
          <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm transition-transform group-hover:scale-110", iconBg, iconColor)}>
            {icon}
          </div>
        )}
        {trend && (
          <Badge
            variant={trendType === 'positive' ? 'success' : trendType === 'negative' ? 'error' : 'info'}
            className="font-black italic px-3 py-1 text-[9px]"
          >
            {trend}
          </Badge>
        )}
      </div>
      <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1 italic">{label}</p>
      <h4 className="text-3xl font-black text-slate-900 dark:text-white italic tracking-tighter tabular-nums">{value}</h4>
    </Card>
  </motion.div>
);

// ============================================================================
// DOCTOR CARD (Expert Discovery)
// ============================================================================
/**
 * Doctor card used in Expert Care / Consults discovery
 * Shows doctor info, rating, price, and consultation options
 */
export const DoctorCard: React.FC<{
  id: string | number;
  name: string;
  title: string;
  specialty: string;
  hospital: string;
  avatar: string;
  rating: number;
  reviews: number;
  price: number;
  status: 'Online' | 'In Session' | 'Offline';
  bio: string;
  onBook?: () => void;
  onMessage?: () => void;
  onCall?: () => void;
}> = ({
  id,
  name,
  title,
  specialty,
  hospital,
  avatar,
  rating,
  reviews,
  price,
  status,
  bio,
  onBook,
  onMessage,
  onCall
}) => {
  const statusColors = {
    'Online': 'bg-emerald-500',
    'In Session': 'bg-amber-500',
    'Offline': 'bg-slate-400'
  };

  return (
    <Card className="p-6 lg:p-8 overflow-hidden group hover:border-primary/50 transition-all duration-300 flex flex-col h-full">
      <div className="flex gap-4 mb-6">
        <div className="relative shrink-0">
          <img
            src={avatar}
            alt={name}
            className="w-16 h-16 lg:w-20 lg:h-20 rounded-2xl object-cover ring-4 ring-white dark:ring-slate-900"
          />
          <div className={cn("absolute bottom-0 right-0 w-4 h-4 rounded-full border-2 border-white dark:border-slate-900 ring-1 ring-slate-200 dark:ring-slate-800", statusColors[status])} />
        </div>
        <div className="flex-1">
          <h4 className="font-black text-lg text-slate-900 dark:text-white leading-tight">{name}</h4>
          <p className="text-xs font-bold text-primary uppercase tracking-widest mb-2">{specialty}</p>
          <p className="text-xs text-slate-500 font-medium">{title}</p>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex items-center gap-3 mb-2">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span className="text-sm font-black text-slate-900 dark:text-white">{rating}</span>
            <span className="text-xs text-slate-500 font-medium">({reviews})</span>
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
          <MapPin className="w-3 h-3" />
          {hospital}
        </div>
      </div>

      <p className="text-xs text-slate-600 dark:text-slate-400 font-medium leading-relaxed mb-6 flex-1">{bio}</p>

      <div className="border-t border-slate-200/50 dark:border-slate-800/50 pt-4 mb-4">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Consultation</span>
          <div className="flex items-baseline gap-1">
            <IndianRupee className="w-3 h-3 text-slate-400" />
            <span className="text-lg font-black text-slate-900 dark:text-white">{price}</span>
            <span className="text-xs text-slate-500">/30min</span>
          </div>
        </div>
      </div>

      <div className="flex gap-2">
        {onBook && (
          <Button
            onClick={onBook}
            variant="primary"
            className="flex-1 h-10 text-xs rounded-xl"
          >
            Book Now
          </Button>
        )}
        {onMessage && (
          <button
            onClick={onMessage}
            className="h-10 w-10 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
            title="Send message"
          >
            <MessageSquare className="w-4 h-4" />
          </button>
        )}
        {onCall && (
          <button
            onClick={onCall}
            className="h-10 w-10 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
            title="Start call"
          >
            <Phone className="w-4 h-4" />
          </button>
        )}
      </div>
    </Card>
  );
};

// ============================================================================
// HEALTH METRIC ROW (for Vitals, etc)
// ============================================================================
/**
 * Single metric row with progress bar
 * Used in Customer vitals, progress tracking
 */
export const HealthMetricRow: React.FC<{
  label: string;
  current: string | number;
  target: string | number;
  icon?: React.ReactNode;
  progress?: number;
  trend?: 'up' | 'down' | 'stable';
}> = ({
  label,
  current,
  target,
  icon,
  progress = 0,
  trend
}) => (
  <div className="space-y-3">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        {icon && (
          <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400">
            {icon}
          </div>
        )}
        <span className="text-sm font-bold text-slate-900 dark:text-white">{label}</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-xs font-black text-slate-900 dark:text-white">{current}</span>
        <span className="text-xs font-medium opacity-50 text-slate-500">/ {target}</span>
        {trend && (
          <TrendingUp className={cn("w-3 h-3", trend === 'up' ? 'text-emerald-500' : trend === 'down' ? 'text-rose-500' : 'text-slate-400')} />
        )}
      </div>
    </div>
    <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 1, delay: 0.5 }}
        className="h-full bg-gradient-to-r from-primary to-primary-light rounded-full"
      />
    </div>
  </div>
);

// ============================================================================
// ORDER CARD (Kitchen Dashboard)
// ============================================================================
/**
 * Kitchen order card showing meal, customer, status
 */
export const OrderCard: React.FC<{
  id: string;
  customerName: string;
  meal: string;
  status: 'NEW' | 'PREPARING' | 'READY' | 'DELIVERED';
  time: string;
  tag?: string;
  onUpdateStatus?: (status: string) => void;
}> = ({
  id,
  customerName,
  meal,
  status,
  time,
  tag,
  onUpdateStatus
}) => {
  const statusColors = {
    'NEW': 'bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-500/20',
    'PREPARING': 'bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-500/20',
    'READY': 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-500/20',
    'DELIVERED': 'bg-slate-50 dark:bg-slate-500/10 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-500/20',
  };

  const nextStatus = {
    'NEW': 'PREPARING',
    'PREPARING': 'READY',
    'READY': 'DELIVERED',
    'DELIVERED': 'DELIVERED'
  };

  return (
    <Card className="p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div className="flex-1">
        <div className="flex items-start justify-between mb-3 sm:mb-0">
          <div>
            <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">{id}</p>
            <h4 className="font-black text-slate-900 dark:text-white">{customerName}</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 font-medium mt-1">{meal}</p>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="text-right">
          <div className={cn("px-4 py-2 rounded-xl text-xs font-black border inline-block", statusColors[status])}>
            {status}
          </div>
          {tag && (
            <p className="text-xs text-slate-500 font-medium mt-2">{tag}</p>
          )}
        </div>
        <div className="text-right">
          <p className="text-xs text-slate-500 font-medium">{time}</p>
          {status !== 'DELIVERED' && onUpdateStatus && (
            <Button
              onClick={() => onUpdateStatus(nextStatus[status])}
              variant="outline"
              className="mt-2 h-8 px-3 text-xs text-center"
            >
              Next
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
};

// ============================================================================
// CONSULTATION REQUEST CARD
// ============================================================================
/**
 * Shows upcoming/pending consultation with doctor
 */
export const ConsultationCard: React.FC<{
  doctorName: string;
  doctorTitle: string;
  doctorAvatar: string;
  time: string;
  topic: string;
  onJoin?: () => void;
  onReschedule?: () => void;
}> = ({
  doctorName,
  doctorTitle,
  doctorAvatar,
  time,
  topic,
  onJoin,
  onReschedule
}) => (
  <Card className="p-8 bg-gradient-to-br from-slate-900 to-slate-800 dark:from-slate-950 dark:to-slate-900 text-white border-none relative overflow-hidden group">
    <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-primary/10 blur-3xl rounded-full group-hover:scale-125 transition-transform duration-700" />
    
    <div className="relative z-10">
      <div className="flex items-center gap-4 mb-6">
        <img
          src={doctorAvatar}
          alt={doctorName}
          className="w-16 h-16 rounded-2xl object-cover ring-4 ring-white/10"
        />
        <div>
          <h4 className="font-black text-lg">{doctorName}</h4>
          <p className="text-xs font-black text-primary uppercase tracking-widest">{doctorTitle}</p>
        </div>
      </div>

      <div className="bg-white/5 backdrop-blur-md rounded-2xl p-5 border border-white/10 space-y-4 mb-6">
        <div className="flex items-center gap-3">
          <Clock className="w-4 h-4 text-primary" />
          <span className="text-xs font-bold">{time}</span>
        </div>
        <p className="text-xs text-white/70 font-medium leading-relaxed">{topic}</p>
      </div>

      <div className="flex gap-3">
        {onJoin && (
          <Button
            onClick={onJoin}
            className="flex-1 py-3 bg-primary text-white font-black hover:bg-primary-dark"
          >
            Join Now
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        )}
        {onReschedule && (
          <Button
            onClick={onReschedule}
            variant="ghost"
            className="px-6 py-3 text-white hover:bg-white/10"
          >
            Reschedule
          </Button>
        )}
      </div>
    </div>
  </Card>
);
