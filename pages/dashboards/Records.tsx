
import React from 'react';
import { motion } from 'framer-motion';
import { Card, Icon, Button, Badge, Container, Grid, Section, cn } from '../../components/UI';
import {
    FileText, Download, Share2, Search, Filter,
    Database, Activity, ShieldCheck, Clock,
    ArrowUpRight, AlertCircle, FilePlus
} from 'lucide-react';

const Records: React.FC = () => {
    const records = [
        { id: 'REC-7721', name: 'Comprehensive Metabolic Panel', patient: 'Arjun Mehta', date: 'Jan 12, 2026', type: 'Lab Report', status: 'Verified', priority: 'Normal' },
        { id: 'REC-7718', name: 'HbA1c & Lipid Profile', patient: 'Meera Reddy', date: 'Jan 10, 2026', type: 'Blood Work', status: 'Action Required', priority: 'High' },
        { id: 'REC-7714', name: 'Continuous Glucose Monitor (14-Day)', patient: 'Vikram Singh', date: 'Jan 08, 2026', type: 'Bio-Sensor', status: 'Verified', priority: 'Normal' },
        { id: 'REC-7709', name: 'Cardiac Stress Test Result', patient: 'Sanjay Gupta', date: 'Jan 05, 2026', type: 'Cardiology', status: 'Verified', priority: 'Normal' },
        { id: 'REC-7702', name: 'Genetic Nutrition Blueprint', patient: 'Lakshmi Iyer', date: 'Jan 02, 2026', type: 'Genomics', status: 'Verified', priority: 'Normal' },
    ];

    return (
        <div className="animate-fade-in space-y-10">
            {/* Header */}
            <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="space-y-1">
                    <h1 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight">Health Vault</h1>
                    <p className="text-slate-500 font-medium tracking-tight">Decentralized, encrypted health records and lab repository.</p>
                </div>
                <div className="flex gap-3">
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Find record by ID, patient or type..."
                            className="pl-12 pr-6 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl text-sm font-medium focus:ring-2 focus:ring-primary/20 transition-all outline-none w-64 md:w-80"
                        />
                    </div>
                    <Button className="gap-2 shrink-0">
                        <FilePlus className="w-4 h-4" /> Upload Record
                    </Button>
                </div>
            </header>

            {/* Verification Stats */}
            <Grid cols={3}>
                <Card className="p-8 border-none bg-slate-950 text-white relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-8 opacity-10 transform scale-150 rotate-12">
                        <ShieldCheck className="text-8xl" />
                    </div>
                    <div className="relative z-10">
                        <h4 className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-1">Vault Integrity</h4>
                        <p className="text-2xl font-black italic tracking-tight mb-4">Blockchain Verified</p>
                        <div className="flex items-center gap-2 text-emerald-500">
                            <ShieldCheck className="w-4 h-4" />
                            <span className="text-xs font-bold font-mono">ALL SYSTEMS NOMINAL</span>
                        </div>
                    </div>
                </Card>

                <Card className="p-8 group hover:border-primary/30 transition-all cursor-pointer">
                    <div className="flex justify-between items-start mb-4">
                        <div className="w-12 h-12 rounded-2xl bg-amber-50 dark:bg-amber-500/10 flex items-center justify-center text-amber-500">
                            <AlertCircle className="w-6 h-6" />
                        </div>
                        <Badge variant="warning" className="font-black italic">Active</Badge>
                    </div>
                    <h4 className="text-2xl font-black text-slate-900 dark:text-white italic tabular-nums">03</h4>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Pending Physician Signature</p>
                </Card>

                <Card className="p-8 group hover:border-blue-500/30 transition-all cursor-pointer">
                    <div className="flex justify-between items-start mb-4">
                        <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center text-blue-500">
                            <Database className="w-6 h-6" />
                        </div>
                        <Badge variant="info" className="font-black italic">Live</Badge>
                    </div>
                    <h4 className="text-2xl font-black text-slate-900 dark:text-white italic tabular-nums">1.2 TB</h4>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Storage Utilized (Encrypted)</p>
                </Card>
            </Grid>

            {/* Records Table */}
            <Card className="p-0 overflow-hidden border-slate-200/60 dark:border-slate-800/60">
                <div className="p-8 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <h3 className="text-lg font-black text-slate-900 dark:text-white italic uppercase tracking-tight">Recent Archives</h3>
                    <div className="flex items-center gap-4">
                        <Button variant="ghost" className="gap-2 text-xs font-black uppercase tracking-widest text-slate-400">
                            <Filter className="w-4 h-4" /> Sort by Date
                        </Button>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <tbody className="divide-y divide-slate-50 dark:divide-slate-800">
                            {records.map((rec) => (
                                <tr key={rec.id} className="group hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-all cursor-pointer">
                                    <td className="p-6">
                                        <div className="flex items-center gap-5">
                                            <div className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-400 group-hover:text-primary transition-colors">
                                                <FileText className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <h4 className="font-black text-slate-900 dark:text-white italic tracking-tight">{rec.name}</h4>
                                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{rec.id} · {rec.type}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-6">
                                        <div className="flex flex-col">
                                            <span className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Patient</span>
                                            <span className="text-sm font-black text-slate-900 dark:text-white italic">{rec.patient}</span>
                                        </div>
                                    </td>
                                    <td className="p-6">
                                        <div className="flex flex-col">
                                            <span className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Uploaded</span>
                                            <span className="text-sm font-black text-slate-900 dark:text-white italic">{rec.date}</span>
                                        </div>
                                    </td>
                                    <td className="p-6">
                                        <Badge variant={rec.status === 'Verified' ? 'success' : 'warning'} className="px-4 py-1.5 font-black uppercase italic text-[9px]">
                                            {rec.status}
                                        </Badge>
                                    </td>
                                    <td className="p-6 text-right">
                                        <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <Button variant="ghost" className="w-10 h-10 p-0 rounded-xl" title="Share via Sealth Sync">
                                                <Share2 className="w-4 h-4" />
                                            </Button>
                                            <Button variant="ghost" className="w-10 h-10 p-0 rounded-xl" title="Download Encrypted PDF">
                                                <Download className="w-4 h-4" />
                                            </Button>
                                            <Button variant="outline" className="h-10 px-6 text-[10px] italic font-black uppercase flex items-center gap-2 group/btn">
                                                Open Vault <ArrowUpRight className="w-3 h-3 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                                            </Button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Card>

            <Section className="py-0">
                <Card className="p-10 border-none bg-primary text-white flex flex-col md:flex-row items-center gap-10">
                    <div className="w-20 h-20 rounded-3xl bg-white/10 flex items-center justify-center shrink-0">
                        <Activity className="w-10 h-10 text-white" />
                    </div>
                    <div className="flex-1 space-y-2 text-center md:text-left">
                        <h3 className="text-2xl font-black italic tracking-tight">Real-time Lab Integration</h3>
                        <p className="text-white/80 font-medium">Connect SEALTH to major diagnostic chains across India for automatic, blockchain-verified report fetching.</p>
                    </div>
                    <Button variant="glass" className="h-14 px-10 text-xs font-black uppercase tracking-[0.2em] shrink-0">
                        Sync New Source
                    </Button>
                </Card>
            </Section>
        </div>
    );
};

export default Records;
