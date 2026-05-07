import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export default function AboutMe() {
  return (
    <section id="about-me" className="py-24 px-6 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative"
          >
            <div className="relative z-10">
              <span className="section-label mb-6">01. About Me</span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">
                Beyond the <br />
                <span className="text-accent underline decoration-indigo-100 underline-offset-4 tracking-tight">Technical Stack.</span>
              </h2>
              
              <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 relative overflow-hidden group">
                <Quote className="absolute -top-4 -right-4 w-24 h-24 text-slate-200/50 group-hover:text-accent/10 transition-colors" />
                <p className="text-slate-600 italic relative z-10 leading-relaxed">
                  "I genuinely enjoy building systems that are clean, scalable, and built to last. I value clarity, ownership, and a positive working environment."
                </p>
                <div className="mt-4 flex items-center gap-3">
                    <div className="w-8 h-1 bg-accent rounded-full" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Pedro Chaves</span>
                </div>
              </div>
            </div>

            {/* Abstract Decorative Element */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-50 rounded-full blur-3xl -z-0 opacity-50" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="space-y-6 text-slate-600 text-base md:text-lg leading-relaxed">
              <p>
                Hi, I’m <span className="text-slate-900 font-bold">Pedro</span> — a tech lead who enjoys turning complex problems into simple, well-structured solutions. I work mostly with Angular, Java, PHP, and cloud technologies, and I genuinely enjoy building systems that are clean, scalable, and built to last.
              </p>
              <p>
                I like to combine technical depth with a practical mindset. For me, good software isn’t just about writing code — it’s about making thoughtful decisions, supporting the team, and creating solutions that make sense in the real world. I value clarity, ownership, and a positive working environment where people can grow and collaborate.
              </p>
              <p>
                I’m based in the <span className="text-slate-900 font-bold">Azores</span>, which probably explains why I enjoy being outdoors as much as being behind a screen. In my free time, you’ll usually find me hiking scenic trails, taking part in trail running events, or training at the gym. I like challenges — whether they involve elevation gain or a production deployment.
              </p>
              <p>
                Curious by nature and optimistic by default, I’m always looking for ways to improve, learn something new, and build things that matter.
              </p>
              <p className="font-medium text-slate-900">
                If you’re into clean architecture, continuous improvement, and working with someone who brings both focus and good energy to the table — we’ll get along just fine.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
