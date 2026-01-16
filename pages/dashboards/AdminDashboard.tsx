
import React from 'react';
import { Card, Icon, Button, Badge } from '../../components/UI';

const AdminDashboard: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto space-y-10 pb-12">
      <header className="flex flex-col md:row items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-bold">System Intelligence</h1>
          <p className="text-slate-500 font-medium">Real-time performance metrics and ecosystem health.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="bg-white dark:bg-slate-900 border-none shadow-sm text-xs font-bold uppercase tracking-widest">
            <Icon name="settings" className="text-sm" /> Configuration
          </Button>
          <Button className="text-xs font-bold uppercase tracking-widest">
             Live Monitoring
          </Button>
        </div>
      </header>

      {/* Main KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { label: 'Revenue (MTD)', value: '₹14.2M', trend: '+22%', icon: 'payments', color: 'bg-emerald-50 text-emerald-600' },
          { label: 'Total Members', value: '12,492', trend: '+1,200', icon: 'people', color: 'bg-blue-50 text-blue-600' },
          { label: 'Active Tiffins', value: '3,840', trend: '98% Eff.', icon: 'restaurant', color: 'bg-amber-50 text-amber-600' },
          { label: 'Expert Network', value: '154', trend: '9 online', icon: 'medical_services', color: 'bg-purple-50 text-purple-600' },
        ].map(kpi => (
          <Card key={kpi.label} className="p-8 group hover:-translate-y-1 transition-all duration-300">
             <div className="flex justify-between items-start mb-6">
                <div className={`w-14 h-14 rounded-3xl ${kpi.color} flex items-center justify-center transition-transform group-hover:scale-110`}>
                   <Icon name={kpi.icon} className="text-2xl" />
                </div>
                <Badge variant="success">{kpi.trend}</Badge>
             </div>
             <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-1">{kpi.label}</p>
             <h4 className="text-3xl font-extrabold tracking-tight">{kpi.value}</h4>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Revenue Chart Placeholder */}
        <Card className="lg:col-span-2 p-10 flex flex-col">
           <div className="flex justify-between items-center mb-12">
              <h3 className="text-xl font-bold">Subscription Growth</h3>
              <div className="flex gap-2">
                 <button className="px-4 py-1.5 rounded-xl bg-primary text-white text-[10px] font-bold uppercase tracking-widest">Monthly</button>
                 <button className="px-4 py-1.5 rounded-xl text-slate-400 text-[10px] font-bold uppercase tracking-widest hover:bg-slate-50 transition-colors">Yearly</button>
              </div>
           </div>
           <div className="flex-1 min-h-[300px] w-full flex items-end justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-2">
              {[60, 40, 80, 50, 90, 70, 100, 85, 95, 110, 105, 120].map((h, i) => (
                <div key={i} className="flex-1 relative group">
                   <div className="bg-primary/10 w-full rounded-t-lg transition-all group-hover:bg-primary/30" style={{ height: `${h * 0.7}%` }}></div>
                   <div className="absolute inset-0 bg-primary rounded-t-lg opacity-0 group-hover:opacity-100 transition-all cursor-pointer" style={{ height: `${h * 0.7}%` }}></div>
                </div>
              ))}
           </div>
           <div className="flex justify-between mt-6 text-[10px] font-extrabold text-slate-300 uppercase tracking-widest">
              <span>Jul 23</span>
              <span>Jan 24</span>
              <span>Jun 24</span>
           </div>
        </Card>

        {/* User Activity Column */}
        <div className="space-y-8">
           <Card className="p-8">
              <h3 className="text-lg font-bold mb-8">System Health</h3>
              <div className="space-y-8">
                 <div className="space-y-3">
                    <div className="flex justify-between text-xs font-bold uppercase tracking-widest">
                       <span className="text-slate-400">Server Load</span>
                       <span className="text-primary">12%</span>
                    </div>
                    <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                       <div className="bg-primary h-full w-[12%]" />
                    </div>
                 </div>
                 <div className="space-y-3">
                    <div className="flex justify-between text-xs font-bold uppercase tracking-widest">
                       <span className="text-slate-400">API Response</span>
                       <span className="text-primary">42ms</span>
                    </div>
                    <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                       <div className="bg-emerald-500 h-full w-[5%]" />
                    </div>
                 </div>
                 <div className="space-y-3">
                    <div className="flex justify-between text-xs font-bold uppercase tracking-widest">
                       <span className="text-slate-400">Delivery Accuracy</span>
                       <span className="text-primary">99.2%</span>
                    </div>
                    <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                       <div className="bg-amber-500 h-full w-[99%]" />
                    </div>
                 </div>
              </div>
              <Button variant="outline" className="w-full mt-10 py-4 text-xs font-bold uppercase tracking-widest border-slate-200 dark:border-slate-800">
                 Run Diagnostics
              </Button>
           </Card>

           <Card className="p-8 border-none shadow-2xl shadow-primary/5 bg-slate-50 dark:bg-slate-900 relative overflow-hidden">
              <div className="relative z-10">
                 <h3 className="text-lg font-bold mb-4">Admin Quick Links</h3>
                 <div className="grid grid-cols-2 gap-3">
                    <button className="p-4 bg-white dark:bg-slate-800 rounded-2xl text-[10px] font-bold uppercase tracking-widest hover:text-primary transition-colors text-center shadow-sm">Audit Logs</button>
                    <button className="p-4 bg-white dark:bg-slate-800 rounded-2xl text-[10px] font-bold uppercase tracking-widest hover:text-primary transition-colors text-center shadow-sm">Support</button>
                    <button className="p-4 bg-white dark:bg-slate-800 rounded-2xl text-[10px] font-bold uppercase tracking-widest hover:text-primary transition-colors text-center shadow-sm">Coupons</button>
                    <button className="p-4 bg-white dark:bg-slate-800 rounded-2xl text-[10px] font-bold uppercase tracking-widest hover:text-primary transition-colors text-center shadow-sm">Security</button>
                 </div>
              </div>
           </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
