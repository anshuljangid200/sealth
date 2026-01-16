
import React from 'react';
import { Card, Icon, Button, Badge } from '../../components/UI';

const DeliveryDashboard: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto space-y-10">
      <header className="flex flex-col md:row items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-bold">Delivery Partner Hub</h1>
          <p className="text-slate-500 font-medium">Optimize your routes and track your daily earnings.</p>
        </div>
        <div className="bg-emerald-500/10 text-emerald-600 px-6 py-3 rounded-2xl flex items-center gap-3">
           <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
           <span className="text-xs font-bold uppercase tracking-widest">Available for Tasks</span>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         <div className="lg:col-span-2 space-y-8">
            <Card className="p-8">
               <div className="flex justify-between items-center mb-10">
                  <h3 className="text-xl font-bold">Active Deliveries</h3>
                  <Badge variant="info">2 Assigned</Badge>
               </div>
               <div className="space-y-6">
                  {[
                    { id: 'DEL-2201', address: '12-B Skyview Residency, Sector 4', customer: 'Alexander Wright', time: 'Est 12:45 PM', status: 'Picked Up' },
                    { id: 'DEL-2205', address: 'Plot 44, Green Meadows Complex', customer: 'Jane Cooper', time: 'Est 01:15 PM', status: 'Ready' }
                  ].map(task => (
                    <div key={task.id} className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 transition-all">
                       <div className="flex justify-between items-start mb-6">
                          <div>
                             <Badge variant="info" className="mb-2">{task.id}</Badge>
                             <h4 className="font-bold text-lg">{task.address}</h4>
                             <p className="text-xs text-slate-400 font-medium">Customer: {task.customer}</p>
                          </div>
                          <div className="text-right">
                             <p className="text-sm font-bold text-primary">{task.time}</p>
                             <p className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">{task.status}</p>
                          </div>
                       </div>
                       <div className="flex gap-4">
                          <Button className="flex-1 py-3 text-xs font-bold uppercase tracking-widest">
                             <Icon name="navigation" className="text-sm" /> Navigate
                          </Button>
                          <Button variant="outline" className="flex-1 py-3 bg-white dark:bg-slate-900 border-none shadow-sm text-xs font-bold uppercase tracking-widest">
                             Mark Delivered
                          </Button>
                       </div>
                    </div>
                  ))}
               </div>
            </Card>

            <Card className="p-8">
               <h3 className="text-xl font-bold mb-8">Performance History</h3>
               <div className="grid grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-slate-50 dark:bg-slate-800/50 rounded-[2rem]">
                     <h5 className="text-2xl font-bold">4.9</h5>
                     <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Rating</p>
                  </div>
                  <div className="text-center p-6 bg-slate-50 dark:bg-slate-800/50 rounded-[2rem]">
                     <h5 className="text-2xl font-bold">128</h5>
                     <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Deliveries</p>
                  </div>
                  <div className="text-center p-6 bg-slate-50 dark:bg-slate-800/50 rounded-[2rem]">
                     <h5 className="text-2xl font-bold">98%</h5>
                     <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">On Time</p>
                  </div>
               </div>
            </Card>
         </div>

         <div className="space-y-8">
            <Card className="p-8 border-none bg-slate-900 text-white shadow-2xl shadow-black/10">
               <h3 className="text-lg font-bold mb-2">Today's Wallet</h3>
               <p className="text-slate-400 text-xs mb-8 uppercase tracking-widest font-bold">Earned so far</p>
               <h2 className="text-5xl font-extrabold mb-10 tracking-tight">₹1,240.00</h2>
               <div className="space-y-4 mb-10">
                  <div className="flex justify-between text-xs font-medium">
                     <span className="text-slate-500">Base Earnings</span>
                     <span>₹850.00</span>
                  </div>
                  <div className="flex justify-between text-xs font-medium">
                     <span className="text-slate-500">Bonus & Tips</span>
                     <span className="text-emerald-400">₹390.00</span>
                  </div>
               </div>
               <Button className="w-full py-4 text-xs font-bold bg-primary text-white uppercase tracking-widest border-none">Withdraw Funds</Button>
            </Card>

            <Card className="p-8">
               <h3 className="text-lg font-bold mb-6">Partner Guidelines</h3>
               <div className="space-y-6">
                  <div className="flex items-start gap-4">
                     <div className="p-2 rounded-xl bg-blue-50 text-blue-500"><Icon name="verified" /></div>
                     <p className="text-xs text-slate-500 leading-relaxed">Always confirm food freshness tags before pickup.</p>
                  </div>
                  <div className="flex items-start gap-4">
                     <div className="p-2 rounded-xl bg-orange-50 text-orange-500"><Icon name="bolt" /></div>
                     <p className="text-xs text-slate-500 leading-relaxed">High demand in North Sector. +₹20 per delivery currently.</p>
                  </div>
               </div>
            </Card>
         </div>
      </div>
    </div>
  );
};

export default DeliveryDashboard;
