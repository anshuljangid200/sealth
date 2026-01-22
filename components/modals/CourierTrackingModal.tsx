
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Bike, Phone, MessageSquare } from 'lucide-react';
import { Button, Badge } from '../UI';

interface CourierTrackingModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const CourierTrackingModal: React.FC<CourierTrackingModalProps> = ({ isOpen, onClose }) => {
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
                    {/* Map Placeholder Background */}
                    <div className="absolute top-0 left-0 right-0 h-64 bg-slate-100">
                        <div className="w-full h-full bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=19.0760,72.8777&zoom=14&size=600x300&style=feature:all|element:all|saturation:-100|lightness:30')] bg-cover opacity-50grayscale" />
                        {/* Close Button on Map */}
                        <button onClick={onClose} className="absolute top-6 right-6 p-2 bg-white/80 backdrop-blur rounded-full hover:bg-white transition-colors z-10 shadow-lg">
                            <X className="w-5 h-5 text-slate-600" />
                        </button>
                    </div>

                    <div className="pt-56 relative z-10">
                        <div className="bg-white dark:bg-slate-900 rounded-t-[2.5rem] p-8 space-y-8 shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
                            <div className="flex justify-between items-start">
                                <div>
                                    <Badge variant="success" className="mb-2 animate-pulse">Arriving in 8 mins</Badge>
                                    <h2 className="text-2xl font-black text-slate-900 dark:text-white italic">Lunch is on the way!</h2>
                                    <p className="text-slate-500 font-medium text-sm">Approaching your location.</p>
                                </div>
                                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                                    <Bike className="w-6 h-6" />
                                </div>
                            </div>

                            {/* Driver Info */}
                            <div className="flex items-center gap-4 bg-slate-50 dark:bg-slate-800 p-4 rounded-2xl">
                                <img src="https://i.pravatar.cc/150?u=driver" className="w-12 h-12 rounded-full object-cover border-2 border-white dark:border-slate-700" alt="Driver" />
                                <div className="flex-1">
                                    <h4 className="font-bold text-slate-900 dark:text-white">Sanjay K.</h4>
                                    <p className="text-xs text-slate-500">4.9 Star Rating • Vaccine Verified</p>
                                </div>
                                <div className="flex gap-2">
                                    <button className="p-2 bg-white dark:bg-slate-700 rounded-xl shadow-sm hover:scale-105 transition-transform">
                                        <Phone className="w-4 h-4 text-slate-600 dark:text-slate-300" />
                                    </button>
                                    <button className="p-2 bg-white dark:bg-slate-700 rounded-xl shadow-sm hover:scale-105 transition-transform">
                                        <MessageSquare className="w-4 h-4 text-slate-600 dark:text-slate-300" />
                                    </button>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="flex gap-4 items-start">
                                    <div className="flex flex-col items-center">
                                        <div className="w-3 h-3 bg-slate-300 rounded-full" />
                                        <div className="w-0.5 h-10 bg-slate-200" />
                                        <div className="w-3 h-3 bg-primary rounded-full ring-4 ring-primary/20" />
                                    </div>
                                    <div className="flex flex-col gap-10">
                                        <div>
                                            <p className="text-xs font-bold text-slate-400">1:15 PM</p>
                                            <p className="font-bold text-slate-500 line-through">Left Sealth Cloud Kitchen</p>
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-primary">1:24 PM (Est)</p>
                                            <p className="font-bold text-slate-900 dark:text-white">Your Doorstep</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default CourierTrackingModal;
