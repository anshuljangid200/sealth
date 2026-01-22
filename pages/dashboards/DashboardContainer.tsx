
import React, { useContext, useState } from 'react';
import { Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { AuthContext } from '../../App';
import { UserRole } from '../../types';
import { LOGO_URL } from '../../constants';
import { Icon, Button, Container, cn } from '../../components/UI';
import { Menu, X, LogOut, User, Bell, Search, Zap } from 'lucide-react';
import SearchModal from '../../components/modals/SearchModal';
import NotificationsModal from '../../components/modals/NotificationsModal';

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
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showPayPopup, setShowPayPopup] = useState(!auth?.hasActiveSubscription);
  const [showSearch, setShowSearch] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  if (!auth?.user) return null;

  const getNavItems = (role: UserRole) => {
    switch (role) {
      case UserRole.DOCTOR:
        return [
          { label: 'Overview', icon: 'dashboard', path: '/dashboard' },
          { label: 'Patients', icon: 'people', path: '/dashboard/patients' },
          { label: 'Schedule', icon: 'calendar_today', path: '/dashboard/schedule' },
          { label: 'Health Records', icon: 'history_edu', path: '/dashboard/records' },
        ];
      case UserRole.ADMIN:
        return [
          { label: 'Stats', icon: 'analytics', path: '/dashboard' },
          { label: 'Users', icon: 'group', path: '/dashboard/users' },
          { label: 'Content', icon: 'auto_awesome_motion', path: '/dashboard/content' },
          { label: 'Finance', icon: 'payments', path: '/dashboard/revenue' },
        ];
      case UserRole.KITCHEN:
        return [
          { label: 'Orders', icon: 'dashboard', path: '/dashboard' },
          { label: 'Inventory', icon: 'inventory_2', path: '/dashboard/stock' },
          { label: 'Quality', icon: 'fact_check', path: '/dashboard/qc' },
        ];
      case UserRole.COACH:
        return [
          { label: 'Clients', icon: 'groups', path: '/dashboard' },
          { label: 'Workouts', icon: 'fitness_center', path: '/dashboard/workouts' },
          { label: 'Tracking', icon: 'insights', path: '/dashboard/tracking' },
        ];
      case UserRole.DELIVERY:
        return [
          { label: 'Tasks', icon: 'local_shipping', path: '/dashboard' },
          { label: 'History', icon: 'route', path: '/dashboard/history' },
          { label: 'Wallet', icon: 'account_balance_wallet', path: '/dashboard/wallet' },
        ];
      default:
        return [
          { label: 'Overview', icon: 'dashboard', path: '/dashboard' },
          { label: 'Nutrition', icon: 'restaurant', path: '/dashboard/nutrition' },
          { label: 'Fitness', icon: 'fitness_center', path: '/dashboard/fitness' },
          { label: 'Expert Care', icon: 'medical_services', path: '/dashboard/consults' },
        ];
    }
  };

  const navItems = getNavItems(auth.user.role);

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-slate-950 flex flex-col">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200/60 dark:border-slate-800/60">
        <Container>
          <div className="h-20 flex items-center justify-between gap-8">
            {/* Logo */}
            <Link to="/dashboard" className="flex items-center gap-3 shrink-0 group">
              <div className="w-10 h-10 rounded-2xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <img src={LOGO_URL} alt="Sealth" className="w-full h-full object-cover rounded-2xl" />
              </div>
              <span className="font-black text-2xl tracking-tight text-slate-900 dark:text-white">Sealth</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map(item => (
                <Link
                  key={item.label}
                  to={item.path}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all duration-200",
                    location.pathname === item.path
                      ? "text-primary bg-primary/5"
                      : "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/50"
                  )}
                >
                  <Icon name={item.icon} className="text-xl" />
                  <span>{item.label}</span>
                  {location.pathname === item.path && (
                    <motion.div layoutId="nav-pill" className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
                  )}
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => setShowSearch(true)}
                className="p-2.5 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                onClick={() => setShowNotifications(true)}
                className="p-2.5 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors relative"
              >
                <Bell className="w-5 h-5" />
                <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-rose-500 rounded-full border-2 border-white dark:border-slate-900" />
              </button>

              <div className="h-8 w-[1px] bg-slate-200 dark:bg-slate-800 mx-2 hidden md:block" />

              <div className="flex items-center gap-3 pl-2 group cursor-pointer">
                <div className="text-right hidden sm:block">
                  <p className="text-sm font-black text-slate-900 dark:text-white leading-none mb-1">{auth.user.name}</p>
                  <p className="text-[10px] font-black uppercase tracking-widest text-primary leading-none">{auth.user.role}</p>
                </div>
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-primary to-primary-light flex items-center justify-center text-white font-black shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform">
                  {auth.user.name.charAt(0)}
                </div>
                <button
                  onClick={auth.logout}
                  className="p-2.5 text-slate-400 hover:text-rose-500 transition-colors"
                  title="Logout"
                >
                  <LogOut className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Menu Toggle */}
              <button
                className="lg:hidden p-2.5 text-slate-600 dark:text-slate-400"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </Container>

        {/* Mobile Menu */}
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
                        ? "text-primary bg-primary/5"
                        : "text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800"
                    )}
                  >
                    <Icon name={item.icon} />
                    <span>{item.label}</span>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Subscription Guard Modal */}
      <AnimatePresence>
        {showPayPopup && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-950/40 backdrop-blur-sm shadow-inner"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-md bg-white dark:bg-slate-900 rounded-[2.5rem] p-10 shadow-2xl border border-slate-200 dark:border-slate-800 text-center"
            >
              <div className="w-20 h-20 bg-amber-100 dark:bg-amber-500/10 rounded-full flex items-center justify-center text-amber-500 mx-auto mb-6">
                <Zap className="w-10 h-10 fill-amber-500" />
              </div>
              <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-4 tracking-tight italic">Activation Required</h2>
              <p className="text-slate-500 font-medium mb-8 leading-relaxed">
                Namaste, {auth.user.name}. Your metabolic dashboard is ready, but your subscription is not yet active.
              </p>
              <div className="space-y-4">
                <Button
                  onClick={() => navigate('/subscriptions')}
                  className="w-full h-14 rounded-2xl bg-primary text-white font-black italic shadow-xl shadow-primary/20"
                >
                  Pay Now to Activate
                </Button>
                <Button
                  variant="ghost"
                  onClick={() => auth.logout()}
                  className="w-full text-slate-400 font-bold"
                >
                  Logout
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Main Content */}
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
            <Route path="users" element={<DummyPage title="User Management" />} />
            <Route path="content" element={<DummyPage title="Plan & Content" />} />
            <Route path="revenue" element={<DummyPage title="Financials" />} />
            <Route path="stock" element={<DummyPage title="Inventory" />} />
            <Route path="qc" element={<DummyPage title="Quality Control" />} />
            <Route path="workouts" element={<DummyPage title="Workouts" />} />
            <Route path="tracking" element={<DummyPage title="Progress Tracking" />} />
            <Route path="history" element={<DummyPage title="Route History" />} />
            <Route path="wallet" element={<DummyPage title="Wallet" />} />

            <Route path="*" element={
              <div className="h-full flex flex-col items-center justify-center text-center p-12">
                <div className="w-20 h-20 bg-slate-100 dark:bg-slate-800 rounded-3xl flex items-center justify-center mb-6">
                  <Icon name="construction" className="text-4xl text-slate-400" />
                </div>
                <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-2">Refining This Module</h2>
                <p className="text-slate-500 max-w-md">Our architects are putting the final touches on this portal. Coming very soon to Sealth.</p>
                <Button className="mt-8" variant="outline" onClick={() => window.history.back()}>Go Back</Button>
              </div>
            } />
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

      <SearchModal isOpen={showSearch} onClose={() => setShowSearch(false)} />
      <NotificationsModal isOpen={showNotifications} onClose={() => setShowNotifications(false)} />
    </div>
  );
};

