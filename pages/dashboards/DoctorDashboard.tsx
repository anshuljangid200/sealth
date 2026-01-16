
import React from 'react';
import { Card, Icon, Button, Badge } from '../../components/UI';

const DoctorDashboard: React.FC = () => {
  const appointments = [
    { name: 'John Cooper', time: '09:00 AM', type: 'Nutrition Review', status: 'Online', avatar: 'https://i.pravatar.cc/150?u=john' },
    { name: 'Emily White', time: '11:30 AM', type: 'Initial Screening', status: 'In-Clinic', avatar: 'https://i.pravatar.cc/150?u=emily' },
    { name: 'David Smith', time: '02:00 PM', type: 'Follow-up', status: 'Online', avatar: 'https://i.pravatar.cc/150?u=david' },
    { name: 'Sarah Lee', time: '04:15 PM', type: 'Metabolic Consultation', status: 'Online', avatar: 'https://i.pravatar.cc/150?u=lee' },
  ];

  const recentPatients = [
    { name: 'Marcus Aurelius', age: 34, goal: 'Weight Loss', progress: 72, trend: 'up' },
    { name: 'Sophia Chen', age: 28, goal: 'Muscle Gain', progress: 45, trend: 'stable' },
    { name: 'Kevin Durant', age: 41, goal: 'Diabetes Mgmt', progress: 91, trend: 'up' },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-10">
      <header className="flex flex-col md:row items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-bold">Doctor's Overview</h1>
          <p className="text-slate-500 font-medium mt-1">Manage your patients and upcoming medical consultations.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="px-6 py-3 bg-white dark:bg-slate-900 border-none shadow-sm font-bold text-xs uppercase tracking-widest">
            <Icon name="event" className="text-sm" /> Schedule Leave
          </Button>
          <Button className="px-6 py-3 font-bold text-xs uppercase tracking-widest">
            <Icon name="add" className="text-sm" /> Add Patient
          </Button>
        </div>
      </header>

      {/* Stats row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { label: 'Total Patients', value: '142', change: '+12%', icon: 'people', color: 'text-blue-500' },
          { label: 'Appointments Today', value: '8', change: '2 spots left', icon: 'schedule', color: 'text-primary' },
          { label: 'Health Alerts', value: '3', change: 'Critical', icon: 'warning', color: 'text-rose-500' },
          { label: 'Average Score', value: '78', change: '+5 pts', icon: 'insights', color: 'text-amber-500' },
        ].map(stat => (
          <Card key={stat.label} className="p-6 flex items-center gap-5 group hover:border-primary/50 transition-colors">
            <div className={`w-14 h-14 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center ${stat.color}`}>
              <Icon name={stat.icon} className="text-2xl" />
            </div>
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
              <h4 className="text-2xl font-bold">{stat.value}</h4>
              <p className={`text-[10px] font-bold ${stat.label === 'Health Alerts' ? 'text-rose-500' : 'text-primary'}`}>{stat.change}</p>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Appointments Column */}
        <div className="lg:col-span-2 space-y-8">
          <Card className="p-8">
            <div className="flex justify-between items-center mb-10">
              <h3 className="text-xl font-bold">Today's Appointments</h3>
              <div className="flex gap-2">
                <button className="p-2 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                   <Icon name="chevron_left" />
                </button>
                <button className="p-2 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                   <Icon name="chevron_right" />
                </button>
              </div>
            </div>
            <div className="space-y-4">
              {appointments.map((apt, i) => (
                <div key={i} className="flex items-center gap-6 p-5 rounded-3xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all group border border-transparent hover:border-slate-100 dark:hover:border-slate-700">
                   <div className="text-center min-w-[80px]">
                      <p className="text-sm font-bold">{apt.time}</p>
                   </div>
                   <div className="h-10 w-[1px] bg-slate-100 dark:bg-slate-800"></div>
                   <img src={apt.avatar} className="w-12 h-12 rounded-2xl object-cover shadow-sm" alt={apt.name} />
                   <div className="flex-1">
                      <h4 className="font-bold text-base">{apt.name}</h4>
                      <p className="text-xs text-slate-400 font-medium">{apt.type}</p>
                   </div>
                   <Badge variant={apt.status === 'Online' ? 'info' : 'success'}>{apt.status}</Badge>
                   <Button variant="ghost" className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <Icon name="more_vert" />
                   </Button>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-8">
            <h3 className="text-xl font-bold mb-8">Clinical Analytics</h3>
            <div className="h-72 w-full flex items-center justify-center text-slate-300 font-bold border-2 border-dashed border-slate-100 dark:border-slate-800 rounded-3xl uppercase tracking-widest text-xs">
               Aggregated Patient Vital Trends (Interactive Chart)
            </div>
          </Card>
        </div>

        {/* Patients Side Column */}
        <div className="space-y-8">
          <Card className="p-8">
            <div className="flex justify-between items-center mb-8">
               <h3 className="text-lg font-bold">Recent Patients</h3>
               <button className="text-primary text-[10px] font-bold uppercase tracking-widest">All Lists</button>
            </div>
            <div className="space-y-8">
               {recentPatients.map((patient, i) => (
                 <div key={i} className="space-y-4">
                   <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                         <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-400">
                            {patient.name.charAt(0)}
                         </div>
                         <div>
                            <p className="text-sm font-bold">{patient.name}</p>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{patient.goal}</p>
                         </div>
                      </div>
                      <Icon name={patient.trend === 'up' ? 'trending_up' : 'trending_flat'} className={patient.trend === 'up' ? 'text-emerald-500' : 'text-slate-300'} />
                   </div>
                   <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-primary h-full transition-all duration-1000" style={{ width: `${patient.progress}%` }} />
                   </div>
                 </div>
               ))}
            </div>
            <Button className="w-full mt-10 py-4 text-xs font-bold uppercase tracking-widest">View Detailed Records</Button>
          </Card>

          <Card className="p-8 border-none bg-primary text-white">
            <Icon name="auto_awesome" className="text-4xl mb-4 opacity-40" />
            <h3 className="text-lg font-bold mb-2">Smart Diagnosis Assistant</h3>
            <p className="text-primary-light text-sm mb-8 leading-relaxed">AI has flagged 2 new abnormal metabolic readings in your patient list. Review suggested actions.</p>
            <Button className="w-full py-4 text-xs font-bold bg-white text-primary uppercase tracking-widest">Review Alerts</Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;
