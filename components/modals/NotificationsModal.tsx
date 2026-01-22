
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Bell, CheckCircle, AlertTriangle, Info, Clock } from 'lucide-react';
import { cn } from '../UI';

interface NotificationsModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const NotificationsModal: React.FC<NotificationsModalProps> = ({ isOpen, onClose }) => {
    const notifications = [
        { type: 'success', title: 'Payment Successful', message: 'Your "Desi Fusion" plan is now active.', time: '2 mins ago' },
        { type: 'info', title: 'Upcoming Consultation', message: 'Dr. Ananya S. will join in 15 mins.', time: '10 mins ago' },
        { type: 'warning', title: 'Profile Incomplete', message: 'Add your dietary preferences for better accuracy.', time: '1 hour ago' },
        { type: 'info', title: 'Lunch Delivered', message: 'Your tiffin has been delivered to reception.', time: 'Yesterday' },
    ];

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[100] flex items-start justify-end p-4 pt-20">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-transparent" // Transparent so clicking outside closes it
                />

                <motion.div
                    initial={{ opacity: 0, scale: 0.95, x: 20 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.95, x: 20 }}
                    className="relative w-full max-w-sm bg-white dark:bg-slate-900 rounded-3xl shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-800 pointer-events-auto"
                >
                    <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-800/50 backdrop-blur-sm">
                        <div className="flex items-center gap-3">
                            <div className="bg-white dark:bg-slate-700 p-2 rounded-xl shadow-sm">
                                <Bell className="w-5 h-5 text-slate-900 dark:text-white" />
                            </div>
                            <div>
                                <h3 className="font-black text-slate-900 dark:text-white">Notifications</h3>
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">You have 2 unread</p>
                            </div>
                        </div>
                        <button onClick={onClose} className="p-2 hover:bg-white dark:hover:bg-slate-700 rounded-full transition-colors">
                            <X className="w-4 h-4 text-slate-400" />
                        </button>
                    </div>

                    <div className="max-h-[60vh] overflow-y-auto p-2">
                        {notifications.map((notif, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="p-4 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-2xl cursor-pointer group transition-colors relative overflow-hidden"
                            >
                                <div className="flex gap-4">
                                    <div className={cn("shrink-0 w-10 h-10 rounded-xl flex items-center justify-center",
                                        notif.type === 'success' ? "bg-emerald-100 text-emerald-600" :
                                            notif.type === 'warning' ? "bg-amber-100 text-amber-600" : "bg-blue-100 text-blue-600"
                                    )}>
                                        {notif.type === 'success' ? <CheckCircle className="w-5 h-5" /> :
                                            notif.type === 'warning' ? <AlertTriangle className="w-5 h-5" /> : <Info className="w-5 h-5" />}
                                    </div>
                                    <div className="flex-1 space-y-1">
                                        <div className="flex justify-between items-start">
                                            <h4 className={cn("text-sm font-bold", i < 2 ? "text-slate-900 dark:text-white" : "text-slate-600 dark:text-slate-300")}>{notif.title}</h4>
                                            <span className="text-[10px] font-bold text-slate-400 flex items-center gap-1">
                                                <Clock className="w-3 h-3" /> {notif.time}
                                            </span>
                                        </div>
                                        <p className="text-xs text-slate-500 font-medium leading-relaxed">{notif.message}</p>
                                    </div>
                                </div>
                                {i < 2 && (
                                    <div className="absolute top-4 right-4 w-2 h-2 bg-rose-500 rounded-full border-2 border-white dark:border-slate-800" />
                                )}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default NotificationsModal;
