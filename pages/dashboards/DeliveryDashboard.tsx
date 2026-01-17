
import React from 'react';
import { motion } from 'framer-motion';
import { Card, Icon, Button, Badge, Container, Grid, Section, cn } from '../../components/UI';
import {
   Navigation, Package, Clock, Star, TrendingUp,
   Wallet, ShieldCheck, MapPin, Phone, CheckCircle2,
   Zap, AlertCircle
} from 'lucide-react';

const DeliveryDashboard: React.FC = () => {
   const tasks = [
      { id: 'DEL-2201', address: '12-B Skyview Residency, Koramangala', customer: 'Arjun Mehta', time: '12:45 PM', status: 'Picked Up', distance: '1.2 km' },
      { id: 'DEL-2205', address: 'Plot 44, Green Meadows, Worli', customer: 'Meera Reddy', time: '01:15 PM', status: 'Ready', distance: '3.5 km' },
   ];

   const stats = [
      { label: 'Today Deliveries', value: '14', icon: Package, color: 'text-primary' },
      { label: 'Avg Rating', value: '4.9', icon: Star, color: 'text-amber-500' },
      { label: 'On-Time Rate', value: '98%', icon: Clock, color: 'text-emerald-500' },
   ];

   return (
      <div className="animate-fade-in space-y-10">
         {/* Header */}
         <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-1">
               <h1 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight">Logistics Terminal</h1>
               <p className="text-slate-500 font-medium tracking-tight">Real-time route optimization and earnings tracking.</p>
            </div>
            <div className="flex items-center gap-4">
               <div className="bg-emerald-50 dark:bg-emerald-950/20 text-emerald-600 dark:text-emerald-400 px-6 py-3 rounded-2xl flex items-center gap-3 border border-emerald-100 dark:border-emerald-900/40">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
                  <span className="text-[10px] font-black uppercase tracking-widest italic">Available for Dispatch</span>
               </div>
            </div>
         </header>

         {/* Main Grid */}
         <Grid cols={3}>
            {/* Active Deliveries */}
            <div className="lg:col-span-2 space-y-8">
               <Card className="p-0 overflow-hidden">
                  <div className="p-8 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                     <div className="flex items-center gap-3">
                        <Navigation className="w-5 h-5 text-primary" />
                        <h3 className="text-lg font-black text-slate-900 dark:text-white italic uppercase tracking-tight">Active Tasks</h3>
                     </div>
                     <Badge variant="info" className="font-black italic px-4 py-1">2 Active</Badge>
                  </div>
                  <div className="divide-y divide-slate-50 dark:divide-slate-800">
                     {tasks.map((task, i) => (
                        <div key={i} className="p-8 hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-all group">
                           <div className="flex justify-between items-start mb-8">
                              <div className="space-y-2">
                                 <Badge variant="outline" className="font-black italic text-[9px] px-2">{task.id}</Badge>
                                 <h4 className="font-black text-slate-900 dark:text-white text-xl italic tracking-tight flex items-center gap-3">
                                    <MapPin className="w-5 h-5 text-primary" /> {task.address}
                                 </h4>
                                 <p className="text-xs text-slate-500 font-medium">Recipient: <span className="text-slate-900 dark:text-white font-black italic">{task.customer}</span></p>
                              </div>
                              <div className="text-right space-y-1">
                                 <p className="text-xs font-black text-primary italic tracking-tight">Est. {task.time}</p>
                                 <p className="text-[9px] font-black text-slate-300 uppercase tracking-[0.2em] italic">{task.status}</p>
                                 <p className="text-[10px] font-black text-slate-400 italic">{task.distance}</p>
                              </div>
                           </div>
                           <div className="flex gap-4">
                              <Button className="flex-1 h-12 bg-slate-900 dark:bg-white dark:text-slate-900 text-white border-none text-[10px] font-black uppercase tracking-widest italic shadow-lg shadow-black/10">
                                 <Navigation className="w-3.5 h-3.5 mr-2" /> Start Navigation
                              </Button>
                              <Button variant="outline" className="flex-1 h-12 border-slate-200 dark:border-slate-800 text-[10px] font-black uppercase tracking-widest italic group">
                                 Confirm Delivery <CheckCircle2 className="w-3.5 h-3.5 ml-2 group-hover:text-emerald-500 transition-colors" />
                              </Button>
                           </div>
                        </div>
                     ))}
                  </div>
               </Card>

               {/* Historical Pulse */}
               <Card className="p-8">
                  <h3 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-widest italic mb-10">Performance Pulse</h3>
                  <div className="grid grid-cols-3 gap-8">
                     {stats.map((stat, i) => (
                        <div key={i} className="space-y-4 text-center">
                           <div className={cn("w-14 h-14 rounded-2xl mx-auto flex items-center justify-center bg-slate-50 dark:bg-slate-800/50", stat.color)}>
                              <stat.icon className="w-6 h-6" />
                           </div>
                           <div>
                              <h5 className="text-3xl font-black text-slate-900 dark:text-white italic tabular-nums tracking-tighter">{stat.value}</h5>
                              <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mt-1 italic">{stat.label}</p>
                           </div>
                        </div>
                     ))}
                  </div>
               </Card>
            </div>

            {/* Wallet & Notifications */}
            <div className="space-y-8">
               {/* Dark Wallet Card */}
               <Card className="p-8 bg-slate-950 text-white border-none relative overflow-hidden group shadow-2xl shadow-primary/10">
                  <div className="absolute top-0 right-0 p-8 opacity-5 transform scale-150 rotate-12 group-hover:rotate-0 transition-transform duration-700">
                     <Wallet className="text-[10rem] text-primary" />
                  </div>
                  <div className="relative z-10">
                     <h3 className="text-sm font-black italic uppercase tracking-widest mb-1 text-slate-500">Live Wallet</h3>
                     <h2 className="text-6xl font-black italic tracking-tighter mb-10 tabular-nums"><span className="text-primary mr-2">₹</span>1,452</h2>

                     <div className="space-y-5 mb-10 border-b border-white/5 pb-10">
                        <div className="flex justify-between items-center text-xs">
                           <span className="text-slate-500 font-medium">Base Payouts</span>
                           <span className="font-black italic">₹850.00</span>
                        </div>
                        <div className="flex justify-between items-center text-xs">
                           <span className="text-slate-500 font-medium">Sealth Smart Tips</span>
                           <span className="text-emerald-400 font-black italic">+₹602.00</span>
                        </div>
                        <div className="flex justify-between items-center text-xs">
                           <span className="text-slate-500 font-medium">Platform Fee</span>
                           <span className="text-rose-400 font-black italic">-₹0.00</span>
                        </div>
                     </div>

                     <Button className="w-full h-14 bg-primary hover:bg-primary-dark text-white border-none rounded-xl font-black italic uppercase tracking-widest transition-all shadow-lg shadow-primary/20">
                        Withdraw To UPI
                     </Button>
                  </div>
               </Card>

               {/* Zone Alerts */}
               <Card className="p-8 space-y-8">
                  <div className="flex items-center gap-3">
                     <Zap className="w-5 h-5 text-amber-500" />
                     <h3 className="text-sm font-black text-slate-900 dark:text-white italic uppercase tracking-tight">Zone Insights</h3>
                  </div>
                  <div className="space-y-6">
                     <div className="flex items-start gap-4 group">
                        <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center shrink-0">
                           <ShieldCheck className="w-5 h-5 text-blue-500" />
                        </div>
                        <p className="text-xs text-slate-500 font-medium leading-relaxed">
                           "Koramangala Sector 4 is a <span className="text-blue-500 font-black italic">Prime Zone</span>. All deliveries here have a +₹15 surge."
                        </p>
                     </div>
                     <div className="flex items-start gap-4 group">
                        <div className="w-10 h-10 rounded-xl bg-orange-50 dark:bg-orange-900/20 flex items-center justify-center shrink-0">
                           <AlertCircle className="w-5 h-5 text-orange-500" />
                        </div>
                        <p className="text-xs text-slate-500 font-medium leading-relaxed">
                           "Traffic alert on Worli-Sealink. Estimated delays of 10m. Optimize your route."
                        </p>
                     </div>
                  </div>
                  <Button variant="outline" className="w-full py-4 text-[9px] font-black uppercase tracking-widest italic">
                     Full Coverage Map
                  </Button>
               </Card>

               {/* Support Button */}
               <Button variant="ghost" className="w-full h-12 text-slate-400 font-black italic uppercase text-[9px] tracking-[0.2em]">
                  Contact Support Protocol
               </Button>
            </div>
         </Grid>
      </div>
   );
};

export default DeliveryDashboard;
