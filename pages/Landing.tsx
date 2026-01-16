
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { LOGO_URL } from '../constants';
import { Button, Card, Icon, cn } from '../components/UI';
import { ArrowRight, CheckCircle2, Star, Users, ShieldCheck, Zap } from 'lucide-react';

const Landing: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FDFDFD] dark:bg-slate-950 selection:bg-primary/20">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/70 dark:bg-slate-950/70 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-800/50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-lg rounded-full group-hover:bg-primary/30 transition-colors"></div>
              <img src={LOGO_URL} alt="Sealth Logo" className="h-10 w-10 relative" />
            </div>
            <div className="hidden md:block">
              <span className="text-xl font-black tracking-tighter text-slate-900 dark:text-white group-hover:text-primary transition-colors">SEALTH</span>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">Smart Living. Simple Health.</p>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-10">
            <div className="flex items-center gap-8 font-semibold text-sm text-slate-600 dark:text-slate-400">
              <a href="#how" className="hover:text-primary transition-colors">How it Works</a>
              <Link to="/subscriptions" className="hover:text-primary transition-colors">Subscriptions</Link>
              <a href="#ecosystem" className="hover:text-primary transition-colors">Ecosystem</a>
            </div>
            <div className="h-6 w-[1px] bg-slate-200 dark:bg-slate-800"></div>
            <div className="flex items-center gap-4">
              <Link to="/login">
                <Button variant="ghost" className="text-sm px-5">Sign In</Button>
              </Link>
              <Link to="/subscriptions">
                <Button className="text-sm px-6 shadow-xl shadow-primary/20">Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-16 pb-20 overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 dark:opacity-5 pointer-events-none"></div>

        {/* Background Orbs */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-secondary/5 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative z-10"
            >
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-2xl bg-primary/5 border border-primary/10 text-primary/80 text-[10px] font-bold mb-5 uppercase tracking-[0.2em] backdrop-blur-sm"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                The Future of Personal Vitality
              </motion.div>
              <h1 className="text-6xl md:text-8xl font-black leading-[0.85] mb-4 text-slate-900 dark:text-white tracking-tighter">
                Wellness that <br />
                <span className="text-primary italic font-serif">works</span>
                <span className="text-slate-400 dark:text-slate-600 italic font-serif"> for you.</span>
              </h1>

              <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-lg leading-relaxed font-medium">
                Personalized nutrition, real-time health tracking, and expert consultations. All in one seamless ecosystem designed for your longevity.
              </p>

              <div className="flex flex-col sm:flex-row gap-5">
                <Link to="/subscriptions">
                  <Button className="px-10 py-5 text-lg h-16 rounded-2xl group">
                    Start Your Journey
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Button variant="outline" className="px-10 py-5 text-lg h-16 rounded-2xl border-2">
                  Watch Demo
                </Button>
              </div>


            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-secondary/20 blur-3xl opacity-30 rounded-[4rem]"></div>
              <div className="relative rounded-[3.5rem] overflow-hidden border-[12px] border-white dark:border-slate-900 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] dark:shadow-none">
                <img
                  src="https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=800"
                  alt="Health App"
                  className="w-full aspect-[4/5] object-cover scale-105 hover:scale-100 transition-transform duration-1000"
                />

                {/* Floating Stats UI */}
                <motion.div
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute bottom-6 left-6 right-6 bg-white/60 dark:bg-slate-900/60 backdrop-blur-3xl p-6 rounded-[2.5rem] border border-white/40 dark:border-slate-800/40 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)]"
                >
                  <div className="flex items-center justify-between mb-5">
                    <div>
                      <h4 className="font-black text-lg text-slate-900 dark:text-white leading-none mb-1">Nutrition Score</h4>
                      <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.15em]">Real-time Analysis</p>
                    </div>
                    <div className="h-10 w-10 rounded-2xl bg-primary/20 flex items-center justify-center text-primary">
                      <Zap className="w-5 h-5 fill-primary" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs font-black">
                      <span className="text-slate-500">Daily Goal</span>
                      <span className="text-primary bg-primary/10 px-2 py-0.5 rounded-lg">92%</span>
                    </div>
                    <div className="w-full bg-slate-200/40 dark:bg-slate-700/40 h-2.5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "92%" }}
                        transition={{ duration: 1.5, delay: 0.8 }}
                        className="bg-gradient-to-r from-primary to-primary-light h-full rounded-full shadow-[0_0_15px_rgba(20,184,166,0.5)]"
                      />
                    </div>
                  </div>
                </motion.div>

                {/* Smaller Floating Badge */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-8 -right-4 bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl p-3.5 rounded-2xl shadow-[0_15px_30px_-10px_rgba(0,0,0,0.15)] flex items-center gap-3 border border-slate-100/50 dark:border-slate-700/50"
                >
                  <div className="h-9 w-9 rounded-xl bg-orange-100 dark:bg-orange-500/20 flex items-center justify-center text-orange-600">
                    <Star className="w-5 h-5 fill-orange-500" />
                  </div>
                  <div>
                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-tight">Personalized</p>
                    <p className="text-sm font-black text-slate-900 dark:text-white leading-tight">Elite Plan</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>



      {/* Features Preview */}
      <section id="how" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight text-slate-900 dark:text-white">Everything you need to <span className="text-primary">thrive.</span></h2>
            <p className="text-lg text-slate-500 font-medium">We've combined science, technology, and expert care into a single platform for your health journey.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-10 group hover:border-primary/50 transition-colors">
              <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black mb-4 dark:text-white">Full Privacy</h3>
              <p className="text-slate-500 font-medium leading-relaxed">Your health data is encrypted and secure. You own your information, always.</p>
            </Card>

            <Card className="p-10 group hover:border-primary/50 transition-colors">
              <div className="h-16 w-16 rounded-2xl bg-blue-100 dark:bg-blue-500/10 flex items-center justify-center text-blue-600 mb-8 group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black mb-4 dark:text-white">Expert Network</h3>
              <p className="text-slate-500 font-medium leading-relaxed">Connect with top-tier nutritionists and doctors in just a few clicks.</p>
            </Card>

            <Card className="p-10 group hover:border-primary/50 transition-colors">
              <div className="h-16 w-16 rounded-2xl bg-orange-100 dark:bg-orange-500/10 flex items-center justify-center text-orange-600 mb-8 group-hover:scale-110 transition-transform">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black mb-4 dark:text-white">Verified Plans</h3>
              <p className="text-slate-500 font-medium leading-relaxed">Scientifically backed nutrition plans tailored to your unique biology.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Footer Section */}
      <section className="py-32 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent opacity-30"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-[0.9]">Ready to build your <br /><span className="text-primary italic font-serif">best self?</span></h2>
            <p className="text-xl text-slate-400 mb-12 font-medium max-w-2xl mx-auto">Get expert guidance, premium nutrition, and smart tracking today. Join the community of high achievers.</p>
            <Link to="/subscriptions">
              <Button className="px-12 py-8 text-2xl h-20 rounded-3xl shadow-2xl shadow-primary/40 group">
                Join Sealth Now
                <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="py-12 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:row justify-between items-center gap-8 text-sm font-bold text-slate-500">
          <div className="flex items-center gap-2">
            <img src={LOGO_URL} alt="Sealth Logo" className="h-6 w-6 opacity-50" />
            <span className="tracking-tighter text-slate-900 dark:text-white">SEALTH © 2026</span>
          </div>
          <div className="flex gap-10">
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
            <a href="#" className="hover:text-primary transition-colors">Contact</a>
          </div>

        </div>
      </footer>
    </div>
  );
};

export default Landing;
