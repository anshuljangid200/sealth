
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Utensils, Zap, Plus } from 'lucide-react';
import { Button, cn } from '../UI';

interface MealLoggerModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const MealLoggerModal: React.FC<MealLoggerModalProps> = ({ isOpen, onClose }) => {
    const [mealType, setMealType] = useState('Breakfast');
    const [query, setQuery] = useState('');

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
                    className="relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-800"
                >
                    <button onClick={onClose} className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors z-10">
                        <X className="w-5 h-5 text-slate-400" />
                    </button>

                    <div className="p-8 md:p-10 space-y-8">
                        <div className="flex flex-col items-center text-center space-y-4">
                            <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center text-emerald-500 mb-2">
                                <Utensils className="w-10 h-10" />
                            </div>
                            <div>
                                <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight italic">Log Meal</h2>
                                <p className="text-slate-500 font-medium">Track your calories and macros instantly.</p>
                            </div>
                        </div>

                        {/* Meal Type Selector */}
                        <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-xl">
                            {['Breakfast', 'Lunch', 'Snack', 'Dinner'].map(type => (
                                <button
                                    key={type}
                                    onClick={() => setMealType(type)}
                                    className={cn(
                                        "flex-1 py-3 rounded-lg text-sm font-bold transition-all",
                                        mealType === type ? "bg-white dark:bg-slate-700 shadow-md text-slate-900 dark:text-white" : "text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
                                    )}
                                >
                                    {type}
                                </button>
                            ))}
                        </div>

                        <div className="space-y-4">
                            <div className="relative">
                                <textarea
                                    className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-2xl p-5 text-lg font-medium text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-2 focus:ring-emerald-500 resize-none h-32"
                                    placeholder="e.g., 2 slices of Toast with Avocado and a boiled egg..."
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                />
                                <div className="absolute bottom-4 right-4 text-[10px] font-black uppercase text-slate-400 tracking-widest bg-white dark:bg-slate-900 px-2 py-1 rounded-lg">
                                    AI Powered
                                </div>
                            </div>
                        </div>

                        <Button className="w-full h-14 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-black hover:scale-[1.02] transition-all shadow-xl gap-2">
                            <Plus className="w-5 h-5" />
                            Add to Diary
                        </Button>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default MealLoggerModal;
