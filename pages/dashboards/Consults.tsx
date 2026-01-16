
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, Button, Badge, Icon } from '../../components/UI';
import { MessageSquare, Phone, Video, Search, Send, MoreVertical, Calendar, UserPlus } from 'lucide-react';

const Consults: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'chat' | 'experts'>('chat');

    const experts = [
        { name: 'Dr. Sarah Chen', role: 'Chief Nutritionist', status: 'Online', avatar: 'https://i.pravatar.cc/150?u=sarah', special: 'Metabolic Health' },
        { name: 'Dr. Marc Wilson', role: 'Cardiologist', status: 'In Session', avatar: 'https://i.pravatar.cc/150?u=marc', special: 'Performance Heart' },
        { name: 'Coach Aris', role: 'Fitness Specialist', status: 'Online', avatar: 'https://i.pravatar.cc/150?u=aris', special: 'HIIT & Recovery' },
        { name: 'Elena Rodriguez', role: 'Sleep Coach', status: 'Offline', avatar: 'https://i.pravatar.cc/150?u=elena', special: 'Circadian Rhythm' },
    ];

    const messages = [
        { sender: 'Dr. Sarah Chen', text: 'Hello Alexander! I reviewed your blood reports from yesterday.', time: '10:30 AM', isMe: false },
        { sender: 'Me', text: "Hey Sarah. How do the markers for insulin sensitivity look?", time: '10:32 AM', isMe: true },
        { sender: 'Dr. Sarah Chen', text: "They are improving. Your HbA1c is down to 5.2. Let's adjust your carb intake slightly for the dinner tiffin.", time: '10:35 AM', isMe: false },
        { sender: 'Me', text: "Perfect. Does that change the salmon portion tonight?", time: '10:38 AM', isMe: true },
    ];

    return (
        <div className="h-[calc(100vh-160px)] flex flex-col gap-6 max-w-6xl">
            <header className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight mb-1">Expert Consultations</h1>
                    <p className="text-sm text-slate-500 font-medium">Real-time access to your elite health team.</p>
                </div>
                <div className="flex gap-3">
                    <Button variant="outline" className="px-5 py-2.5 h-auto text-sm gap-2">
                        <Calendar className="w-4 h-4" />
                        Book Session
                    </Button>
                </div>
            </header>

            <div className="flex-1 flex gap-8 min-h-0">
                {/* Sidebar: Experts */}
                <Card className="w-80 hidden md:flex flex-col p-6 overflow-hidden">
                    <div className="relative mb-6">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Search experts..."
                            className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-xl pl-10 pr-4 py-2.5 text-sm focus:ring-2 focus:ring-primary/20 transition-all font-medium"
                        />
                    </div>

                    <div className="flex-1 overflow-y-auto space-y-1 pr-2 custom-scrollbar">
                        {experts.map((exp, idx) => (
                            <button key={idx} className={`w-full flex items-center gap-3 p-3 rounded-2xl transition-all ${idx === 0 ? 'bg-primary/5 border border-primary/20' : 'hover:bg-slate-50 dark:hover:bg-slate-800'}`}>
                                <div className="relative">
                                    <img src={exp.avatar} alt={exp.name} className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-900" />
                                    <div className={`absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full border-2 border-white dark:border-slate-900 ${exp.status === 'Online' ? 'bg-emerald-500' : exp.status === 'In Session' ? 'bg-amber-500' : 'bg-slate-300'}`} />
                                </div>
                                <div className="flex-1 text-left min-w-0">
                                    <p className="text-sm font-black text-slate-900 dark:text-white truncate uppercase tracking-tight">{exp.name}</p>
                                    <p className="text-[10px] text-slate-500 font-bold truncate leading-none">{exp.role}</p>
                                </div>
                            </button>
                        ))}
                    </div>

                    <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800">
                        <Button className="w-full py-3 text-sm gap-2">
                            <UserPlus className="w-4 h-4" />
                            Invite Friend
                        </Button>
                    </div>
                </Card>

                {/* Main: Chat View */}
                <Card className="flex-1 flex flex-col overflow-hidden relative">
                    {/* Chat Header */}
                    <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-white/50 dark:bg-slate-900/50 backdrop-blur-md sticky top-0 z-10">
                        <div className="flex items-center gap-4">
                            <img src={experts[0].avatar} alt="" className="w-10 h-10 rounded-full" />
                            <div>
                                <h4 className="font-bold text-slate-900 dark:text-white">{experts[0].name}</h4>
                                <p className="text-[10px] text-emerald-500 font-black uppercase tracking-widest">{experts[0].status}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <button className="p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 transition-colors"><Phone className="w-5 h-5" /></button>
                            <button className="p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 transition-colors"><Video className="w-5 h-5" /></button>
                            <button className="p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 transition-colors"><MoreVertical className="w-5 h-5" /></button>
                        </div>
                    </div>

                    {/* Messages Activity */}
                    <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
                        <div className="text-center">
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 bg-slate-100 dark:bg-slate-800 px-4 py-1.5 rounded-full">Today</span>
                        </div>

                        {messages.map((ms, idx) => (
                            <div key={idx} className={`flex ${ms.isMe ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[80%] rounded-2xl p-4 ${ms.isMe ? 'bg-primary text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white'}`}>
                                    {!ms.isMe && <p className="text-[9px] font-black uppercase tracking-widest mb-1 opacity-50">{ms.sender}</p>}
                                    <p className="text-sm font-medium leading-relaxed">{ms.text}</p>
                                    <p className={`text-[10px] mt-2 font-bold ${ms.isMe ? 'text-white/60' : 'text-slate-400'} text-right`}>{ms.time}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Input Area */}
                    <div className="p-6 border-t border-slate-100 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-md">
                        <div className="flex items-center gap-4 bg-slate-50 dark:bg-slate-800 p-2 rounded-2xl border border-slate-200 dark:border-slate-700 focus-within:border-primary/50 transition-colors shadow-sm">
                            <button className="p-2 text-slate-400 hover:text-primary transition-colors"><Icon name="attach_file" className="text-xl" /></button>
                            <input
                                type="text"
                                placeholder="Message Dr. Sarah..."
                                className="flex-1 bg-transparent border-none focus:ring-0 py-2 text-sm font-medium"
                            />
                            <button className="h-10 w-10 bg-primary text-white rounded-xl flex items-center justify-center hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20">
                                <Send className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default Consults;
