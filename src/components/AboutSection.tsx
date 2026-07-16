import { motion } from 'framer-motion';
import { useInView } from './useInView';
import { Code2, Cloud, Brain, GraduationCap, Rocket, BookOpen } from 'lucide-react';

const currentWork = [
  { icon: <Rocket className="w-4 h-4" />, text: 'Developing Campus Connect Platform' },
  { icon: <Code2 className="w-4 h-4" />, text: 'Managing BKBNC Website' },
  { icon: <BookOpen className="w-4 h-4" />, text: 'Handling Digital Communications & Social Media' },
  { icon: <Brain className="w-4 h-4" />, text: 'Working on AI Chatbot Integration' },
];

const interests = [
  { icon: '💻', label: 'Full Stack Development' },
  { icon: '☁️', label: 'Cloud Computing' },
  { icon: '🤖', label: 'AI Applications' },
  { icon: '🎓', label: 'Educational Technology' },
  { icon: '🌐', label: 'Community Platforms' },
];

const learning = [
  'System Design',
  'Docker',
  'Kubernetes',
  'Cloud Architecture',
  'AI Integrations',
];

export default function AboutSection() {
  const { ref, isInView } = useInView();

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-cyber-cyan text-sm">{'<section id="about">'}</span>
          <h2 className="section-title text-3xl sm:text-4xl font-bold mt-2 gradient-text">
            About Me
          </h2>
          <div className="neon-line max-w-xs mx-auto mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="cyber-card rounded-xl p-6 sm:p-8"
          >
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="w-5 h-5 text-cyber-purple" />
              <h3 className="font-display text-lg font-semibold text-white">Who Am I?</h3>
            </div>
            <p className="text-cyber-muted leading-relaxed mb-6">
              Computer Science student, developer and technology enthusiast passionate about solving
              real-world problems using software solutions. Currently leading{' '}
              <span className="text-cyber-cyan font-semibold">Campus Connect</span> while managing
              digital infrastructure and communication systems for{' '}
              <span className="text-cyber-purple font-semibold">B.K. Birla Night College</span>.
            </p>

            <div className="flex items-center gap-2 mb-4">
              <Cloud className="w-5 h-5 text-cyber-cyan" />
              <h3 className="font-display text-lg font-semibold text-white">Career Goal</h3>
            </div>
            <p className="text-cyber-muted leading-relaxed">
              To become a Full Stack Engineer focused on building impactful digital products for
              education and communities. 🎯
            </p>
          </motion.div>

          {/* Currently Working On */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="cyber-card rounded-xl p-6">
              <h3 className="font-display text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <span className="text-cyber-green">⚡</span> Currently Working On
              </h3>
              <div className="space-y-3">
                {currentWork.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-cyber-muted">
                    <span className="text-cyber-cyan">{item.icon}</span>
                    <span className="text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="cyber-card rounded-xl p-6">
              <h3 className="font-display text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <span>📚</span> Currently Learning
              </h3>
              <div className="flex flex-wrap gap-2">
                {learning.map((item, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 text-xs font-mono skill-badge rounded-md text-cyber-cyan"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Interests */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8"
        >
          <div className="cyber-card rounded-xl p-6">
            <h3 className="font-display text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <span>🔥</span> Main Interests
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              {interests.map((item, i) => (
                <div
                  key={i}
                  className="text-center p-3 rounded-lg bg-cyber-darker/50 border border-cyber-border hover:border-cyber-purple/50 transition-all group"
                >
                  <span className="text-2xl block mb-1">{item.icon}</span>
                  <span className="text-xs font-mono text-cyber-muted group-hover:text-cyber-cyan transition-colors">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Fun Facts */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8"
        >
          <div className="cyber-card rounded-xl p-6">
            <h3 className="font-display text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <span>🎮</span> Fun Facts
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="flex items-start gap-3 p-3 rounded-lg bg-cyber-darker/30">
                <span className="text-lg">🔭</span>
                <span className="text-sm text-cyber-muted">I love building things that solve real problems for students</span>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg bg-cyber-darker/30">
                <span className="text-lg">🌱</span>
                <span className="text-sm text-cyber-muted">Currently diving deep into System Design & Cloud Architecture</span>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg bg-cyber-darker/30">
                <span className="text-lg">💬</span>
                <span className="text-sm text-cyber-muted">Ask me about React, Node.js, and building community platforms</span>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg bg-cyber-darker/30">
                <span className="text-lg">⚡</span>
                <span className="text-sm text-cyber-muted">I manage 20K+ social media engagement alongside coding</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Favorite Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-8"
        >
          <div className="cyber-card rounded-xl p-8 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyber-purple/5 via-transparent to-cyber-cyan/5" />
            <div className="relative">
              <span className="text-4xl text-cyber-purple/30 font-serif">"</span>
              <p className="text-lg sm:text-xl text-cyber-text italic mt-2">
                Code is not just about solving problems — it's about creating impact.
              </p>
              <span className="text-4xl text-cyber-purple/30 font-serif">"</span>
              <p className="text-sm text-cyber-muted mt-2 font-mono">— Atharv Jadhav</p>
            </div>
          </div>
        </motion.div>

        <div className="text-center mt-8">
          <span className="font-mono text-cyber-cyan text-sm">{'</section>'}</span>
        </div>
      </div>
    </section>
  );
}
