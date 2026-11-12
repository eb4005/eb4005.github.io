import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { stagger, inView } from './motion';

type Exp = {
    role: string;
    company: string;
    location: string;
    period: string;
    current?: boolean;
    groups: { title?: string; points: string[] }[];
};

const experiences: Exp[] = [
    {
        role: 'AI Automation & Governance · Ethos Project Lead',
        company: 'ioHealth',
        location: 'Dubai, UAE',
        period: 'Jun 2026 - Present',
        current: true,
        groups: [
            {
                title: 'Ethos AI Governance Platform',
                points: [
                    'Lead end-to-end development of Ethos; evolved it from a frontend prototype into a full-stack app (React, Java 21, Spring Boot, MySQL, Keycloak) and led its rebrand from Comply to Ethos.',
                    'Building multi-tenant, organisation-scoped Pivots (human review) with object-level authorisation, a super-admin view and controlled tenant onboarding.',
                    'Designed 7 agent-type risk profiles (e.g. PHI Handler, Clinical Decision Support) with security checks and KPIs; drove a production-readiness sprint and platform audit.',
                ],
            },
            {
                title: 'Guardrails & Runtime Governance Engine',
                points: [
                    'Built n8n pipelines turning PDF policy documents into structured rules, plus a validation gate returning block / escalate / allow for agent actions; benchmarked against a 111-rule ground truth.',
                ],
            },
            {
                title: 'Responsible AI Evaluation',
                points: [
                    'Benchmarked open-source guardrail tools for a client: F1 0.85 for PHI/PII detection (Presidio + GLiNER) and identified prompt-injection gaps in Arabic and German.',
                ],
            },
            {
                title: 'Workflow Version Control',
                points: [
                    'Built and shipped a Chrome extension + Node.js service that version-controls n8n workflows to GitHub with audit logging and LLM-written PR descriptions, used by ~70 team members.',
                ],
            },
        ],
    },
    {
        role: 'Teaching Assistant (Advanced Network Security & AI Labs)',
        company: 'Heriot-Watt University',
        location: 'Dubai, UAE',
        period: 'Jan 2026 - May 2026',
        groups: [
            {
                points: [
                    'Ran postgraduate and undergraduate labs in network security, wireless security and penetration testing (DNS cache poisoning, ARP poisoning, MITM, TCP session hijacking).',
                    'Supervised SEED Labs on Ubuntu VMs and Docker environments; taught least-privilege access and JWT authentication.',
                ],
            },
        ],
    },
    {
        role: 'Associate Consultant',
        company: 'Zenardy',
        location: 'Chennai, India',
        period: 'Feb 2023 - Aug 2023',
        groups: [
            {
                points: [
                    'Translated client business workflows into automated NetSuite ERP and backend solutions; ran design workshops and proof-of-concept sessions.',
                    'Built Python ETL pipelines and workflow automations that improved data consistency and cut manual work.',
                ],
            },
        ],
    },
];

const Experience = () => (
    <section id="experience" className="py-24 bg-black/20">
        <div className="container mx-auto px-6 max-w-5xl">
            <SectionHeading eyebrow="Where I've worked" title="Experience" center />

            <div className="relative">
                {/* Timeline line that draws itself */}
                <motion.div
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 1.4, ease: 'easeOut' }}
                    className="absolute left-5 md:left-1/2 top-0 h-full w-0.5 -translate-x-px bg-gradient-to-b from-primary via-secondary/60 to-transparent origin-top"
                />

                <div className="space-y-14">
                    {experiences.map((exp, idx) => {
                        const fromLeft = idx % 2 === 0;
                        return (
                            <div key={exp.company} className={`relative flex md:items-start ${fromLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                                {/* Dot */}
                                <motion.div
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ type: 'spring', stiffness: 200, damping: 12, delay: 0.2 }}
                                    className={`absolute left-5 md:left-1/2 -translate-x-1/2 top-6 w-10 h-10 rounded-full border flex items-center justify-center bg-dark z-10 ${exp.current ? 'border-primary text-primary shadow-[0_0_20px_rgba(59,130,246,0.5)]' : 'border-white/20 text-slate-500'}`}
                                >
                                    <Briefcase className="w-4 h-4" />
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, x: fromLeft ? -80 : 80 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: '-80px' }}
                                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                                    className={`ml-14 md:ml-0 w-full md:w-[calc(50%-3rem)] p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-colors ${exp.current ? 'ring-1 ring-primary/30' : ''}`}
                                >
                                    <div className="flex flex-wrap items-center gap-2 mb-2">
                                        {exp.current && <span className="text-[10px] font-semibold tracking-widest uppercase px-2 py-0.5 rounded bg-primary/20 text-primary">Current</span>}
                                        <span className="flex items-center gap-1.5 text-xs text-slate-400 bg-white/5 px-2.5 py-1 rounded-full"><Calendar className="w-3 h-3" />{exp.period}</span>
                                        <span className="flex items-center gap-1.5 text-xs text-slate-500"><MapPin className="w-3 h-3" />{exp.location}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-white leading-snug">{exp.role}</h3>
                                    <div className="text-lg text-primary font-medium mb-4">{exp.company}</div>

                                    <motion.div variants={stagger(0.2, 0.08)} initial="hidden" whileInView="visible" viewport={inView} className="space-y-4">
                                        {exp.groups.map((g, gi) => (
                                            <div key={gi}>
                                                {g.title && <p className="text-sm font-semibold text-secondary mb-2">{g.title}</p>}
                                                <ul className="space-y-2">
                                                    {g.points.map((p) => (
                                                        <motion.li
                                                            key={p}
                                                            variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0 } }}
                                                            className="text-slate-400 flex items-start gap-3"
                                                        >
                                                            <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-secondary mt-2" />
                                                            <span className="leading-relaxed text-sm md:text-[15px]">{p}</span>
                                                        </motion.li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </motion.div>
                                </motion.div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    </section>
);

export default Experience;
