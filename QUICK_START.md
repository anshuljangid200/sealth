# 🚀 Quick Start Guide - SEALTH Platform

**Get up and running in 2 minutes.**

---

## Prerequisites

```bash
# Check you have Node 18+
node --version  # Should be v18.x.x or higher
npm --version   # Should be v9.x.x or higher
```

---

## Installation

```bash
# 1. Navigate to project
cd "e:\Free Lancing Projects\sealth-main"

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open in browser
# → http://localhost:5173
```

---

## 🧪 Testing All Features

### Step 1: Login with Different Roles
Visit: `http://localhost:5173/#/login`

Pre-filled test accounts (just click role, then Submit):
- **CUSTOMER** → Customer dashboard
- **DOCTOR** → Doctor patient dashboard
- **COACH** → Fitness coach dashboard
- **KITCHEN** → Chef order dashboard
- **DELIVERY** → Delivery operator dashboard
- **ADMIN** → System intelligence dashboard

### Step 2: Explore Each Dashboard
- **Customer:** Nutrition, Fitness, Expert Care tabs
- **Doctor:** Patients, Schedule, Health Records tabs
- **Admin:** Stats page with KPIs

### Step 3: Test Doctor Discovery
1. Go to **Expert Care** (Customer role)
2. Try:
   - ✅ Search by doctor name
   - ✅ Filter by specialty (Nutritionist, Cardiologist, etc.)
   - ✅ Adjust price range slider
   - ✅ Click "Book Now" to message doctor
   - ✅ Send/receive messages in chat

### Step 4: Check Responsive Design
- Press `F12` (Developer Tools)
- Click device toggle (mobile icon)
- Test on iPhone 12, Galaxy S20, iPad
- Rotate device (landscape mode)

### Step 5: Toggle Dark Mode
- Look for theme toggle (usually in settings)
- All pages adapt to dark mode

---

## 📂 Project Structure (Essential Files)

```
src/
├── components/
│   ├── UI.tsx                 ← Core UI components
│   ├── SharedComponents.tsx   ← DoctorCard, StatsCard
│   └── StateComponents.tsx    ← Loading, Error states
├── pages/
│   ├── dashboards/
│   │   ├── DashboardContainer.tsx ← Navigation shell
│   │   ├── Consults.tsx            ← Doctor discovery ⭐
│   │   └── [5 more dashboards]
│   └── [Login, Landing, Subscriptions]
├── constants/
│   ├── theme.ts              ← Design system (colors, fonts, spacing)
│   ├── navigation.ts         ← Route configuration
│   └── mockData.ts           ← Sample data
└── App.tsx                   ← Root component
```

---

## 🎨 Design System Quick Reference

### Colors
- **Primary:** `#14B8A6` (teal)
- **Secondary:** `#F59E0B` (amber)
- **Success:** `#10B981` (green)
- **Error:** `#F43F5E` (red)

### Spacing (px)
- `xs: 8`, `sm: 16`, `md: 24`, `lg: 32`, `xl: 40`, `2xl: 48`

### Typography
- Hero: `text-8xl font-black`
- Title: `text-4xl font-black`
- Body: `text-base font-medium`
- Label: `text-xs font-black uppercase`

### How to Use
```tsx
import { TYPOGRAPHY, COLORS } from '../../constants/theme';

// Use preset classes
<h1 className={TYPOGRAPHY.display.lg}>Title</h1>

// Or use Tailwind utilities
<Card className="p-8 gap-6" />
```

---

## 🛠️ Common Tasks

### Add a New Page
1. Create file in `pages/` (e.g., `MyPage.tsx`)
2. Import in `DashboardContainer.tsx`
3. Add route: `<Route path="mypage" element={<MyPage />} />`

### Add a New Component
1. Create in `components/SharedComponents.tsx`
2. Export in `components/index.ts`
3. Import anywhere: `import { MyComponent } from '../../components'`

### Update Mock Data
1. Edit `constants/mockData.ts`
2. Export at bottom: `export const MY_DATA = [...]`
3. Import in pages: `import { MY_DATA } from '../../constants'`

### Change Colors
1. Edit `constants/theme.ts`
2. All components using `COLORS.primary` update automatically

---

## 🐛 Troubleshooting

| Problem | Solution |
|---------|----------|
| **Port 5173 already in use** | Run `npm run dev -- --port 5174` |
| **Module not found errors** | Run `npm install` again, restart dev server |
| **Styles not loading** | Hard refresh browser (Ctrl+Shift+R) |
| **Images broken** | Check internet connection (uses CDN) |
| **Dark mode doesn't work** | Clear browser cache, restart dev server |
| **Login stays blank** | Check browser console (F12) for errors |

---

## 📱 Device Testing

### Mobile (iPhone 12)
- Width: 390px
- Height: 844px
- Device Pixel Ratio: 3

### Tablet (iPad)
- Width: 768px  
- Height: 1024px
- Landscape: 1024px × 768px

### Desktop
- Width: 1920px
- Height: 1080px
- Recommended: 1440px × 900px

---

## 🎯 Demo Talking Points

1. **"Six complete dashboards"** - Show each role login
2. **"Fully responsive"** - Show mobile view
3. **"Doctor discovery system"** - Test filters and search
4. **"Dark mode everywhere"** - Toggle it
5. **"Professional design"** - Show brand consistency
6. **"Production-ready code"** - Show clean architecture

---

## 📊 What to Show Stakeholders

```
Homepage → Landing page
  ↓
Login → Select any role
  ↓
Dashboard → Role-specific interface
  ↓
Expert Care (if Customer) → Doctor discovery + filtering
```

**Time for full demo:** 3-5 minutes

---

## 🔄 Build & Deploy

### Development
```bash
npm run dev          # Start dev server
```

### Production
```bash
npm run build        # Create optimized build
npm run preview      # Preview production build locally
```

**Deployment:** Build files go in `dist/` folder → Ready for Vercel, Netlify, GitHub Pages

---

## 📞 Help & Questions

**Quick Reference Files:**
- `ARCHITECTURE.md` - Full system guide
- `PERFORMANCE_GUIDELINES.ts` - Best practices
- `EXECUTION_SUMMARY.md` - What was delivered

**For Issues:**
- Check browser console (F12)
- Check terminal for build errors
- Verify Node version: `node --version`

---

## ✅ Checklist Before Demoing

- [ ] `npm install` completed successfully
- [ ] `npm run dev` running without errors
- [ ] Browser opens to `http://localhost:5173`
- [ ] Can log in with at least one role
- [ ] Dashboard displays properly
- [ ] Dark mode toggles
- [ ] Mobile view is responsive
- [ ] No console errors (F12 → Console)

---

**You're all set!** 🎉

Start with `npm run dev` and explore. Every feature is functional and ready to demo.

Enjoy building SEALTH! 💚
