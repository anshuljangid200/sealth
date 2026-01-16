
import React from 'react';

export const LOGO_URL = "https://lh3.googleusercontent.com/aida-public/AB6AXuALyAHEYoU6B7EYd34eNGhY3hJnOTyFnJIDEfUKtppJ5g0uiMfBIUTgCGv9dJM7kIrCHsi69RNVCrV2T0YYaDH8uUeKuqfWWsGkA5Ir4XCkmjBM7OaikwR8SnNdCsdtSha1wX2nn77zkL1bEfOGRGWDW2hJKXV9-eD-xZ8DRV8rm6i9ffe7Oo4wblxfkOfQ22shsdtfY5qWTMNY7iV34Fd-cTQ3UVgaxYCP5jom0tXl3mr-fE43P7iKo0t0NbXMviaE5Cf1agYMGhIl";

export const MEAL_PLANS = [
  {
    id: 'weekly',
    name: 'Weekly Plan',
    price: 700,
    duration: 'week' as const,
    features: [
      '6 Days of Organic Meals',
      'Daily Calorie Tracking',
      'Basic Nutritional Analysis',
      'Flexible pausing'
    ],
    isPremium: false,
    tag: 'SHORT TERM'
  },
  {
    id: 'monthly',
    name: 'Monthly Plan',
    price: 3000,
    duration: 'month' as const,
    features: [
      '26 Days of Premium Tiffins',
      'Nutritionist-Approved Menus',
      '1x Monthly Expert Consultation',
      'Smart Dashboard Access',
      'Priority Morning Delivery'
    ],
    isPremium: true,
    tag: 'MOST POPULAR'
  }
];

export const MOCK_ORDERS = [
  { id: 'ORD-9021', customerName: 'Sarah Jenkins', meal: 'Mediterranean Quinoa Bowl', status: 'NEW' as const, time: '4m ago', tag: 'No Gluten' },
  { id: 'ORD-9024', customerName: 'Michael Chen', meal: 'Grilled Seabass + Extra Greens', status: 'NEW' as const, time: '12m ago', tag: 'Low Carb' },
  { id: 'ORD-8998', customerName: 'Emily Watson', meal: 'Beef Tataki Soba Noodles', status: 'PREPARING' as const, time: '8m ago', tag: 'Shellfish Allergy' },
  { id: 'ORD-8942', customerName: 'David Miller', meal: '2x Keto Salmon Bowls', status: 'READY' as const, time: '20m ago', tag: 'Courier Assigned' },
];
