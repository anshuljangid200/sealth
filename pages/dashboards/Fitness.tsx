
import React from 'react';
import { motion } from 'framer-motion';
import { Card, Button, Badge, cn } from '../../components/UI';
import { Activity, Flame, Timer, Footprints, ChevronUp, History } from 'lucide-react';

const Fitness: React.FC = () => {
    const stats = [
        { label: 'Steps', value: '8,432', target: '10,000', icon: Footprints, color: 'text-blue-500', bg: 'bg-blue-50', progress: 84 },
        { label: 'Calories', value: '640', target: '800', icon: Flame, color: 'text-orange-500', bg: 'bg-orange-50', progress: 80 },
        { label: 'Active Time', value: '45m', target: '60m', icon: Timer, color: 'text-emerald-500', bg: 'bg-emerald-50', progress: 75 },
        { label: 'VO2 Max', value: '48.5', target: '50', icon: Activity, color: 'text-rose-500', bg: 'bg-rose-50', progress: 97 },
    ];

    const workouts = [
        { title: 'Morning Hiit', time: '07:15 AM', duration: '30 min', intensity: 'High', cal: 320 },
        { title: 'Slow Walk', time: '12:45 PM', duration: '15 min', intensity: 'Low', cal: 85 },
        { title: 'Lower Body Strength', time: 'Yesterday', duration: '45 min', intensity: 'Medium', cal: 410 },
    ];

    return (
        <div className="space-y-8 max-w-6xl">
            <header className="flex flex-col md:row justify-between items-start md:items-end gap-4">
                <div>
                    <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight mb-2">Fitness Metrics</h1>
                    <p className="text-slate-500 font-medium">Quantify your progress and break your limits.</p>
                </div>
                <div className="flex bg-white dark:bg-slate-900 p-1.5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                    <button className="px-6 py-2 rounded-xl text-sm font-bold bg-primary text-white shadow-lg shadow-primary/20 transition-all">Today</button>
                    <button className="px-6 py-2 rounded-xl text-sm font-bold text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">Weekly</button>
                </div>
            </header>

            {/* Primary Rings Container */}
            <div className="grid lg:grid-cols-3 gap-8">
                <Card className="lg:col-span-1 p-8 flex flex-col items-center justify-center relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-primary to-emerald-500" />
                    <h3 className="text-lg font-black mb-10 self-start">Overall Goal</h3>

                    <div className="relative w-56 h-56 flex items-center justify-center">
                        {/* SVG Activity Rings */}
                        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                            {/* Outer Ring: Steps */}
                            <circle cx="50" cy="50" r="45" fill="transparent" stroke="currentColor" strokeWidth="8" className="text-slate-100 dark:text-slate-800" />
                            <motion.circle
                                cx="50" cy="50" r="45" fill="transparent" stroke="currentColor" strokeWidth="8" strokeLinecap="round"
                                className="text-primary" strokeDasharray="283" initial={{ strokeDashoffset: 283 }} animate={{ strokeDashoffset: 283 - (283 * 0.84) }} transition={{ duration: 1.5, delay: 0.2 }}
                            />
                            {/* Middle Ring: Calories */}
                            <circle cx="50" cy="50" r="35" fill="transparent" stroke="currentColor" strokeWidth="8" className="text-slate-100 dark:text-slate-800" />
                            <motion.circle
                                cx="50" cy="50" r="35" fill="transparent" stroke="currentColor" strokeWidth="8" strokeLinecap="round"
                                className="text-orange-500" strokeDasharray="220" initial={{ strokeDashoffset: 220 }} animate={{ strokeDashoffset: 220 - (220 * 0.8) }} transition={{ duration: 1.5, delay: 0.4 }}
                            />
                            {/* Inner Ring: Time */}
                            <circle cx="50" cy="50" r="25" fill="transparent" stroke="currentColor" strokeWidth="8" className="text-slate-100 dark:text-slate-800" />
                            <motion.circle
                                cx="50" cy="50" r="25" fill="transparent" stroke="currentColor" strokeWidth="8" strokeLinecap="round"
                                className="text-blue-500" strokeDasharray="157" initial={{ strokeDashoffset: 157 }} animate={{ strokeDashoffset: 157 - (157 * 0.75) }} transition={{ duration: 1.5, delay: 0.6 }}
                            />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <span className="text-4xl font-black text-slate-900 dark:text-white">82%</span>
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Total</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-6 w-full mt-10">
                        <div className="flex flex-col items-center gap-1">
                            <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                            <span className="text-[10px] font-black uppercase text-slate-400">Steps</span>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                            <div className="w-2.5 h-2.5 rounded-full bg-orange-500" />
                            <span className="text-[10px] font-black uppercase text-slate-400">Cals</span>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                            <div className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                            <span className="text-[10px] font-black uppercase text-slate-400">Time</span>
                        </div>
                    </div>
                </Card>

                {/* Quick Stats Grid */}
                <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
                    {stats.map((stat, idx) => (
                        <Card key={idx} className="p-6 group hover:border-primary/30 transition-all">
                            <div className="flex items-center justify-between mb-4">
                                <div className={cn("p-3 rounded-2xl", stat.bg, stat.color)}>
                                    <stat.icon className="w-6 h-6" />
                                </div>
                                <div className="flex items-center gap-1 text-emerald-500">
                                    <ChevronUp className="w-4 h-4" />
                                    <span className="text-xs font-black">+12%</span>
                                </div>
                            </div>
                            <div className="space-y-1">
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">{stat.label}</p>
                                <div className="flex items-baseline gap-2">
                                    <h4 className="text-2xl font-black text-slate-900 dark:text-white leading-none">{stat.value}</h4>
                                    <span className="text-xs font-bold text-slate-400">/ {stat.target}</span>
                                </div>
                            </div>
                            <div className="mt-6 h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: `${stat.progress}%` }}
                                    className={cn("h-full rounded-full", stat.color.replace('text-', 'bg-'))}
                                />
                            </div>
                        </Card>
                    ))}
                </div>
            </div>

            {/* Workout History */}
            <Card className="p-8">
                <div className="flex items-center justify-between mb-8">
                    <h3 className="text-xl font-bold flex items-center gap-3">
                        <History className="text-primary w-5 h-5" />
                        Workout History
                    </h3>
                    <Button variant="outline" className="text-xs px-4 py-2 h-auto rounded-xl">View All</Button>
                </div>
                <div className="space-y-4">
                    {workouts.map((workout, idx) => (
                        <div key={idx} className="flex items-center justify-between p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 hover:border-primary/20 transition-colors">
                            <div className="flex items-center gap-5">
                                <div className="h-12 w-12 rounded-2xl bg-white dark:bg-slate-900 flex items-center justify-center font-black text-primary shadow-sm">
                                    {workout.intensity === 'High' ? 'H' : workout.intensity === 'Medium' ? 'M' : 'L'}
                                </div>
                                <div>
                                    <h5 className="font-bold text-slate-900 dark:text-white">{workout.title}</h5>
                                    <p className="text-xs text-slate-500 font-medium">{workout.time} · {workout.duration}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-10">
                                <div className="hidden sm:block text-right">
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Energy</p>
                                    <p className="font-black text-slate-900 dark:text-white">{workout.cal} <span className="text-[10px]">kcal</span></p>
                                </div>
                                <Badge variant={workout.intensity === 'High' ? 'error' : workout.intensity === 'Medium' ? 'warning' : 'success'}>
                                    {workout.intensity} Intense
                                </Badge>
                            </div>
                        </div>
                    ))}
                </div>
            </Card>
        </div>
    );
};


export default Fitness;
