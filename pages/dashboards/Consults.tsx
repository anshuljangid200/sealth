
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, Button, Badge, Icon, Grid, Container, cn } from '../../components/UI';
import {
    MessageSquare, Phone, Video, Search, Send,
    MoreVertical, Calendar, UserPlus, Filter,
    ChevronRight, Star, Clock, MapPin, IndianRupee
} from 'lucide-react';

const Consults: React.FC = () => {
    const [view, setView] = useState<'discovery' | 'chat'>('discovery');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedSpecialty, setSelectedSpecialty] = useState('All');
    const [priceRange, setPriceRange] = useState(2000);

    const specialties = ['All', 'Nutritionist', 'Cardiologist', 'Fitness coach', 'Sleep Coach', 'Pediatrician'];

    const doctors = [
        {
            id: 1,
            name: 'Dr. Ananya Sharma',
            role: 'Chief Nutritionist',
            hospital: 'Max Health, Delhi',
            rating: 4.9,
            reviews: 128,
            price: 1200,
            status: 'Online',
            avatar: 'https://i.pravatar.cc/150?u=ananya',
            specialty: 'Nutritionist',
            bio: 'Expert in personalized Indian meal planning and metabolic health.'
        },
        {
            id: 2,
            name: 'Dr. Vikram Malhotra',
            role: 'Senior Cardiologist',
            hospital: 'Apollo Life, Mumbai',
            rating: 4.8,
            reviews: 256,
            price: 1800,
            status: 'In Session',
            avatar: 'https://i.pravatar.cc/150?u=vikram',
            specialty: 'Cardiologist',
            bio: 'Specializing in preventive cardiology and heart-healthy lifestyle changes.'
        },
        {
            id: 3,
            name: 'Coach Rohan Verma',
            role: 'Lead Fitness Specialist',
            hospital: 'Cult Fit, Bengaluru',
            rating: 5.0,
            reviews: 512,
            price: 800,
            status: 'Online',
            avatar: 'https://i.pravatar.cc/150?u=rohan',
            specialty: 'Fitness coach',
            bio: 'Elite coach focusing on transformation and recovery for high-performers.'
        },
        {
            id: 4,
            name: 'Dr. Priya Iyer',
            role: 'Circadian Scientist',
            hospital: 'Fortis, Chennai',
            rating: 4.7,
            reviews: 89,
            price: 1500,
            status: 'Offline',
            avatar: 'https://i.pravatar.cc/150?u=priya',
            specialty: 'Sleep Coach',
            bio: 'Redefining sleep hygiene through circadian rhythm alignment.'
        },
    ];

    const messages = [
        { sender: 'Dr. Ananya Sharma', text: 'Namaste! I reviewed your meal logs for the past week.', time: '10:30 AM', isMe: false },
        { sender: 'Me', text: "Hello Dr. Ananya. How does my Dal Tadka and Brown Rice combo look?", time: '10:32 AM', isMe: true },
        { sender: 'Dr. Ananya Sharma', text: "It looks good, but let's add some Sauteed Paneer for more protein. Your muscle recovery markers need it.", time: '10:35 AM', isMe: false },
        { sender: 'Me', text: "Got it. I'll update my tiffin preferences for next week.", time: '10:38 AM', isMe: true },
    ];

    const filteredDoctors = doctors.filter(doc => {
        const matchesSearch = doc.name.toLowerCase().includes(searchQuery.toLowerCase()) || doc.hospital.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesSpecialty = selectedSpecialty === 'All' || doc.specialty === selectedSpecialty;
        const matchesPrice = doc.price <= priceRange;
        return matchesSearch && matchesSpecialty && matchesPrice;
    });

    return (
        <div className="space-y-8 animate-fade-in">
            {/* Header */}
            <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <h1 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight mb-2">Expert Care</h1>
                    <p className="text-slate-500 font-medium tracking-tight">Connect with India's top health specialists for a unified recovery journey.</p>
                </div>
                <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-2xl">
                    <button
                        onClick={() => setView('discovery')}
                        className={cn(
                            "px-6 py-2.5 rounded-xl text-sm font-black transition-all",
                            view === 'discovery' ? "bg-white dark:bg-slate-900 text-primary shadow-sm" : "text-slate-500"
                        )}
                    >
                        Discovery
                    </button>
                    <button
                        onClick={() => setView('chat')}
                        className={cn(
                            "px-6 py-2.5 rounded-xl text-sm font-black transition-all",
                            view === 'chat' ? "bg-white dark:bg-slate-900 text-primary shadow-sm" : "text-slate-500"
                        )}
                    >
                        Active Chat
                    </button>
                </div>
            </header>

            <AnimatePresence mode="wait">
                {view === 'discovery' ? (
                    <motion.div
                        key="discovery"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="space-y-8"
                    >
                        {/* Filters & Search */}
                        <div className="bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 rounded-3xl p-6 shadow-sm">
                            <div className="flex flex-col lg:flex-row gap-6">
                                <div className="flex-1 relative">
                                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                    <input
                                        type="text"
                                        placeholder="Search by doctor name or hospital..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="w-full bg-slate-50 dark:bg-slate-800/50 border-none rounded-2xl pl-12 pr-4 py-3.5 text-sm focus:ring-2 focus:ring-primary/20 transition-all font-medium"
                                    />
                                </div>
                                <div className="flex flex-wrap items-center gap-3">
                                    <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 dark:bg-slate-800/50 rounded-2xl">
                                        <Filter className="w-4 h-4 text-slate-400" />
                                        <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Specialty</span>
                                        <select
                                            value={selectedSpecialty}
                                            onChange={(e) => setSelectedSpecialty(e.target.value)}
                                            className="bg-transparent border-none focus:ring-0 text-sm font-bold text-slate-900 dark:text-white p-0"
                                        >
                                            {specialties.map(s => <option key={s} value={s}>{s}</option>)}
                                        </select>
                                    </div>
                                    <div className="flex-1 min-w-[200px] flex flex-col gap-2 px-4 py-2 bg-slate-50 dark:bg-slate-800/50 rounded-2xl">
                                        <div className="flex justify-between items-center">
                                            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Max Price: ₹{priceRange}</span>
                                        </div>
                                        <input
                                            type="range"
                                            min="500"
                                            max="3000"
                                            step="100"
                                            value={priceRange}
                                            onChange={(e) => setPriceRange(parseInt(e.target.value))}
                                            className="w-full h-1 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-primary"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Doctor Grid */}
                        <Grid cols={3}>
                            {filteredDoctors.map(doc => (
                                <Card key={doc.id} className="group hover:border-primary/50 transition-colors">
                                    <div className="p-6">
                                        <div className="flex items-start justify-between mb-6">
                                            <div className="relative">
                                                <img src={doc.avatar} alt={doc.name} className="w-16 h-16 rounded-2xl object-cover ring-4 ring-slate-50 dark:ring-slate-800" />
                                                <div className={cn(
                                                    "absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white dark:border-slate-900 shadow-sm",
                                                    doc.status === 'Online' ? "bg-emerald-500 shadow-emerald-500/20" : doc.status === 'In Session' ? "bg-amber-500" : "bg-slate-300"
                                                )} />
                                            </div>
                                            <div className="flex flex-col items-end">
                                                <div className="flex items-center gap-1 text-amber-500 mb-1">
                                                    <Star className="w-4 h-4 fill-current" />
                                                    <span className="text-sm font-black">{doc.rating}</span>
                                                </div>
                                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">{doc.reviews} Reviews</span>
                                            </div>
                                        </div>

                                        <h3 className="text-lg font-black text-slate-900 dark:text-white mb-1 group-hover:text-primary transition-colors">{doc.name}</h3>
                                        <p className="text-xs font-bold text-primary uppercase tracking-widest mb-4">{doc.role}</p>

                                        <p className="text-sm text-slate-500 font-medium mb-6 line-clamp-2">{doc.bio}</p>

                                        <div className="space-y-3 mb-8">
                                            <div className="flex items-center gap-3 text-slate-400">
                                                <MapPin className="w-4 h-4" />
                                                <span className="text-xs font-bold">{doc.hospital}</span>
                                            </div>
                                            <div className="flex items-center gap-3 text-slate-400">
                                                <Clock className="w-4 h-4" />
                                                <span className="text-xs font-bold">Mon - Fri, 09:00 - 18:00</span>
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between pt-6 border-t border-slate-100 dark:border-slate-800">
                                            <div className="flex flex-col">
                                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Consultation</span>
                                                <span className="text-lg font-black text-slate-900 dark:text-white">₹{doc.price}</span>
                                            </div>
                                            <Button onClick={() => setView('chat')} className="gap-2">
                                                Select <ChevronRight className="w-4 h-4" />
                                            </Button>
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </Grid>

                        {filteredDoctors.length === 0 && (
                            <div className="py-20 flex flex-col items-center text-center">
                                <div className="w-20 h-20 bg-slate-100 dark:bg-slate-800 rounded-3xl flex items-center justify-center mb-6">
                                    <Icon name="search_off" className="text-4xl text-slate-400" />
                                </div>
                                <h3 className="text-xl font-black text-slate-900 dark:text-white mb-2">No Specialists Found</h3>
                                <p className="text-slate-500 max-w-sm">Try adjusting your filters or search query to find the right care.</p>
                                <Button className="mt-8" variant="outline" onClick={() => {
                                    setSearchQuery('');
                                    setSelectedSpecialty('All');
                                    setPriceRange(3000);
                                }}>Clear All Filters</Button>
                            </div>
                        )}
                    </motion.div>
                ) : (
                    <motion.div
                        key="chat"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="flex-1 flex gap-8 h-[70vh]"
                    >
                        {/* Chat Sidebar */}
                        <Card className="w-80 hidden lg:flex flex-col overflow-hidden">
                            <div className="p-6 border-b border-slate-100 dark:border-slate-800">
                                <div className="relative">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                    <input
                                        type="text"
                                        placeholder="Search chats..."
                                        className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-xl pl-10 pr-4 py-2.5 text-sm font-medium"
                                    />
                                </div>
                            </div>
                            <div className="flex-1 overflow-y-auto p-4 space-y-2">
                                {doctors.map((doc) => (
                                    <button
                                        key={doc.id}
                                        className={cn(
                                            "w-full flex items-center gap-4 p-4 rounded-2xl transition-all",
                                            doc.id === 1 ? "bg-primary/5 ring-1 ring-primary/20" : "hover:bg-slate-50 dark:hover:bg-slate-800"
                                        )}
                                    >
                                        <div className="relative">
                                            <img src={doc.avatar} alt="" className="w-12 h-12 rounded-xl object-cover" />
                                            {doc.status === 'Online' && <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white dark:border-slate-900" />}
                                        </div>
                                        <div className="text-left flex-1 min-w-0">
                                            <p className="font-black text-slate-900 dark:text-white truncate uppercase tracking-tight text-xs">{doc.name}</p>
                                            <p className="text-[10px] text-slate-500 font-bold truncate">Are you free for a quick call?</p>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </Card>

                        {/* Chat Main */}
                        <Card className="flex-1 flex flex-col overflow-hidden">
                            {/* Chat Header */}
                            <div className="px-8 py-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <img src={doctors[0].avatar} alt="" className="w-12 h-12 rounded-xl object-cover" />
                                    <div>
                                        <h4 className="font-black text-slate-900 dark:text-white uppercase tracking-tight">{doctors[0].name}</h4>
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 rounded-full bg-emerald-500" />
                                            <span className="text-[10px] text-emerald-500 font-black uppercase tracking-widest">Online</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <button className="p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-400 transition-colors"><Phone className="w-5 h-5" /></button>
                                    <button className="p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-400 transition-colors"><Video className="w-5 h-5" /></button>
                                    <button className="p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-400 transition-colors"><MoreVertical className="w-5 h-5" /></button>
                                </div>
                            </div>

                            {/* Chat Messages */}
                            <div className="flex-1 overflow-y-auto p-8 space-y-8 custom-scrollbar">
                                {messages.map((ms, idx) => (
                                    <div key={idx} className={cn("flex", ms.isMe ? "justify-end" : "justify-start")}>
                                        <div className={cn(
                                            "max-w-[70%] space-y-2",
                                            ms.isMe ? "items-end" : "items-start"
                                        )}>
                                            <div className={cn(
                                                "p-4 rounded-3xl text-sm font-medium leading-relaxed shadow-sm",
                                                ms.isMe
                                                    ? "bg-primary text-white rounded-tr-none"
                                                    : "bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white rounded-tl-none"
                                            )}>
                                                {ms.text}
                                            </div>
                                            <p className="text-[10px] font-bold text-slate-400 px-2">{ms.time}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Chat Input */}
                            <div className="p-6 border-t border-slate-100 dark:border-slate-800">
                                <div className="flex items-center gap-4 bg-slate-50 dark:bg-slate-800 p-2 rounded-2xl border border-transparent focus-within:border-primary/30 transition-all">
                                    <button className="p-3 text-slate-400 hover:text-primary transition-colors"><Icon name="add" /></button>
                                    <input
                                        type="text"
                                        placeholder="Start typing your health query..."
                                        className="flex-1 bg-transparent border-none focus:ring-0 text-sm font-medium py-3"
                                    />
                                    <button className="h-12 w-12 bg-primary text-white rounded-xl flex items-center justify-center hover:bg-primary-dark transition-all shadow-lg shadow-primary/20">
                                        <Send className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        </Card>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Consults;
