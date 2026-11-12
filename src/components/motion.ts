import type { Variants } from 'framer-motion';

// Shared slide / fade variants so every section animates consistently.
export const slideUp: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export const slideLeft: Variants = {
    hidden: { opacity: 0, x: -80 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export const slideRight: Variants = {
    hidden: { opacity: 0, x: 80 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export const stagger = (delayChildren = 0.1, staggerChildren = 0.08): Variants => ({
    hidden: {},
    visible: { transition: { delayChildren, staggerChildren } },
});

export const pop: Variants = {
    hidden: { opacity: 0, scale: 0.85, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 160, damping: 16 } },
};

export const inView = { once: true, margin: '-80px' } as const;
