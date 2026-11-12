import { motion } from 'framer-motion';
import { ShieldCheck, Bot, Workflow, Server, Database, Cloud } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { slideLeft, slideRight, stagger, pop, inView } from './motion';

const skills = [
    {
        category: 'AI Governance & Safety',
        icon: <ShieldCheck className="w-6 h-6 text-primary" />,
        items: ['Responsible AI', 'Human-in-the-Loop', 'AI Guardrails', 'Policy / Rule Engines', 'PHI/PII Detection', 'Prompt Injection Testing', 'Presidio', 'GLiNER'],
    },
    {
        category: 'LLMs & Agents',
        icon: <Bot className="w-6 h-6 text-secondary" />,
        items: ['LLMs', 'RAG', 'LangChain', 'LangGraph', 'CrewAI', 'Claude / OpenAI APIs', 'Hugging Face', 'FAISS', 'Prompt Engineering'],
    },
    {
        category: 'Workflow Automation',
        icon: <Workflow className="w-6 h-6 text-primary" />,
        items: ['n8n', 'Webhooks', 'GitHub API & Apps', 'Chrome Extensions (MV3)', 'Evaluation Harnesses', 'LLM-as-a-Judge'],
    },
    {
        category: 'Backend & Frontend',
        icon: <Server className="w-6 h-6 text-secondary" />,
        items: ['Java 21', 'Spring Boot', 'Python', 'FastAPI', 'Node.js', 'React', 'TypeScript', 'Tailwind CSS'],
    },
    {
        category: 'Data & Security',
        icon: <Database className="w-6 h-6 text-primary" />,
        items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Flyway', 'Keycloak', 'JWT', 'RBAC', 'Multi-Tenancy'],
    },
    {
        category: 'DevOps & Testing',
        icon: <Cloud className="w-6 h-6 text-secondary" />,
        items: ['Docker', 'Kubernetes', 'GitHub Actions', 'CI/CD', 'Testcontainers', 'Playwright', 'Postman', 'Jira'],
    },
];

const marquee = ['Spring Boot', 'React', 'LangChain', 'n8n', 'Keycloak', 'MySQL', 'PostgreSQL', 'FastAPI', 'Docker', 'Presidio', 'FAISS', 'Claude', 'OpenAI', 'Hugging Face', 'GitHub Actions'];

const About = () => (
    <section id="about" className="py-24 relative">
        <div className="container mx-auto px-6">
            <SectionHeading eyebrow="Who I am" title="About Me" />

            <div className="grid md:grid-cols-2 gap-12 text-slate-400 leading-relaxed text-lg mb-16">
                <motion.p variants={slideLeft} initial="hidden" whileInView="visible" viewport={inView}>
                    I'm an AI Engineer based in Dubai who builds the layer that makes AI agents trustworthy. At ioHealth I lead development of
                    <span className="text-white"> Ethos</span>, an enterprise AI governance platform for healthcare AI agents: it decides what an agent
                    may do, brings in a human when it matters, and keeps the evidence of every decision.
                </motion.p>
                <motion.p variants={slideRight} initial="hidden" whileInView="visible" viewport={inView}>
                    I work across the stack, from Java/Spring Boot and React to Python, LangChain and n8n, and I enjoy turning governance and
                    compliance requirements into working software. I hold an MSc in Artificial Intelligence from Heriot-Watt University Dubai and a BE
                    in Computer Science from Anna University.
                </motion.p>
            </div>

            {/* Sliding tech marquee */}
            <div className="relative overflow-hidden py-4 mb-16 border-y border-white/10 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                <motion.div
                    className="flex gap-10 w-max"
                    animate={{ x: ['0%', '-50%'] }}
                    transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                >
                    {[...marquee, ...marquee].map((t, idx) => (
                        <span key={idx} className="text-lg font-semibold text-slate-500 whitespace-nowrap">{t}</span>
                    ))}
                </motion.div>
            </div>

            <motion.div
                variants={stagger(0.05, 0.1)}
                initial="hidden"
                whileInView="visible"
                viewport={inView}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                {skills.map((group) => (
                    <motion.div
                        key={group.category}
                        variants={pop}
                        whileHover={{ y: -6 }}
                        className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-colors group"
                    >
                        <div className="p-3 w-fit rounded-xl bg-white/5 mb-5 group-hover:scale-110 group-hover:rotate-3 transition-transform">{group.icon}</div>
                        <h3 className="text-xl font-semibold mb-4 text-white">{group.category}</h3>
                        <motion.div variants={stagger(0.2, 0.04)} className="flex flex-wrap gap-2">
                            {group.items.map((s) => (
                                <motion.span key={s} variants={pop} className="px-3 py-1 text-sm rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                                    {s}
                                </motion.span>
                            ))}
                        </motion.div>
                    </motion.div>
                ))}
            </motion.div>

            <div className="mt-20 grid md:grid-cols-2 gap-12">
                <motion.div variants={slideLeft} initial="hidden" whileInView="visible" viewport={inView}>
                    <h3 className="text-2xl font-semibold mb-6 text-white">Education</h3>
                    <div className="space-y-6">
                        <div className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10">
                            <h4 className="text-xl text-primary font-medium mb-1">MSc in Artificial Intelligence</h4>
                            <p className="text-white mb-2">Heriot-Watt University • Dubai, UAE</p>
                            <p className="text-sm text-slate-500">Graduated Sept 2025</p>
                        </div>
                        <div className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10">
                            <h4 className="text-xl text-secondary font-medium mb-1">BE in Computer Science</h4>
                            <p className="text-white mb-2">Anna University • Chennai, India</p>
                            <p className="text-sm text-slate-500">Graduated July 2023 • GPA: 8.5/10</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div variants={slideRight} initial="hidden" whileInView="visible" viewport={inView}>
                    <h3 className="text-2xl font-semibold mb-6 text-white">Certifications, Publication & Languages</h3>
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 mb-6">
                        <ul className="space-y-3 text-slate-400">
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" />IBM Certified: Machine Learning with Python</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-secondary" />In progress: Anthropic Claude certification, DeepLearning.AI Agentic AI</li>
                            <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5" />Publication: "Trash Image Detection Using Autoencoder", ICCCS 2023</li>
                        </ul>
                    </div>
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                        <div className="flex flex-wrap gap-2 text-slate-400">
                            {['English', 'Malayalam', 'Tamil', 'Hindi', 'Arabic'].map((l) => (
                                <span key={l} className="px-3 py-1 bg-white/5 rounded-md">{l}</span>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    </section>
);

export default About;
