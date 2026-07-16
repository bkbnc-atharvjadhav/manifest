import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal } from 'lucide-react';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#achievements', label: 'Achievements' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-cyber-darker/90 backdrop-blur-xl border-b border-cyber-border shadow-lg shadow-purple-500/5'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="#" className="flex items-center gap-2 group">
              <Terminal className="w-5 h-5 text-cyber-cyan group-hover:text-cyber-purple transition-colors" />
              <span className="font-display text-sm font-bold tracking-wider gradient-text">
                ATHARV.DEV
              </span>
            </a>

            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2 text-sm font-mono text-cyber-muted hover:text-cyber-cyan transition-colors relative group"
                >
                  <span className="text-cyber-purple opacity-0 group-hover:opacity-100 transition-opacity">&lt;</span>
                  {link.label}
                  <span className="text-cyber-purple opacity-0 group-hover:opacity-100 transition-opacity">/&gt;</span>
                </a>
              ))}
              <a
                href="https://github.com/bkbnc-atharvjadhav"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-3 px-4 py-1.5 text-sm font-mono bg-gradient-to-r from-cyber-purple to-cyber-cyan text-white rounded-md hover:shadow-lg hover:shadow-purple-500/25 transition-all"
              >
                GitHub
              </a>
            </div>

            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="md:hidden p-2 text-cyber-muted hover:text-cyber-cyan transition-colors"
            >
              {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-cyber-darker/95 backdrop-blur-xl pt-20 md:hidden"
          >
            <div className="flex flex-col items-center gap-6 p-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  className="text-lg font-mono text-cyber-muted hover:text-cyber-cyan transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://github.com/bkbnc-atharvjadhav"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 px-6 py-2 font-mono bg-gradient-to-r from-cyber-purple to-cyber-cyan text-white rounded-md"
              >
                GitHub Profile
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
