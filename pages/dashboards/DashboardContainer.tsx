
import React, { useContext, useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { AuthContext } from '../../App';
import { UserRole } from '../../types';
import { LOGO_URL } from '../../constants';
import { getNavItems, getRoleLabel, ROLE_TITLES } from '../../constants/navigation';
import { ROLE_THEMES } from '../../constants/theme';
import { Icon, Button, Container, cn } from '../../components/UI';
import { Menu, X, LogOut, Bell, Search } from 'lucide-react';

import CustomerDashboard from './CustomerDashboard';
import DoctorDashboard from './DoctorDashboard';
import KitchenDashboard from './KitchenDashboard';
import AdminDashboard from './AdminDashboard';
import CoachDashboard from './CoachDashboard';
import DeliveryDashboard from './DeliveryDashboard';
import Nutrition from './Nutrition';
import Fitness from './Fitness';
import Consults from './Consults';
import Patients from './Patients';
import Schedule from './Schedule';
import Records from './Records';

const DashboardContainer: React.FC = () => {
  const auth = useContext(AuthContext);
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  if (!auth?.user) return null;

  const navItems = getNavItems(auth.user.role);
  const roleTheme = ROLE_THEMES[auth.user.role];
  const roleTitle = ROLE_TITLES[auth.user.role];

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-slate-950 flex flex-col">
      {/* Top Navigation Bar - Role-aware styling */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200/60 dark:border-slate-800/60">
        <Container>
          <div className="h-20 flex items-center justify-between gap-8">
            {/* Logo + Brand */}
            <Link to="/" className="flex items-center gap-3 shrink-0 group">
              <div className={cn("w-10 h-10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50")}>
                <img src={LOGO_URL} alt="Sealth" className="w-full h-full object-cover rounded-2xl" />
              </div>
              <div className="hidden md:block">
                <span className="font-black text-2xl tracking-tight text-slate-900 dark:text-white">Sealth</span>
                <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-slate-500">{getRoleLabel(auth.user.role)}</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map(item => (
                <Link
                  key={item.label}
                  to={item.path}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all duration-200 relative",
                    location.pathname === item.path
                      ? `text-slate-900 dark:text-white ${roleTheme.bg} shadow-lg border border-slate-300/50 dark:border-slate-600/50`
                      : "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/50"
                  )}
                >
                  <Icon name={item.icon} className="text-lg" />
                  <span>{item.label}</span>
                </Link>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-3 shrink-0">
              <button aria-label="Search" title="Search" className="p-2.5 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                <Search className="w-5 h-5" />
              </button>
              <button aria-label="Notifications" title="Notifications" className="p-2.5 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors relative">
                <Bell className="w-5 h-5" />
                <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-rose-500 rounded-full border-2 border-white dark:border-slate-900" />
              </button>

              <div className="h-8 w-[1px] bg-slate-200 dark:bg-slate-800 mx-2 hidden md:block" />

              {/* User Menu */}
              <div className="flex items-center gap-3 pl-2 group cursor-pointer">
                <div className="text-right hidden sm:block">
                  <p className="text-sm font-black text-slate-900 dark:text-white leading-none mb-1">{auth.user.name}</p>
                  <p className={cn("text-[10px] font-black uppercase tracking-widest leading-none", roleTheme.icon)}>{getRoleLabel(auth.user.role)}</p>
                </div>
                <div className={cn("w-10 h-10 rounded-2xl flex items-center justify-center text-white font-black shadow-lg border-2 border-white dark:border-slate-700", roleTheme.bg, "group-hover:scale-105 transition-transform")}>
                  {auth.user.avatar ? (
                    <img src={auth.user.avatar} alt={auth.user.name} className="w-full h-full rounded-[14px] object-cover" />
                  ) : (
                    <span className="text-lg">{auth.user.name.charAt(0).toUpperCase()}</span>
                  )}
                </div>
                <button
                  onClick={auth.logout}
                  className="p-2.5 text-slate-400 hover:text-rose-500 transition-colors"
                  title="Logout"
                  aria-label="Logout"
                >
                  <LogOut className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Menu Toggle */}
              <button
                className="lg:hidden p-2.5 text-slate-600 dark:text-slate-400"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                title={isMobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {isMobileMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </Container>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900"
            >
              <div className="p-4 flex flex-col gap-2">
                {navItems.map(item => (
                  <Link
                    key={item.label}
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "flex items-center gap-4 px-4 py-4 rounded-2xl font-bold transition-all",
                      location.pathname === item.path
                        ? `text-white ${roleTheme.bg}`
                        : "text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800"
                    )}
                  >
                    <Icon name={item.icon} className="text-xl" />
                    <span>{item.label}</span>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col">
        <Container className="py-8 lg:py-12 flex-1">
          <Routes>
            <Route index element={
              auth.user.role === UserRole.DOCTOR ? <DoctorDashboard /> :
                auth.user.role === UserRole.KITCHEN ? <KitchenDashboard /> :
                  auth.user.role === UserRole.ADMIN ? <AdminDashboard /> :
                    auth.user.role === UserRole.COACH ? <CoachDashboard /> :
                      auth.user.role === UserRole.DELIVERY ? <DeliveryDashboard /> :
                        <CustomerDashboard />
            } />
            <Route path="nutrition" element={<Nutrition />} />
            <Route path="fitness" element={<Fitness />} />
            <Route path="consults" element={<Consults />} />

            {/* Dummy Routes for Connectivity */}
            <Route path="patients" element={<Patients />} />
            <Route path="schedule" element={<Schedule />} />
            <Route path="records" element={<Records />} />
            <Route path="users" element={<UnderConstruction title="User Management" />} />
            <Route path="content" element={<UnderConstruction title="Plan & Content" />} />
            <Route path="revenue" element={<UnderConstruction title="Financials" />} />
            <Route path="stock" element={<UnderConstruction title="Inventory" />} />
            <Route path="qc" element={<UnderConstruction title="Quality Control" />} />
            <Route path="workouts" element={<UnderConstruction title="Workout Plans" />} />
            <Route path="tracking" element={<UnderConstruction title="Progress Tracking" />} />
            <Route path="history" element={<UnderConstruction title="Delivery History" />} />
            <Route path="wallet" element={<UnderConstruction title="Earnings Wallet" />} />

            <Route path="*" element={<UnderConstruction title="Feature Under Development" />} />
          </Routes>
        </Container>
      </main>

      {/* Simple Footer */}
      <footer className="border-t border-slate-200/60 dark:border-slate-800/60 py-6">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">© 2026 Sealth Health-Tech. Smart Living. Simple Health.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-xs font-bold text-slate-400 hover:text-primary transition-colors">Privacy</a>
              <a href="#" className="text-xs font-bold text-slate-400 hover:text-primary transition-colors">Terms</a>
              <a href="#" className="text-xs font-bold text-slate-400 hover:text-primary transition-colors">Support</a>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
};

const UnderConstruction: React.FC<{ title: string; subtitle?: string }> = ({ 
  title, 
  subtitle = "Our team is refining this section. Check back soon!" 
}) => (
  <div className="flex flex-col items-center justify-center text-center p-12 min-h-96">
    <div className="w-20 h-20 bg-slate-100 dark:bg-slate-800 rounded-3xl flex items-center justify-center mb-6">
      <Icon name="construction" className="text-4xl text-slate-400" />
    </div>
    <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-2">{title}</h2>
    <p className="text-slate-500 max-w-md font-medium">{subtitle}</p>
    <Button className="mt-8" variant="outline" onClick={() => window.history.back()}>Go Back</Button>
  </div>
);

export default DashboardContainer;
