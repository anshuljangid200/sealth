
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Subscriptions from './pages/Subscriptions';
import DashboardContainer from './pages/dashboards/DashboardContainer';
import { UserRole, User } from './types';

// Mock Auth Hook
const useAuth = () => {
  const [user, setUser] = useState<User & { hasActiveSubscription?: boolean } | null>(() => {
    const saved = localStorage.getItem('sealth_user');
    return saved ? JSON.parse(saved) : null;
  });

  const [hasActiveSubscription, setHasActiveSubscription] = useState<boolean>(() => {
    return localStorage.getItem('sealth_paid') === 'true';
  });

  const login = (userData: User) => {
    setUser(userData);
    localStorage.setItem('sealth_user', JSON.stringify(userData));
  };

  const setPaid = (status: boolean) => {
    setHasActiveSubscription(status);
    localStorage.setItem('sealth_paid', status ? 'true' : 'false');
  };

  const logout = () => {
    setUser(null);
    setHasActiveSubscription(false);
    localStorage.removeItem('sealth_user');
    localStorage.removeItem('sealth_paid');
  };

  return { user, hasActiveSubscription, login, logout, setPaid };
};

export const AuthContext = React.createContext<{
  user: User | null;
  hasActiveSubscription: boolean;
  login: (userData: User) => void;
  logout: () => void;
  setPaid: (status: boolean) => void;
} | null>(null);

const App: React.FC = () => {
  const auth = useAuth();

  return (
    <AuthContext.Provider value={auth}>
      <HashRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/subscriptions" element={<Subscriptions />} />
          <Route
            path="/dashboard/*"
            element={auth.user ? <DashboardContainer /> : <Navigate to="/login" />}
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </HashRouter>
    </AuthContext.Provider>
  );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default App;
