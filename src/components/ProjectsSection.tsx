import { motion } from 'framer-motion';
import { useInView } from './useInView';
import { ExternalLink, Star, Users, Zap, MessageSquare, Globe, Bell } from 'lucide-react';

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

interface Project {
  name: string;
  description: string;
  features: { icon: React.ReactNode; text: string }[];
  techStack: string[];
  liveDemo?: string;
  github?: string;
  role: string;
  highlight: string;
  gradient: string;
  emoji: string;
}

const projects: Project[] = [
  {
    name: 'Campus Connect',
    emoji: '🏫',
    description: 'A smart campus ecosystem platform designed for navigation, events, notices and student engagement.',
    features: [
      { icon: <Globe className="w-3.5 h-3.5" />, text: 'Campus Navigation' },
      { icon: <Users className="w-3.5 h-3.5" />, text: 'Event Management' },
      { icon: <Bell className="w-3.5 h-3.5" />, text: 'Push Notifications' },
      { icon: <Zap className="w-3.5 h-3.5" />, text: 'Digital Notice Board' },
      { icon: <Star className="w-3.5 h-3.5" />, text: 'Student Dashboard' },
      { icon: <Zap className="w-3.5 h-3.5" />, text: 'QR Integration' },
    ],
    techStack: ['React Native', 'Node.js', 'Supabase', 'Firebase'],
    role: 'Founder & Project Lead',
    highlight: '🏆 Developed for RT-MSSU Ideation Competition',
    gradient: 'from-purple-600 to-blue-600',
  },
  {
    name: 'LeadCircle',
    emoji: '🤝',
    description: 'Community and student engagement platform for collaboration and networking.',
    features: [
      { icon: <Users className="w-3.5 h-3.5" />, text: 'Community Building' },
      { icon: <Zap className="w-3.5 h-3.5" />, text: 'Content Publishing' },
      { icon: <Star className="w-3.5 h-3.5" />, text: 'User Profiles' },
      { icon: <Bell className="w-3.5 h-3.5" />, text: 'Events' },
    ],
    techStack: ['React', 'Node.js', 'MongoDB', 'Cloudflare'],
    role: 'Founder & Developer',
    highlight: '☁️ Custom domain deployment and cloud infrastructure setup',
    gradient: 'from-cyan-600 to-teal-600',
  },
  {
    name: 'BKBNC AI Chatbot',
    emoji: '🤖',
    description: 'AI-powered chatbot for student support and college information.',
    features: [
      { icon: <MessageSquare className="w-3.5 h-3.5" />, text: 'FAQ System' },
      { icon: <Users className="w-3.5 h-3.5" />, text: 'Admission Support' },
      { icon: <Star className="w-3.5 h-3.5" />, text: 'Student Guidance' },
      { icon: <Zap className="w-3.5 h-3.5" />, text: 'Smart Responses' },
    ],
    techStack: ['Vercel', 'AI APIs', 'JavaScript'],
    liveDemo: 'https://bkbnc-chatbot.vercel.app',
    role: 'Developer & Maintainer',
    highlight: '🔗 Integrated with official college website',
    gradient: 'from-pink-600 to-rose-600',
  },
  {
    name: 'BKBNC Website Management',
    emoji: '🌐',
    description: 'Management and optimization of the official college website.',
    features: [
      { icon: <Globe className="w-3.5 h-3.5" />, text: 'Content Management' },
      { icon: <Zap className="w-3.5 h-3.5" />, text: 'SEO Optimization' },
      { icon: <Bell className="w-3.5 h-3.5" />, text: 'Notice Management' },
      { icon: <Star className="w-3.5 h-3.5" />, text: 'Newsletter Integration' },
    ],
    techStack: ['HTML', 'CSS', 'JavaScript', 'Blogger'],
    role: 'Website Incharge',
    highlight: '📈 Improved digital communication workflow',
    gradient: 'from-amber-600 to-orange-600',
  },
];

export default function ProjectsSection() {
  const { ref, isInView } = useInView();

  return (
    <section id="projects" className="py-24 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-cyber-cyan text-sm">{'<section id="projects">'}</span>
          <h2 className="section-title text-3xl sm:text-4xl font-bold mt-2 gradient-text">
            Featured Projects
          </h2>
          <div className="neon-line max-w-xs mx-auto mt-4" />
          <p className="text-cyber-muted mt-4 max-w-lg mx-auto text-sm">
            Projects I've built and led — from campus platforms to AI chatbots
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="cyber-card rounded-xl overflow-hidden group"
            >
              {/* Project Header */}
              <div className={`bg-gradient-to-r ${project.gradient} p-6 relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/30" />
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-display text-xl font-bold text-white flex items-center gap-2">
                      <span className="text-2xl">{project.emoji}</span>
                      {project.name}
                    </h3>
                    <div className="flex items-center gap-2">
                      {project.liveDemo && (
                        <a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors"
                          title="Live Demo"
                        >
                          <ExternalLink className="w-4 h-4 text-white" />
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors"
                          title="GitHub"
                        >
                          <GithubIcon className="w-4 h-4 text-white" />
                        </a>
                      )}
                    </div>
                  </div>
                  <span className="inline-block px-2 py-0.5 bg-white/20 rounded text-xs font-mono text-white">
                    {project.role}
                  </span>
                </div>
              </div>

              {/* Project Body */}
              <div className="p-6">
                <p className="text-cyber-muted text-sm leading-relaxed mb-4">{project.description}</p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {project.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-cyber-muted">
                      <span className="text-cyber-cyan">{feature.icon}</span>
                      {feature.text}
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs font-mono bg-cyber-darker border border-cyber-border rounded text-cyber-purple"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Highlight */}
                <div className="p-3 rounded-lg bg-gradient-to-r from-cyber-purple/10 to-cyber-cyan/10 border border-cyber-purple/20">
                  <p className="text-xs font-mono text-cyber-cyan">{project.highlight}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <span className="font-mono text-cyber-cyan text-sm">{'</section>'}</span>
        </div>
      </div>
    </section>
  );
}
