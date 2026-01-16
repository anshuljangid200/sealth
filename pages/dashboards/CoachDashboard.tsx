
import React from 'react';
import { Card, Icon, Button, Badge } from '../../components/UI';

const CoachDashboard: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto space-y-10">
      <header className="flex flex-col md:row items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-bold">Coach Workspace</h1>
          <p className="text-slate-500 font-medium">Empower your clients with smart training regimens.</p>
        </div>
        <Button className="px-8 py-3 font-bold text-xs uppercase tracking-widest">
           <Icon name="add" className="text-sm" /> New Workout Template
        </Button>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3 space-y-8">
          <Card className="p-8">
             <div className="flex justify-between items-center mb-8">
                <h3 className="text-xl font-bold">Active Clients</h3>
                <div className="flex bg-slate-100 dark:bg-slate-800 p-1.5 rounded-2xl">
                   <button className="px-4 py-2 bg-white dark:bg-slate-700 text-xs font-bold rounded-xl shadow-sm">Training Now</button>
                   <button className="px-4 py-2 text-xs font-bold text-slate-400">Resting</button>
                </div>
             </div>
             <div className="grid md:grid-cols-2 gap-6">
                {[
                  { name: 'Alexander Wright', goal: 'Hypertrophy', status: 'In Session', time: '20m left', color: 'primary' },
                  { name: 'Jessica Miller', goal: 'Cardio Endurance', status: 'Completed', time: '1h ago', color: 'emerald-500' },
                  { name: 'Robert Fox', goal: 'Mobility', status: 'Pending', time: '3:00 PM', color: 'amber-500' },
                  { name: 'Darlene Steward', goal: 'Strength', status: 'In Session', time: '5m left', color: 'primary' }
                ].map(client => (
                  <div key={client.name} className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-800/50 border border-transparent hover:border-slate-200 dark:hover:border-slate-700 transition-all group">
                     <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-900 flex items-center justify-center font-bold text-slate-400 shadow-sm ring-1 ring-slate-100 dark:ring-slate-700">
                           {client.name.charAt(0)}
                        </div>
                        <div className="flex-1">
                           <h4 className="font-bold text-base">{client.name}</h4>
                           <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{client.goal}</p>
                        </div>
                        <Badge variant={client.status === 'In Session' ? 'info' : client.status === 'Completed' ? 'success' : 'warning'}>{client.status}</Badge>
                     </div>
                     <div className="flex items-center justify-between text-xs font-bold">
                        <span className="text-slate-400">{client.time}</span>
                        <button className="text-primary hover:underline">Open Profile</button>
                     </div>
                  </div>
                ))}
             </div>
          </Card>

          <Card className="p-8">
             <h3 className="text-xl font-bold mb-8">Program Effectiveness</h3>
             <div className="h-64 flex items-center justify-center border-2 border-dashed border-slate-100 dark:border-slate-800 rounded-[2rem] text-slate-300 font-bold uppercase tracking-widest text-[10px]">
                Client Strength Progress Index (Interactive Chart)
             </div>
          </Card>
        </div>

        <div className="space-y-8">
           <Card className="p-8 border-none bg-secondary text-white shadow-xl shadow-secondary/10">
              <Icon name="tips_and_updates" className="text-4xl mb-6 opacity-30" />
              <h3 className="text-lg font-bold mb-2">Coach Insight</h3>
              <p className="text-white/80 text-sm mb-10 leading-relaxed">Alexander's performance in squats has plateaued for 2 weeks. Suggest increasing caloric intake by 200kcal or modifying rest intervals.</p>
              <Button className="w-full py-4 text-xs font-bold bg-white text-secondary uppercase tracking-widest shadow-none">Modify Program</Button>
           </Card>

           <Card className="p-8">
              <h3 className="text-lg font-bold mb-6">Upcoming Classes</h3>
              <div className="space-y-6">
                 {[
                   { title: 'Morning HIIT', time: '07:00 AM', joiners: 12 },
                   { title: 'Zen Yoga', time: '09:30 AM', joiners: 8 },
                   { title: 'Strength Pro', time: '11:00 AM', joiners: 15 },
                 ].map(c => (
                   <div key={c.title} className="flex items-center justify-between group cursor-pointer">
                      <div>
                         <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{c.time}</p>
                         <h5 className="font-bold text-sm group-hover:text-primary transition-colors">{c.title}</h5>
                      </div>
                      <div className="flex -space-x-2">
                         {[1,2,3].map(i => <div key={i} className="w-6 h-6 rounded-full border-2 border-white dark:border-slate-800 bg-slate-200" />)}
                         <div className="w-6 h-6 rounded-full border-2 border-white dark:border-slate-800 bg-primary flex items-center justify-center text-[8px] font-bold text-white">+{c.joiners - 3}</div>
                      </div>
                   </div>
                 ))}
              </div>
           </Card>
        </div>
      </div>
    </div>
  );
};

export default CoachDashboard;
