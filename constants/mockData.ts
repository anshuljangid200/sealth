/**
 * SEALTH Centralized Mock Data
 * Single source of truth for all sample data used across the platform
 */

// ============================================================================
// DOCTOR / EXPERT DATA
// ============================================================================
export const MOCK_DOCTORS = [
  {
    id: 1,
    name: 'Dr. Ananya Sharma',
    title: 'Chief Nutritionist',
    specialty: 'Nutritionist',
    hospital: 'Max Health, Delhi',
    rating: 4.9,
    reviews: 128,
    price: 1200,
    status: 'Online' as const,
    avatar: 'https://i.pravatar.cc/150?u=ananya',
    bio: 'Expert in personalized Indian meal planning and metabolic health.',
    experience: '12+ years',
    languages: ['Hindi', 'English'],
  },
  {
    id: 2,
    name: 'Dr. Vikram Malhotra',
    title: 'Senior Cardiologist',
    specialty: 'Cardiologist',
    hospital: 'Apollo Life, Mumbai',
    rating: 4.8,
    reviews: 256,
    price: 1800,
    status: 'In Session' as const,
    avatar: 'https://i.pravatar.cc/150?u=vikram',
    bio: 'Specializing in preventive cardiology and heart-healthy lifestyle changes.',
    experience: '18+ years',
    languages: ['Hindi', 'English', 'Marathi'],
  },
  {
    id: 3,
    name: 'Coach Rohan Verma',
    title: 'Lead Fitness Specialist',
    specialty: 'Fitness coach',
    hospital: 'Cult Fit, Bengaluru',
    rating: 5.0,
    reviews: 512,
    price: 800,
    status: 'Online' as const,
    avatar: 'https://i.pravatar.cc/150?u=rohan',
    bio: 'Elite coach focusing on transformation and recovery for high-performers.',
    experience: '10+ years',
    languages: ['English', 'Kannada'],
  },
  {
    id: 4,
    name: 'Dr. Priya Iyer',
    title: 'Circadian Scientist',
    specialty: 'Sleep Coach',
    hospital: 'Fortis, Chennai',
    rating: 4.7,
    reviews: 89,
    price: 1500,
    status: 'Offline' as const,
    avatar: 'https://i.pravatar.cc/150?u=priya',
    bio: 'Redefining sleep hygiene through circadian rhythm alignment.',
    experience: '8+ years',
    languages: ['Tamil', 'English'],
  },
  {
    id: 5,
    name: 'Dr. Ravi Kumar',
    title: 'Metabolic Health Specialist',
    specialty: 'Nutritionist',
    hospital: 'Apolto Clinic, Hyderabad',
    rating: 4.8,
    reviews: 203,
    price: 1400,
    status: 'Online' as const,
    avatar: 'https://i.pravatar.cc/150?u=ravi',
    bio: 'Focus on diabetes management and lifestyle optimization through nutrition.',
    experience: '15+ years',
    languages: ['Telugu', 'Hindi', 'English'],
  },
];

export const DOCTOR_SPECIALTIES = [
  'All',
  'Nutritionist',
  'Cardiologist',
  'Fitness coach',
  'Sleep Coach',
  'Pediatrician',
];

// ============================================================================
// CONSULTATION / CHAT DATA
// ============================================================================
export const MOCK_CONSULTATION_MESSAGES = [
  {
    sender: 'Dr. Ananya Sharma',
    text: 'Namaste! I reviewed your meal logs for the past week.',
    time: '10:30 AM',
    isMe: false,
  },
  {
    sender: 'Me',
    text: "Hello Dr. Ananya. How does my Dal Tadka and Brown Rice combo look?",
    time: '10:32 AM',
    isMe: true,
  },
  {
    sender: 'Dr. Ananya Sharma',
    text: "It looks good, but let's add some Sauteed Paneer for more protein. Your muscle recovery markers need it.",
    time: '10:35 AM',
    isMe: false,
  },
  {
    sender: 'Me',
    text: "Got it. I'll update my tiffin preferences for next week.",
    time: '10:38 AM',
    isMe: true,
  },
];

// ============================================================================
// KITCHEN / ORDER DATA
// ============================================================================
export const MOCK_ORDERS = [
  {
    id: 'ORD-9021',
    customerName: 'Aryan Patel',
    meal: 'Paneer Tikka Quinoa Bowl',
    status: 'NEW' as const,
    time: '4m ago',
    tag: 'No Gluten',
  },
  {
    id: 'ORD-9024',
    customerName: 'Priya Singh',
    meal: 'Grilled Seabass + Steamed Greens',
    status: 'NEW' as const,
    time: '12m ago',
    tag: 'Low Carb',
  },
  {
    id: 'ORD-8998',
    customerName: 'Vikram Desai',
    meal: 'Tandoori Salmon Soba Noodles',
    status: 'PREPARING' as const,
    time: '8m ago',
    tag: 'Shellfish Allergy',
  },
  {
    id: 'ORD-8942',
    customerName: 'Neha Gupta',
    meal: '2x Keto Chicken Bowls',
    status: 'READY' as const,
    time: '20m ago',
    tag: 'Courier Assigned',
  },
  {
    id: 'ORD-8901',
    customerName: 'Aditya Roy',
    meal: 'Butter Chicken with Basmati Rice',
    status: 'DELIVERED' as const,
    time: '45m ago',
    tag: 'Dairy Free',
  },
];

