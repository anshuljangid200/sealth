
import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Card, Button, Grid, cn } from '../../components/UI';
import { DoctorCard } from '../../components/SharedComponents';
import { MOCK_DOCTORS, DOCTOR_SPECIALTIES } from '../../constants/mockData';
import { Search, Phone, Video, Send, IndianRupee, X, Stethoscope } from 'lucide-react';

const Consults: React.FC = () => {
    const [view, setView] = useState<'discovery' | 'chat'>('discovery');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedSpecialty, setSelectedSpecialty] = useState('All');
    const [priceRange, setPriceRange] = useState(2000);
    const [selectedDoctor, setSelectedDoctor] = useState<typeof MOCK_DOCTORS[0] | null>(null);
    const [messageText, setMessageText] = useState('');
    const [messages, setMessages] = useState([
        { sender: 'Dr. Ananya Sharma', text: 'Namaste! I reviewed your meal logs for the past week.', time: '10:30 AM', isMe: false },
        { sender: 'Me', text: "Hello Dr. Ananya. How does my Dal Tadka and Brown Rice combo look?", time: '10:32 AM', isMe: true },
        { sender: 'Dr. Ananya Sharma', text: "It looks good, but let's add some Sauteed Paneer for more protein. Your muscle recovery markers need it.", time: '10:35 AM', isMe: false },
        { sender: 'Me', text: "Got it. I'll update my tiffin preferences for next week.", time: '10:38 AM', isMe: true },
    ]);

    // Filter doctors based on search, specialty, and price
    const filteredDoctors = useMemo(() => {
        return MOCK_DOCTORS.filter(doc => {
            const matchesSearch = 
                doc.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                doc.hospital.toLowerCase().includes(searchQuery.toLowerCase()) ||
                doc.specialty.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesSpecialty = selectedSpecialty === 'All' || doc.specialty === selectedSpecialty;
            const matchesPrice = doc.price <= priceRange;
            return matchesSearch && matchesSpecialty && matchesPrice;
        });
    }, [searchQuery, selectedSpecialty, priceRange]);

    const handleSendMessage = () => {
        if (messageText.trim()) {
            setMessages([
                ...messages,
                {
                    sender: 'Me',
                    text: messageText,
                    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                    isMe: true
                }
            ]);
            setMessageText('');
        }
    };

    if (view === 'chat' && selectedDoctor) {
        return (
            <div className="space-y-8 animate-fade-in h-[600px] flex flex-col">
                {/* Chat Header */}
                <div className="flex items-center justify-between">
                    <button
                        onClick={() => {
                            setView('discovery');
                            setSelectedDoctor(null);
                        }}
                        className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors font-bold text-sm"
                    >
                        <X className="w-4 h-4" />
                        Back to Discovery
                    </button>
                    <div className="flex items-center gap-3">
                        <img
                            src={selectedDoctor.avatar}
                            alt={selectedDoctor.name}
                            className="w-10 h-10 rounded-full object-cover"
                        />
                        <div>
                            <h3 className="font-black text-slate-900 dark:text-white">{selectedDoctor.name}</h3>
                            <p className="text-xs text-primary font-bold">{selectedDoctor.specialty}</p>
                        </div>
                    </div>
                </div>

                {/* Messages Area */}
                <Card className="flex-1 p-6 flex flex-col overflow-hidden bg-slate-50 dark:bg-slate-900/50">
                    <div className="flex-1 overflow-y-auto space-y-4 mb-4">
                        {messages.map((msg, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className={cn("flex gap-3", msg.isMe && "justify-end")}
                            >
                                {!msg.isMe && (
                                    <img
                                        src={selectedDoctor.avatar}
                                        alt=""
                                        className="w-8 h-8 rounded-full object-cover"
                                    />
                                )}
                                <div
                                    className={cn(
                                        "max-w-xs px-4 py-3 rounded-2xl",
                                        msg.isMe
                                            ? "bg-primary text-white rounded-br-none"
                                            : "bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-bl-none border border-slate-200 dark:border-slate-700"
                                    )}
                                >
                                    <p className="text-sm font-medium">{msg.text}</p>
                                    <p className={cn("text-xs mt-1 opacity-70", msg.isMe ? "text-white/80" : "text-slate-500")}>
                                        {msg.time}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Message Input */}
                    <div className="flex gap-3 pt-4 border-t border-slate-200 dark:border-slate-700">
                        <input
                            type="text"
                            value={messageText}
                            onChange={(e) => setMessageText(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                            placeholder="Type your message..."
                            className="flex-1 px-4 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                        />
                        <Button
                            onClick={handleSendMessage}
                            className="px-6 py-3"
                        >
                            <Send className="w-4 h-4" />
                        </Button>
                    </div>
                </Card>

                {/* Action Buttons */}
                <div className="flex gap-3 justify-center">
                    <Button variant="secondary" className="gap-2">
                        <Phone className="w-4 h-4" />
                        Start Voice Call
                    </Button>
                    <Button variant="outline" className="gap-2">
                        <Video className="w-4 h-4" />
                        Start Video Call
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-8 animate-fade-in">
            {/* Header */}
            <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <h1 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight mb-2">Expert Care</h1>
                    <p className="text-slate-500 font-medium tracking-tight">Connect with India's top health specialists for personalized guidance.</p>
                </div>
            </header>

            {/* Search & Filters */}
            <Card className="p-8 space-y-6">
                <div className="flex flex-col lg:flex-row gap-6">
                    {/* Search Input */}
                    <div className="flex-1 relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search by name, hospital, or specialty..."
                            className="w-full pl-12 pr-4 py-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl focus:ring-2 focus:ring-primary/10 focus:border-primary focus:bg-white dark:focus:bg-slate-800 outline-none transition-all text-sm"
                        />
                    </div>

                    {/* Results Counter */}
                    <div className="flex items-center justify-center px-6 py-3 bg-primary/5 dark:bg-primary/10 rounded-2xl border border-primary/20">
                        <span className="text-sm font-black text-primary">{filteredDoctors.length} Experts Found</span>
                    </div>
                </div>

                {/* Specialty Filter */}
                <div className="space-y-3">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Specialty</label>
                    <div className="flex flex-wrap gap-2">
                        {DOCTOR_SPECIALTIES.map(spec => (
                            <button
                                key={spec}
                                onClick={() => setSelectedSpecialty(spec)}
                                className={cn(
                                    "px-4 py-2 rounded-2xl text-xs font-black transition-all",
                                    selectedSpecialty === spec
                                        ? "bg-primary text-white shadow-lg shadow-primary/20"
                                        : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                                )}
                            >
                                {spec}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Price Range Filter */}
                <div className="space-y-3">
                    <div className="flex items-center justify-between">
                        <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Price Range</label>
                        <span className="text-sm font-black text-primary flex items-center gap-1">
                            <IndianRupee className="w-3 h-3" />
                            {priceRange}
                        </span>
                    </div>
                    <input
                        type="range"
                        min="500"
                        max="2000"
                        step="100"
                        value={priceRange}
                        onChange={(e) => setPriceRange(Number(e.target.value))}
                        title="Price Range Slider"
                        className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full appearance-none cursor-pointer accent-primary"
                    />
                    <div className="flex justify-between text-xs text-slate-500 font-medium">
                        <span>₹500</span>
                        <span>₹2000</span>
                    </div>
                </div>
            </Card>

            {/* Doctor Grid */}
            {filteredDoctors.length > 0 ? (
                <Grid cols={filteredDoctors.length === 1 ? 1 : 2}>
                    {filteredDoctors.map(doctor => (
                        <DoctorCard
                            key={doctor.id}
                            {...doctor}
                            onBook={() => {
                                setSelectedDoctor(doctor);
                                setView('chat');
                            }}
                            onMessage={() => {
                                setSelectedDoctor(doctor);
                                setView('chat');
                            }}
                            onCall={() => console.log('Call:', doctor.name)}
                        />
                    ))}
                </Grid>
            ) : (
                <Card className="p-12 text-center">
                    <div className="w-20 h-20 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Stethoscope className="w-10 h-10 text-slate-400" />
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2">No Experts Found</h3>
                    <p className="text-slate-500 font-medium mb-6">Try adjusting your filters or search criteria.</p>
                    <Button
                        onClick={() => {
                            setSearchQuery('');
                            setSelectedSpecialty('All');
                            setPriceRange(2000);
                        }}
                        variant="outline"
                    >
                        Reset Filters
                    </Button>
                </Card>
            )}
        </div>
    );
};

export default Consults;
