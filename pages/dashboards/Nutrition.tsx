
import React from 'react';
import { motion } from 'framer-motion';
import { Card, Button, Badge, Icon, Container, Grid, Section, cn } from '../../components/UI';
import { AuthContext } from '../../App';
import {
    Utensils, Clock, TrendingUp, ChevronRight,
    Calendar, MapPin, Coffee, Pizza, Leaf,
    Droplets, Scale, Soup
} from 'lucide-react';
import WeeklyPlanModal from '../../components/modals/WeeklyPlanModal';
import CourierTrackingModal from '../../components/modals/CourierTrackingModal';

const Nutrition: React.FC = () => {
    const auth = React.useContext(AuthContext);
    const [showWeeklyPlan, setShowWeeklyPlan] = React.useState(false);
    const [showCourier, setShowCourier] = React.useState(false);
    const macros = [
        { label: 'Protein', value: '102g', target: '140g', color: 'bg-primary', progress: 72 },
        { label: 'Carbs', value: '165g', target: '220g', color: 'bg-secondary', progress: 75 },
        { label: 'Fats', value: '52g', target: '70g', color: 'bg-amber-500', progress: 74 },
        { label: 'Fiber', value: '28g', target: '40g', color: 'bg-emerald-500', progress: 70 },
    ];

    const mealPlan = [
        { time: '08:00 AM', type: 'Breakfast', name: 'Ragi Idli with Sambhar & Coconut Chutney', status: 'Consumed', cal: 320, source: 'Home' },
        { time: '01:30 PM', type: 'Lunch', name: 'Low-Carb Paneer Makhani & Millet Paratha', status: 'Delivering', cal: 540, source: 'SEALTH Kitchen' },
        { time: '04:45 PM', type: 'Snack', name: 'Roasted Makhana with Green Tea', status: 'Scheduled', cal: 150, source: 'Personal' },
        { time: '08:30 PM', type: 'Dinner', name: 'Grilled Fish Tikka & Sauteed Greens', status: 'Scheduled', cal: 420, source: 'SEALTH Kitchen' },
    ];

    return (
        <div className="animate-fade-in space-y-10">
            {/* Header */}
            <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="space-y-1">
                    <h1 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight">Nutrition & Tiffin</h1>
                    <p className="text-slate-500 font-medium">Precision-balanced meals for {auth?.user?.name || 'User'}, tailored to your metabolic profile.</p>
                </div>
                <div className="flex gap-3">
                    <Button variant="outline" className="gap-2" onClick={() => setShowWeeklyPlan(true)}>
                        <Calendar className="w-4 h-4" /> Weekly Plan
                    </Button>
                    <Button className="gap-2" onClick={() => setShowWeeklyPlan(true)}>
                        <Soup className="w-4 h-4" /> Customize Meals
                    </Button>
                </div>
            </header>

            <Grid cols={3}>
                {/* Macro Tracking */}
                <Card className="lg:col-span-2 p-8">
                    <div className="flex items-center justify-between mb-10">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                <TrendingUp className="w-5 h-5" />
                            </div>
                            <h3 className="text-lg font-black text-slate-900 dark:text-white italic">Macro Distribution</h3>
                        </div>
                        <Badge variant="success" className="px-4 py-1.5 bg-emerald-50 text-emerald-600 border-emerald-100">82% Precision</Badge>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-x-12 gap-y-8">
                        {macros.map((macro) => (
                            <div key={macro.label} className="space-y-4">
                                <div className="flex justify-between items-end">
                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{macro.label}</span>
                                        <span className="text-xl font-black text-slate-900 dark:text-white">{macro.value}</span>
                                    </div>
                                    <span className="text-xs font-bold text-slate-400">Target: {macro.target}</span>
                                </div>
                                <div className="h-3 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden p-0.5">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: `${macro.progress}%` }}
                                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                                        className={cn("h-full rounded-full shadow-inner", macro.color)}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </Card>

                {/* Live Delivery Card */}
                <Card className="p-8 bg-slate-950 dark:bg-slate-900/50 border-none relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-8 opacity-10 transform translate-x-4 -translate-y-4">
                        <MapPin className="text-8xl text-white" />
                    </div>

                    <div className="relative z-10 space-y-8">
                        <div>
                            <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-1">Live Tracking</h3>
                            <h4 className="text-2xl font-black text-white italic">Lunch Tiffin</h4>
                        </div>

                        <div className="flex items-center gap-5">
                            <div className="relative">
                                <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center text-white shadow-xl shadow-primary/40 animate-float">
                                    <Utensils className="w-8 h-8" />
                                </div>
                                <div className="absolute -bottom-2 -right-2 bg-white dark:bg-slate-800 p-1 rounded-lg">
                                    <div className="w-4 h-4 bg-emerald-500 rounded-full border-2 border-white dark:border-slate-800 animate-pulse" />
                                </div>
                            </div>
                            <div>
                                <p className="text-xs font-black text-white/40 uppercase tracking-widest">Estimated Arrival</p>
                                <p className="text-xl font-black text-white italic">1:45 PM (In 12m)</p>
                            </div>
                        </div>

                        <div className="space-y-4 pt-4">
                            <div className="relative pl-6 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-0.5 before:bg-white/10">
                                <div className="relative flex items-center gap-4 py-2 opacity-50">
                                    <div className="absolute -left-[3px] w-2 h-2 rounded-full bg-white/20" />
                                    <span className="text-xs font-bold text-white/60 line-through">Left Kitchen - 1:15 PM</span>
                                </div>
                                <div className="relative flex items-center gap-4 py-2">
                                    <div className="absolute -left-[3px] w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(var(--primary),0.5)]" />
                                    <span className="text-xs font-black text-white">Near Gateway of India</span>
                                </div>
                            </div>
                        </div>

                        <Button
                            className="w-full h-14 rounded-2xl bg-white text-slate-950 font-black hover:bg-slate-100 transition-all"
                            onClick={() => setShowCourier(true)}
                        >
                            Track Courier
                        </Button>
                    </div>
                </Card>
            </Grid>

            {/* Meal Schedule Table */}
            <Card className="p-0 overflow-hidden border-slate-200/60 dark:border-slate-800/60">
                <div className="p-8 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <h3 className="text-xl font-black text-slate-900 dark:text-white italic">Today's Meal Architecture</h3>
                    <Badge variant="outline" className="gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary" /> 1,430 Total Kcal
                    </Badge>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-slate-50/50 dark:bg-slate-900/20 text-left">
                                <th className="p-6 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Time / Event</th>
                                <th className="p-6 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Composition</th>
                                <th className="p-6 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Energy</th>
                                <th className="p-6 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Status</th>
                                <th className="p-6 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Provision</th>
                                <th className="p-6"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                            {mealPlan.map((meal, idx) => (
                                <tr key={idx} className="group hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-all cursor-pointer">
                                    <td className="p-6">
                                        <div className="flex flex-col">
                                            <span className="text-xs font-black text-primary uppercase tracking-tighter mb-1">{meal.type}</span>
                                            <span className="font-bold text-slate-900 dark:text-white">{meal.time}</span>
                                        </div>
                                    </td>
                                    <td className="p-6">
                                        <div className="flex items-center gap-3">
                                            <div className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-400 group-hover:bg-primary/10 group-hover:text-primary transition-all">
                                                {meal.type === 'Breakfast' ? <Coffee className="w-5 h-5" /> :
                                                    meal.type === 'Lunch' ? <Utensils className="w-5 h-5" /> :
                                                        meal.type === 'Snack' ? <Leaf className="w-5 h-5" /> : <Soup className="w-5 h-5" />}
                                            </div>
                                            <span className="font-bold text-slate-700 dark:text-slate-200">{meal.name}</span>
                                        </div>
                                    </td>
                                    <td className="p-6">
                                        <span className="font-black text-slate-900 dark:text-white tabular-nums">{meal.cal} <span className="text-[10px] opacity-40">KCAL</span></span>
                                    </td>
                                    <td className="p-6">
                                        <Badge
                                            variant={meal.status === 'Consumed' ? 'success' : meal.status === 'Delivering' ? 'info' : 'warning'}
                                            className="font-black"
                                        >
                                            {meal.status}
                                        </Badge>
                                    </td>
                                    <td className="p-6">
                                        <span className="text-xs font-black text-slate-400 uppercase tracking-widest italic">{meal.source}</span>
                                    </td>
                                    <td className="p-6 text-right">
                                        <Button variant="ghost" className="w-10 h-10 p-0 rounded-full opacity-0 group-hover:opacity-100 transition-all">
                                            <ChevronRight className="w-5 h-5" />
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Card>

            {/* Bottom Grid: Insights & Dietary Profile */}
            <Grid cols={3}>
                <Card className="p-8 space-y-6">
                    <div className="flex items-center gap-3">
                        <Droplets className="w-5 h-5 text-blue-500" />
                        <h3 className="text-lg font-black text-slate-900 dark:text-white italic">Hydration Protocol</h3>
                    </div>
                    <div className="flex items-end gap-2 px-2 h-32">
                        {[40, 65, 80, 50, 90, 75, 60, 85].map((h, i) => (
                            <div key={i} className="flex-1 bg-blue-500/10 rounded-t-lg relative group">
                                <motion.div
                                    initial={{ height: 0 }}
                                    animate={{ height: `${h}%` }}
                                    transition={{ duration: 1, delay: i * 0.1 }}
                                    className="absolute bottom-0 left-0 right-0 bg-blue-500 rounded-t-lg group-hover:bg-blue-400 transition-colors"
                                />
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between items-center text-sm font-bold">
                        <span className="text-slate-400">Target: 3.5L</span>
                        <span className="text-blue-500">2.4L Reached</span>
                    </div>
                </Card>

                <Card className="p-8 space-y-6">
                    <div className="flex items-center gap-3">
                        <Scale className="w-5 h-5 text-amber-500" />
                        <h3 className="text-lg font-black text-slate-900 dark:text-white italic">Weight Kinetics</h3>
                    </div>
                    <div className="space-y-4 pt-4">
                        <div className="flex justify-between items-end border-b border-slate-100 dark:border-slate-800 pb-4">
                            <div>
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Current Weight</p>
                                <p className="text-3xl font-black text-slate-900 dark:text-white italic">74.2 <span className="text-sm opacity-40">KG</span></p>
                            </div>
                            <div className="text-right">
                                <p className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">-0.8 kg</p>
                                <p className="text-xs font-bold text-slate-400">Weekly Delta</p>
                            </div>
                        </div>
                        <p className="text-xs text-slate-500 font-medium leading-relaxed italic">"On track to reach your 72.0 kg goal by February 15th."</p>
                    </div>
                </Card>

                <Card className="p-8 bg-emerald-950 dark:bg-emerald-900/40 border-none relative overflow-hidden group">
                    <div className="absolute -right-6 -bottom-6 opacity-10 transform rotate-12">
                        <Leaf className="w-48 h-48 text-white" />
                    </div>
                    <div className="relative z-10 space-y-6">
                        <h3 className="text-sm font-black text-emerald-400 uppercase tracking-widest">Dietary Preferences</h3>
                        <div className="flex flex-wrap gap-2">
                            {['Eggitarian', 'No Cilantro', 'Lactose Intolerant', 'High Protein'].map((tag) => (
                                <span key={tag} className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-xl text-xs font-bold text-white/90 border border-white/5">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <Button className="w-full mt-4 bg-emerald-500 text-white hover:bg-emerald-400 border-none rounded-2xl font-black">
                            Update Profile
                        </Button>
                    </div>
                </Card>
            </Grid>

            {/* Modals */}
            <WeeklyPlanModal isOpen={showWeeklyPlan} onClose={() => setShowWeeklyPlan(false)} />
            <CourierTrackingModal isOpen={showCourier} onClose={() => setShowCourier(false)} />
        </div>
    );
};

export default Nutrition;
