
export enum UserRole {
  CUSTOMER = 'CUSTOMER',
  DOCTOR = 'DOCTOR',
  COACH = 'COACH',
  KITCHEN = 'KITCHEN',
  DELIVERY = 'DELIVERY',
  ADMIN = 'ADMIN'
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar: string;
}

export interface MealPlan {
  id: string;
  name: string;
  price: number;
  duration: 'week' | 'month';
  features: string[];
  isPremium: boolean;
}

export interface Order {
  id: string;
  customerName: string;
  meal: string;
  status: 'NEW' | 'PREPARING' | 'READY' | 'DELIVERED';
  time: string;
  tag?: string;
}

export interface HealthStat {
  label: string;
  value: string | number;
  change?: string;
  status?: 'stable' | 'elevated' | 'critical' | 'normal';
}
