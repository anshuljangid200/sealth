
import React, { useContext, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { AuthContext } from '../App';
import { UserRole } from '../types';
import { Button, Card, Icon, cn } from '../components/UI';
import { LOGO_URL, getRoleLabel } from '../constants';
import { Mail, Lock, ArrowRight, UserCheck, Stethoscope, Settings, ShieldCheck, Key } from 'lucide-react';

const Login: React.FC = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const [role, setRole] = useState<UserRole>(UserRole.CUSTOMER);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 800));
    auth?.login(role);
    navigate('/dashboard');
  };

  const roleIcons = {
    [UserRole.CUSTOMER]: <UserCheck className="w-4 h-4" />,
    [UserRole.DOCTOR]: <Stethoscope className="w-4 h-4" />,
    [UserRole.ADMIN]: <Settings className="w-4 h-4" />,
    [UserRole.COACH]: <Icon name="fitness_center" className="w-4 h-4" />,
    [UserRole.KITCHEN]: <Icon name="restaurant" className="w-4 h-4" />,
    [UserRole.DELIVERY]: <Icon name="local_shipping" className="w-4 h-4" />
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-[#FDFDFD] dark:bg-slate-950 relative overflow-hidden">
      {/* Abstract Background Decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-lg relative z-10"
      >
        <div className="text-center mb-12">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Link to="/" className="inline-block group">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full group-hover:bg-primary/30 transition-colors"></div>
                <img src={LOGO_URL} alt="Sealth Logo" className="h-20 w-20 mx-auto relative drop-shadow-2xl rounded-[2rem] object-cover" />
              </div>
            </Link>
          </motion.div>
          <h1 className="text-4xl font-black text-slate-900 dark:text-white mb-3 tracking-tight">Welcome Back</h1>
          <p className="text-slate-500 font-medium text-lg">Your journey to holistic health starts here.</p>
        </div>

        <Card className="p-10 shadow-2xl shadow-slate-200/50 dark:shadow-none border-slate-200/50">
          <form onSubmit={handleLogin} className="space-y-8">
            <div className="space-y-4">
              <label className="text-xs font-black uppercase tracking-widest text-slate-400 block ml-1">Continue as</label>
              <div className="grid grid-cols-3 gap-3 p-1.5 bg-slate-100/50 dark:bg-slate-800/50 rounded-2xl border border-slate-200/50 dark:border-slate-700/50">
                {(Object.keys(UserRole) as Array<keyof typeof UserRole>).map((r) => (
                  <button
                    key={r}
                    type="button"
                    onClick={() => setRole(UserRole[r])}
                    className={cn(
                      "py-3 rounded-xl text-xs font-black transition-all flex flex-col items-center gap-2",
                      role === UserRole[r]
                        ? 'bg-white dark:bg-slate-700 text-primary shadow-sm ring-1 ring-slate-200 dark:ring-slate-600'
                        : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
                    )}
                  >
                    {roleIcons[UserRole[r]]}
                    {getRoleLabel(UserRole[r])}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-5">
              <div className="space-y-2">
                <label className="block text-sm font-black text-slate-700 dark:text-slate-300 ml-1">Email Address</label>
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <input
                    type="email"
                    placeholder="name@sealth.com"
                    defaultValue={`${role.toLowerCase()}@sealth.com`}
                    required
                    className="w-full pl-12 pr-4 py-4 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl focus:ring-4 focus:ring-primary/10 focus:border-primary focus:bg-white dark:focus:bg-slate-800 outline-none transition-all font-medium"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center ml-1">
                  <label className="block text-sm font-black text-slate-700 dark:text-slate-300">Password</label>
                  <button type="button" className="text-xs font-bold text-primary hover:underline">Forgot?</button>
                </div>
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors">
                    <Lock className="w-5 h-5" />
                  </div>
                  <input
                    type="password"
                    placeholder="••••••••"
                    defaultValue="password"
                    required
                    className="w-full pl-12 pr-4 py-4 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl focus:ring-4 focus:ring-primary/10 focus:border-primary focus:bg-white dark:focus:bg-slate-800 outline-none transition-all font-medium"
                  />
                </div>
              </div>
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full py-5 text-lg rounded-2xl h-16 relative overflow-hidden group shadow-2xl shadow-primary/20"
            >
              <span className={cn("flex items-center gap-2", isLoading && "opacity-0")}>
                Sign In to Dashboard
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
                </div>
              )}
            </Button>
          </form>

          <div className="mt-10 pt-8 border-t border-slate-100 dark:border-slate-800 text-center">
            <p className="text-slate-500 font-bold text-sm">
              New to Sealth? <Link to="/subscriptions" className="text-primary font-black hover:underline ml-1">Schedule a Consultation</Link>
            </p>
          </div>
        </Card>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 flex flex-wrap justify-center items-center gap-8"
        >
          <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400">
            <ShieldCheck className="w-4 h-4 text-primary" />
            E2E Encrypted
          </div>
          <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400">
            <Key className="w-4 h-4 text-secondary" />
            HIPAA Compliant
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Login;
