import { motion } from 'framer-motion';
import { Github } from 'lucide-react';
import SectionHeading from './SectionHeading';

const Projects = () => {
    const projects = [
        {
            title: "MediAssist AI - Medical RAG Chatbot",
            period: "2025",
            description: "Medical assistant that reads uploaded patient PDFs (blood tests, pathology reports) with a LangChain RAG pipeline, Groq-hosted Llama 3 / Mixtral, BGE embeddings and FAISS, plus three chat modes and a web-search fallback.",
            tags: ["LangChain", "RAG", "Groq", "FAISS"],
            image: null,
            placeholder: "MA",
            github: "https://github.com/eb4005/AI-Medical-ChatBot"
        },
        {
            title: "AI Multi-Agent Finance Assistant",
            period: "Mar - May 2025",
            description: "Modular multi-agent finance assistant using FastAPI microservices. Implemented RAG with Hugging Face FLAN models for dynamic market briefings.",
            tags: ["FastAPI", "Hugging Face", "RAG", "Docker", "STT/TTS"],
            image: null,
            placeholder: "FA",
            github: "https://github.com/eb4005/AI-Finance-Assistance"
        },
        {
            title: "Parkinson's Disease Detection",
            period: "June 2025",
            description: "Hybrid CNN-Transformer model for Parkinson's detection from vocal features. Extracting jitter, shimmer, and MFCCs for sequential classification.",
            tags: ["PyTorch", "CNN-Transformer", "Flask"],
            image: null,
            placeholder: "PD",
            github: "https://github.com/eb4005/Parkinsons-Disease-detection-"
        },
        {
            title: "Hospital Management System",
            period: "Jan - Apr 2025",
            description: "Hospital management backend APIs using Node.js and MongoDB. Integrated Docker and automated CI/CD via GitHub Actions.",
            tags: ["Node.js", "MongoDB", "Kubernetes", "DevOps"],
            image: null,
            placeholder: "HM",
            github: "https://github.com/F21AO-Group5/Devops-Group5"
        },
        {
            title: "Quant-AI",
            period: "2024",
            description: "Quantitative Artificial Intelligence project exploring advanced financial modeling and algorithmic strategies.",
            tags: ["AI", "Finance", "Quantitative"],
            image: null,
            placeholder: "QA",
            github: "https://github.com/eb4005/Quant-AI"
        },
        {
            title: "AI Resume Scanner",
            period: "2025",
            description: "Full-stack LLM hiring tool deployed on Render: batch-analyses up to 10 resumes against a job description, returning match scores, hire/reject recommendations and skills gaps as structured JSON.",
            tags: ["React 19", "TypeScript", "Express", "Groq LLM"],
            image: null,
            placeholder: "RS",
            github: "https://github.com/eb4005/AI-Resume-Scanner-"
        },
        {
            title: "Neural Network Optimization (PSO)",
            period: "Sep - Dec 2024",
            description: "Developed ANN optimized using Particle Swarm Optimization to minimize mean square error for parameter search problems.",
            tags: ["Python", "ANN", "PSO", "Machine Learning"],
            image: null,
            placeholder: "NN",
            github: "https://github.com/Abhkrishnan/MachineLearningGroup12"
        },
        {
            title: "Trash Image Detection",
            period: "2023",
            description: "Autoencoder-based image classification using PyTorch. Published in International Conference on Computing, Communication and Security.",
            tags: ["PyTorch", "Autoencoders", "Vision"],
            image: null,
            placeholder: "TD",
            github: "https://github.com/eb4005/portfolio"
        },
        {
            title: "Smart Bookmark App",
            period: "2023",
            description: "A smart application for organizing, tagging, and retrieving bookmarks efficiently across devices.",
            tags: ["Web", "App", "Productivity"],
            image: null,
            placeholder: "SB",
            github: "https://github.com/eb4005/Smart-Bookmark-App"
        }
    ];

    return (
        <section id="projects" className="py-24 relative">
            <div className="absolute top-1/2 left-0 w-full h-1/2 bg-gradient-to-b from-transparent to-primary/5 pointer-events-none" />
            <div className="container mx-auto px-6 relative z-10">
                <SectionHeading eyebrow="Things I've built" title="Featured Projects" />

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: idx % 2 === 0 ? -60 : 60, y: 30 }}
                            whileInView={{ opacity: 1, x: 0, y: 0 }}
                            whileHover={{ y: -8, rotate: idx % 2 === 0 ? -0.6 : 0.6 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: (idx % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
                            className="group relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:border-primary/50 hover:shadow-[0_10px_40px_-10px_rgba(139,92,246,0.4)] flex flex-col h-full cursor-pointer"
                            role="link"
                            tabIndex={0}
                            aria-label={`${project.title} on GitHub`}
                            onClick={() => project.github && window.open(project.github, '_blank')}
                            onKeyDown={(e) => { if (e.key === 'Enter' && project.github) window.open(project.github, '_blank'); }}
                        >
                            {/* Image or Gradient Placeholder */}
                            <div className="h-40 overflow-hidden relative">
                                {project.image ? (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center transition-transform duration-700 group-hover:scale-110">
                                        <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-white/50 bg-black/20 shadow-lg">
                                            <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">{project.placeholder || 'AI'}</span>
                                        </div>
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                    {project.github && (
                                        <div className="p-3 bg-white text-dark rounded-full hover:scale-110 transition-transform">
                                            <Github className="w-5 h-5" />
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-5 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors mb-2 leading-snug">{project.title}</h3>
                                <p className="text-xs text-primary mb-3 font-medium uppercase tracking-wider">{project.period}</p>

                                <p className="text-slate-400 mb-6 flex-grow text-sm leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-1.5 mt-auto">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-[10px] font-medium px-2 py-1 rounded bg-white/5 text-slate-300 border border-white/10 uppercase tracking-wider">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
