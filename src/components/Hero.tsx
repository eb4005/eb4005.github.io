import { useEffect, useState } from 'react';
import { AnimatePresence, motion, type Variants } from 'framer-motion';
import { ArrowDown, Mail, Github, Linkedin, FileText } from 'lucide-react';

const roles = ['AI Governance', 'LLM Applications', 'Agentic Workflows', 'Workflow Automation', 'Full-Stack Platforms'];

const Hero = () => {
    const [i, setI] = useState(0);
    useEffect(() => {
        const t = setInterval(() => setI((v) => (v + 1) % roles.length), 2400);
        return () => clearInterval(t);
    }, []);

    const container: Variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
    };
    const item: Variants = {
        hidden: { y: 40, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 90, damping: 14 } },
    };

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            {/* Floating glow blobs */}
            <motion.div
                animate={{ x: [0, 60, 0], y: [0, -40, 0] }}
                transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none"
            />
            <motion.div
                animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
                transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-1/3 right-1/4 translate-x-1/2 w-[30rem] h-[30rem] bg-secondary/20 rounded-full blur-[120px] pointer-events-none"
            />
            {/* Subtle grid */}
            <div className="absolute inset-0 opacity-[0.04] pointer-events-none [background-image:linear-gradient(white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)] [background-size:48px_48px]" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div variants={container} initial="hidden" animate="visible" className="max-w-4xl mx-auto text-center">
                    <motion.div variants={item} className="mb-6 inline-block">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm font-medium tracking-wider text-slate-300">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                            </span>
                            OPEN TO NEW OPPORTUNITIES · DUBAI
                        </span>
                    </motion.div>

                    <motion.h1 variants={item} className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 text-white">
                        AI Engineer
                    </motion.h1>

                    <motion.div variants={item} className="h-12 md:h-16 mb-8 flex items-center justify-center overflow-hidden" aria-live="polite">
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={roles[i]}
                                initial={{ y: 40, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -40, opacity: 0 }}
                                transition={{ duration: 0.45 }}
                                className="text-3xl md:text-5xl font-bold text-gradient"
                            >
                                {roles[i]}
                            </motion.span>
                        </AnimatePresence>
                    </motion.div>

                    <motion.p variants={item} className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                        Hi, I'm <strong className="text-white">Edwin Binu</strong>. I build software that makes AI agents safe to run in the real world:
                        governance platforms, guardrails, human-in-the-loop review and the automation around them. MSc in Artificial Intelligence.
                    </motion.p>

                    <motion.div variants={item} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                        <a href="#ethos" className="px-8 py-4 rounded-full bg-white text-dark font-semibold hover:bg-slate-200 hover:scale-105 transition-all flex items-center gap-2 group">
                            See My Work
                            <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                        </a>
                        <a href="/assets/Edwin-Binu.pdf" download className="px-8 py-4 rounded-full bg-white/10 border border-white/20 text-white font-semibold hover:bg-white/20 hover:scale-105 backdrop-blur-sm transition-all flex items-center gap-2">
                            <FileText className="w-5 h-5" />
                            Download CV
                        </a>
                    </motion.div>

                    <motion.div variants={item} className="flex items-center justify-center gap-6 text-slate-400">
                        {[
                            { href: 'https://github.com/eb4005', icon: <Github className="w-6 h-6" />, label: 'GitHub' },
                            { href: 'https://www.linkedin.com/in/edwin-binu-d11041', icon: <Linkedin className="w-6 h-6" />, label: 'LinkedIn' },
                            { href: 'mailto:edwinbinu07@gmail.com', icon: <Mail className="w-6 h-6" />, label: 'Email' },
                        ].map((s) => (
                            <motion.a
                                key={s.label}
                                href={s.href}
                                aria-label={s.label}
                                target={s.href.startsWith('http') ? '_blank' : undefined}
                                rel="noopener noreferrer"
                                whileHover={{ y: -4, scale: 1.1 }}
                                className="hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
                            >
                                {s.icon}
                            </motion.a>
                        ))}
                    </motion.div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500"
            >
                <span className="text-xs uppercase tracking-widest">Scroll</span>
                <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}>
                    <div className="w-[1px] h-8 bg-gradient-to-b from-slate-500 to-transparent" />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
