import { useState } from 'react';
import { AnimatePresence, MotionConfig, motion, useScroll, useSpring } from 'framer-motion';
import { Menu, X } from 'lucide-react';

import Hero from './components/Hero';
import About from './components/About';
import Ethos from './components/Ethos';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#ethos', label: 'Ethos' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

function App() {
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    // reducedMotion="user" turns transforms off for visitors who prefer reduced motion
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-screen bg-dark text-slate-200 font-sans selection:bg-primary/30 selection:text-white overflow-x-hidden">
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary origin-left z-50 pointer-events-none"
          style={{ scaleX }}
        />

        <motion.nav
          initial={{ y: -80 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="fixed top-0 left-0 right-0 z-40 bg-dark/80 backdrop-blur-md border-b border-white/10"
        >
          <div className="container mx-auto px-6 h-16 flex items-center justify-between">
            <a href="#home" className="text-xl font-bold tracking-tight text-white group">
              Edwin<span className="text-primary group-hover:text-secondary transition-colors">Binu</span>
            </a>
            <div className="hidden md:flex items-center gap-8 text-sm font-medium">
              {links.map((l) => (
                <a key={l.href} href={l.href} className="relative hover:text-white transition-colors after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full">
                  {l.label}
                </a>
              ))}
              <a href="/assets/Edwin-Binu.pdf" download className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white border border-white/10">
                CV
              </a>
            </div>
            <button
              className="md:hidden p-2 text-white"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              onClick={() => setOpen(!open)}
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden overflow-hidden border-t border-white/10 bg-dark/95"
              >
                <div className="flex flex-col px-6 py-4 gap-4">
                  {links.map((l, i) => (
                    <motion.a
                      key={l.href}
                      href={l.href}
                      onClick={() => setOpen(false)}
                      initial={{ x: -30, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: i * 0.05 }}
                      className="text-lg text-slate-300 hover:text-white"
                    >
                      {l.label}
                    </motion.a>
                  ))}
                  <a href="/assets/Edwin-Binu.pdf" download className="text-lg text-primary">Download CV</a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>

        <main>
          <Hero />
          <About />
          <Ethos />
          <Experience />
          <Projects />
          <Contact />
        </main>
      </div>
    </MotionConfig>
  );
}

export default App;