// ============================================================================
// ADMIN DASHBOARD KPI DATA
// ============================================================================
export const MOCK_ADMIN_KPIS = [
  {
    label: 'Platform Revenue (MTD)',
    value: '₹14.2M',
    trend: '+22%',
    icon: 'payments',
    color: 'text-emerald-500',
    bg: 'bg-emerald-50',
  },
  {
    label: 'Active Users',
    value: '12,492',
    trend: '+1.2k',
    icon: 'people',
    color: 'text-blue-500',
    bg: 'bg-blue-50',
  },
  {
    label: 'Supply Chain Efficiency',
    value: '98.4%',
    trend: 'Optimal',
    icon: 'local_shipping',
    color: 'text-amber-500',
    bg: 'bg-amber-50',
  },
  {
    label: 'Expert Network',
    value: '154',
    trend: '9 Live',
    icon: 'verified_user',
    color: 'text-purple-500',
    bg: 'bg-purple-50',
  },
];

export const MOCK_REGIONAL_LOAD = [
  { name: 'Mumbai North', load: '82%', status: 'Normal' as const },
  { name: 'Bangalore South', load: '94%', status: 'Peak' as const },
  { name: 'Delhi NCR', load: '45%', status: 'Low' as const },
  { name: 'Hyderabad West', load: '76%', status: 'Normal' as const },
];

// ============================================================================
// CUSTOMER HEALTH DATA
// ============================================================================
export const MOCK_CUSTOMER_VITALS = [
  {
    label: 'Steps Today',
    current: '9,240',
    target: '12,000',
    icon: 'directions_walk',
    color: 'text-blue-500',
    bg: 'bg-blue-50',
    progress: 77,
  },
  {
    label: 'Deep Sleep',
    current: '7h 12m',
    target: '8h',
    icon: 'nightlight_round',
    color: 'text-purple-500',
    bg: 'bg-purple-50',
    progress: 90,
  },
  {
    label: 'Hydration',
    current: '2.4L',
    target: '3.5L',
    icon: 'opacity',
    color: 'text-cyan-500',
    bg: 'bg-cyan-50',
    progress: 68,
  },
];

// ============================================================================
// MEAL PLANS
// ============================================================================
export const MOCK_MEAL_PLANS = [
  {
    id: 'weekly',
    name: 'Weekly Plan',
    price: 700,
    duration: 'week' as const,
    features: [
      '6 Days of Organic Meals',
      'Daily Calorie Tracking',
      'Basic Nutritional Analysis',
      'Flexible pausing',
    ],
    isPremium: false,
    tag: 'SHORT TERM',
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
      'Priority Morning Delivery',
    ],
    isPremium: true,
    tag: 'MOST POPULAR',
  },
];

// ============================================================================
// DOCTOR PATIENT DATA
// ============================================================================
export const MOCK_PATIENTS = [
  {
    id: 'P001',
    name: 'Aryan Patel',
    age: 32,
    condition: 'Prediabetic',
    lastVisit: '3 days ago',
    status: 'stable' as const,
    nextCheckup: '2026-02-15',
  },
  {
    id: 'P002',
    name: 'Priya Singh',
    age: 28,
    condition: 'Metabolic Syndrome',
    lastVisit: '1 week ago',
    status: 'elevated' as const,
    nextCheckup: '2026-02-08',
  },
];

// ============================================================================
// COACH CLIENT DATA
// ============================================================================
export const MOCK_COACH_CLIENTS = [
  {
    id: 'C001',
    name: 'Vikas Kumar',
    program: 'Full Body Transformation',
    progress: '45%',
    nextSession: '2026-01-22 (Wed, 6 PM)',
    status: 'on-track' as const,
  },
  {
    id: 'C002',
    name: 'Neha Kapoor',
    program: 'Marathon Training',
    progress: '72%',
    nextSession: '2026-01-23 (Thu, 5:30 PM)',
    status: 'exceeding' as const,
  },
];

// ============================================================================
// UPCOMING CONSULTATIONS
// ============================================================================
export const MOCK_UPCOMING_APPOINTMENTS = [
  {
    id: 'A001',
    doctorName: 'Dr. Ananya Sharma',
    specialty: 'Nutritionist',
    time: 'Today, 5:30 PM (IST)',
    topic: 'Bio-individual micronutrient stacking',
  },
  {
    id: 'A002',
    doctorName: 'Coach Rohan Verma',
    specialty: 'Fitness Coach',
    time: 'Tomorrow, 6:00 PM (IST)',
    topic: 'Post-workout recovery protocol',
  },
];

// ============================================================================
// VITAL SIGNS DATA
// ============================================================================
export const MOCK_VITAL_SIGNS = [
  {
    id: 'VS001',
    date: '2026-01-20',
    bloodPressure: '120/80',
    heartRate: 72,
    temperature: 98.6,
    oxygenSaturation: 98,
    bloodGlucose: 95,
  },
  {
    id: 'VS002',
    date: '2026-01-19',
    bloodPressure: '118/78',
    heartRate: 70,
    temperature: 98.4,
    oxygenSaturation: 99,
    bloodGlucose: 92,
  },
];
