import { useEffect, useRef } from 'react';
import { animate, motion, useInView } from 'framer-motion';
import { Bot, Gauge, ShieldCheck, UserCheck, ScrollText, ArrowRight, Building2, Layers } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { slideLeft, slideRight, slideUp, stagger, pop, inView } from './motion';

const flow = [
    { icon: <Bot className="w-6 h-6" />, title: 'Agent asks', text: '"May I do this now?" sent to the Ethos decision API' },
    { icon: <ShieldCheck className="w-6 h-6" />, title: 'Policy check', text: 'Guard rules + governance facts that Ethos owns, not the caller' },
    { icon: <Gauge className="w-6 h-6" />, title: 'Decision', text: 'Allow, block, escalate or hold the action' },
    { icon: <UserCheck className="w-6 h-6" />, title: 'Human review', text: 'Pivots queue: a reviewer approves or rejects with evidence' },
    { icon: <ScrollText className="w-6 h-6" />, title: 'Evidence', text: 'Snapshot, reviewer and timestamp kept in the audit trail' },
];

const stats = [
    { value: 7, suffix: '', label: 'agent-type risk profiles designed' },
    { value: 111, suffix: '', label: 'rule ground-truth set for guardrail coverage' },
    { value: 0.85, suffix: '', label: 'F1 for PHI/PII detection (Presidio + GLiNER)', decimals: 2 },
    { value: 70, suffix: '+', label: 'team members using my workflow tooling' },
];

const Counter = ({ value, decimals = 0, suffix }: { value: number; decimals?: number; suffix: string }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const seen = useInView(ref, { once: true });
    useEffect(() => {
        if (!seen || !ref.current) return;
        const controls = animate(0, value, {
            duration: 1.6,
            ease: 'easeOut',
            onUpdate: (v) => {
                if (ref.current) ref.current.textContent = v.toFixed(decimals) + suffix;
            },
        });
        return () => controls.stop();
    }, [seen, value, decimals, suffix]);
    return <span ref={ref}>{(0).toFixed(decimals)}{suffix}</span>;
};

const Ethos = () => (
    <section id="ethos" className="py-24 relative overflow-hidden">
        <div className="absolute -right-40 top-20 w-[32rem] h-[32rem] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
            <SectionHeading eyebrow="Featured work · ioHealth" title="Ethos: AI Governance Platform" />

            <div className="grid lg:grid-cols-2 gap-12 mb-20 items-start">
                <motion.div variants={slideLeft} initial="hidden" whileInView="visible" viewport={inView} className="text-lg text-slate-400 leading-relaxed space-y-5">
                    <p>
                        Organisations now run AI agents across many workflows, but a list of agents doesn't say whether an action is allowed, a policy
                        document doesn't prove a rule was checked, and an approval without its evidence is hard to explain later.
                    </p>
                    <p>
                        <span className="text-white font-semibold">Ethos</span> connects those pieces in one workspace: agent registration, runtime policy
                        decisions, Responsible AI evaluations, human-in-the-loop review and audit evidence. I lead its development, and took it from a
                        frontend prototype to a full-stack application.
                    </p>
                </motion.div>

                <motion.div variants={slideRight} initial="hidden" whileInView="visible" viewport={inView} className="p-6 rounded-2xl bg-white/5 border border-white/10">
                    <div className="flex items-center gap-3 mb-4">
                        <Building2 className="w-5 h-5 text-secondary" />
                        <h3 className="text-xl font-semibold text-white">What I'm building now</h3>
                    </div>
                    <p className="text-slate-400 mb-4">
                        Making Pivots, the human-review workflow, <span className="text-white">organisation-aware</span>: each customer sees only its own
                        review queue and history, with object-level authorisation, a platform super-admin view, and controlled tenant onboarding.
                    </p>
                    <div className="flex items-center gap-3 mb-3">
                        <Layers className="w-5 h-5 text-primary" />
                        <h3 className="text-lg font-semibold text-white">Stack</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {['React', 'Java 21', 'Spring Boot', 'MySQL', 'Flyway', 'Keycloak / JWT', 'n8n', 'REST & GraphQL', 'Docker', 'GitHub Actions'].map((t) => (
                            <span key={t} className="text-xs font-medium px-2.5 py-1 rounded bg-white/5 text-slate-300 border border-white/10">{t}</span>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Animated decision flow */}
            <motion.h3 variants={slideUp} initial="hidden" whileInView="visible" viewport={inView} className="text-2xl font-semibold text-white mb-8">
                How a risky agent action flows through Ethos
            </motion.h3>
            <motion.div
                variants={stagger(0.1, 0.18)}
                initial="hidden"
                whileInView="visible"
                viewport={inView}
                className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-20"
            >
                {flow.map((s, idx) => (
                    <motion.div key={s.title} variants={slideLeft} className="relative">
                        <div className="h-full p-5 rounded-2xl bg-gradient-to-br from-white/[0.07] to-white/[0.02] border border-white/10 hover:border-primary/60 transition-colors">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 rounded-xl bg-primary/15 text-primary flex items-center justify-center">{s.icon}</div>
                                <span className="text-xs text-slate-500 font-mono">0{idx + 1}</span>
                            </div>
                            <h4 className="text-white font-semibold mb-1">{s.title}</h4>
                            <p className="text-sm text-slate-400 leading-relaxed">{s.text}</p>
                        </div>
                        {idx < flow.length - 1 && (
                            <motion.div
                                animate={{ x: [0, 6, 0] }}
                                transition={{ repeat: Infinity, duration: 1.6, delay: idx * 0.2 }}
                                className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 text-secondary"
                            >
                                <ArrowRight className="w-5 h-5" />
                            </motion.div>
                        )}
                    </motion.div>
                ))}
            </motion.div>

            {/* Stats */}
            <motion.div
                variants={stagger(0.05, 0.12)}
                initial="hidden"
                whileInView="visible"
                viewport={inView}
                className="grid grid-cols-2 lg:grid-cols-4 gap-6"
            >
                {stats.map((s) => (
                    <motion.div key={s.label} variants={pop} className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
                        <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                            <Counter value={s.value} decimals={s.decimals} suffix={s.suffix} />
                        </div>
                        <p className="text-sm text-slate-400">{s.label}</p>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    </section>
);

export default Ethos;
