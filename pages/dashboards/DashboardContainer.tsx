
import React, { useContext } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../App';
import { UserRole } from '../../types';
import { LOGO_URL } from '../../constants';
import { Icon } from '../../components/UI';

import CustomerDashboard from './CustomerDashboard';
import DoctorDashboard from './DoctorDashboard';
import KitchenDashboard from './KitchenDashboard';
import AdminDashboard from './AdminDashboard';
import CoachDashboard from './CoachDashboard';
import DeliveryDashboard from './DeliveryDashboard';

const DashboardContainer: React.FC = () => {
  const auth = useContext(AuthContext);
  const location = useLocation();

  if (!auth?.user) return null;

  const getNavItems = (role: UserRole) => {
    switch(role) {
      case UserRole.DOCTOR:
        return [
          { label: 'Overview', icon: 'dashboard', path: '/dashboard' },
          { label: 'Patients', icon: 'people', path: '/dashboard/patients' },
          { label: 'Schedule', icon: 'calendar_today', path: '/dashboard/schedule' },
          { label: 'Health Records', icon: 'history_edu', path: '/dashboard/records' },
        ];
      case UserRole.ADMIN:
        return [
          { label: 'System Stats', icon: 'analytics', path: '/dashboard' },
          { label: 'User Management', icon: 'group', path: '/dashboard/users' },
          { label: 'Plan & Content', icon: 'auto_awesome_motion', path: '/dashboard/content' },
          { label: 'Financials', icon: 'payments', path: '/dashboard/revenue' },
        ];
      case UserRole.KITCHEN:
        return [
          { label: 'Orders Board', icon: 'dashboard', path: '/dashboard' },
          { label: 'Inventory', icon: 'inventory_2', path: '/dashboard/stock' },
          { label: 'Quality Control', icon: 'fact_check', path: '/dashboard/qc' },
        ];
      case UserRole.COACH:
        return [
          { label: 'Client List', icon: 'groups', path: '/dashboard' },
          { label: 'Workouts', icon: 'fitness_center', path: '/dashboard/workouts' },
          { label: 'Progress Tracking', icon: 'insights', path: '/dashboard/tracking' },
        ];
      case UserRole.DELIVERY:
        return [
          { label: 'Active Tasks', icon: 'local_shipping', path: '/dashboard' },
          { label: 'Route History', icon: 'route', path: '/dashboard/history' },
          { label: 'Wallet', icon: 'account_balance_wallet', path: '/dashboard/wallet' },
        ];
      default:
        return [
          { label: 'Overview', icon: 'dashboard', path: '/dashboard' },
          { label: 'Nutrition & Tiffin', icon: 'restaurant', path: '/dashboard/nutrition' },
          { label: 'Fitness Metrics', icon: 'fitness_center', path: '/dashboard/fitness' },
          { label: 'Expert Chat', icon: 'medical_services', path: '/dashboard/consults' },
        ];
    }
  };

  const navItems = getNavItems(auth.user.role);

  return (
    <div className="flex h-screen overflow-hidden bg-[#F8FAFC] dark:bg-slate-950">
      {/* Sidebar */}
      <aside className="hidden lg:flex flex-col w-64 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 transition-all">
        <div className="p-6 flex items-center gap-3">
          <img src={LOGO_URL} alt="Sealth Logo" className="w-10 h-10 object-contain" />
          <span className="font-bold text-xl tracking-tight text-primary">Sealth</span>
        </div>

        <nav className="flex-1 mt-6 px-4 space-y-1.5 overflow-y-auto scrollbar-hide">
          {navItems.map(item => (
            <Link 
              key={item.label}
              to={item.path}
              className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all ${
                location.pathname === item.path 
                  ? 'text-primary bg-primary/10 font-bold' 
                  : 'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
              }`}
            >
              <Icon name={item.icon} className={location.pathname === item.path ? 'text-primary' : ''} />
              <span className="text-sm font-medium">{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="p-6 border-t border-slate-100 dark:border-slate-800 space-y-6">
          <button className="flex items-center gap-4 px-4 py-3 text-slate-500 w-full hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl transition-all" onClick={auth.logout}>
            <Icon name="logout" />
            <span className="text-sm font-medium">Log out</span>
          </button>
          
          <div className="flex items-center gap-3 p-2 bg-slate-50 dark:bg-slate-800/50 rounded-2xl">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold ring-2 ring-primary/20">
              {auth.user.name.charAt(0)}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold truncate">{auth.user.name}</p>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{auth.user.role}</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto bg-[#F8FAFC] dark:bg-slate-950 p-6 lg:p-10 relative">
        <header className="lg:hidden flex items-center justify-between mb-6">
           <div className="flex items-center gap-3">
            <img src={LOGO_URL} alt="Sealth Logo" className="w-8 h-8 object-contain" />
            <span className="font-bold text-lg text-primary">Sealth</span>
          </div>
          <button onClick={auth.logout} className="p-2 text-slate-400 hover:text-primary transition-colors">
            <Icon name="logout" />
          </button>
        </header>

        <Routes>
          <Route index element={
            auth.user.role === UserRole.DOCTOR ? <DoctorDashboard /> :
            auth.user.role === UserRole.KITCHEN ? <KitchenDashboard /> :
            auth.user.role === UserRole.ADMIN ? <AdminDashboard /> :
            auth.user.role === UserRole.COACH ? <CoachDashboard /> :
            auth.user.role === UserRole.DELIVERY ? <DeliveryDashboard /> :
            <CustomerDashboard />
          } />
          {/* Default fallbacks */}
          <Route path="*" element={<div className="flex items-center justify-center h-[70vh] text-slate-400 font-medium">Coming Soon in V1.1</div>} />
        </Routes>
      </main>
    </div>
  );
};

export default DashboardContainer;
