# SEALTH Platform - Architecture & Development Guide

**Version:** 1.0  
**Status:** Production-Ready Demo  
**Last Updated:** January 2026

---

## 📋 Project Overview

SEALTH is an all-in-one health-tech platform unifying:
- 🍛 **Healthy Tiffin & Food Subscriptions** (Chef/Kitchen management)
- 📊 **Health Tracking** (Vitals, metrics, wellness dashboards)
- 💪 **Fitness Coaching** (Workout programs, progress tracking)
- 👨‍⚕️ **Doctor Consultations** (Expert discovery, video calls)
- 🚚 **Delivery Management** (Route optimization, real-time tracking)
- 🏢 **Admin Control** (System-wide monitoring, compliance)

**Vision:** "Smart Living. Simple Health."

**Brand Feel:** Calm, premium, futuristic health-tech with Indian localization.

---

## 🏗️ Architecture

### Technology Stack
- **Frontend Framework:** React 19 + TypeScript
- **Routing:** React Router v7 (HashRouter)
- **Styling:** Tailwind CSS 3.4 + custom design system
- **Animations:** Framer Motion 12
- **Icons:** Lucide React + Material Icons
- **Build Tool:** Vite 6

### Folder Structure
```
src/
├── components/
│   ├── UI.tsx                 # Core UI components (Card, Button, Badge, etc)
│   ├── StateComponents.tsx    # Loading, Error, Empty states
│   ├── SharedComponents.tsx   # DoctorCard, StatsCard, OrderCard
│   └── index.ts              # Central export file
├── pages/
│   ├── Landing.tsx           # Marketing homepage
│   ├── Login.tsx             # Role-based login
│   ├── Subscriptions.tsx      # Meal plan selection
│   └── dashboards/
│       ├── DashboardContainer.tsx  # Main layout shell (navigation, header)
│       ├── CustomerDashboard.tsx   # User health overview
│       ├── DoctorDashboard.tsx     # Doctor patient management
│       ├── CoachDashboard.tsx      # Fitness coach dashboard
│       ├── KitchenDashboard.tsx    # Chef order management
│       ├── DeliveryDashboard.tsx   # Logistics operator dashboard
│       ├── AdminDashboard.tsx      # System intelligence
│       ├── Consults.tsx            # Doctor discovery & chat
│       ├── Nutrition.tsx           # Meal logging
│       ├── Fitness.tsx             # Workout tracking
│       ├── Patients.tsx            # Doctor patient list
│       ├── Schedule.tsx            # Appointments
│       └── Records.tsx             # Health records vault
├── constants/
│   ├── theme.ts              # Design system (colors, typography, spacing)
│   ├── navigation.ts         # Route configuration per role
│   ├── mockData.ts           # Centralized sample data
│   └── index.tsx             # Main exports + LOGO_URL
├── types.ts                  # TypeScript interfaces
├── App.tsx                   # Root component + Auth context
└── index.tsx                 # Entry point

public/
└── logo.jpg                  # Sealth branding
```

---

## 🎨 Design System

### Typography Scale
- **Display:** `text-8xl` → `text-5xl` (hero, marketing)
- **Heading:** `text-4xl` → `text-lg` (page titles, sections)
- **Body:** `text-lg` → `text-xs` (copy, labels)

### Color Palette
| Purpose | Color | Hex |
|---------|-------|-----|
| Primary | Teal | `#14B8A6` |
| Secondary | Amber | `#F59E0B` |
| Success | Emerald | `#10B981` |
| Warning | Amber | `#F59E0B` |
| Error | Rose | `#F43F5E` |
| Neutral | Slate | `#64748B` |

### Spacing System (4px baseline)
- `xs: 8px`, `sm: 16px`, `md: 24px`, `lg: 32px`, `xl: 40px`, `2xl: 48px`, `3xl: 64px`

### Border Radius
- `sm: 8px`, `md: 12px`, `lg: 16px`, `xl: 24px`, `full: 32px`

---

## 🔐 Authentication & Roles

### Role-Based Access
```typescript
enum UserRole {
  CUSTOMER = 'CUSTOMER',      // End user / patient
  DOCTOR = 'DOCTOR',           // Medical professional
  COACH = 'COACH',             // Fitness trainer
  KITCHEN = 'KITCHEN',         // Chef / Meal prep
  DELIVERY = 'DELIVERY',       // Logistics operator
  ADMIN = 'ADMIN'              // System administrator
}
```

### Login Flow
1. User selects role on `/login` page
2. Mock authentication (pre-filled credentials)
3. User stored in localStorage + Context API
4. Redirected to role-specific dashboard
5. Navigation bar adapts to role

