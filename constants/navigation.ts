/**
 * SEALTH Navigation Architecture
 * Centralized routing and navigation configuration for all roles
 */

import { UserRole } from '../types';

export type NavItem = {
  label: string;
  icon: string;
  path: string;
  badge?: string; // Optional badge counter
};

export type RoleNavigation = {
  [key in UserRole]: NavItem[];
};

/**
 * Dashboard navigation items per role
 * Every role has its own navigation structure
 */
export const DASHBOARD_NAV: RoleNavigation = {
  [UserRole.CUSTOMER]: [
    { label: 'Overview', icon: 'dashboard', path: '/dashboard' },
    { label: 'Nutrition', icon: 'restaurant', path: '/dashboard/nutrition' },
    { label: 'Fitness', icon: 'fitness_center', path: '/dashboard/fitness' },
    { label: 'Expert Care', icon: 'medical_services', path: '/dashboard/consults' },
  ],
  
  [UserRole.DOCTOR]: [
    { label: 'Overview', icon: 'dashboard', path: '/dashboard' },
    { label: 'Patients', icon: 'people', path: '/dashboard/patients' },
    { label: 'Schedule', icon: 'calendar_today', path: '/dashboard/schedule' },
    { label: 'Health Records', icon: 'history_edu', path: '/dashboard/records' },
  ],
  
  [UserRole.COACH]: [
    { label: 'Clients', icon: 'groups', path: '/dashboard' },
    { label: 'Workouts', icon: 'fitness_center', path: '/dashboard/workouts' },
    { label: 'Progress', icon: 'trending_up', path: '/dashboard/tracking' },
  ],
  
  [UserRole.KITCHEN]: [
    { label: 'Orders', icon: 'dashboard', path: '/dashboard' },
    { label: 'Inventory', icon: 'inventory_2', path: '/dashboard/stock' },
    { label: 'Quality', icon: 'fact_check', path: '/dashboard/qc' },
  ],
  
  [UserRole.DELIVERY]: [
    { label: 'Tasks', icon: 'local_shipping', path: '/dashboard' },
    { label: 'History', icon: 'route', path: '/dashboard/history' },
    { label: 'Wallet', icon: 'account_balance_wallet', path: '/dashboard/wallet' },
  ],
  
  [UserRole.ADMIN]: [
    { label: 'Stats', icon: 'analytics', path: '/dashboard' },
    { label: 'Users', icon: 'group', path: '/dashboard/users' },
    { label: 'Content', icon: 'auto_awesome_motion', path: '/dashboard/content' },
    { label: 'Finance', icon: 'payments', path: '/dashboard/revenue' },
  ],
};

/**
 * Get navigation items for a specific role
 */
export const getNavItems = (role: UserRole): NavItem[] => {
  return DASHBOARD_NAV[role];
};

/**
 * Get the role display label
 */
export const getRoleLabel = (role: UserRole): string => {
  const labels: Record<UserRole, string> = {
    [UserRole.CUSTOMER]: 'Customer',
    [UserRole.DOCTOR]: 'Doctor',
    [UserRole.COACH]: 'Coach',
    [UserRole.KITCHEN]: 'Kitchen',
    [UserRole.DELIVERY]: 'Delivery',
    [UserRole.ADMIN]: 'Admin',
  };
  return labels[role];
};

/**
 * Role-specific dashboard titles
 */
export const ROLE_TITLES: Record<UserRole, { title: string; subtitle: string }> = {
  [UserRole.CUSTOMER]: {
    title: 'Your Health Dashboard',
    subtitle: 'Track nutrition, fitness, and connect with experts.',
  },
  [UserRole.DOCTOR]: {
    title: 'Patient Management',
    subtitle: 'Monitor patient health records and consultations.',
  },
  [UserRole.COACH]: {
    title: 'Client Coaching',
    subtitle: 'Manage workouts and track client progress.',
  },
  [UserRole.KITCHEN]: {
    title: 'Order Management',
    subtitle: 'Process tiffin orders and manage inventory.',
  },
  [UserRole.DELIVERY]: {
    title: 'Delivery Operations',
    subtitle: 'Track routes and manage deliveries.',
  },
  [UserRole.ADMIN]: {
    title: 'System Intelligence',
    subtitle: 'Pan-India ecosystem monitoring and analytics.',
  },
};
