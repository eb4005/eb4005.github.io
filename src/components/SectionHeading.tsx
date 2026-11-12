import { motion } from 'framer-motion';
import { slideUp, inView } from './motion';

const SectionHeading = ({ eyebrow, title, center = false }: { eyebrow: string; title: string; center?: boolean }) => (
    <motion.div
        variants={slideUp}
        initial="hidden"
        whileInView="visible"
        viewport={inView}
        className={`mb-16 ${center ? 'text-center' : ''}`}
    >
        <p className="text-sm font-semibold tracking-[0.25em] uppercase text-primary mb-3">{eyebrow}</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">{title}</h2>
        <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={inView}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className={`w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full origin-left ${center ? 'mx-auto origin-center' : ''}`}
        />
    </motion.div>
);

export default SectionHeading;
