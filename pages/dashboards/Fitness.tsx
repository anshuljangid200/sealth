
import React from 'react';
import { motion } from 'framer-motion';
import { Card, Button, Badge, Container, Grid, Section, cn, Icon } from '../../components/UI';
import {
    Activity, Flame, Timer, Footprints, ChevronUp, History,
    Zap, Heart, Trophy, Target, Bluetooth, Smartphone,
    Dumbbell, TrendingUp, ChevronRight
} from 'lucide-react';

const Fitness: React.FC = () => {
    const stats = [
        { label: 'Steps Today', value: '11,432', target: '15,000', icon: Footprints, color: 'text-blue-500', bg: 'bg-blue-50', progress: 76 },
        { label: 'Energy Burn', value: '840', target: '1,200', icon: Flame, color: 'text-orange-500', bg: 'bg-orange-50', progress: 70 },
        { label: 'High Intensity', value: '45m', target: '60m', icon: Timer, color: 'text-primary', bg: 'bg-primary/5', progress: 75 },
        { label: 'Sleep Quality', value: '88%', target: '100%', icon: Heart, color: 'text-rose-500', bg: 'bg-rose-50', progress: 88 },
    ];

    const workouts = [
        { title: 'Surya Namaskar Flow', time: '06:30 AM', duration: '20 min', intensity: 'Medium', cal: 180, instructor: 'Coach Ishani' },
        { title: 'Functional Strength', time: '12:45 PM', duration: '45 min', intensity: 'High', cal: 420, instructor: 'Self-Guided' },
        { title: 'Evening Walk (Juhu Beach)', time: 'Yesterday', duration: '60 min', intensity: 'Low', cal: 210, instructor: 'Outdoor' },
    ];

    return (
        <div className="animate-fade-in space-y-10">
            {/* Header */}
            <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="space-y-1">
                    <h1 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight">Fitness & Biometrics</h1>
                    <p className="text-slate-500 font-medium">Real-time physiological insights driven by SEALTH Pro-Link.</p>
                </div>
                <div className="flex bg-white dark:bg-slate-900 p-1.5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                    {['Daily', 'Weekly', 'Monthly'].map((period) => (
                        <button
                            key={period}
                            className={cn(
                                "px-6 py-2 rounded-xl text-sm font-black transition-all",
                                period === 'Daily' ? "bg-primary text-white shadow-lg shadow-primary/20" : "text-slate-400 hover:text-slate-900 dark:hover:text-white"
                            )}
                        >
                            {period}
                        </button>
                    ))}
                </div>
            </header>

            {/* Primary Metrics */}
            <Grid cols={3}>
                {/* Advanced Activity Rings */}
                <Card className="lg:col-span-1 p-8 flex flex-col items-center justify-center relative overflow-hidden group">
                    <div className="absolute top-6 left-8">
                        <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest italic">Core Integration</h3>
                    </div>

                    <div className="relative w-64 h-64 flex items-center justify-center my-4">
                        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                            {/* Background Circles */}
                            <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="8" className="text-slate-100 dark:text-slate-800" />
                            <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="8" className="text-slate-100 dark:text-slate-800" />
                            <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="8" className="text-slate-100 dark:text-slate-800" />

                            {/* Active Rings */}
                            <motion.circle
                                cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round"
                                className="text-primary" strokeDasharray="283" initial={{ strokeDashoffset: 283 }}
                                animate={{ strokeDashoffset: 283 - (283 * 0.76) }} transition={{ duration: 1.5, ease: "easeOut" }}
                            />
                            <motion.circle
                                cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round"
                                className="text-orange-500" strokeDasharray="220" initial={{ strokeDashoffset: 220 }}
                                animate={{ strokeDashoffset: 220 - (220 * 0.70) }} transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
                            />
                            <motion.circle
                                cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round"
                                className="text-blue-500" strokeDasharray="157" initial={{ strokeDashoffset: 157 }}
                                animate={{ strokeDashoffset: 157 - (157 * 0.75) }} transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
                            />
                        </svg>
                        <div className="absolute flex flex-col items-center">
                            <span className="text-5xl font-black text-slate-900 dark:text-white tracking-tighter italic">74%</span>
                            <Badge variant="info" className="mt-2 font-black italic">On Track</Badge>
                        </div>
                    </div>

                    <div className="flex gap-6 mt-6">
                        <div className="flex items-center gap-2">
                            <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                            <span className="text-[10px] font-black uppercase text-slate-400">Movement</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2.5 h-2.5 rounded-full bg-orange-500" />
                            <span className="text-[10px] font-black uppercase text-slate-400">Metabolic</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                            <span className="text-[10px] font-black uppercase text-slate-400">Recovery</span>
                        </div>
                    </div>
                </Card>

                {/* Metric Cards Grid */}
                <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
                    {stats.map((stat, idx) => (
                        <Card key={idx} className="p-8 group hover:border-primary/40 transition-all cursor-pointer relative overflow-hidden">
                            <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                <stat.icon className="w-24 h-24" />
                            </div>
                            <div className="flex items-center justify-between mb-6 relative z-10">
                                <div className={cn("p-4 rounded-2xl", stat.bg, stat.color)}>
                                    <stat.icon className="w-6 h-6" />
                                </div>
                                <div className="flex flex-col items-end">
                                    <Badge variant="success" className="bg-emerald-50 text-emerald-600 border-none gap-1">
                                        <TrendingUp className="w-3 h-3" /> +12%
                                    </Badge>
                                </div>
                            </div>
                            <div className="space-y-1 relative z-10">
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{stat.label}</p>
                                <div className="flex items-baseline gap-2">
                                    <h4 className="text-3xl font-black text-slate-900 dark:text-white tabular-nums italic">{stat.value}</h4>
                                    <span className="text-xs font-bold text-slate-400">Target: {stat.target}</span>
                                </div>
                            </div>
                            <div className="mt-8 h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden p-0 relative z-10">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: `${stat.progress}%` }}
                                    transition={{ duration: 1, ease: "easeOut" }}
                                    className={cn("h-full rounded-full shadow-[0_0_8px_rgba(var(--primary),0.3)]", stat.color.replace('text-', 'bg-'))}
                                />
                            </div>
                        </Card>
                    ))}
                </div>
            </Grid>

            {/* Middle Section: Recent Activity & Challenges */}
            <Grid cols={3}>
                <Card className="lg:col-span-2 p-0 overflow-hidden">
                    <div className="p-8 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <History className="w-5 h-5 text-primary" />
                            <h3 className="text-lg font-black text-slate-900 dark:text-white italic uppercase tracking-tight">Recent Sessions</h3>
                        </div>
                        <Button variant="ghost" className="text-primary text-[10px] font-black uppercase tracking-widest hover:underline">
                            Full History
                        </Button>
                    </div>
                    <div className="divide-y divide-slate-50 dark:divide-slate-800">
                        {workouts.map((workout, idx) => (
                            <div key={idx} className="p-6 flex items-center justify-between hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-all group cursor-pointer">
                                <div className="flex items-center gap-6">
                                    <div className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-900 flex items-center justify-center text-slate-900 dark:text-white font-black italic shadow-sm border border-slate-100 dark:border-slate-800 group-hover:border-primary/30 transition-all">
                                        {workout.intensity === 'High' ? 'H' : workout.intensity === 'Medium' ? 'M' : 'L'}
                                    </div>
                                    <div>
                                        <h5 className="font-bold text-slate-900 dark:text-white text-lg">{workout.title}</h5>
                                        <div className="flex items-center gap-3 text-xs text-slate-400 font-medium mt-1">
                                            <span className="flex items-center gap-1"><Timer className="w-3 h-3" /> {workout.duration}</span>
                                            <span className="opacity-20">|</span>
                                            <span className="flex items-center gap-1 italic">{workout.instructor}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-8">
                                    <div className="text-right">
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Energy</p>
                                        <p className="font-black text-slate-900 dark:text-white italic tracking-tighter">{workout.cal} KCAL</p>
                                    </div>
                                    <Badge variant={workout.intensity === 'High' ? 'error' : workout.intensity === 'Medium' ? 'warning' : 'success'} className="hidden sm:flex px-4 py-1">
                                        {workout.intensity}
                                    </Badge>
                                    <ChevronRight className="w-5 h-5 text-slate-200 group-hover:text-primary transition-colors" />
                                </div>
                            </div>
                        ))}
                    </div>
                </Card>

                <Card className="p-8 bg-slate-950 text-white border-none relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-8 opacity-10 transform scale-150 rotate-12">
                        <Trophy className="text-8xl" />
                    </div>
                    <div className="relative z-10 flex flex-col h-full">
                        <h3 className="text-xs font-black text-primary uppercase tracking-[0.2em] mb-1">Active Challenge</h3>
                        <h4 className="text-2xl font-black italic tracking-tight mb-8">Juhu Monsoon Run</h4>

                        <div className="space-y-8 flex-1">
                            <div className="space-y-4">
                                <div className="flex justify-between text-sm font-black italic">
                                    <span>Distance Traveled</span>
                                    <span className="text-primary">12.4 / 20 km</span>
                                </div>
                                <div className="h-2 bg-white/5 rounded-full overflow-hidden p-0.5">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: '62%' }}
                                        transition={{ duration: 1.5 }}
                                        className="h-full bg-primary rounded-full shadow-[0_0_15px_rgba(var(--primary),0.4)]"
                                    />
                                </div>
                            </div>

                            <div className="bg-white/5 rounded-2xl p-4 border border-white/5">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-500">
                                        <Trophy className="w-4 h-4" />
                                    </div>
                                    <p className="text-xs font-bold text-white/80">Current Rank: <span className="text-white font-black italic">#422</span> in Mumbai</p>
                                </div>
                            </div>
                        </div>

                        <Button className="w-full h-14 mt-8 rounded-2xl bg-primary text-white font-black hover:bg-primary-dark transition-all">
                            View Leaderboard
                        </Button>
                    </div>
                </Card>
            </Grid>

            {/* Bottom Section: Integrations & Hardware */}
            <Section className="py-0">
                <Grid cols={3}>
                    <Card className="p-8 space-y-6 group cursor-pointer hover:border-blue-500/30 transition-all">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500">
                                    <Bluetooth className="w-5 h-5" />
                                </div>
                                <h4 className="font-black text-slate-900 dark:text-white italic">Hardware Sync</h4>
                            </div>
                            <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                        </div>
                        <div className="flex items-center gap-4">
                            <Smartphone className="w-5 h-5 text-slate-400" />
                            <div className="flex-1">
                                <p className="text-sm font-bold text-slate-900 dark:text-white">Apple Watch Ultra 2</p>
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Last synced 2m ago</p>
                            </div>
                        </div>
                    </Card>

                    <Card className="p-8 space-y-6 group cursor-pointer hover:border-primary/30 transition-all">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                <Target className="w-5 h-5" />
                            </div>
                            <h4 className="font-black text-slate-900 dark:text-white italic">Milestones</h4>
                        </div>
                        <p className="text-sm font-medium text-slate-500 leading-relaxed">You're <span className="text-slate-900 dark:text-white font-black italic">3 sessions</span> away from your "7-Day Streak" badge.</p>
                    </Card>

                    <Card className="p-8 space-y-6 group cursor-pointer hover:border-secondary/30 transition-all">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                                <Dumbbell className="w-5 h-5" />
                            </div>
                            <h4 className="font-black text-slate-900 dark:text-white italic">Equipment</h4>
                        </div>
                        <div className="flex gap-2">
                            {['Dumbbells', 'Mat', 'Smart Rope'].map(eq => (
                                <Badge key={eq} variant="outline" className="px-3 py-1 font-bold text-[8px]">{eq}</Badge>
                            ))}
                        </div>
                    </Card>
                </Grid>
            </Section>
        </div>
    );
};

export default Fitness;
