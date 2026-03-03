import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, FileText, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            {/* Background glow for footer */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Connect</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-8" />
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                        I'm currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col justify-center space-y-8"
                    >
                        <a href="mailto:edwinbinu07@gmail.com" className="flex items-center gap-4 text-xl text-slate-300 hover:text-white transition-colors group">
                            <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 transition-colors">
                                <Mail className="w-5 h-5" />
                            </div>
                            edwinbinu07@gmail.com
                        </a>

                        <a href="/assets/Edwin-Binu.pdf" download className="flex items-center gap-4 text-xl text-slate-300 hover:text-white transition-colors group">
                            <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-secondary group-hover:bg-secondary/10 transition-colors">
                                <FileText className="w-5 h-5" />
                            </div>
                            Download CV
                        </a>

                        <div className="flex items-center gap-4 pt-4">
                            <a href="https://github.com/eb4005" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white hover:text-dark transition-colors">
                                <Github className="w-5 h-5" />
                            </a>
                            <a href="https://www.linkedin.com/in/edwin-binu-9b6151192" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#0A66C2] hover:border-[#0A66C2] transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </motion.div>

                    {/* Formspree Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <form action="https://formspree.io/f/mldbvodk" method="POST" className="space-y-6 form-group">
                            <div className="relative">
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Your Name"
                                    required
                                    className="w-full bg-white/5 border-b border-white/20 px-4 py-3 text-white placeholder-transparent focus:outline-none focus:border-primary peer transition-colors"
                                />
                                <label htmlFor="name" className="absolute left-4 -top-3.5 text-sm text-primary transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-primary">
                                    Your Name
                                </label>
                            </div>

                            <div className="relative">
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Your Email"
                                    required
                                    className="w-full bg-white/5 border-b border-white/20 px-4 py-3 text-white placeholder-transparent focus:outline-none focus:border-primary peer transition-colors"
                                />
                                <label htmlFor="email" className="absolute left-4 -top-3.5 text-sm text-primary transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-primary">
                                    Your Email
                                </label>
                            </div>

                            <div className="relative">
                                <textarea
                                    name="message"
                                    id="message"
                                    rows={4}
                                    placeholder="Your Message"
                                    required
                                    className="w-full bg-white/5 border-b border-white/20 px-4 py-3 text-white placeholder-transparent focus:outline-none focus:border-primary peer transition-colors resize-none"
                                ></textarea>
                                <label htmlFor="message" className="absolute left-4 -top-3.5 text-sm text-primary transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-primary">
                                    Your Message
                                </label>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                            >
                                Send Message
                                <Send className="w-5 h-5" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>

            {/* Footer */}
            <div className="border-t border-white/10 mt-24 py-8 text-center text-slate-500 text-sm">
                <p>© {new Date().getFullYear()} Edwin Binu. All rights reserved.</p>
            </div>
        </section>
    );
};

export default Contact;
