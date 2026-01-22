
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search, ArrowRight, Clock, ChevronRight } from 'lucide-react';
import { cn } from '../UI';

interface SearchModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
    const [query, setQuery] = useState('');

    const recentSearches = [
        "High Protein Diet", "Yoga Classes", "Dr. Ananya Consult", "Vegan Tiffin"
    ];

    const results = [
        { type: 'Plan', title: 'Ketogenic Elite', subtitle: 'Nutrition Plan • 4 Weeks' },
        { type: 'Doctor', title: 'Dr. Sarah Smith', subtitle: 'Cardiologist • Available Today' },
        { type: 'Article', title: 'Understanding Keto Flu', subtitle: 'Wellness Blog • 5 min read' }
    ];

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[100] flex items-start justify-center pt-24 p-4">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-slate-950/40 backdrop-blur-sm"
                />

                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: -20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -20 }}
                    className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-800"
                >
                    <div className="p-4 border-b border-slate-100 dark:border-slate-800 flex items-center gap-4">
                        <Search className="w-6 h-6 text-slate-400 ml-2" />
                        <input
                            autoFocus
                            type="text"
                            placeholder="Search plans, experts, or articles..."
                            className="flex-1 bg-transparent border-none text-xl font-medium text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-0 p-2"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                        <button onClick={onClose} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
                            <X className="w-5 h-5 text-slate-400" />
                        </button>
                    </div>

                    <div className="p-6">
                        {!query ? (
                            <div className="space-y-4">
                                <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest">Recent Searches</h3>
                                <div className="flex flex-wrap gap-3">
                                    {recentSearches.map(term => (
                                        <button key={term} className="flex items-center gap-2 px-4 py-2 bg-slate-50 dark:bg-slate-800 rounded-xl text-sm font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
                                            <Clock className="w-3 h-3 text-slate-400" />
                                            {term}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <div className="space-y-2">
                                <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Top Results</h3>
                                {results.map((result, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.05 }}
                                        className="flex items-center justify-between p-4 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-2xl group cursor-pointer transition-colors"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold",
                                                result.type === 'Plan' ? "bg-primary" :
                                                    result.type === 'Doctor' ? "bg-blue-500" : "bg-emerald-500"
                                            )}>
                                                {result.type[0]}
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-slate-900 dark:text-white">{result.title}</h4>
                                                <p className="text-xs text-slate-500 font-medium">{result.subtitle}</p>
                                            </div>
                                        </div>
                                        <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-primary transition-colors" />
                                    </motion.div>
                                ))}
                            </div>
                        )}
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default SearchModal;
