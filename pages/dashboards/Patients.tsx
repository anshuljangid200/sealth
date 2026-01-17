
import React from 'react';
import { motion } from 'framer-motion';
import { Card, Icon, Button, Badge, Container, Grid, Section, cn } from '../../components/UI';
import {
    Users, Search, Filter, Plus, ChevronRight,
    MoreVertical, Phone, Mail, Activity,
    TrendingUp, TrendingDown, Clock
} from 'lucide-react';

const Patients: React.FC = () => {
    const patients = [
        { id: 'P-101', name: 'Arjun Mehta', age: 45, gender: 'Male', goal: 'Diabetes Mgmt', status: 'Active', score: 82, trend: 'up', lastSeen: '2h ago' },
        { id: 'P-102', name: 'Meera Reddy', age: 32, gender: 'Female', goal: 'Weight Loss', status: 'Warning', score: 45, trend: 'down', lastSeen: '5h ago' },
        { id: 'P-103', name: 'Sanjay Gupta', age: 58, gender: 'Male', goal: 'Hyper-tension', status: 'On-boarding', score: 0, trend: 'stable', lastSeen: '1d ago' },
        { id: 'P-104', name: 'Lakshmi Iyer', age: 27, gender: 'Female', goal: 'PCOS Protocol', status: 'Active', score: 76, trend: 'up', lastSeen: '3h ago' },
        { id: 'P-105', name: 'Kabir Singh', age: 38, gender: 'Male', goal: 'Muscle Hypertrophy', status: 'Active', score: 91, trend: 'up', lastSeen: 'Just now' },
        { id: 'P-106', name: 'Anita Desai', age: 51, gender: 'Female', goal: 'Metabolic Reset', status: 'Critical', score: 38, trend: 'down', lastSeen: '1h ago' },
    ];

    return (
        <div className="animate-fade-in space-y-10">
            {/* Header */}
            <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="space-y-1">
                    <h1 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight">Patient Registry</h1>
                    <p className="text-slate-500 font-medium">Managing {patients.length} active metabolic profiles under your care.</p>
                </div>
                <div className="flex gap-3">
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Search by name, ID or condition..."
                            className="pl-12 pr-6 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl text-sm font-medium focus:ring-2 focus:ring-primary/20 transition-all outline-none w-64 md:w-80"
                        />
                    </div>
                    <Button className="gap-2 shrink-0">
                        <Plus className="w-4 h-4" /> Add Patient
                    </Button>
                </div>
            </header>

            {/* Filters Bar */}
            <div className="flex flex-wrap items-center gap-4">
                {['All Patients', 'Critical', 'Warnings', 'Recent'].map((filter, i) => (
                    <button
                        key={filter}
                        className={cn(
                            "px-6 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-all border",
                            i === 0
                                ? "bg-slate-900 text-white border-slate-900 dark:bg-white dark:text-slate-950 dark:border-white"
                                : "bg-white dark:bg-slate-900 text-slate-500 border-slate-200 dark:border-slate-800 hover:border-primary/50"
                        )}
                    >
                        {filter}
                    </button>
                ))}
                <div className="flex-1" />
                <Button variant="ghost" className="gap-2 text-xs font-black uppercase tracking-widest text-slate-400">
                    <Filter className="w-4 h-4" /> Advanced Filters
                </Button>
            </div>

            {/* Patients List */}
            <Card className="p-0 overflow-hidden border-slate-200/60 dark:border-slate-800/60">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50">
                                <th className="p-6 text-[10px] font-black uppercase text-slate-400 tracking-[0.2em]">Patient Profile</th>
                                <th className="p-6 text-[10px] font-black uppercase text-slate-400 tracking-[0.2em]">Goal / Condition</th>
                                <th className="p-6 text-[10px] font-black uppercase text-slate-400 tracking-[0.2em]">Health Score</th>
                                <th className="p-6 text-[10px] font-black uppercase text-slate-400 tracking-[0.2em]">Status</th>
                                <th className="p-6 text-[10px] font-black uppercase text-slate-400 tracking-[0.2em]">Last Activity</th>
                                <th className="p-6 text-right"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50 dark:divide-slate-800">
                            {patients.map((patient) => (
                                <tr key={patient.id} className="group hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-all cursor-pointer">
                                    <td className="p-6">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center font-black text-slate-400 group-hover:bg-primary/10 group-hover:text-primary transition-all">
                                                {patient.name.split(' ').map(n => n[0]).join('')}
                                            </div>
                                            <div>
                                                <h4 className="font-black text-slate-900 dark:text-white italic tracking-tight">{patient.name}</h4>
                                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{patient.id} · {patient.age}y {patient.gender[0]}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-6">
                                        <Badge variant="outline" className="font-black text-[9px] px-3 py-1">{patient.goal}</Badge>
                                    </td>
                                    <td className="p-6">
                                        <div className="flex items-center gap-4">
                                            <div className="flex-1 w-24 bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    animate={{ width: `${patient.score}%` }}
                                                    className={cn(
                                                        "h-full rounded-full",
                                                        patient.score > 80 ? "bg-emerald-500" : patient.score > 50 ? "bg-amber-500" : "bg-rose-500"
                                                    )}
                                                />
                                            </div>
                                            <span className="text-xs font-black italic tabular-nums">{patient.score}%</span>
                                            {patient.trend === 'up' ? <TrendingUp className="w-3 h-3 text-emerald-500" /> : patient.trend === 'down' ? <TrendingDown className="w-3 h-3 text-rose-500" /> : null}
                                        </div>
                                    </td>
                                    <td className="p-6">
                                        <Badge variant={
                                            patient.status === 'Active' ? 'success' :
                                                patient.status === 'Warning' ? 'warning' :
                                                    patient.status === 'Critical' ? 'error' : 'info'
                                        } className="px-4 py-1 font-black italic text-[9px]">
                                            {patient.status}
                                        </Badge>
                                    </td>
                                    <td className="p-6">
                                        <div className="flex items-center gap-2 text-slate-400">
                                            <Clock className="w-3.5 h-3.5" />
                                            <span className="text-xs font-bold tracking-tight">{patient.lastSeen}</span>
                                        </div>
                                    </td>
                                    <td className="p-6 text-right">
                                        <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <Button variant="ghost" className="w-10 h-10 p-0 rounded-xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                                                <Phone className="w-4 h-4" />
                                            </Button>
                                            <Button variant="primary" className="h-10 px-6 text-[10px] italic font-black uppercase">View Charts</Button>
                                            <Button variant="ghost" className="w-10 h-10 p-0 rounded-xl">
                                                <MoreVertical className="w-4 h-4" />
                                            </Button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Card>

            {/* Pagination / Summary */}
            <div className="flex items-center justify-between px-2">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Showing 1-6 of 142 total patients</p>
                <div className="flex gap-2">
                    <Button variant="outline" className="h-10 w-10 p-0 rounded-xl">1</Button>
                    <Button variant="ghost" className="h-10 w-10 p-0 rounded-xl">2</Button>
                    <Button variant="ghost" className="h-10 w-10 p-0 rounded-xl">3</Button>
                    <span className="text-slate-300 self-end mb-2">...</span>
                    <Button variant="ghost" className="h-10 w-10 p-0 rounded-xl">24</Button>
                </div>
            </div>
        </div>
    );
};

export default Patients;
