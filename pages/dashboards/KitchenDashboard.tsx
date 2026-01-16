
import React from 'react';
import { Card, Icon, Button, Badge } from '../../components/UI';
import { MOCK_ORDERS } from '../../constants';

const KitchenDashboard: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto space-y-10">
      <header className="flex flex-col md:row items-center justify-between gap-6">
        <div>
           <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-[0.2em] text-[10px] mb-2">
            <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            System Live: 14 Orders in Queue
          </div>
          <h1 className="text-3xl font-bold">Kitchen Control Board</h1>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="px-6 py-3 border-none bg-white dark:bg-slate-900 shadow-sm text-xs font-bold uppercase tracking-widest">
            <Icon name="history" className="text-sm" /> History
          </Button>
          <Button className="px-6 py-3 text-xs font-bold uppercase tracking-widest">
             Manage Menu
          </Button>
        </div>
      </header>

      {/* Kanban Board Style Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* NEW ORDERS */}
        <div className="space-y-6">
          <div className="flex items-center justify-between px-2">
             <h3 className="text-sm font-extrabold text-slate-400 uppercase tracking-[0.2em]">Incoming (4)</h3>
             <Icon name="more_horiz" className="text-slate-300" />
          </div>
          {MOCK_ORDERS.filter(o => o.status === 'NEW').map(order => (
            <Card key={order.id} className="p-6 border-l-4 border-l-blue-500 hover:shadow-xl transition-all cursor-pointer">
               <div className="flex justify-between items-start mb-4">
                  <Badge variant="info">{order.id}</Badge>
                  <span className="text-[10px] font-bold text-slate-400">{order.time}</span>
               </div>
               <h4 className="font-bold text-lg mb-1">{order.meal}</h4>
               <p className="text-xs text-slate-500 font-medium mb-6">Customer: <span className="text-slate-900 dark:text-white">{order.customerName}</span></p>
               
               <div className="flex items-center gap-2 mb-6">
                  <Icon name="error_outline" className="text-rose-500 text-sm" />
                  <span className="text-[10px] font-extrabold text-rose-500 uppercase tracking-widest">{order.tag}</span>
               </div>

               <Button className="w-full py-3 bg-blue-500 hover:bg-blue-600 shadow-none text-xs font-bold uppercase tracking-widest">Start Cooking</Button>
            </Card>
          ))}
        </div>

        {/* PREPARING */}
        <div className="space-y-6">
          <div className="flex items-center justify-between px-2">
             <h3 className="text-sm font-extrabold text-slate-400 uppercase tracking-[0.2em]">Preparing (1)</h3>
             <Icon name="more_horiz" className="text-slate-300" />
          </div>
          {MOCK_ORDERS.filter(o => o.status === 'PREPARING').map(order => (
            <Card key={order.id} className="p-6 border-l-4 border-l-amber-500 bg-amber-50/10 dark:bg-amber-900/5 shadow-inner">
               <div className="flex justify-between items-start mb-4">
                  <Badge variant="warning">{order.id}</Badge>
                  <span className="flex items-center gap-1 text-[10px] font-bold text-amber-500">
                    <Icon name="pending" className="text-xs animate-spin" /> Cooking
                  </span>
               </div>
               <h4 className="font-bold text-lg mb-1">{order.meal}</h4>
               <p className="text-xs text-slate-500 font-medium mb-6">Chef Assigned: <span className="text-slate-900 dark:text-white">Gordon R.</span></p>
               
               <div className="w-full bg-slate-200 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden mb-6">
                  <div className="bg-amber-500 h-full w-[65%]" />
               </div>

               <Button className="w-full py-3 bg-amber-500 hover:bg-amber-600 shadow-none text-xs font-bold uppercase tracking-widest">Mark as Ready</Button>
            </Card>
          ))}
        </div>

        {/* READY / DISPATCH */}
        <div className="space-y-6">
          <div className="flex items-center justify-between px-2">
             <h3 className="text-sm font-extrabold text-slate-400 uppercase tracking-[0.2em]">Ready for Pickup (1)</h3>
             <Icon name="more_horiz" className="text-slate-300" />
          </div>
          {MOCK_ORDERS.filter(o => o.status === 'READY').map(order => (
            <Card key={order.id} className="p-6 border-l-4 border-l-emerald-500 group">
               <div className="flex justify-between items-start mb-4">
                  <Badge variant="success">{order.id}</Badge>
                  <Icon name="check_circle" className="text-emerald-500 text-sm" />
               </div>
               <h4 className="font-bold text-lg mb-1">{order.meal}</h4>
               <p className="text-xs text-slate-500 font-medium mb-6">Waiting for: <span className="text-emerald-500 font-bold">Delivery Partner</span></p>
               
               <div className="bg-emerald-50 dark:bg-emerald-900/10 p-4 rounded-2xl mb-6 flex items-center gap-3">
                  <Icon name="motorcycle" className="text-emerald-500" />
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Courier</p>
                    <p className="text-xs font-bold">Ravi Kumar (ID: 443)</p>
                  </div>
               </div>

               <Button variant="outline" className="w-full py-3 border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-widest">Hand over</Button>
            </Card>
          ))}
        </div>

      </div>

      {/* Inventory Warning */}
      <Card className="p-8 bg-slate-900 text-white border-none overflow-hidden group">
         <div className="flex flex-col md:row items-center justify-between gap-8 relative z-10">
            <div className="space-y-4 text-center md:text-left">
               <h3 className="text-2xl font-bold">Inventory Low Alert</h3>
               <p className="text-slate-400 max-w-md">The following organic ingredients are below 15% stock levels. Replenish needed for tomorrow's plan.</p>
               <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  <span className="px-3 py-1 rounded-full bg-white/10 text-[10px] font-bold border border-white/10">Quinoa (2kg)</span>
                  <span className="px-3 py-1 rounded-full bg-white/10 text-[10px] font-bold border border-white/10">Atlantic Salmon (5kg)</span>
                  <span className="px-3 py-1 rounded-full bg-rose-500/20 text-[10px] font-bold text-rose-300 border border-rose-500/20">Organic Spinach (0.5kg)</span>
               </div>
            </div>
            <Button className="px-10 py-5 bg-white text-slate-900 shadow-xl shadow-white/5 font-bold uppercase tracking-widest text-xs">Quick Restock</Button>
         </div>
         <Icon name="inventory" className="absolute right-0 bottom-0 text-[12rem] text-white opacity-[0.03] transform translate-x-12 translate-y-12 rotate-12" />
      </Card>
    </div>
  );
};

export default KitchenDashboard;
