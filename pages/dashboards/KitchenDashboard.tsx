
import React from 'react';
import { motion } from 'framer-motion';
import { Card, Icon, Button, Badge, Container, Grid, Section, cn } from '../../components/UI';
import {
   Utensils, Clock, Flame, CheckCircle2, AlertTriangle,
   Box, ShoppingCart, TrendingUp, ChevronRight,
   ChefHat, Timer, MapPin
} from 'lucide-react';

const KitchenDashboard: React.FC = () => {
   const orders = [
      { id: 'ORD-4421', patient: 'Arjun Mehta', meal: 'Low-GI Paneer Tikka Salad', status: 'In-Prep', timer: '8m', tag: 'Diabetic Friendly', priority: 'High' },
      { id: 'ORD-4422', patient: 'Meera Reddy', meal: 'Keto Avocado & Grilled Chicken', status: 'Queued', timer: '12m', tag: 'High Protein', priority: 'Medium' },
      { id: 'ORD-4423', patient: 'Rahul Varma', meal: 'Moong Dal Khichdi Bowl', status: 'Ready', timer: '0m', tag: 'Easy Digest', priority: 'Normal' },
      { id: 'ORD-4424', patient: 'Suhana Singh', meal: 'Millet Upma with Sprouted Mung', status: 'In-Prep', timer: '4m', tag: 'Fiber Rich', priority: 'High' },
   ];

   const inventory = [
      { item: 'Organic Paneer', stock: 12, unit: 'kg', status: 'Low' },
      { item: 'Himalayan Pink Salt', stock: 45, unit: 'kg', status: 'Optimal' },
      { item: 'Cold Pressed Coconut Oil', stock: 5, unit: 'L', status: 'Critical' },
      { item: 'Sprouted Millets', stock: 20, unit: 'kg', status: 'Optimal' },
   ];

   return (
      <div className="animate-fade-in space-y-10">
         {/* Header */}
         <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-1">
               <div className="flex items-center gap-2 text-primary font-black uppercase tracking-[0.2em] text-[10px] mb-2">
                  <span className="relative flex h-2 w-2">
                     <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                     <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  Kitchen Live: 14 Active Nutritional Protocols
               </div>
               <h1 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight">Culinary Ops Center</h1>
               <p className="text-slate-500 font-medium tracking-tight">Precision nutrition assembly and real-time dispatch control.</p>
            </div>
            <div className="flex gap-3">
               <Button variant="outline" className="gap-2">
                  <Box className="w-4 h-4" /> Inventory Management
               </Button>
               <Button className="gap-2">
                  <Flame className="w-4 h-4" /> Live Heat Map
               </Button>
            </div>
         </header>

         {/* Kitchen Kanban Board */}
         <Grid cols={3}>
            {/* Incoming / Queued */}
            <div className="space-y-6">
               <div className="flex items-center justify-between px-2">
                  <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.25em] italic">Incoming Queue (06)</h3>
                  <Timer className="w-4 h-4 text-slate-300" />
               </div>
               {orders.filter(o => o.status === 'Queued').map((order, i) => (
                  <Card key={i} className="p-6 border-l-4 border-l-blue-500 hover:shadow-xl transition-all cursor-pointer group">
                     <div className="flex justify-between items-start mb-4">
                        <Badge variant="outline" className="font-black italic text-[8px] px-2 whitespace-nowrap">{order.id}</Badge>
                        <span className="text-[10px] font-bold text-slate-400 italic">{order.timer} wait</span>
                     </div>
                     <h4 className="font-black text-slate-900 dark:text-white text-lg italic tracking-tight mb-1">{order.meal}</h4>
                     <p className="text-xs text-slate-500 font-medium mb-6">For: <span className="text-slate-900 dark:text-white font-black italic">{order.patient}</span></p>

                     <div className="flex items-center gap-2 mb-6">
                        <AlertTriangle className="text-rose-500 w-3.5 h-3.5" />
                        <span className="text-[9px] font-black text-rose-500 uppercase tracking-widest">{order.tag}</span>
                     </div>

                     <Button className="w-full h-12 bg-blue-500 hover:bg-blue-600 text-white border-none text-[10px] font-black uppercase tracking-widest italic shadow-lg shadow-blue-500/10">Fire Assembly</Button>
                  </Card>
               ))}
            </div>

            {/* Preparing / Active Heat */}
            <div className="space-y-6">
               <div className="flex items-center justify-between px-2">
                  <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.25em] italic">On The Line (04)</h3>
                  <Flame className="w-4 h-4 text-orange-500 animate-pulse" />
               </div>
               {orders.filter(o => o.status === 'In-Prep').map((order, i) => (
                  <Card key={i} className="p-6 border-l-4 border-l-orange-500 bg-orange-50/10 dark:bg-orange-950/20 shadow-inner group">
                     <div className="flex justify-between items-start mb-4">
                        <Badge variant="warning" className="font-black italic text-[8px] px-2">{order.id}</Badge>
                        <div className="flex items-center gap-1.5 font-black text-[9px] text-orange-500 uppercase tracking-widest italic">
                           <div className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" /> Sizzling
                        </div>
                     </div>
                     <h4 className="font-black text-slate-900 dark:text-white text-lg italic tracking-tight mb-1">{order.meal}</h4>
                     <p className="text-xs text-slate-500 font-medium mb-6">Station: <span className="text-slate-900 dark:text-white font-black italic">Macro-Grill A1</span></p>

                     <div className="space-y-2 mb-8">
                        <div className="flex justify-between text-[8px] font-black text-slate-400 uppercase tracking-widest">
                           <span>Preparation Progress</span>
                           <span>75%</span>
                        </div>
                        <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                           <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: '75%' }}
                              className="h-full bg-orange-500 rounded-full shadow-lg shadow-orange-500/20"
                           />
                        </div>
                     </div>

                     <Button className="w-full h-12 bg-orange-500 hover:bg-orange-600 text-white border-none text-[10px] font-black uppercase tracking-widest italic shadow-lg shadow-orange-500/10">Ready for QC</Button>
                  </Card>
               ))}
            </div>

            {/* Ready / Dispatch */}
            <div className="space-y-6">
               <div className="flex items-center justify-between px-2">
                  <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.25em] italic">Dispatch Bay (02)</h3>
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
               </div>
               {orders.filter(o => o.status === 'Ready').map((order, i) => (
                  <Card key={i} className="p-6 border-l-4 border-l-emerald-500 group">
                     <div className="flex justify-between items-start mb-4">
                        <Badge variant="success" className="font-black italic text-[8px] px-2">{order.id}</Badge>
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                     </div>
                     <h4 className="font-black text-slate-900 dark:text-white text-lg italic tracking-tight mb-1">{order.meal}</h4>
                     <p className="text-xs text-slate-500 font-medium mb-6">Awaiting: <span className="text-emerald-500 font-black italic">Dispatch Partner</span></p>

                     <div className="bg-emerald-50/50 dark:bg-emerald-950/20 p-4 rounded-2xl mb-6 flex items-center gap-4 border border-emerald-100 dark:border-emerald-900/40">
                        <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-900 flex items-center justify-center shadow-sm">
                           <MapPin className="w-5 h-5 text-emerald-500" />
                        </div>
                        <div>
                           <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Courier Tracked</p>
                           <p className="text-xs font-black text-slate-900 dark:text-white italic">Ravi M. (2.4 km away)</p>
                        </div>
                     </div>

                     <Button variant="outline" className="w-full h-12 border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-[10px] font-black uppercase tracking-widest italic group">
                        Confirm Hand-over <ChevronRight className="w-3.5 h-3.5 ml-2 group-hover:translate-x-1 transition-transform" />
                     </Button>
                  </Card>
               ))}
            </div>
         </Grid>

         {/* Inventory & Analytics */}
         <Grid cols={3}>
            <Card className="lg:col-span-2 p-8 border-none bg-slate-950 text-white relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-8 opacity-5 transform scale-150 rotate-12">
                  <ChefHat className="text-[12rem]" />
               </div>
               <div className="relative z-10 space-y-8">
                  <div className="flex items-center justify-between">
                     <h3 className="text-xl font-black italic uppercase tracking-tight flex items-center gap-3">
                        <ShoppingCart className="w-5 h-5 text-primary" /> Stock Sentinel
                     </h3>
                     <Button variant="glass" className="h-10 text-[9px] font-black uppercase tracking-widest">Global Order</Button>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                     {inventory.map((item, i) => (
                        <div key={i} className="space-y-2">
                           <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{item.item}</p>
                           <div className="flex items-end gap-2">
                              <h4 className="text-2xl font-black italic tabular-nums">{item.stock}</h4>
                              <span className="text-[10px] font-bold text-slate-500 mb-1">{item.unit}</span>
                           </div>
                           <Badge variant={item.status === 'Critical' ? 'error' : item.status === 'Low' ? 'warning' : 'success'} className="text-[7px] py-0 px-1.5 h-4 opacity-80">
                              {item.status}
                           </Badge>
                        </div>
                     ))}
                  </div>
               </div>
            </Card>

            <Card className="p-8 group hover:border-primary/40 transition-all cursor-pointer">
               <div className="flex items-center gap-3 mb-6">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  <h3 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-widest italic">Efficiency Peak</h3>
               </div>
               <div className="space-y-1 mb-8">
                  <h4 className="text-4xl font-black text-slate-900 dark:text-white italic tracking-tighter tabular-nums">1.4s</h4>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Avg QC Latency (Today)</p>
               </div>
               <div className="h-20 flex items-end gap-1">
                  {[40, 70, 45, 90, 65, 80, 50, 95].map((h, i) => (
                     <div key={i} className="flex-1 bg-primary/10 rounded-t-md relative group/bar">
                        <motion.div
                           initial={{ height: 0 }}
                           animate={{ height: `${h}%` }}
                           className="absolute bottom-0 left-0 right-0 bg-primary/40 rounded-t-md group-hover/bar:bg-primary transition-all"
                        />
                     </div>
                  ))}
               </div>
            </Card>
         </Grid>
      </div>
   );
};

export default KitchenDashboard;
