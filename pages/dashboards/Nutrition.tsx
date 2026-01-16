
import React from 'react';
import { motion } from 'framer-motion';
import { Card, Button, Badge, Icon, cn } from '../../components/UI';
import { Utensils, Clock, TrendingUp, ChevronRight } from 'lucide-react';

const Nutrition: React.FC = () => {
    const macros = [
        { label: 'Protein', value: '85g', target: '120g', color: 'bg-blue-500', progress: 70 },
        { label: 'Carbs', value: '180g', target: '200g', color: 'bg-emerald-500', progress: 90 },
        { label: 'Fats', value: '45g', target: '60g', color: 'bg-amber-500', progress: 75 },
        { label: 'Fiber', value: '25g', target: '35g', color: 'bg-indigo-500', progress: 71 },
    ];

    const mealPlan = [
        { time: '08:00 AM', type: 'Breakfast', name: 'Avocado Toast with Poached Eggs', status: 'Consumed', cal: 420 },
        { time: '01:30 PM', type: 'Lunch', name: 'Grilled Chicken Quinoa Bowl', status: 'Delivering', cal: 580 },
        { time: '04:30 PM', type: 'Snack', name: 'Greek Yogurt with Berries', status: 'Scheduled', cal: 180 },
        { time: '08:00 PM', type: 'Dinner', name: 'Seared Salmon with Asparagus', status: 'Scheduled', cal: 450 },
    ];

    return (
        <div className="space-y-8 max-w-6xl">
            <header>
                <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight mb-2">Nutrition & Tiffin</h1>
                <p className="text-slate-500 font-medium">Fuel your body with precision-engineered nutrition.</p>
            </header>

            <div className="grid lg:grid-cols-3 gap-8">
                {/* Daily Macros */}
                <Card className="lg:col-span-2 p-8">
                    <div className="flex items-center justify-between mb-8">
                        <h3 className="text-xl font-bold flex items-center gap-2">
                            <TrendingUp className="text-primary w-5 h-5" />
                            Daily Macros
                        </h3>
                        <Badge variant="success">On Track</Badge>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-8">
                        {macros.map((macro) => (
                            <div key={macro.label} className="space-y-3">
                                <div className="flex justify-between text-sm font-bold">
                                    <span className="text-slate-500 uppercase tracking-wider">{macro.label}</span>
                                    <span className="text-slate-900 dark:text-white">{macro.value} / {macro.target}</span>
                                </div>
                                <div className="h-2.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: `${macro.progress}%` }}
                                        transition={{ duration: 1, ease: "easeOut" }}
                                        className={cn("h-full rounded-full shadow-lg opacity-80", macro.color)}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </Card>

                {/* Tiffin Status */}
                <Card className="p-8 bg-primary/5 border-primary/20">
                    <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                        <Clock className="text-primary w-5 h-5" />
                        Active Delivery
                    </h3>
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="h-12 w-12 rounded-2xl bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center text-primary">
                                <Utensils className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="font-bold text-slate-900 dark:text-white">Lunch Tiffin</p>
                                <p className="text-xs text-slate-500 font-bold uppercase tracking-tight">Est. 1:45 PM</p>
                            </div>
                        </div>

                        <div className="relative pl-6 space-y-6 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-primary/20">
                            <div className="relative flex items-center gap-3">
                                <div className="absolute -left-[19px] w-4 h-4 rounded-full bg-primary ring-4 ring-white dark:ring-slate-900" />
                                <span className="text-sm font-bold text-primary">Out for Delivery</span>
                            </div>
                            <div className="relative flex items-center gap-3">
                                <div className="absolute -left-[19px] w-4 h-4 rounded-full bg-slate-200 dark:bg-slate-700 ring-4 ring-white dark:ring-slate-900" />
                                <span className="text-sm font-medium text-slate-400">Delivered</span>
                            </div>
                        </div>

                        <Button className="w-full mt-4 py-4 text-sm">Track Package</Button>
                    </div>
                </Card>
            </div>

            {/* Meal Schedule */}
            <Card className="p-8">
                <h3 className="text-xl font-bold mb-8">Today's Schedule</h3>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-slate-100 dark:border-slate-800 text-left">
                                <th className="pb-4 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Meal</th>
                                <th className="pb-4 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Dish Name</th>
                                <th className="pb-4 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Calories</th>
                                <th className="pb-4 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Status</th>
                                <th className="pb-4"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                            {mealPlan.map((meal, idx) => (
                                <tr key={idx} className="group hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors">
                                    <td className="py-6">
                                        <div className="flex flex-col">
                                            <span className="font-black text-slate-900 dark:text-white text-sm">{meal.type}</span>
                                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">{meal.time}</span>
                                        </div>
                                    </td>
                                    <td className="py-6 font-bold text-slate-600 dark:text-slate-300">{meal.name}</td>
                                    <td className="py-6 font-black text-slate-900 dark:text-white">{meal.cal} kcal</td>
                                    <td className="py-6">
                                        <Badge variant={meal.status === 'Consumed' ? 'success' : meal.status === 'Delivering' ? 'info' : 'warning'}>
                                            {meal.status}
                                        </Badge>
                                    </td>
                                    <td className="py-6 text-right text-slate-300 group-hover:text-primary transition-colors">
                                        <ChevronRight />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Card>
        </div>
    );
};


export default Nutrition;
