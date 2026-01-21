
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, Icon, Button, Badge, Container, Grid, Section, cn } from '../../components/UI';
import {
    Calendar as CalendarIcon, Clock, ChevronLeft, ChevronRight,
    Video, MapPin, User, Plus, Filter, MoreHorizontal, Activity
} from 'lucide-react';

const Schedule: React.FC = () => {
    const [activeDate, setActiveDate] = useState(new Date());

    const sessions = [
        { id: 1, time: '09:00 AM', duration: '45m', patient: 'Rohan Sharma', type: 'Virtual', category: 'Metabolic Review', status: 'Upcoming' },
        { id: 2, time: '10:30 AM', duration: '30m', patient: 'Priya Patel', type: 'In-Clinic', category: 'Initial Screening', status: 'Upcoming' },
        { id: 3, time: '11:15 AM', duration: '1h', patient: 'Vikram Singh', type: 'Virtual', category: 'Diabetes Protocol', status: 'Upcoming' },
        { id: 4, time: '02:00 PM', duration: '30m', patient: 'Ananya Iyer', type: 'Virtual', category: 'Nutrition Adjustment', status: 'Upcoming' },
        { id: 5, time: '03:30 PM', duration: '45m', patient: 'Kabir Singh', type: 'In-Clinic', category: 'Fitness Assessment', status: 'Upcoming' },
    ];

    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const currentWeek = [13, 14, 15, 16, 17, 18, 19]; // Mock dates for Jan

    return (
        <div className="animate-fade-in space-y-10">
            {/* Header */}
            <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="space-y-1">
                    <h1 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight">Clinical Schedule</h1>
                    <p className="text-slate-500 font-medium tracking-tight">Managing your consultation pipeline and availability.</p>
                </div>
                <div className="flex gap-3">
                    <Button variant="outline" className="gap-2">
                        <Filter className="w-4 h-4" /> Filters
                    </Button>
                    <Button className="gap-2">
                        <Plus className="w-4 h-4" /> Book Slot
                    </Button>
                </div>
            </header>

            <Grid cols={3}>
                {/* Calendar Sidebar */}
                <Card className="lg:col-span-1 p-8 space-y-8">
                    <div className="flex items-center justify-between">
                        <h3 className="font-black text-slate-900 dark:text-white italic uppercase tracking-widest text-sm">January 2026</h3>
                        <div className="flex gap-1">
                            <button className="p-2 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl transition-colors"><ChevronLeft className="w-4 h-4" /></button>
                            <button className="p-2 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl transition-colors"><ChevronRight className="w-4 h-4" /></button>
                        </div>
                    </div>

                    <div className="grid grid-cols-7 gap-1 text-center">
                        {days.map(day => (
                            <span key={day} className="text-[10px] font-black text-slate-400 uppercase tracking-tighter mb-2">{day}</span>
                        ))}
                        {/* Simplified Month View */}
                        {Array.from({ length: 31 }).map((_, i) => (
                            <button
                                key={i}
                                className={cn(
                                    "aspect-square flex items-center justify-center text-xs font-bold rounded-xl transition-all",
                                    (i + 1) === 16
                                        ? "bg-primary text-white shadow-lg shadow-primary/20"
                                        : "hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400"
                                )}
                            >
                                {i + 1}
                            </button>
                        ))}
                    </div>

                    <div className="pt-8 border-t border-slate-100 dark:border-slate-800 space-y-6">
                        <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Upcoming Blocks</h4>
                        <div className="space-y-4">
                            {[
                                { title: 'Team Sync', time: 'Tomorrow, 08:00 AM', icon: User },
                                { title: 'Research Lab', time: 'Fri, 04:00 PM', icon: Activity }
                            ].map((block, i) => (
                                <div key={i} className="flex items-center gap-4 group cursor-pointer">
                                    <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-400 group-hover:text-primary transition-colors">
                                        <block.icon className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-black text-slate-900 dark:text-white italic leading-tight">{block.title}</p>
                                        <p className="text-[10px] font-bold text-slate-400 mt-0.5">{block.time}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Card>

                {/* Timeline View */}
                <Card className="lg:col-span-2 p-0 overflow-hidden border-slate-200/60 dark:border-slate-800/60">
                    <div className="p-8 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <Clock className="w-5 h-5 text-primary" />
                            <h3 className="text-lg font-black text-slate-900 dark:text-white italic uppercase tracking-tight">Today's Timeline</h3>
                        </div>
                        <Badge variant="info" className="font-black italic">Friday, Jan 16</Badge>
                    </div>

                    <div className="relative p-8">
                        {/* Time Markers */}
                        <div className="absolute left-8 top-8 bottom-8 w-px bg-slate-100 dark:bg-slate-800" />

                        <div className="space-y-10 relative">
                            {sessions.map((session) => (
                                <div key={session.id} className="flex gap-8 group">
                                    {/* Time Marker Bubble */}
                                    <div className="w-3 h-3 rounded-full bg-white dark:bg-slate-900 border-2 border-primary relative z-10 -ml-[5.5px] mt-1.5 ring-4 ring-white dark:ring-slate-950" />

                                    <div className="flex-1 -mt-1.5">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-sm font-black text-primary italic tabular-nums">{session.time}</span>
                                            <Badge variant="outline" className="text-[8px] px-2 py-0.5 border-slate-100 dark:border-slate-800 text-slate-400">
                                                {session.duration} session
                                            </Badge>
                                        </div>

                                        <div className="p-6 rounded-[2rem] bg-slate-50/50 dark:bg-slate-800/30 border border-slate-100 dark:border-slate-800 group-hover:border-primary/30 transition-all flex items-center justify-between">
                                            <div className="flex items-center gap-5">
                                                <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-900 flex items-center justify-center font-black text-slate-300 italic shadow-sm group-hover:text-primary transition-colors">
                                                    {session.patient[0]}
                                                </div>
                                                <div>
                                                    <h4 className="font-black text-slate-900 dark:text-white italic tracking-tight">{session.patient}</h4>
                                                    <div className="flex items-center gap-3 mt-0.5">
                                                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{session.category}</span>
                                                        <span className="text-slate-200">|</span>
                                                        <p className="flex items-center gap-1 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                                                            {session.type === 'Virtual' ? <Video className="w-3 h-3" /> : <MapPin className="w-3 h-3" />}
                                                            {session.type}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-4">
                                                {session.type === 'Virtual' && (
                                                    <Button className="h-10 px-6 text-[10px] font-black uppercase italic tracking-widest">
                                                        Launch Cabin
                                                    </Button>
                                                )}
                                                <Button variant="ghost" className="w-10 h-10 p-0 rounded-xl">
                                                    <MoreHorizontal className="w-4 h-4" />
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Card>
            </Grid>
        </div>
    );
};

export default Schedule;
