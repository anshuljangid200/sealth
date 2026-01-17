
import React from 'react';
import { motion } from 'framer-motion';
import { Card, Icon, Button, Badge, Container, Grid, Section, cn } from '../../components/UI';
import {
  Users, Calendar, Activity, Zap, ChevronRight,
  MoreVertical, Video, Clock, AlertCircle,
  TrendingUp, Search, Filter, Plus
} from 'lucide-react';

const DoctorDashboard: React.FC = () => {
  const appointments = [
    { name: 'Rohan Sharma', time: '09:00 AM', type: 'Metabolic Review', status: 'Online', avatar: 'https://i.pravatar.cc/150?u=rohan' },
    { name: 'Priya Patel', time: '11:30 AM', type: 'Initial Screening', status: 'In-Clinic', avatar: 'https://i.pravatar.cc/150?u=priya' },
    { name: 'Vikram Singh', time: '02:00 PM', type: 'Diabetes Follow-up', status: 'Online', avatar: 'https://i.pravatar.cc/150?u=vikram' },
    { name: 'Ananya Iyer', time: '04:15 PM', type: 'Nutrition Adjustment', status: 'Online', avatar: 'https://i.pravatar.cc/150?u=ananya' },
  ];

  const criticalPatients = [
    { name: 'Amitabh B.', age: 62, condition: 'High HbA1c', glucose: '184 mg/dL', trend: 'up' },
    { name: 'Saira Malik', age: 29, condition: 'Ketosis Alert', ketones: '1.2 mmol/L', trend: 'stable' },
  ];

  return (
    <div className="animate-fade-in space-y-10">
      {/* Header */}
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-1">
          <h1 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight">Clinical Command</h1>
          <p className="text-slate-500 font-medium">Monitoring 142 active protocols across your patient network.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2">
            <Calendar className="w-4 h-4" /> Manage Schedule
          </Button>
          <Button className="gap-2">
            <Plus className="w-4 h-4" /> New Patient
          </Button>
        </div>
      </header>

      {/* Quick Stats Grid */}
      <Grid cols={4}>
        {[
          { label: 'Total Patients', value: '142', change: '+8 this month', icon: Users, color: 'text-blue-500', bg: 'bg-blue-50' },
          { label: 'Consults Today', value: '12', change: '4 remaining', icon: Video, color: 'text-primary', bg: 'bg-primary/10' },
          { label: 'Critical Alerts', value: '03', change: 'Immediate Action', icon: AlertCircle, color: 'text-rose-500', bg: 'bg-rose-50' },
          { label: 'Wait Time', value: '14m', change: '-2m vs avg', icon: Clock, color: 'text-amber-500', bg: 'bg-amber-50' },
        ].map((stat, i) => (
          <Card key={i} className="p-6 group hover:border-primary/40 transition-all cursor-pointer">
            <div className="flex items-center gap-5">
              <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110", stat.bg, stat.color)}>
                <stat.icon className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{stat.label}</p>
                <h4 className="text-2xl font-black text-slate-900 dark:text-white italic tabular-nums">{stat.value}</h4>
                <p className={cn("text-[10px] font-bold mt-0.5", stat.label === 'Critical Alerts' ? 'text-rose-500' : 'text-primary')}>
                  {stat.change}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </Grid>

      {/* Main Content Area */}
      <Grid cols={3}>
        {/* Appointment Queue */}
        <Card className="lg:col-span-2 p-0 overflow-hidden">
          <div className="p-8 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-black text-slate-900 dark:text-white italic uppercase tracking-tight">Today's Queue</h3>
            </div>
            <div className="flex gap-2">
              <Button variant="ghost" className="w-10 h-10 p-0 rounded-xl bg-slate-50 dark:bg-slate-800">
                <Search className="w-4 h-4" />
              </Button>
              <Button variant="ghost" className="w-10 h-10 p-0 rounded-xl bg-slate-50 dark:bg-slate-800">
                <Filter className="w-4 h-4" />
              </Button>
            </div>
          </div>
          <div className="divide-y divide-slate-50 dark:divide-slate-800">
            {appointments.map((apt, i) => (
              <div key={i} className="p-6 flex items-center gap-6 hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-all group cursor-pointer">
                <div className="text-center min-w-[70px]">
                  <p className="text-sm font-black text-slate-900 dark:text-white italic">{apt.time}</p>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-tighter mt-0.5">Slots 4-5</p>
                </div>
                <div className="h-10 w-px bg-slate-100 dark:bg-slate-800" />
                <div className="relative">
                  <img src={apt.avatar} className="w-12 h-12 rounded-2xl object-cover ring-4 ring-transparent group-hover:ring-primary/10 transition-all" alt="" />
                  <div className={cn("absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white dark:border-slate-900", apt.status === 'Online' ? 'bg-emerald-500' : 'bg-blue-500')} />
                </div>
                <div className="flex-1">
                  <h4 className="font-black text-slate-900 dark:text-white text-lg italic tracking-tight">{apt.name}</h4>
                  <p className="text-xs text-slate-500 font-medium">{apt.type}</p>
                </div>
                <div className="flex items-center gap-4">
                  <Badge variant={apt.status === 'Online' ? 'info' : 'success'} className="px-4 py-1.5 font-black uppercase italic">
                    {apt.status}
                  </Badge>
                  <Button variant="ghost" className="w-10 h-10 p-0 rounded-full opacity-0 group-hover:opacity-100 transition-all">
                    <ChevronRight className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Patient Monitoring & AI Assistant */}
        <div className="space-y-8">
          {/* Critical Monitoring */}
          <Card className="p-8">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-sm font-black text-rose-500 uppercase tracking-widest italic flex items-center gap-2">
                <AlertCircle className="w-4 h-4" /> Bio-Alerts
              </h3>
              <button className="text-[10px] font-black text-slate-400 uppercase tracking-widest hover:text-slate-900 transition-colors">Resolve All</button>
            </div>
            <div className="space-y-6">
              {criticalPatients.map((patient, i) => (
                <div key={i} className="p-5 rounded-[2rem] bg-rose-50/50 dark:bg-rose-950/20 border border-rose-100/50 dark:border-rose-900/50 space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h5 className="font-black text-slate-900 dark:text-white italic">{patient.name}</h5>
                      <p className="text-[10px] font-bold text-rose-600 uppercase tracking-widest mt-0.5">{patient.condition}</p>
                    </div>
                    <Badge variant="error" className="bg-rose-500 text-white border-none py-0.5 px-2">CRITICAL</Badge>
                  </div>
                  <div className="flex items-end justify-between">
                    <p className="text-2xl font-black text-rose-600 italic lining-nums">
                      {patient.glucose || patient.ketones}
                    </p>
                    <Button className="h-8 px-4 text-[10px] bg-rose-600 hover:bg-rose-700 text-white font-black italic rounded-xl">Intervene</Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* AI Diagnostics Assistant */}
          <Card className="p-8 bg-slate-950 dark:bg-slate-900 text-white border-none relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 transform scale-150 -rotate-12 group-hover:rotate-0 transition-transform duration-700">
              <Zap className="text-8xl text-primary" />
            </div>
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-primary">
                  <Activity className="w-5 h-5" />
                </div>
                <h4 className="font-black italic uppercase tracking-tight">Veda AI Assistant</h4>
              </div>
              <p className="text-sm text-slate-400 font-medium leading-relaxed mb-8">
                "Dr. Alexander, Amitabh B.'s glucose spikes correlate with late-night sodium intake patterns from SEALTH Food Logs."
              </p>
              <Button className="w-full h-14 bg-primary hover:bg-primary-dark text-white border-none rounded-2xl font-black italic transition-all shadow-xl shadow-primary/20">
                View Full Analysis
              </Button>
            </div>
          </Card>
        </div>
      </Grid>

      {/* Bottom Section: Trend Analytics Placeholder */}
      <Card className="p-8 border-slate-200/60 dark:border-slate-800/60">
        <div className="flex justify-between items-center mb-10">
          <div className="flex flex-col">
            <h3 className="text-xl font-black text-slate-900 dark:text-white italic uppercase tracking-tight">Practice Performance</h3>
            <p className="text-xs text-slate-500 font-medium">Monthly aggregate recovery rates & patient satisfaction</p>
          </div>
          <select className="bg-slate-50 dark:bg-slate-800 border-none text-[10px] font-black rounded-xl p-3 px-6 uppercase tracking-widest focus:ring-primary">
            <option>Q1 2026 Analysis</option>
            <option>Annual Overview</option>
          </select>
        </div>

        <div className="h-64 flex items-end justify-between gap-4 px-4 pb-2 relative">
          {/* Grid Background */}
          <div className="absolute inset-x-0 bottom-0 h-full flex flex-col justify-between py-2 pointer-events-none opacity-[0.03] dark:opacity-[0.05]">
            {[0, 1, 2, 3, 4].map(i => <div key={i} className="w-full h-px bg-slate-900 dark:bg-white" />)}
          </div>

          {/* Bars */}
          {[55, 62, 48, 75, 68, 85, 92, 78, 88, 95, 82, 90].map((h, i) => (
            <div key={i} className="flex-1 bg-primary/10 dark:bg-primary/5 rounded-t-xl group relative">
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ duration: 1.2, delay: i * 0.05 }}
                className="absolute bottom-0 left-0 right-0 bg-primary/40 group-hover:bg-primary transition-colors rounded-t-xl flex items-center justify-center"
              >
                <span className="opacity-0 group-hover:opacity-100 text-[8px] font-black text-white mb-2 transition-opacity">{h}%</span>
              </motion.div>
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-8 px-4 text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">
          <span>JAN</span>
          <span>FEB</span>
          <span>MAR</span>
          <span>APR</span>
          <span>MAY</span>
          <span>JUN</span>
          <span>JUL</span>
          <span>AUG</span>
          <span>SEP</span>
          <span>OCT</span>
          <span>NOV</span>
          <span>DEC</span>
        </div>
      </Card>
    </div>
  );
};

export default DoctorDashboard;
