
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Subscriptions from './pages/Subscriptions';
import DashboardContainer from './pages/dashboards/DashboardContainer';
import { UserRole, User } from './types';

// Mock Auth Hook
const useAuth = () => {
  const [user, setUser] = useState<User | null>(() => {
    const saved = localStorage.getItem('sealth_user');
    return saved ? JSON.parse(saved) : null;
  });

  const login = (role: UserRole) => {
    const mockUser: User = {
      id: '1',
      name: role === UserRole.DOCTOR ? 'Dr. Sarah Chen' : role === UserRole.ADMIN ? 'Admin Master' : 'Alexander Wright',
      email: `${role.toLowerCase()}@sealth.com`,
      role: role,
      avatar: 'https://picsum.photos/200'
    };
    setUser(mockUser);
    localStorage.setItem('sealth_user', JSON.stringify(mockUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('sealth_user');
  };

  return { user, login, logout };
};

export const AuthContext = React.createContext<{
  user: User | null;
  login: (role: UserRole) => void;
  logout: () => void;
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
