
import React from 'react';
import { Card, Icon, Button, Badge } from '../../components/UI';

const CustomerDashboard: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto pb-12">
      <header className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Welcome back, Alexander</h1>
          <p className="text-slate-500 font-medium">Your health journey is looking positive today. Keep it up!</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="bg-white dark:bg-slate-900 border-none shadow-sm">
            <Icon name="file_download" className="text-sm" /> Export Report
          </Button>
          <Button>
            <Icon name="add" className="text-sm" /> Log Activity
          </Button>
        </div>
      </header>

      {/* Hero Banner Card */}
      <section className="mb-10">
        <div className="relative overflow-hidden bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-100 dark:border-emerald-800 p-8 md:p-12 rounded-[2.5rem] flex flex-col lg:flex-row items-center gap-10">
          <div className="flex-1 space-y-6">
            <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-[0.2em] text-[10px]">
              <Icon name="restaurant" className="text-sm" />
              Active Food Plan
            </div>
            <h2 className="text-4xl font-extrabold tracking-tight">Mediterranean Vitality Plan</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-md leading-relaxed text-lg">
              Your next meal, <span className="font-bold text-slate-800 dark:text-white">Grilled Salmon & Quinoa Salad</span>, is scheduled for delivery tomorrow at 12:30 PM.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button className="px-8 py-3 shadow-xl">Track Delivery</Button>
              <Button variant="outline" className="px-8 py-3 bg-white/50 dark:bg-slate-800/50 backdrop-blur border-slate-200/50">Change Menu</Button>
            </div>
          </div>
          <div className="relative group">
            <div className="w-64 h-64 bg-primary/20 blur-[100px] rounded-full absolute -inset-10 group-hover:scale-125 transition-transform duration-1000"></div>
            <img 
              src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=400" 
              alt="Healthy Meal" 
              className="relative w-64 h-64 rounded-full object-cover shadow-2xl border-4 border-white dark:border-slate-800 transform hover:rotate-6 transition-transform"
            />
            <div className="absolute -bottom-4 -right-4 bg-white dark:bg-slate-800 p-4 rounded-3xl shadow-xl flex items-center gap-3 border border-slate-100 dark:border-slate-700">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-white">
                <Icon name="local_fire_department" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Estimated</p>
                <p className="text-sm font-bold">420 Kcal</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Stats Col */}
        <div className="lg:col-span-2 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 flex flex-col items-center justify-center text-center relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Icon name="favorite" className="text-6xl text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-8 self-start">Overall Health Score</h3>
              <div className="relative w-48 h-48 flex items-center justify-center mb-8">
                <svg className="w-full h-full transform -rotate-90">
                  <circle cx="96" cy="96" r="88" fill="none" stroke="currentColor" strokeWidth="12" className="text-slate-100 dark:text-slate-800" />
                  <circle cx="96" cy="96" r="88" fill="none" stroke="currentColor" strokeWidth="12" strokeDasharray="552.92" strokeDashoffset="82.93" className="text-primary transition-all duration-1000 ease-out" />
                </svg>
                <div className="absolute flex flex-col items-center">
                  <span className="text-5xl font-extrabold text-slate-900 dark:text-white">85</span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mt-1">Excellent</span>
                </div>
              </div>
              <p className="text-sm text-slate-500 max-w-[240px]">Your metabolic markers are in the top 5% for your age group this week.</p>
            </Card>

            <Card className="p-8">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-lg font-bold">Fitness Snapshot</h3>
                <Badge variant="info">Realtime</Badge>
              </div>
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-500">
                    <Icon name="directions_walk" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between text-sm font-bold mb-2">
                      <span>Steps</span>
                      <span className="text-slate-400 font-medium">8,432 / 10k</span>
                    </div>
                    <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                      <div className="bg-blue-500 h-full w-[84%] rounded-full" />
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-purple-50 dark:bg-purple-900/30 flex items-center justify-center text-purple-500">
                    <Icon name="bedtime" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between text-sm font-bold mb-2">
                      <span>Sleep</span>
                      <span className="text-slate-400 font-medium">7h 45m</span>
                    </div>
                    <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                      <div className="bg-purple-500 h-full w-[92%] rounded-full" />
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-orange-50 dark:bg-orange-900/30 flex items-center justify-center text-orange-500">
                    <Icon name="bolt" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between text-sm font-bold mb-2">
                      <span>Active Kcal</span>
                      <span className="text-slate-400 font-medium">450 / 600</span>
                    </div>
                    <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                      <div className="bg-orange-500 h-full w-[65%] rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <Card className="p-8">
             <div className="flex justify-between items-center mb-10">
                <div>
                  <h3 className="text-lg font-bold">Biometric Progress</h3>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">Muscle Mass Ratio</p>
                </div>
                <select className="bg-slate-50 dark:bg-slate-800 border-none text-xs rounded-xl font-bold p-2 px-4 focus:ring-primary">
                  <option>Last 30 Days</option>
                  <option>Last 6 Months</option>
                </select>
              </div>
              <div className="h-64 flex items-end justify-between gap-4 px-2">
                {[40, 50, 45, 60, 55, 75, 70, 85, 80, 75, 88, 92].map((h, i) => (
                  <div key={i} className="flex-1 bg-primary/20 rounded-t-xl transition-all hover:bg-primary group relative" style={{ height: `${h}%` }}>
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                      {h}%
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-6 px-2 text-[10px] font-bold text-slate-300 uppercase tracking-[0.3em]">
                <span>JAN</span>
                <span>FEB</span>
                <span>MAR</span>
                <span>APR</span>
                <span>MAY</span>
                <span>JUN</span>
              </div>
          </Card>
        </div>

        {/* Right Consults Col */}
        <div className="space-y-8">
          <Card className="p-8 border-none shadow-xl shadow-teal-500/5">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-lg font-bold">Expert Consults</h3>
              <button className="text-primary text-[10px] font-bold uppercase tracking-widest hover:underline">History</button>
            </div>
            <div className="space-y-10">
              <div className="group cursor-pointer">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative">
                    <img 
                      src="https://i.pravatar.cc/100?u=sarah" 
                      alt="Dr. Sarah" 
                      className="w-14 h-14 rounded-2xl object-cover ring-4 ring-primary/10" 
                    />
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white dark:border-slate-800"></div>
                  </div>
                  <div>
                    <h4 className="font-bold text-base group-hover:text-primary transition-colors">Dr. Sarah Jenkins</h4>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Lead Nutritionist</p>
                  </div>
                </div>
                <div className="bg-primary/5 dark:bg-primary/10 p-5 rounded-3xl space-y-4 border border-primary/10">
                  <div className="flex items-center gap-3 text-xs font-bold text-slate-600 dark:text-slate-300">
                    <Icon name="calendar_today" className="text-primary" />
                    <span>Tomorrow, 10:00 AM</span>
                  </div>
                  <Button className="w-full py-3 text-sm bg-white dark:bg-slate-800 text-primary border border-primary/20 hover:bg-primary hover:text-white shadow-none transition-all">
                    <Icon name="videocam" className="text-lg" /> Join Video Call
                  </Button>
                </div>
              </div>

              <div className="group cursor-pointer opacity-80 hover:opacity-100 transition-opacity">
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src="https://i.pravatar.cc/100?u=mark" 
                    alt="Coach Mark" 
                    className="w-14 h-14 rounded-2xl object-cover ring-4 ring-orange-500/10 grayscale group-hover:grayscale-0 transition-all" 
                  />
                  <div>
                    <h4 className="font-bold text-base group-hover:text-secondary transition-colors">Mark Stevenson</h4>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Physical Coach</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full py-3 text-sm rounded-3xl border-slate-200 dark:border-slate-700">
                   Book Follow-up
                </Button>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-slate-900 text-white border-none overflow-hidden relative">
            <div className="absolute top-0 right-0 p-8 opacity-20 transform translate-x-4 -translate-y-4">
               <Icon name="psychology" className="text-8xl" />
            </div>
            <h3 className="text-lg font-bold mb-4 relative z-10">AI Mental Wellbeing</h3>
            <p className="text-slate-400 text-sm mb-8 leading-relaxed relative z-10">Alexander, based on your sleep patterns, we recommend a 5-minute breathing exercise.</p>
            <Button className="w-full py-4 text-xs font-bold uppercase tracking-widest relative z-10">Start Session</Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CustomerDashboard;
