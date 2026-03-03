import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            role: "Teaching Assistant (Advanced Network Security)",
            company: "Heriot-Watt University",
            location: "Dubai",
            period: "Jan 2026 - Present",
            achievements: [
                "Supported postgraduate and undergraduate lab sessions across Network Security, Wireless Security, and Penetration Testing.",
                "Supervised controlled ethical hacking labs: DNS cache poisoning, ARP poisoning, MITM, and TCP session hijacking.",
                "Conducted SEED Labs on Ubuntu-based virtual machines and assisted with Docker-based lab troubleshooting.",
                "Created guided walkthroughs and exam-focused lab reviews grounded in real-world threat scenarios."
            ]
        },
        {
            role: "NetSuite Consultant",
            company: "Zenardy",
            location: "Chennai",
            period: "Feb 2023 - Aug 2023",
            achievements: [
                "Developed proof-of-concept ERP solutions aligned with client requirements.",
                "Translated business objectives into technical workflows.",
                "Collaborated with project managers and technical teams for solution delivery.",
                "Ensured cross-functional communication for client satisfaction."
            ]
        }
    ];

    return (
        <section id="experience" className="py-24 bg-black/20">
            <div className="container mx-auto px-6 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Experience</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto" />
                </motion.div>

                <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
                    {experiences.map((exp, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: idx * 0.2 }}
                            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                        >
                            {/* Timeline dot */}
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-dark text-slate-500 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-xl z-10 transition-colors group-hover:border-primary group-hover:text-primary">
                                <Briefcase className="w-4 h-4" />
                            </div>

                            {/* Card */}
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-colors">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
                                    <div>
                                        <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                                        <div className="text-lg text-primary font-medium">{exp.company}</div>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-slate-400 bg-white/5 px-3 py-1 rounded-full whitespace-nowrap w-fit">
                                        <Calendar className="w-3.5 h-3.5" />
                                        {exp.period}
                                    </div>
                                </div>

                                <p className="text-sm text-slate-500 mb-4">{exp.location}</p>

                                <ul className="space-y-2">
                                    {exp.achievements.map((achievement, i) => (
                                        <li key={i} className="text-slate-400 flex items-start gap-3">
                                            <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-secondary mt-2" />
                                            <span className="leading-relaxed text-sm md:text-base">{achievement}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
