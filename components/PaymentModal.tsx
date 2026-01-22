
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, Smartphone, ShieldCheck, ArrowRight } from 'lucide-react';
import { Button, Card, Icon, Badge, cn } from './UI';

interface PaymentModalProps {
    isOpen: boolean;
    onClose: () => void;
    planName: string;
    price: number;
    onSuccess: () => void;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ isOpen, onClose, planName, price, onSuccess }) => {
    const [step, setStep] = useState<'qr' | 'processing' | 'success'>('qr');

    useEffect(() => {
        if (step === 'processing') {
            const timer = setTimeout(() => {
                setStep('success');
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [step]);

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
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors z-10"
                    >
                        <X className="w-5 h-5 text-slate-400" />
                    </button>

                    <div className="p-8 md:p-12">
                        <AnimatePresence mode="wait">
                            {step === 'qr' && (
                                <motion.div
                                    key="qr"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="space-y-8"
                                >
                                    <div className="text-center space-y-2">
                                        <Badge className="bg-primary/10 text-primary border-none">Secure Checkout</Badge>
                                        <h3 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight italic">Scan to Subscribe</h3>
                                        <p className="text-slate-500 font-medium">Complete your payment for the <span className="text-slate-900 dark:text-white font-black">{planName}</span></p>
                                    </div>

                                    <div className="relative group">
                                        <div className="absolute -inset-4 bg-primary/5 blur-2xl rounded-[3rem] group-hover:bg-primary/10 transition-colors" />
                                        <div className="relative bg-white p-6 rounded-[2.5rem] border-2 border-slate-100 shadow-xl flex flex-col items-center">
                                            {/* Simulated QR Code */}
                                            <div className="w-64 h-64 bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-100 overflow-hidden">
                                                <img
                                                    src={`https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=upi://pay?pa=sealth@bank&pn=Sealth%20Health&am=${price}&cu=INR`}
                                                    alt="Payment QR"
                                                    className="w-full h-full p-4"
                                                />
                                            </div>
                                            <div className="mt-6 flex items-center gap-3 text-slate-400 font-black uppercase tracking-widest text-[10px]">
                                                <Smartphone className="w-4 h-4" />
                                                Use any UPI App to Scan
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800">
                                        <div className="flex flex-col">
                                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Amount to Pay</span>
                                            <span className="text-2xl font-black text-slate-900 dark:text-white">₹{price}</span>
                                        </div>
                                        <Button
                                            onClick={() => setStep('processing')}
                                            className="h-12 px-8 rounded-xl bg-primary text-white font-black italic shadow-lg shadow-primary/20"
                                        >
                                            Paid Already?
                                        </Button>
                                    </div>

                                    <div className="flex items-center justify-center gap-4 text-slate-400">
                                        <ShieldCheck className="w-4 h-4" />
                                        <span className="text-[10px] font-bold uppercase tracking-widest">PCI-DSS Compliant Secure Payment</span>
                                    </div>
                                </motion.div>
                            )}

                            {step === 'processing' && (
                                <motion.div
                                    key="processing"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="py-20 flex flex-col items-center text-center space-y-6"
                                >
                                    <div className="relative w-20 h-20">
                                        <div className="absolute inset-0 border-4 border-primary/20 rounded-full" />
                                        <motion.div
                                            className="absolute inset-0 border-4 border-primary rounded-full border-t-transparent"
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="text-2xl font-black text-slate-900 dark:text-white italic">Verifying Transaction</h3>
                                        <p className="text-slate-500 font-medium">Our nodes are confirming your metabolic activation...</p>
                                    </div>
                                </motion.div>
                            )}

                            {step === 'success' && (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="py-12 flex flex-col items-center text-center space-y-8"
                                >
                                    <div className="w-24 h-24 bg-emerald-100 dark:bg-emerald-500/20 rounded-full flex items-center justify-center text-emerald-500 shadow-xl shadow-emerald-500/10">
                                        <CheckCircle className="w-12 h-12" />
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="text-3xl font-black text-slate-900 dark:text-white italic">Payment Successful!</h3>
                                        <p className="text-slate-500 font-medium text-lg leading-relaxed">
                                            Welcome to the Elite. Your Sealth journey officially begins now.
                                        </p>
                                    </div>
                                    <Button
                                        onClick={onSuccess}
                                        className="w-full h-16 rounded-2xl bg-slate-950 text-white font-black italic text-lg shadow-2xl group"
                                    >
                                        Proceed to Dashboard
                                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default PaymentModal;