### Role-Specific Dashboards
| Role | Primary Dashboard | Secondary Pages |
|------|-------------------|-----------------|
| Customer | Health Overview | Nutrition, Fitness, Expert Care |
| Doctor | Patient List | Schedule, Health Records |
| Coach | Client List | Workouts, Progress Tracking |
| Kitchen | Active Orders | Inventory, Quality Control |
| Delivery | Task List | Route History, Earnings Wallet |
| Admin | System Stats | User Management, Finance, Compliance |

---

## 📱 Responsive Design

### Mobile-First Approach
- **Mobile:** `< 768px` - Single column, stacked layout
- **Tablet:** `768px - 1024px` - Two columns, optimized spacing
- **Desktop:** `> 1024px` - Three/four columns, full experience

### Grid Patterns
```tsx
// Responsive grid (auto-adjusts)
<Grid cols={filteredItems.length === 1 ? 1 : 2 | 3 | 4} />

// Direct Tailwind approach
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
```

### Breakpoint Usage
```tsx
// Example: Hidden on mobile, visible on tablet+
<div className="hidden md:block">Desktop content</div>

// Stack vertically on mobile, horizontal on desktop
<div className="flex flex-col md:flex-row gap-6">
```

---

## 🔄 Data Flow

### State Management
- **Authentication:** React Context (AuthContext)
- **Local State:** useState for UI interactions
- **Computed Values:** useMemo for filters, calculations
- **Mock Data:** All data centralized in `constants/mockData.ts`

### Mock Doctor Discovery
```typescript
// Example filtering in Consults.tsx
const filteredDoctors = useMemo(() => {
  return MOCK_DOCTORS.filter(doc => {
    const matchesSearch = doc.name.includes(searchQuery);
    const matchesSpecialty = doc.specialty === selectedSpecialty;
    const matchesPrice = doc.price <= priceRange;
    return matchesSearch && matchesSpecialty && matchesPrice;
  });
}, [searchQuery, selectedSpecialty, priceRange]);
```

### Error Handling
- **Loading State:** `<LoadingState />` component
- **Error State:** `<ErrorState />` component
- **Empty State:** `<EmptyState />` component
- **Success Toast:** `<SuccessState />` component

---

## 🎯 Key Features

### 1. Doctor Discovery (Expert Care)
- ✅ Doctor card display with ratings, specialty, price
- ✅ Search by name, hospital, specialty
- ✅ Filter by specialty (Nutritionist, Cardiologist, etc.)
- ✅ Price range slider (₹500 - ₹2000)
- ✅ Online/offline status indicator
- ✅ Direct messaging integration
- ✅ Booking flow to consultation

### 2. Unified Navigation
- ✅ Top horizontal navigation bar (all roles)
- ✅ Role-aware visual branding (unique accent colors per role)
- ✅ Mobile hamburger menu
- ✅ Active route highlighting
- ✅ User profile dropdown
- ✅ Logout functionality

### 3. Health Dashboards
- ✅ Customer: Vitals tracking, meal tracking, expert booking
- ✅ Doctor: Patient list, schedules, health records
- ✅ Coach: Client list, workout plans, progress tracking
- ✅ Kitchen: Active orders, inventory, quality control
- ✅ Delivery: Task assignments, route history, earnings
- ✅ Admin: System-wide KPIs, regional monitoring, compliance

### 4. Responsive Design
- ✅ Mobile-optimized layouts
- ✅ Tablet-specific configurations
- ✅ Desktop full experience
- ✅ Touch-friendly tap targets (min 44x44px)
- ✅ Landscape orientation support

### 5. Accessibility
- ✅ Semantic HTML structure
- ✅ WCAG AA color contrast
- ✅ Keyboard navigation support
- ✅ ARIA labels for icons
- ✅ Focus indicators visible

---

## 🚀 Getting Started

### Prerequisites
```bash
node --version  # v18+
npm --version   # v9+
```

