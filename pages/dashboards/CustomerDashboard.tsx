
import React from 'react';
import { motion } from 'framer-motion';
import { Card, Icon, Button, Badge, Container, Grid, Section, cn } from '../../components/UI';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../App';
import {
  TrendingUp, ArrowRight, Clock, MapPin,
  Flame, Footprints, Moon, Zap, ShoppingBag
} from 'lucide-react';

import { api } from '../../src/api/api';

const CustomerDashboard: React.FC = () => {
  const auth = React.useContext(AuthContext);
  const navigate = useNavigate();
  const [data, setData] = React.useState<any>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchData = async () => {
      if (auth?.user?.token) {
        try {
          const result = await api.dashboard.getData(auth.user.role, auth.user.token);
          setData(result);
        } catch (error) {
          console.error('Failed to fetch dashboard data:', error);
        } finally {
          setLoading(false);
        }
      }
    };
    fetchData();
  }, [auth?.user?.role, auth?.user?.token]);

  if (loading) return <div className="flex items-center justify-center h-64 text-slate-500 font-bold">Synchronizing Vital Data...</div>;

  return (
    <div className="animate-fade-in space-y-10">
      {/* Header Section */}
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-1">
          <h1 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight">Namaste, {auth?.user?.name || 'Aryan'}!</h1>
          <p className="text-slate-500 font-medium">Your metabolic efficiency is up 12% this week. Great progress!</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2">
            <Icon name="file_download" /> Health Report
          </Button>
          <Button className="gap-2" onClick={() => navigate('nutrition')}>
            <Icon name="add" /> Log Meal
          </Button>
        </div>
      </header>

      {/* Active Subscription Banner */}
      <section>
        <Card className="p-0 border-none bg-gradient-to-br from-primary/10 via-primary/5 to-transparent relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="p-8 lg:p-12 flex flex-col lg:flex-row items-center gap-12 relative z-10">
            <div className="flex-1 space-y-6">
              <Badge variant="success" className="bg-primary/10 text-primary border-primary/20">Active Subscription</Badge>
              <h2 className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                High-Protein <br />
                <span className="text-primary font-serif italic normal-case">Desi Fusion</span> Plan
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg font-medium max-w-lg leading-relaxed">
                Next: <span className="text-slate-900 dark:text-white font-bold">Paneer Tikka Quinoa Bowl</span> with Mint Chutney. Arrives tomorrow at 1:15 PM via Delivery Partner Sanjay.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Button className="px-8 h-12 rounded-2xl shadow-lg shadow-primary/20">
                  <MapPin className="w-4 h-4 mr-2" /> Track Meal
                </Button>
                <Button variant="outline" className="px-8 h-12 rounded-2xl" onClick={() => navigate('nutrition')}>
                  Modify Menu
                </Button>
              </div>
            </div>
            <div className="relative group shrink-0">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <img
                  src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=600"
                  alt="Health Meal"
                  className="w-72 h-72 lg:w-96 lg:h-96 rounded-full object-cover shadow-2xl border-[12px] border-white dark:border-slate-800 rotate-3 group-hover:rotate-0 transition-transform duration-700"
                />
                <div className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-900 p-5 rounded-[2rem] shadow-xl border border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary">
                      <Flame className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Est. Calories</p>
                      <p className="text-xl font-black text-slate-900 dark:text-white">540 Kcal</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </Card>
      </section>

      {/* Metrics & Experts Grid */}
      <Grid cols={3}>
        {/* Health Score */}
        <Card className="lg:col-span-1 p-8 flex flex-col items-center justify-center text-center relative group">
          <div className="absolute top-6 left-8">
            <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest">Health Index</h3>
          </div>
          <div className="relative w-56 h-56 flex items-center justify-center my-8">
            <svg className="w-full h-full transform -rotate-90">
              <circle cx="112" cy="112" r="104" fill="none" stroke="currentColor" strokeWidth="12" className="text-slate-100 dark:text-slate-800" />
              <motion.circle
                initial={{ strokeDashoffset: 653 }}
                animate={{ strokeDashoffset: 98 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                cx="112" cy="112" r="104" fill="none" stroke="currentColor" strokeWidth="12" strokeDasharray="653" className="text-primary"
              />
            </svg>
            <div className="absolute flex flex-col items-center">
              <span className="text-6xl font-black text-slate-900 dark:text-white tracking-tighter">88</span>
              <Badge variant="success" className="mt-2">Optimal</Badge>
            </div>
          </div>
          <p className="text-sm text-slate-500 font-medium max-w-[240px]">You are in the <span className="font-extrabold text-primary">top 3%</span> of health-conscious users in Mumbai.</p>
        </Card>

        {/* Vitals Snapshot */}
        <Card className="lg:col-span-1 p-8 space-y-8">
          <div className="flex justify-between items-center">
            <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest">Daily Vitals</h3>
            <div className="flex items-center gap-1 text-emerald-500">
              <TrendingUp className="w-4 h-4" />
              <span className="text-[10px] font-black italic">+5%</span>
            </div>
          </div>
          <div className="space-y-6">
            {[
              { label: 'Steps Today', current: '9,240', target: '12,000', icon: Footprints, color: 'text-blue-500', bg: 'bg-blue-50', progress: 77 },
              { label: 'Deep Sleep', current: '7h 12m', target: '8h', icon: Moon, color: 'text-purple-500', bg: 'bg-purple-50', progress: 90 },
              { label: 'Hydration', current: '2.4L', target: '3.5L', icon: Zap, color: 'text-amber-500', bg: 'bg-amber-50', progress: 68 },
            ].map(metric => (
              <div key={metric.label} className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center", metric.bg, metric.color)}>
                      <metric.icon className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-bold text-slate-900 dark:text-white">{metric.label}</span>
                  </div>
                  <span className="text-xs font-black text-slate-400">{metric.current} <span className="font-medium opacity-50">/ {metric.target}</span></span>
                </div>
                <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${metric.progress}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className={cn("h-full rounded-full", metric.bg.replace('50', '500'))}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Expert Consultation */}
        <Card className="lg:col-span-1 p-8 bg-slate-950 dark:bg-slate-900/50 border-none relative overflow-hidden group">
          <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-primary/20 blur-[80px] rounded-full group-hover:scale-125 transition-transform duration-700" />
          <div className="relative z-10 flex flex-col h-full">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest">Next Consultation</h3>
              <button onClick={() => navigate('consults')} className="p-2 text-white/40 hover:text-white transition-colors">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <div className="flex items-center gap-4 mb-8">
              <img
                src="https://i.pravatar.cc/150?u=ananya"
                alt=""
                className="w-16 h-16 rounded-2xl object-cover ring-4 ring-white/5"
              />
              <div>
                <h4 className="text-lg font-black text-white italic">Dr. Ananya S.</h4>
                <p className="text-[10px] font-black text-primary uppercase tracking-widest">Nutrition Lead</p>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-5 border border-white/5 space-y-4 flex-1">
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-primary" />
                <span className="text-xs font-bold text-white/80">Today, 5:30 PM (IST)</span>
              </div>
              <p className="text-xs text-white/60 font-medium leading-relaxed">Topic: Bio-individual micronutrient stacking for optimal recovery.</p>
            </div>

            <Button className="w-full mt-6 py-4 rounded-2xl bg-primary text-white font-black hover:bg-primary-dark transition-all shadow-xl shadow-primary/20" onClick={() => navigate('consults')}>
              Join Virtual Cabin
            </Button>
          </div>
        </Card>
      </Grid>

      {/* Quick Actions / Integration */}
      <Section className="py-0">
        <Grid cols={4}>
          {[
            { label: 'Order History', icon: ShoppingBag, path: 'nutrition' },
            { label: 'Workout Plan', icon: Zap, path: 'fitness' },
            { label: 'Health Vault', iconName: 'folder', path: 'records' },
            { label: 'Connect Sync', iconName: 'devices', path: '#' },
          ].map(item => (
            <button
              key={item.label}
              onClick={() => typeof item.path === 'string' && navigate(item.path)}
              className="bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 p-6 rounded-3xl flex items-center gap-4 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-slate-200/20 group text-left"
            >
              <div className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-400 group-hover:bg-primary/10 group-hover:text-primary transition-all">
                {item.iconName ? <Icon name={item.iconName} className="text-xl" /> : (item.icon && <item.icon className="w-5 h-5" />)}
              </div>
              <span className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-tight">{item.label}</span>
            </button>
          ))}
        </Grid>
      </Section>
    </div>
  );
};

export default CustomerDashboard;
