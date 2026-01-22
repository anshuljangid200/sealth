
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, RefreshCw, ChevronRight } from 'lucide-react';
import { Button, Badge, cn } from '../UI';

interface WeeklyPlanModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const WeeklyPlanModal: React.FC<WeeklyPlanModalProps> = ({ isOpen, onClose }) => {
    const [selectedDay, setSelectedDay] = useState('Mon');
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-slate-950/60 backdrop-blur-md"
                />

                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-800"
                >
                    <button onClick={onClose} className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors z-10">
                        <X className="w-5 h-5 text-slate-400" />
                    </button>

                    <div className="p-8 md:p-10 space-y-8">
                        <div className="flex flex-col items-center text-center space-y-4">
                            <div className="w-20 h-20 bg-blue-500/10 rounded-full flex items-center justify-center text-blue-500 mb-2">
                                <Calendar className="w-10 h-10" />
                            </div>
                            <div>
                                <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight italic">Weekly Menu</h2>
                                <p className="text-slate-500 font-medium">Customize your upcoming meals.</p>
                            </div>
                        </div>

                        {/* Day Selector */}
                        <div className="flex justify-between items-center bg-slate-50 dark:bg-slate-800 p-2 rounded-2xl overflow-x-auto">
                            {days.map(day => (
                                <button
                                    key={day}
                                    onClick={() => setSelectedDay(day)}
                                    className={cn(
                                        "w-12 h-12 rounded-xl flex items-center justify-center text-sm font-bold transition-all",
                                        selectedDay === day ? "bg-white dark:bg-slate-700 shadow-md text-slate-900 dark:text-white scale-110" : "text-slate-400 hover:text-slate-600"
                                    )}
                                >
                                    {day}
                                </button>
                            ))}
                        </div>

                        {/* Meal List */}
                        <div className="space-y-4">
                            {[
                                { type: 'Lunch', name: 'Quinoa & Black Bean Bowl', cal: 450 },
                                { type: 'Dinner', name: 'Grilled Salmon with Asparagus', cal: 520 }
                            ].map((meal, idx) => (
                                <div key={idx} className="p-5 border border-slate-100 dark:border-slate-800 rounded-2xl flex items-center justify-between group hover:border-primary/50 transition-colors cursor-pointer bg-slate-50/50 dark:bg-slate-900/50">
                                    <div className="space-y-1">
                                        <div className="flex items-center gap-3">
                                            <Badge variant="info">{meal.type}</Badge>
                                            <span className="text-xs font-bold text-slate-400">{meal.cal} Kcal</span>
                                        </div>
                                        <h4 className="font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">{meal.name}</h4>
                                    </div>
                                    <Button variant="ghost" className="text-slate-400 hover:text-primary">
                                        <RefreshCw className="w-5 h-5" />
                                    </Button>
                                </div>
                            ))}
                        </div>

                        <Button className="w-full h-14 rounded-2xl bg-blue-500 text-white font-black hover:bg-blue-600 transition-all shadow-xl shadow-blue-500/20">
                            Save Changes
                        </Button>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default WeeklyPlanModal;
