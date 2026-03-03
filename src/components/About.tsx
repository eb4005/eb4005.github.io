import { motion } from 'framer-motion';
import { Network, Server, Code2, Database } from 'lucide-react';

const About = () => {
    const skills = [
        {
            category: "AI & Machine Learning",
            icon: <Network className="w-6 h-6 text-primary" />,
            items: ["PyTorch", "TensorFlow", "Hugging Face", "RAG", "LLMs", "FAISS", "Prompt Engineering"],
        },
        {
            category: "Backend & DevOps",
            icon: <Server className="w-6 h-6 text-secondary" />,
            items: ["Docker", "Kubernetes", "GitHub Actions", "FastAPI", "Node.js", "Jira", "Postman", "Chai & Mocha"],
        },
        {
            category: "Programming & Web",
            icon: <Code2 className="w-6 h-6 text-primary" />,
            items: ["Python", "JavaScript", "C", "C++", "React.js", "Next.js", "HTML", "CSS"],
        },
        {
            category: "Databases & Tools",
            icon: <Database className="w-6 h-6 text-secondary" />,
            items: ["MongoDB", "SQL", "Oracle NetSuite", "Git", "Workflow Automation"],
        },
    ];

    return (
        <section id="about" className="py-24 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-8" />
                    <div className="grid md:grid-cols-2 gap-12 text-slate-400 leading-relaxed text-lg">
                        <p>
                            I am an AI Engineer and Full Stack Developer passionate about bridging the gap between cutting-edge AI and robust scalable backend systems. Having completed my MSc in Artificial Intelligence at Heriot-Watt University in Dubai, my expertise goes far beyond traditional full-stack development. I specialize in Machine Learning, Deep Learning, RAG, and LLM fine-tuning.
                        </p>
                        <p>
                            With strong foundations from Anna University (BE in Computer Science) and practical experience as an ERP Consultant and Teaching Assistant, I excel at developing intelligent architectures, building multi-agent systems, optimizing neural networks, and deploying state-of-the-art models through efficient CI/CD pipelines.
                        </p>
                    </div>
                </motion.div>

                {/* Skills Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skills.map((skillGroup, idx) => (
                        <motion.div
                            key={skillGroup.category}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-colors group"
                        >
                            <div className="p-3 w-fit rounded-xl bg-white/5 mb-6 group-hover:scale-110 transition-transform">
                                {skillGroup.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-4 text-white">{skillGroup.category}</h3>
                            <div className="flex flex-wrap gap-2">
                                {skillGroup.items.map((item) => (
                                    <span
                                        key={item}
                                        className="px-3 py-1 text-sm rounded-full bg-slate-800 text-slate-300 border border-slate-700"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Education & Certs */}
                <div className="mt-20 grid md:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-2xl font-semibold mb-6">Education</h3>
                        <div className="space-y-6">
                            <div className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10">
                                <h4 className="text-xl text-primary font-medium mb-1">MSc in Artificial Intelligence</h4>
                                <p className="text-white mb-2">Heriot-Watt University • Dubai, UAE</p>
                                <p className="text-sm text-slate-500">Graduated</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10">
                                <h4 className="text-xl text-secondary font-medium mb-1">BE in Computer Science</h4>
                                <p className="text-white mb-2">Anna University • Chennai, India</p>
                                <p className="text-sm text-slate-500">Graduated July 2023 • GPA: 8.5/10</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-2xl font-semibold mb-6">Certifications & Languages</h3>
                        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 mb-6">
                            <h4 className="text-lg text-white mb-4 border-b border-white/10 pb-2">Certifications</h4>
                            <ul className="space-y-3 text-slate-400">
                                <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                    IBM Certified: Machine Learning with Python
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                                    Inside LVMH Business Certification
                                </li>
                            </ul>
                        </div>

                        <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                            <h4 className="text-lg text-white mb-4 border-b border-white/10 pb-2">Languages</h4>
                            <div className="flex flex-wrap gap-2 text-slate-400">
                                <span className="px-3 py-1 bg-white/5 rounded-md">English</span>
                                <span className="px-3 py-1 bg-white/5 rounded-md">Arabic</span>
                                <span className="px-3 py-1 bg-white/5 rounded-md">Hindi</span>
                                <span className="px-3 py-1 bg-white/5 rounded-md">Malayalam</span>
                                <span className="px-3 py-1 bg-white/5 rounded-md">Tamil</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
