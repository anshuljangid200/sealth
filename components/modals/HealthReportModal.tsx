
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, FileText, Download, Activity, Heart, TrendingUp } from 'lucide-react';
import { Button, Badge } from '../UI';

interface HealthReportModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const HealthReportModal: React.FC<HealthReportModalProps> = ({ isOpen, onClose }) => {
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
                    <button
                        onClick={onClose}
                        className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors z-10"
                    >
                        <X className="w-5 h-5 text-slate-400" />
                    </button>

                    <div className="p-8 md:p-10 space-y-8">
                        <div className="flex flex-col items-center text-center space-y-4">
                            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-2">
                                <FileText className="w-10 h-10" />
                            </div>
                            <div>
                                <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight italic">Health Report</h2>
                                <p className="text-slate-500 font-medium">Monthly metabolic analysis & progress summary.</p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <Activity className="w-5 h-5 text-emerald-500" />
                                    <span className="font-bold text-slate-700 dark:text-slate-200">Metabolic Rate</span>
                                </div>
                                <span className="font-black text-slate-900 dark:text-white">+12%</span>
                            </div>
                            <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <Heart className="w-5 h-5 text-rose-500" />
                                    <span className="font-bold text-slate-700 dark:text-slate-200">Avg. Heart Rate</span>
                                </div>
                                <span className="font-black text-slate-900 dark:text-white">68 BPM</span>
                            </div>
                            <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <TrendingUp className="w-5 h-5 text-blue-500" />
                                    <span className="font-bold text-slate-700 dark:text-slate-200">Weight Trend</span>
                                </div>
                                <Badge variant="success">-0.8 kg/week</Badge>
                            </div>
                        </div>

                        <Button
                            onClick={() => {
                                // Dynamic download of a professional health report template
                                const reportUrl = "https://www.who.int/docs/default-source/nutrition-and-food-safety/reporting/health-report-template.pdf";
                                const link = document.createElement('a');
                                link.href = reportUrl;
                                link.target = "_blank";
                                link.download = 'Sealth_Health_Report.pdf';
                                document.body.appendChild(link);
                                link.click();
                                document.body.removeChild(link);
                            }}
                            className="w-full h-14 rounded-2xl bg-primary text-white font-black hover:bg-primary-dark transition-all shadow-xl shadow-primary/20 gap-2"
                        >
                            <Download className="w-5 h-5" />
                            Download Full PDF
                        </Button>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default HealthReportModal;
