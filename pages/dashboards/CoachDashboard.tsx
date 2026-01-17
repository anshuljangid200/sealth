
import React from 'react';
import { motion } from 'framer-motion';
import { Card, Icon, Button, Badge, Container, Grid, Section, cn } from '../../components/UI';
import {
   Users, Activity, Zap, TrendingUp, TrendingDown,
   Calendar, Clock, Dumbbell, Award, Plus,
   ChevronRight, MoreVertical, MessageCircle
} from 'lucide-react';

const CoachDashboard: React.FC = () => {
   const clients = [
      { name: 'Aryan Kapur', goal: 'Muscle Hypertrophy', status: 'Training', time: '15m remaining', score: 88, avatar: 'A' },
      { name: 'Suhana Singh', goal: 'Fat Loss Phase', status: 'Resting', time: 'Session @ 4:00 PM', score: 72, avatar: 'S' },
      { name: 'Rahul Varma', goal: 'Mobility & Yoga', status: 'Training', time: 'Just started', score: 94, avatar: 'R' },
      { name: 'Isha Mehra', goal: 'Strength Foundation', status: 'Post-Workout', time: '1h ago', score: 65, avatar: 'I' },
   ];

   const upcomingClasses = [
      { title: 'Surya Namaskar Flow', time: '07:00 AM', joiners: 12, intensity: 'Low' },
      { title: 'Functional Strength Desi', time: '09:30 AM', joiners: 18, intensity: 'High' },
      { title: 'Breathwork & Recovery', time: '11:00 AM', joiners: 8, intensity: 'Medium' },
   ];

   return (
      <div className="animate-fade-in space-y-10">
         {/* Header */}
         <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-1">
               <h1 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight">Coach Terminal</h1>
               <p className="text-slate-500 font-medium tracking-tight">Managing 32 high-performance metabolic transformations.</p>
            </div>
            <div className="flex gap-3">
               <Button variant="outline" className="gap-2">
                  <Calendar className="w-4 h-4" /> Class Schedule
               </Button>
               <Button className="gap-2">
                  <Plus className="w-4 h-4" /> Design Template
               </Button>
            </div>
         </header>

         {/* Quick Stats Grid */}
         <Grid cols={4}>
            {[
               { label: 'Avg Client Score', value: '82%', change: '+4%', icon: Activity, color: 'text-primary', bg: 'bg-primary/10' },
               { label: 'Active Sessions', value: '08', change: 'Current Hour', icon: Zap, color: 'text-amber-500', bg: 'bg-amber-50' },
               { label: 'Total Clients', value: '32', change: 'Capacity: 40', icon: Users, color: 'text-blue-500', bg: 'bg-blue-50' },
               { label: 'Success Rate', value: '96%', change: 'Last 30 days', icon: Award, color: 'text-emerald-500', bg: 'bg-emerald-50' },
            ].map((stat, i) => (
               <Card key={i} className="p-6 group hover:border-primary/40 transition-all cursor-pointer">
                  <div className="flex items-center gap-5">
                     <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110", stat.bg, stat.color)}>
                        <stat.icon className="w-6 h-6" />
                     </div>
                     <div>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{stat.label}</p>
                        <h4 className="text-2xl font-black text-slate-900 dark:text-white italic tabular-nums">{stat.value}</h4>
                        <p className="text-[10px] font-bold text-slate-400 mt-0.5">{stat.change}</p>
                     </div>
                  </div>
               </Card>
            ))}
         </Grid>

         {/* Main Content Area */}
         <Grid cols={3}>
            {/* Active Clients List */}
            <Card className="lg:col-span-2 p-0 overflow-hidden">
               <div className="p-8 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                     <Users className="w-5 h-5 text-primary" />
                     <h3 className="text-lg font-black text-slate-900 dark:text-white italic uppercase tracking-tight">Active Transformation Fleet</h3>
                  </div>
                  <div className="flex bg-slate-50 dark:bg-slate-800 p-1 rounded-xl">
                     <button className="px-4 py-1.5 bg-white dark:bg-slate-700 text-[10px] font-black uppercase tracking-widest rounded-lg shadow-sm italic">Live Now</button>
                     <button className="px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-slate-400 italic">Off-Duty</button>
                  </div>
               </div>
               <div className="divide-y divide-slate-50 dark:divide-slate-800">
                  {clients.map((client, i) => (
                     <div key={i} className="p-6 flex items-center gap-6 hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-all group cursor-pointer">
                        <div className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-900 flex items-center justify-center text-slate-900 dark:text-white font-black italic shadow-sm border border-slate-100 dark:border-slate-800 group-hover:border-primary/30 transition-all text-xl">
                           {client.avatar}
                        </div>
                        <div className="flex-1">
                           <div className="flex items-center gap-3">
                              <h4 className="font-black text-slate-900 dark:text-white text-lg italic tracking-tight">{client.name}</h4>
                              <Badge variant={client.status === 'Training' ? 'info' : client.status === 'Resting' ? 'warning' : 'success'} className="px-3 py-0.5 font-black uppercase italic text-[8px]">
                                 {client.status}
                              </Badge>
                           </div>
                           <p className="text-xs text-slate-500 font-medium mt-0.5">{client.goal}</p>
                        </div>
                        <div className="flex items-center gap-10">
                           <div className="text-right hidden sm:block">
                              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Compliance</p>
                              <div className="flex items-center gap-2">
                                 <span className="font-black text-slate-900 dark:text-white italic tracking-tighter">{client.score}%</span>
                                 {client.score > 80 ? <TrendingUp className="w-3 h-3 text-emerald-500" /> : <TrendingDown className="w-3 h-3 text-rose-500" />}
                              </div>
                           </div>
                           <div className="text-right">
                              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">Schedule</p>
                              <p className="text-xs font-bold text-slate-900 dark:text-white italic">{client.time}</p>
                           </div>
                           <Button variant="ghost" className="w-10 h-10 p-0 rounded-full opacity-0 group-hover:opacity-100 transition-all">
                              <ChevronRight className="w-5 h-5" />
                           </Button>
                        </div>
                     </div>
                  ))}
               </div>
            </Card>

            {/* AI Insights & Classes */}
            <div className="space-y-8">
               {/* Coach Insight Card */}
               <Card className="p-8 bg-slate-950 dark:bg-slate-900 text-white border-none relative overflow-hidden group shadow-2xl shadow-primary/10">
                  <div className="absolute top-0 right-0 p-8 opacity-10 transform scale-150 rotate-12 group-hover:rotate-0 transition-transform duration-700">
                     <Activity className="text-8xl text-primary" />
                  </div>
                  <div className="relative z-10 flex flex-col h-full">
                     <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-primary">
                           <TrendingUp className="w-5 h-5" />
                        </div>
                        <h4 className="font-black italic uppercase tracking-tight">Coach-Assist AI</h4>
                     </div>
                     <p className="text-sm text-slate-400 font-medium leading-relaxed mb-8">
                        "Aryan's V02 Max spiked by <span className="text-white font-black italic">12%</span> today. The Surya Namaskar intervals you added are highly effective. Recommend increasing resistance blocks."
                     </p>
                     <div className="flex gap-3">
                        <Button className="flex-1 h-12 bg-primary hover:bg-primary-dark text-white border-none rounded-xl font-black italic transition-all shadow-lg shadow-primary/20">
                           Apply Change
                        </Button>
                        <Button variant="ghost" className="w-12 h-12 p-0 rounded-xl bg-white/5 hover:bg-white/10">
                           <MessageCircle className="w-5 h-5" />
                        </Button>
                     </div>
                  </div>
               </Card>

               {/* Classes Card */}
               <Card className="p-8">
                  <div className="flex justify-between items-center mb-8">
                     <h3 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-widest italic flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-primary" /> Group Sessions
                     </h3>
                     <button className="text-[10px] font-black text-primary uppercase tracking-widest hover:underline italic">Manage All</button>
                  </div>
                  <div className="space-y-6">
                     {upcomingClasses.map((c, i) => (
                        <div key={i} className="flex items-center justify-between group cursor-pointer p-4 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
                           <div>
                              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest italic">{c.time}</p>
                              <h5 className="font-black text-slate-900 dark:text-white italic tracking-tight">{c.title}</h5>
                              <div className="flex items-center gap-2 mt-1">
                                 <Badge variant={c.intensity === 'High' ? 'error' : c.intensity === 'Medium' ? 'warning' : 'info'} className="text-[7px] py-0 px-1.5 opacity-60">
                                    {c.intensity}
                                 </Badge>
                                 <span className="text-[10px] font-bold text-slate-400">{c.joiners} joining</span>
                              </div>
                           </div>
                           <div className="flex -space-x-2">
                              {[1, 2, 3].map(i => (
                                 <div key={i} className="w-7 h-7 rounded-full border-2 border-white dark:border-slate-800 bg-slate-100 flex items-center justify-center font-black text-[8px] text-slate-400">
                                    U
                                 </div>
                              ))}
                           </div>
                        </div>
                     ))}
                  </div>
                  <Button variant="outline" className="w-full mt-8 py-4 text-[10px] font-black uppercase tracking-widest italic group">
                     Full Calendar View <ChevronRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
               </Card>
            </div>
         </Grid>

         {/* Program Designer Canvas Placeholder */}
         <Card className="p-12 border-slate-200/60 dark:border-slate-800/60 flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-3xl bg-primary/5 flex items-center justify-center mb-6">
               <Dumbbell className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-2xl font-black text-slate-900 dark:text-white italic uppercase tracking-tight mb-2">Sealth Workout Architect</h3>
            <p className="text-slate-500 max-w-sm mb-10 font-medium">Drag-and-drop metabolic blocks to build high-intensity Indian functional training programs.</p>
            <div className="flex gap-4">
               <Button variant="primary" className="h-14 px-10 italic font-black uppercase tracking-widest">
                  Launch Designer
               </Button>
               <Button variant="outline" className="h-14 px-10 italic font-black uppercase tracking-widest">
                  Import Template
               </Button>
            </div>
         </Card>
      </div>
   );
};

export default CoachDashboard;
