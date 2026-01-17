
import React from 'react';
import { motion } from 'framer-motion';
import { Card, Icon, Button, Badge, Container, Grid, Section, cn } from '../../components/UI';
import {
   Activity, ShieldCheck, Database, Zap, TrendingUp,
   TrendingDown, Users, DollarSign, Settings, Bell,
   ArrowUpRight, BarChart3, Globe, Lock
} from 'lucide-react';

const AdminDashboard: React.FC = () => {
   const kpis = [
      { label: 'Platform Revenue (MTD)', value: '₹14.2M', trend: '+22%', icon: DollarSign, color: 'text-emerald-500', bg: 'bg-emerald-50' },
      { label: 'Active Metabolic Nodes', value: '12,492', trend: '+1.2k', icon: Users, color: 'text-blue-500', bg: 'bg-blue-50' },
      { label: 'Supply Chain Efficiency', value: '98.4%', trend: 'Optimal', icon: Zap, color: 'text-amber-500', bg: 'bg-amber-50' },
      { label: 'Expert Network', value: '154', trend: '9 Live', icon: ShieldCheck, color: 'text-purple-500', bg: 'bg-purple-50' },
   ];

   const regions = [
      { name: 'Mumbai North', load: '82%', status: 'Normal' },
      { name: 'Bangalore South', load: '94%', status: 'Peak' },
      { name: 'Delhi NCR', load: '45%', status: 'Low' },
      { name: 'Hyderabad West', load: '76%', status: 'Normal' },
   ];

   return (
      <div className="animate-fade-in space-y-10">
         {/* Header */}
         <header className="flex flex-col md:row items-center justify-between gap-6">
            <div className="space-y-1">
               <h1 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight">System Intelligence</h1>
               <p className="text-slate-500 font-medium tracking-tight">Pan-India ecosystem monitoring and enterprise-grade analytics.</p>
            </div>
            <div className="flex gap-3">
               <Button variant="outline" className="gap-2">
                  <Settings className="w-4 h-4" /> Global Config
               </Button>
               <Button className="gap-2">
                  <Activity className="w-4 h-4" /> Audit Logs
               </Button>
            </div>
         </header>

         {/* KPI Grid */}
         <Grid cols={4}>
            {kpis.map((kpi, i) => (
               <Card key={i} className="p-8 group hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                  <div className="flex justify-between items-start mb-6">
                     <div className={cn("w-14 h-14 rounded-[1.5rem] flex items-center justify-center transition-transform group-hover:scale-110 shadow-sm", kpi.bg, kpi.color)}>
                        <kpi.icon className="w-6 h-6" />
                     </div>
                     <Badge variant="success" className="font-black italic px-3 py-1 text-[9px]">{kpi.trend}</Badge>
                  </div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1 italic">{kpi.label}</p>
                  <h4 className="text-3xl font-black text-slate-900 dark:text-white italic tracking-tighter tabular-nums">{kpi.value}</h4>
               </Card>
            ))}
         </Grid>

         {/* Main Content Area */}
         <Grid cols={3}>
            {/* Revenue & Growth Chart */}
            <Card className="lg:col-span-2 p-10 flex flex-col border-none bg-slate-950 text-white relative overflow-hidden shadow-2xl shadow-primary/10">
               <div className="absolute top-0 right-0 p-8 opacity-5 transform scale-150 rotate-12">
                  <BarChart3 className="text-[15rem] text-primary" />
               </div>
               <div className="relative z-10">
                  <div className="flex justify-between items-center mb-12">
                     <div className="space-y-1">
                        <h3 className="text-xl font-black italic uppercase tracking-tight">Subscription Kinetic Growth</h3>
                        <p className="text-xs text-slate-500 font-medium">Monthly Recurring Revenue (MRR) projection for 2026.</p>
                     </div>
                     <div className="flex gap-2">
                        <Button variant="glass" className="h-9 px-4 text-[9px] font-black italic">Monthly</Button>
                        <Button variant="ghost" className="h-9 px-4 text-[9px] font-black italic text-slate-400">Quarterly</Button>
                     </div>
                  </div>

                  <div className="flex-1 min-h-[250px] w-full flex items-end justify-between gap-4 border-b border-white/5 pb-2">
                     {[60, 40, 80, 50, 90, 70, 100, 85, 95, 110, 105, 120].map((h, i) => (
                        <div key={i} className="flex-1 relative group/bar">
                           <motion.div
                              initial={{ height: 0 }}
                              animate={{ height: `${h * 0.7}%` }}
                              className="bg-primary/20 w-full rounded-t-lg transition-all group-hover/bar:bg-primary"
                           />
                           <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover/bar:opacity-100 transition-opacity whitespace-nowrap">
                              <span className="text-[10px] font-black tabular-nums">₹{(h * 0.1).toFixed(1)}M</span>
                           </div>
                        </div>
                     ))}
                  </div>
                  <div className="flex justify-between mt-6 text-[9px] font-black text-slate-500 uppercase tracking-widest italic font-mono">
                     <span>JUL 25</span>
                     <span>JAN 26</span>
                     <span>JUN 26</span>
                  </div>
               </div>
            </Card>

            {/* System Health Column */}
            <div className="space-y-8">
               <Card className="p-8">
                  <div className="flex items-center gap-3 mb-8">
                     <Database className="w-5 h-5 text-primary" />
                     <h3 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-widest italic">Node Status</h3>
                  </div>
                  <div className="space-y-6">
                     {regions.map((reg, i) => (
                        <div key={i} className="space-y-2">
                           <div className="flex justify-between text-[10px] font-black uppercase tracking-widest italic">
                              <span className="text-slate-400">{reg.name}</span>
                              <span className={cn(reg.status === 'Peak' ? 'text-rose-500' : 'text-primary')}>{reg.load}</span>
                           </div>
                           <div className="w-full bg-slate-50 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                              <motion.div
                                 initial={{ width: 0 }}
                                 whileInView={{ width: reg.load }}
                                 viewport={{ once: true }}
                                 className={cn("h-full rounded-full transition-all duration-1000", reg.status === 'Peak' ? 'bg-rose-500 shadow-lg shadow-rose-500/20' : 'bg-primary shadow-lg shadow-primary/20')}
                              />
                           </div>
                        </div>
                     ))}
                  </div>
                  <Button variant="outline" className="w-full mt-10 h-12 text-[10px] font-black uppercase tracking-widest italic border-slate-100 dark:border-slate-800">
                     Optimize Clusters
                  </Button>
               </Card>

               <Card className="p-8 border-none bg-primary text-white relative overflow-hidden group shadow-xl shadow-primary/20">
                  <div className="absolute top-0 right-0 p-6 opacity-10 transform scale-150 group-hover:rotate-12 transition-transform">
                     <Lock className="text-7xl" />
                  </div>
                  <div className="relative z-10">
                     <h3 className="text-lg font-black italic uppercase tracking-tight mb-2">Compliance Shield</h3>
                     <p className="text-white/80 text-xs font-medium mb-8 leading-relaxed">
                        Dec 2025 Audit: <span className="text-white font-black">100% Tax Compliant</span>. GST & RBI licensing protocols active.
                     </p>
                     <Button variant="glass" className="w-full h-12 text-[9px] font-black uppercase tracking-widest italic border-white/20">
                        View Certificates <ArrowUpRight className="w-3 h-3 ml-2" />
                     </Button>
                  </div>
               </Card>
            </div>
         </Grid>

         {/* Quick Actions Footer */}
         <Section className="py-0">
            <Card className="p-10 flex flex-wrap items-center justify-center gap-6">
               <div className="text-center sm:text-left mr-auto">
                  <h4 className="text-lg font-black text-slate-900 dark:text-white italic tracking-tight mb-1">Administrative Protocols</h4>
                  <p className="text-xs text-slate-500 font-medium">Quick access to ecosystem management tools.</p>
               </div>
               {['Manage Tiffins', 'Expert Verification', 'Content Studio', 'Security Audit', 'Global Search'].map(action => (
                  <Button key={action} variant="ghost" className="h-12 px-6 bg-slate-50 dark:bg-slate-800 text-[10px] font-black uppercase tracking-widest italic hover:bg-slate-100 dark:hover:bg-slate-900 transition-all border border-transparent hover:border-slate-200 dark:hover:border-slate-700">
                     {action}
                  </Button>
               ))}
            </Card>
         </Section>
      </div>
   );
};

export default AdminDashboard;