const DummyPage: React.FC<{ title: string }> = ({ title }) => (
  <div className="space-y-8 animate-fade-in">
    <header>
      <h1 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight mb-2">{title}</h1>
      <p className="text-slate-500 font-medium tracking-tight">Managing your {title.toLowerCase()} operations with precision.</p>
    </header>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[1, 2, 3].map(i => (
        <div key={i} className="bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-200/60 dark:border-slate-800/60 p-8 space-y-4">
          <div className="w-12 h-12 bg-slate-50 dark:bg-slate-800 rounded-2xl animate-pulse" />
          <div className="h-6 w-3/4 bg-slate-50 dark:bg-slate-800 rounded-lg animate-pulse" />
          <div className="h-4 w-full bg-slate-50 dark:bg-slate-800 rounded-lg animate-pulse" />
          <div className="h-4 w-5/6 bg-slate-50 dark:bg-slate-800 rounded-lg animate-pulse" />
        </div>
      ))}
    </div>

    <div className="bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-200/60 dark:border-slate-800/60 p-12 flex flex-col items-center text-center">
      <div className="w-24 h-24 bg-primary/5 rounded-full flex items-center justify-center mb-6">
        <Icon name="analytics" className="text-4xl text-primary" />
      </div>
      <h3 className="text-xl font-black text-slate-900 dark:text-white mb-2">Activating Data Streams</h3>
      <p className="text-slate-500 max-w-sm mb-8">We're connecting the real-time databases for {title}. Check back in a few minutes.</p>
      <Button variant="primary">Refresh Dashboard</Button>
    </div>
  </div>
);

export default DashboardContainer;
