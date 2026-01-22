
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, HelpCircle, ArrowRight, MousePointer } from 'lucide-react';
import { Button } from '../UI';

interface OnboardingGuideProps {
    onClose: () => void;
}

const OnboardingGuide: React.FC<OnboardingGuideProps> = ({ onClose }) => {
    const [step, setStep] = useState(0);

    const steps = [
        {
            title: "Welcome to Sealth!",
            text: "Your personalized metabolic health command center.",
            highlight: null
        },
        {
            title: "Track Your Health",
            text: "Download your monthly health report instantly here.",
            highlight: "health-report-btn"
        },
        {
            title: "Log Nutrition",
            text: "Easily log your daily meals to keep your macros in check.",
            highlight: "log-meal-btn"
        },
        {
            title: "Real-time Tiffin Tracking",
            text: "See exactly when your healthy meal arrives.",
            highlight: "track-meal-btn"
        }
    ];

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[200] flex items-end sm:items-center justify-center pointer-events-none p-4 pb-10">
                {/* Backdrop with spot effect could be complex, simple dim for now */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-slate-950/40 pointer-events-auto"
                    onClick={onClose}
                />

                <motion.div
                    key={step}
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.95 }}
                    className="relative bg-white dark:bg-slate-900 p-8 rounded-[2rem] shadow-2xl border border-slate-200 dark:border-slate-800 max-w-sm w-full pointer-events-auto"
                >
                    <button onClick={onClose} className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
                        <X className="w-5 h-5" />
                    </button>

                    <div className="flex flex-col items-center text-center space-y-4 pt-4">
                        <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center text-white shadow-lg shadow-primary/30">
                            {step === 0 ? <HelpCircle className="w-7 h-7" /> : <MousePointer className="w-7 h-7" />}
                        </div>

                        <div>
                            <h3 className="text-2xl font-black text-slate-900 dark:text-white">{steps[step].title}</h3>
                            <p className="text-slate-500 font-medium leading-relaxed">{steps[step].text}</p>
                        </div>

                        <div className="flex gap-2 pt-4 w-full">
                            {step > 0 && (
                                <Button variant="ghost" onClick={() => setStep(step - 1)} className="flex-1">Back</Button>
                            )}
                            <Button
                                onClick={() => step < steps.length - 1 ? setStep(step + 1) : onClose()}
                                className="flex-1 rounded-xl shadow-lg"
                            >
                                {step < steps.length - 1 ? "Next Tip" : "Get Started"} <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                        </div>

                        <div className="flex gap-1.5 pt-2">
                            {steps.map((_, i) => (
                                <div key={i} className={`w-2 h-2 rounded-full transition-colors ${i === step ? 'bg-primary' : 'bg-slate-200 dark:bg-slate-800'}`} />
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default OnboardingGuide;
