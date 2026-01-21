
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { LOGO_URL, MOCK_MEAL_PLANS } from '../constants';
import { Button, Card, Icon, Badge, cn } from '../components/UI';
import { Check, Sparkles, Zap, Shield, ArrowRight, Info, Coffee, Utensils, HeartPulse, Clock } from 'lucide-react';

const Subscriptions: React.FC = () => {
  const navigate = useNavigate();
  const [preferences, setPreferences] = useState<string[]>([]);
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null);

  const togglePref = (p: string) => {
    setPreferences(prev => prev.includes(p) ? prev.filter(x => x !== p) : [...prev, p]);
  };

  const prefIcons: Record<string, React.ReactNode> = {
    'Gluten Free': <Shield className="w-4 h-4 text-blue-500" />,
    'Dairy Free': <Sparkles className="w-4 h-4 text-purple-500" />,
    'Keto Friendly': <Zap className="w-4 h-4 text-orange-500" />,
    'Nut Allergy': <Info className="w-4 h-4 text-rose-500" />
  };

  return (
    <div className="min-h-screen bg-[#FDFDFD] dark:bg-slate-950 selection:bg-primary/20">
      <nav className="fixed top-0 w-full z-50 bg-white/70 dark:bg-slate-950/70 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-800/50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-lg rounded-full group-hover:bg-primary/30 transition-colors"></div>
              <img src={LOGO_URL} alt="Sealth Logo" className="h-10 w-auto relative" />
            </div>
            <span className="text-xl font-black tracking-tighter text-slate-900 dark:text-white">SEALTH</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link to="/login">
              <Button variant="ghost" className="text-sm font-bold">Sign In</Button>
            </Link>
            <Link to="/subscriptions">
              <Button className="text-sm font-black px-6 shadow-xl shadow-primary/20">Get Started</Button>
            </Link>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 pt-40 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <Badge className="mb-6 bg-primary/5 text-primary border border-primary/10 px-4 py-2">Subscription Plans</Badge>
          <h1 className="text-5xl lg:text-7xl font-black mb-8 tracking-tighter leading-[0.9] text-slate-900 dark:text-white">
            Your Health, <br /><span className="text-primary italic font-serif">Simplified.</span>
          </h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-xl font-medium leading-relaxed">
            Premium nutritionist-approved meals delivered to your doorstep. Seamlessly track your calories and consult experts.
          </p>
        </motion.div>

        {/* Personalization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <Card className="p-12 max-w-5xl mx-auto mb-20 relative overflow-hidden bg-slate-50/50 border-slate-200/50">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <Sparkles className="w-32 h-32 text-primary" />
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-10 mb-12">
              <div className="flex-1 text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-orange-100 dark:bg-orange-500/10 text-orange-600 text-[10px] font-black uppercase tracking-widest mb-4">
                  <Coffee className="w-3 h-3" />
                  Personalization Engine
                </div>
                <h3 className="text-3xl font-black mb-3 tracking-tight dark:text-white">Customize Your Experience</h3>
                <p className="text-slate-500 text-lg font-medium leading-relaxed max-w-md">Select preferences or goals. We tailor every tiffin to your unique biology.</p>
              </div>

              <div className="flex items-center gap-2 bg-slate-200/50 dark:bg-slate-800/50 p-1.5 rounded-2xl border border-slate-300/30">
                <button className="px-8 py-3 rounded-xl bg-white dark:bg-slate-700 shadow-xl shadow-slate-200/20 text-sm font-black text-slate-900 dark:text-white">Standard</button>
                <button className="px-8 py-3 rounded-xl text-sm font-black text-slate-500 hover:text-slate-700 transition-colors">Customized</button>
              </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {['Gluten Free', 'Dairy Free', 'Keto Friendly', 'Nut Allergy'].map(p => (
                <button
                  key={p}
                  onClick={() => togglePref(p)}
                  className={cn(
                    "p-6 rounded-[2rem] border-2 text-sm font-black transition-all flex flex-col gap-4 items-start text-left relative group",
                    preferences.includes(p)
                      ? "border-primary bg-white dark:bg-slate-800 shadow-2xl shadow-primary/10 text-slate-900 dark:text-white"
                      : "border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 hover:border-primary/50 text-slate-500"
                  )}
                >
                  <div className={cn(
                    "h-10 w-10 rounded-2xl flex items-center justify-center transition-colors shadow-sm",
                    preferences.includes(p) ? "bg-primary/10" : "bg-slate-100 dark:bg-slate-800"
                  )}>
                    {prefIcons[p]}
                  </div>
                  <span>{p}</span>
                  {preferences.includes(p) && (
                    <motion.div
                      layoutId="pref-check"
                      className="absolute top-6 right-6 h-5 w-5 bg-primary text-white rounded-full flex items-center justify-center"
                    >
                      <Check className="w-3 h-3" />
                    </motion.div>
                  )}
                </button>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Plan Grid */}
        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto mb-32">
          {MOCK_MEAL_PLANS.map(plan => (
            <div
              key={plan.id}
              className="relative"
              onMouseEnter={() => setHoveredPlan(plan.id)}
              onMouseLeave={() => setHoveredPlan(null)}
            >
              <Card
                className={cn(
                  "p-12 relative overflow-hidden transition-all duration-500 h-full flex flex-col border-2",
                  plan.isPremium
                    ? "border-primary/50 bg-white/80 dark:bg-slate-950/80 shadow-2xl shadow-primary/10"
                    : "border-slate-200/50 hover:border-primary/30"
                )}
              >
                {plan.isPremium && (
                  <div className="absolute top-0 right-0 p-8 pointer-events-none opacity-10">
                    <Sparkles className="w-48 h-48 text-primary" />
                  </div>
                )}

                <div className="mb-10 relative z-10">
                  <Badge
                    variant={plan.isPremium ? 'warning' : 'info'}
                    className={cn(
                      "mb-6 px-4 py-1.5",
                      plan.isPremium ? "bg-primary text-white" : "bg-slate-100 text-slate-500"
                    )}
                  >
                    {plan.tag}
                  </Badge>
                  <h2 className="text-4xl font-black mb-4 dark:text-white tracking-tight">{plan.name}</h2>
                  <div className="flex items-baseline gap-2">
                    <span className="text-6xl font-black text-slate-900 dark:text-white tracking-tighter">₹{plan.price}</span>
                    <span className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">/ {plan.duration}</span>
                  </div>
                </div>

                <ul className="space-y-5 mb-12 flex-1 relative z-10">
                  {plan.features.map((f, i) => (
                    <li key={f} className="flex items-center gap-4 text-slate-600 dark:text-slate-400 font-bold text-sm">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3.5 h-3.5 text-primary" />
                      </div>
                      {f}
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={() => navigate('/login')}
                  className={cn(
                    "w-full h-16 py-4 text-lg rounded-2xl group shadow-2xl",
                    plan.isPremium
                      ? "bg-primary text-white shadow-primary/20"
                      : "bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-slate-900/20"
                  )}
                >
                  {plan.isPremium ? 'Subscribe to Elite' : 'Start Journey'}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform ml-2" />
                </Button>
              </Card>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <section className="mt-32 relative">
          <div className="text-center mb-20">
            <h3 className="text-4xl lg:text-5xl font-black tracking-tight mb-4 dark:text-white">Full Transparency</h3>
            <p className="text-slate-500 font-medium text-lg">Compare our plans and find your perfect balance.</p>
          </div>

          <Card className="overflow-hidden border-slate-200/50 bg-white/50 backdrop-blur-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-800">
                    <th className="p-10 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Core Benefits</th>
                    <th className="p-10 text-xl font-black dark:text-white">Basic</th>
                    <th className="p-10 text-xl font-black text-primary">Monthly Elite</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {[
                    { name: 'Organic Ingredients', weekly: true, monthly: true, icon: Utensils },
                    { name: 'Nutritionist Approved', weekly: false, monthly: true, icon: HeartPulse },
                    { name: 'Detailed Dashboard', weekly: false, monthly: true, icon: Zap },
                    { name: 'Flexible Pausing', weekly: '6 times', monthly: 'Unlimited', icon: Clock },
                    { name: 'Expert Consultations', weekly: '-', monthly: '1 Monthly', icon: Info }
                  ].map((row, idx) => (
                    <motion.tr
                      key={row.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors"
                    >
                      <td className="p-10">
                        <div className="flex items-center gap-4">
                          <div className="h-10 w-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 group-hover:text-primary transition-colors">
                            <row.icon className="w-5 h-5" />
                          </div>
                          <span className="font-bold text-slate-700 dark:text-slate-200">{row.name}</span>
                        </div>
                      </td>
                      <td className="p-10">
                        {typeof row.weekly === 'boolean'
                          ? row.weekly ? <div className="h-8 w-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center"><Check className="text-slate-400 h-4 w-4" /></div> : <div className="h-0.5 w-4 bg-slate-200 rounded-full" />
                          : <span className="text-sm font-bold text-slate-500">{row.weekly}</span>
                        }
                      </td>
                      <td className="p-10">
                        <div className="flex items-center gap-3">
                          {typeof row.monthly === 'boolean'
                            ? row.monthly ? <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center"><Check className="text-primary h-4 w-4" /></div> : '-'
                            : <span className="text-sm font-black text-primary">{row.monthly}</span>
                          }
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </section>
      </main>

      <footer className="bg-slate-950 text-slate-400 py-32 mt-32 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-800 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-20 relative z-10">
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-8">
              <img src={LOGO_URL} alt="Sealth Logo" className="h-8 w-auto invert opacity-80" />
              <span className="text-2xl font-black text-white tracking-tighter">SEALTH</span>
            </div>
            <p className="leading-relaxed font-medium">The future of conscious eating. Premium health-tech solutions for the modern achiever.</p>
          </div>
          <div>
            <h5 className="font-black text-white mb-8 uppercase tracking-widest text-[10px]">Product</h5>
            <ul className="space-y-5 font-bold text-sm">
              <li className="hover:text-primary transition-colors cursor-pointer">Food Subscriptions</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Health Dashboard</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Expert Network</li>
            </ul>
          </div>
          <div>
            <h5 className="font-black text-white mb-8 uppercase tracking-widest text-[10px]">Resources</h5>
            <ul className="space-y-5 font-bold text-sm">
              <li className="hover:text-primary transition-colors cursor-pointer">Nutritional Blog</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Meal Prepping</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Eco Report</li>
            </ul>
          </div>
          <div>
            <h5 className="font-black text-white mb-8 uppercase tracking-widest text-[10px]">Security</h5>
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-xs font-bold">HIPAA Compliant</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-secondary" />
                <span className="text-xs font-bold">FSSAI Certified</span>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-24 pt-10 border-t border-slate-900 flex justify-between items-center text-[10px] font-black uppercase tracking-[0.2em]">
          <p>© 2026 Sealth Tech PVT LTD.</p>
          <div className="flex gap-8">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Subscriptions;
