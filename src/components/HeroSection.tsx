import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Briefcase, ChevronDown, Mail } from 'lucide-react';

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

const typingTexts = [
  'Full Stack Developer',
  'Campus Connect Lead',
  'Digital Communications Lead',
  'Cloud Enthusiast',
  'AI Explorer',
];

export default function HeroSection() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = typingTexts[currentTextIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText === currentFullText) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setCurrentTextIndex((prev) => (prev + 1) % typingTexts.length);
    } else {
      timeout = setTimeout(
        () => {
          setDisplayText(
            isDeleting
              ? currentFullText.substring(0, displayText.length - 1)
              : currentFullText.substring(0, displayText.length + 1)
          );
        },
        isDeleting ? 50 : 100
      );
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentTextIndex]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Banner Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-cyber-darker/40 via-cyber-darker/70 to-cyber-darker z-10" />
        <img
          src="/images/banner.jpg"
          alt="Banner"
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid z-0 opacity-30" />

      {/* Scan line effect */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div
          className="w-full h-1 bg-gradient-to-r from-transparent via-cyber-purple/20 to-transparent"
          style={{ animation: 'scan-line 8s linear infinite' }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        {/* Profile Image */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: 'spring' }}
          className="mb-8"
        >
          <div className="relative inline-block">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyber-purple via-cyber-cyan to-cyber-pink rounded-full animate-glow opacity-75 blur-sm" />
            <img
              src="https://github.com/bkbnc-atharvjadhav.png"
              alt="Atharv Jadhav"
              className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full border-2 border-cyber-purple/50 object-cover"
            />
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-cyber-green rounded-full border-4 border-cyber-darker flex items-center justify-center">
              <div className="w-3 h-3 bg-cyber-green rounded-full animate-pulse" />
            </div>
          </div>
        </motion.div>

        {/* Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <p className="font-mono text-cyber-cyan text-sm sm:text-base mb-2">
            <span className="text-cyber-muted">{'// '}</span>Hey there! 👋 Welcome to my digital space
          </p>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-display font-bold mb-4 tracking-tight"
        >
          <span className="text-white">I'm </span>
          <span className="gradient-text">Atharv Jadhav</span>
        </motion.h1>

        {/* Typing Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mb-6"
        >
          <span className="font-mono text-lg sm:text-2xl text-cyber-muted">
            {'> '}
            <span className="text-cyber-cyan">{displayText}</span>
            <span className="text-cyber-cyan animate-pulse">|</span>
          </span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-cyber-muted text-base sm:text-lg max-w-2xl mx-auto mb-6 leading-relaxed"
        >
          Building digital solutions for education, communities and student engagement.
        </motion.p>

        {/* Location & Role Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-8"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cyber-card border border-cyber-border text-xs font-mono text-cyber-muted">
            <MapPin className="w-3 h-3 text-cyber-pink" /> Kalyan, Maharashtra, India
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cyber-card border border-cyber-border text-xs font-mono text-cyber-muted">
            <Briefcase className="w-3 h-3 text-cyber-cyan" /> He/Him
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cyber-card border border-green-500/30 text-xs font-mono text-cyber-green">
            <div className="w-2 h-2 bg-cyber-green rounded-full animate-pulse" /> Open to Work
          </span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-8"
        >
          <a
            href="#projects"
            className="group px-6 py-3 bg-gradient-to-r from-cyber-purple to-cyber-dark-purple text-white font-mono text-sm rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all flex items-center gap-2"
          >
            <span>🚀</span> View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-cyber-cyan/50 text-cyber-cyan font-mono text-sm rounded-lg hover:bg-cyber-cyan/10 hover:border-cyber-cyan transition-all flex items-center gap-2"
          >
            <Mail className="w-4 h-4" /> Contact Me
          </a>
          <a
            href="https://github.com/bkbnc-atharvjadhav"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-cyber-border text-cyber-muted font-mono text-sm rounded-lg hover:bg-cyber-card hover:border-cyber-purple/50 transition-all flex items-center gap-2"
          >
            <GithubIcon className="w-4 h-4" /> GitHub
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="flex items-center justify-center gap-4"
        >
          <a href="https://github.com/bkbnc-atharvjadhav" target="_blank" rel="noopener noreferrer" className="p-2 text-cyber-muted hover:text-white transition-colors">
            <GithubIcon className="w-5 h-5" />
          </a>
          <a href="mailto:atharv@bkbirlanightcollege.qzz.io" className="p-2 text-cyber-muted hover:text-cyber-cyan transition-colors">
            <Mail className="w-5 h-5" />
          </a>
          <a href="https://instagram.com/atharva_jadhav_vs" target="_blank" rel="noopener noreferrer" className="p-2 text-cyber-muted hover:text-cyber-pink transition-colors">
            <InstagramIcon className="w-5 h-5" />
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 z-10"
      >
        <a href="#about" className="flex flex-col items-center gap-2 text-cyber-muted hover:text-cyber-cyan transition-colors">
          <span className="text-xs font-mono">Scroll Down</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
}
