
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, User, LogIn } from 'lucide-react';
import { Button, cn } from '../UI';

interface GoogleAccount {
    name: string;
    email: string;
    avatar?: string;
}

interface GoogleAccountModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSelect: (account: GoogleAccount) => void;
}

const ACCOUNTS: GoogleAccount[] = [
    { name: 'anshul jangid', email: 'anshuljangid.indian@gmail.com' },
    { name: 'anshul jangid', email: 'anshuljangid.aj@gmail.com' },
    { name: 'Anshul Jangid', email: 'anshuljangid.bundi@gmail.com' },
    { name: 'Anshul sharma', email: 'hopehappiness3000@gmail.com' },
    { name: 'Kriti Sharma', email: 'kritisharma.predusk@gmail.com' },
    { name: 'anshul jangid', email: 'anshuljangid0001@gmail.com' },
];

const GoogleAccountModal: React.FC<GoogleAccountModalProps> = ({ isOpen, onClose, onSelect }) => {
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                />

                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 10 }}
                    className="relative w-full max-w-[450px] bg-[#1a1a1b] rounded-xl shadow-2xl overflow-hidden border border-white/10 text-white font-sans"
                >
                    <div className="p-8 pb-4">
                        <div className="flex items-center gap-2 mb-8">
                            <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" className="w-6 h-6" alt="Google" />
                            <span className="text-sm font-medium text-slate-300">Sign in with Google</span>
                        </div>

                        <h2 className="text-3xl font-normal mb-2">Choose an account</h2>
                        <p className="text-slate-400 text-base mb-8">
                            to continue to <span className="text-blue-400">sealth.in</span>
                        </p>

                        <div className="space-y-0 -mx-8 max-h-[400px] overflow-y-auto custom-scrollbar">
                            {ACCOUNTS.map((account, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => onSelect(account)}
                                    className="w-full px-8 py-3.5 flex items-center gap-4 hover:bg-white/5 transition-colors border-t border-white/10 text-left first:border-t-0"
                                >
                                    <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center text-sm font-medium shrink-0">
                                        {account.name.charAt(0).toUpperCase()}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium truncate">{account.name}</p>
                                        <p className="text-xs text-slate-400 truncate">{account.email}</p>
                                    </div>
                                </button>
                            ))}

                            <button className="w-full px-8 py-4 flex items-center gap-4 hover:bg-white/5 transition-colors border-t border-white/10 text-left">
                                <div className="w-9 h-9 rounded-full bg-transparent border border-white/20 flex items-center justify-center shrink-0">
                                    <User className="w-5 h-5 text-slate-400" />
                                </div>
                                <span className="text-sm font-medium">Use another account</span>
                            </button>
                        </div>
                    </div>

                    <div className="p-8 pt-0 mt-4">
                        <p className="text-[11px] text-slate-500 leading-normal">
                            Before using this app, you can review sealth.in's <span className="text-blue-400 cursor-pointer hover:underline">privacy policy</span>
                        </p>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default GoogleAccountModal;
