import { motion } from 'framer-motion';
import { useInView } from './useInView';
import { Trophy, Award, Star, Sparkles } from 'lucide-react';

const achievements = [
  {
    icon: <Trophy className="w-6 h-6" />,
    title: 'Campus Connect Project Lead',
    description: 'Founded and led the development of a smart campus ecosystem platform',
    color: 'from-yellow-500 to-amber-600',
    iconBg: 'bg-yellow-500/10 border-yellow-500/30',
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: 'Digital Communications Lead at BKBNC',
    description: 'Leading digital communication strategy for the entire college',
    color: 'from-purple-500 to-violet-600',
    iconBg: 'bg-purple-500/10 border-purple-500/30',
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: 'Website Incharge at BKBNC',
    description: 'Managing and optimizing the official college website infrastructure',
    color: 'from-cyan-500 to-blue-600',
    iconBg: 'bg-cyan-500/10 border-cyan-500/30',
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: '20K+ Social Media Engagement',
    description: 'Successfully managed and grew social media engagement across platforms',
    color: 'from-green-500 to-emerald-600',
    iconBg: 'bg-green-500/10 border-green-500/30',
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: 'Led Multiple Student Digital Initiatives',
    description: 'Pioneered digital initiatives to enhance student experience and engagement',
    color: 'from-pink-500 to-rose-600',
    iconBg: 'bg-pink-500/10 border-pink-500/30',
  },
];

export default function AchievementsSection() {
  const { ref, isInView } = useInView();

  return (
    <section id="achievements" className="py-24 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-cyber-cyan text-sm">{'<section id="achievements">'}</span>
          <h2 className="section-title text-3xl sm:text-4xl font-bold mt-2 gradient-text">
            Achievements & Highlights
          </h2>
          <div className="neon-line max-w-xs mx-auto mt-4" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="cyber-card rounded-xl p-6 text-center group"
            >
              <div
                className={`w-16 h-16 rounded-2xl ${achievement.iconBg} border flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
              >
                <span className="text-white">{achievement.icon}</span>
              </div>
              <h3 className="font-display text-sm font-bold text-white mb-2">{achievement.title}</h3>
              <p className="text-xs text-cyber-muted leading-relaxed">{achievement.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Certifications Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12"
        >
          <div className="cyber-card rounded-xl p-8 text-center">
            <h3 className="font-display text-lg font-bold text-white mb-2 flex items-center justify-center gap-2">
              <span>📜</span> Certifications
            </h3>
            <p className="text-cyber-muted text-sm font-mono">
              🔄 Coming Soon — Currently pursuing industry certifications
            </p>
          </div>
        </motion.div>

        <div className="text-center mt-12">
          <span className="font-mono text-cyber-cyan text-sm">{'</section>'}</span>
        </div>
      </div>
    </section>
  );
}