### Installation
```bash
# Clone repository
git clone <repo-url>
cd sealth-main

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Environment
- Development: `npm run dev` → http://localhost:5173
- Build output: `dist/` folder
- HashRouter enabled for GitHub Pages compatibility

---

## 🧪 Testing & QA

### Manual Testing Checklist
- [ ] All roles can log in successfully
- [ ] Dashboard layout is responsive (mobile/tablet/desktop)
- [ ] Navigation highlights active page
- [ ] Doctor discovery filters work (search, specialty, price)
- [ ] Message sending in consultation works
- [ ] All buttons redirect correctly
- [ ] Dark mode toggle works globally
- [ ] Loading states appear briefly
- [ ] Error handling displays properly
- [ ] Empty states show on zero results

### Browser Support
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Mobile Devices
- iPhone 12/13/14+ (iOS 15+)
- Android 10+
- Tablet (iPad, Samsung Galaxy Tab)

---

## 📊 Performance Metrics

### Target Scores (Lighthouse)
- **Performance:** 90+
- **Accessibility:** 95+
- **Best Practices:** 90+
- **SEO:** 90+

### Core Web Vitals
- **FCP (First Contentful Paint):** < 1.5s
- **LCP (Largest Contentful Paint):** < 2.5s
- **CLS (Cumulative Layout Shift):** < 0.1

---

## 🔧 Customization Guide

### Adding a New Role
1. Add to `UserRole` enum in `types.ts`
2. Create new dashboard component (e.g., `pages/dashboards/NewRoleDashboard.tsx`)
3. Add role theme to `ROLE_THEMES` in `constants/theme.ts`
4. Add navigation items to `DASHBOARD_NAV` in `constants/navigation.ts`
5. Import and route in `DashboardContainer.tsx`

### Adding a New Page
1. Create component in `pages/` or `pages/dashboards/`
2. Add route in `DashboardContainer.tsx` or `App.tsx`
3. Import navigation link in relevant dashboard
4. Style using design system tokens

### Updating Design Tokens
1. Edit `constants/theme.ts`
2. All components will automatically use new values
3. No need to update individual files

---

## 📝 Code Standards

### Component Structure
```tsx
import React from 'react';
import { Card, Button, cn } from '../../components/UI';

interface Props {
  title: string;
  onAction?: () => void;
}

export const MyComponent: React.FC<Props> = ({ title, onAction }) => {
  return (
    <Card className="p-8">
      <h1 className="text-4xl font-black mb-4">{title}</h1>
      <Button onClick={onAction}>Action</Button>
    </Card>
  );
};

export default MyComponent;
```

### Naming Conventions
- Components: `PascalCase` (e.g., `CustomerDashboard`)
- Files: `PascalCase.tsx` (e.g., `CustomerDashboard.tsx`)
- Constants: `SCREAMING_SNAKE_CASE` (e.g., `MOCK_DOCTORS`)
- Functions: `camelCase` (e.g., `getNavItems`)
- CSS Classes: Tailwind utility names (e.g., `flex items-center`)

### Imports
```tsx
// Absolute imports from components
import { Card, Button } from '../../components/UI';

// Centralized imports from index
import { Card, Button, DoctorCard } from '../../components';

// Constants
import { TYPOGRAPHY, COLORS } from '../../constants/theme';
```

---

## 🐛 Troubleshooting

### Issue: Dark mode not working
- Ensure `dark` class is set on `<html>` element
- Check Tailwind config has `darkMode: 'class'`

### Issue: Images not loading
- Verify image URLs are HTTPS
- Check CORS settings for external image sources
- Use local `public/` folder for static assets

### Issue: Navigation not updating
- Clear browser cache (Ctrl+Shift+Delete)
- Check React Router path matches exactly
- Verify useLocation() hook is imported correctly

### Issue: Mobile layout broken
- Check responsive classes (md:, lg: prefixes)
- Verify gap/padding uses consistent units
- Test on actual mobile device (not just browser dev tools)

---

## 📚 Resources

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Guide](https://www.framer.com/motion/)
- [React Router v7](https://reactrouter.com)
- [Lucide Icons](https://lucide.dev)

---

## 🎯 Next Steps (Post-Demo)

1. **Backend Integration**
   - Connect to real API endpoints
   - Replace mock data with API calls
   - Implement proper authentication (JWT)

2. **Database**
   - User profiles and preferences
   - Doctor schedules and availability
   - Order history and tracking
   - Health records storage

3. **Real-time Features**
   - WebSocket for live consultations
   - Notification system
   - Real-time order tracking
   - Live chat messaging

4. **Enhanced Features**
   - Payment integration (Stripe, Razorpay)
   - Video call infrastructure (Twilio, Agora)
   - Prescription management
   - Medical imaging storage

5. **Security**
   - HIPAA compliance
   - Data encryption
   - Role-based access control (RBAC)
   - Audit logging

---

## 👥 Team Roles & Responsibilities

| Role | Focus |
|------|-------|
| **Frontend Lead** | Component architecture, performance |
| **UI/UX Designer** | Design system, consistency, accessibility |
| **Backend Lead** | API design, database, real-time |
| **DevOps** | Deployment, monitoring, scaling |
| **QA Lead** | Testing, bug reporting, standards |

---

## 📞 Support & Contact

For issues, feature requests, or questions:
- Create GitHub issues
- Tag with: `bug`, `feature`, `documentation`, `performance`
- Include reproduction steps and environment details

---

**Built with ❤️ for SEALTH  
"Smart Living. Simple Health."**
