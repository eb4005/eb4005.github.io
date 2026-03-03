import { motion, type Variants } from 'framer-motion';
import { ArrowDown, Mail, Github, Linkedin, FileText } from 'lucide-react';

const Hero = () => {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: 'spring', stiffness: 100, damping: 10 },
        },
    };

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            {/* Background Glow Effects */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute top-1/3 right-1/4 translate-x-1/2 w-[30rem] h-[30rem] bg-secondary/20 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="max-w-4xl mx-auto text-center"
                >
                    <motion.div variants={itemVariants} className="mb-4 inline-block">
                        <span className="px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm font-medium tracking-wider text-slate-300">
                            OPEN TO NEW OPPORTUNITIES
                        </span>
                    </motion.div>

                    <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8">
                        Building Intelligent <br className="hidden md:block" />
                        <span className="text-gradient">Systems & Solutions</span>
                    </motion.h1>

                    <motion.p variants={itemVariants} className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                        Hi, I'm <strong className="text-white">Edwin Binu</strong>. An AI Engineer & Full Stack Developer specializing in Machine Learning, Deep Learning, RAG, and LLM Fine-tuning. Beyond standard web development, I architect intelligent systems that bridge cutting-edge AI models with scalable applications.
                    </motion.p>

                    <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                        <a href="#projects" className="px-8 py-4 rounded-full bg-white text-dark font-semibold hover:bg-slate-200 transition-colors flex items-center gap-2 group">
                            View My Work
                            <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                        </a>
                        <a href="/assets/Edwin-Binu.pdf" download className="px-8 py-4 rounded-full bg-white/10 border border-white/20 text-white font-semibold hover:bg-white/20 backdrop-blur-sm transition-colors flex items-center gap-2">
                            <FileText className="w-5 h-5" />
                            Download CV
                        </a>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div variants={itemVariants} className="flex items-center justify-center gap-6 text-slate-400">
                        <a href="https://github.com/eb4005" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full">
                            <Github className="w-6 h-6" />
                        </a>
                        <a href="https://www.linkedin.com/in/edwin-binu-9b6151192" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full">
                            <Linkedin className="w-6 h-6" />
                        </a>
                        <a href="mailto:edwinbinu07@gmail.com" className="hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full">
                            <Mail className="w-6 h-6" />
                        </a>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500"
            >
                <span className="text-xs uppercase tracking-widest">Scroll</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                >
                    <div className="w-[1px] h-8 bg-gradient-to-b from-slate-500 to-transparent" />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
