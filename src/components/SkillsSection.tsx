import { motion } from 'framer-motion';
import { useInView } from './useInView';

interface SkillCategory {
  title: string;
  emoji: string;
  color: string;
  skills: { name: string; icon?: string }[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    emoji: '⌨️',
    color: 'from-purple-500/20 to-purple-900/20',
    skills: [
      { name: 'Java', icon: '☕' },
      { name: 'JavaScript', icon: '🟨' },
      { name: 'TypeScript', icon: '🔷' },
      { name: 'Python', icon: '🐍' },
      { name: 'SQL', icon: '🗃️' },
      { name: 'C++', icon: '⚙️' },
    ],
  },
  {
    title: 'Frontend',
    emoji: '🎨',
    color: 'from-cyan-500/20 to-cyan-900/20',
    skills: [
      { name: 'HTML', icon: '🌐' },
      { name: 'CSS', icon: '🎨' },
      { name: 'Tailwind CSS', icon: '💨' },
      { name: 'React.js', icon: '⚛️' },
      { name: 'Next.js', icon: '▲' },
      { name: 'Bootstrap', icon: '🅱️' },
    ],
  },
  {
    title: 'Backend',
    emoji: '🔧',
    color: 'from-green-500/20 to-green-900/20',
    skills: [
      { name: 'Node.js', icon: '🟢' },
      { name: 'Express.js', icon: '🚂' },
    ],
  },
  {
    title: 'Databases',
    emoji: '🗄️',
    color: 'from-amber-500/20 to-amber-900/20',
    skills: [
      { name: 'MongoDB', icon: '🍃' },
      { name: 'PostgreSQL', icon: '🐘' },
      { name: 'Supabase', icon: '⚡' },
      { name: 'Firebase', icon: '🔥' },
    ],
  },
  {
    title: 'Cloud / DevOps',
    emoji: '☁️',
    color: 'from-blue-500/20 to-blue-900/20',
    skills: [
      { name: 'Vercel', icon: '▲' },
      { name: 'Cloudflare', icon: '🛡️' },
      { name: 'GitHub Actions', icon: '🔄' },
      { name: 'Linux', icon: '🐧' },
    ],
  },
  {
    title: 'Tools',
    emoji: '🛠️',
    color: 'from-pink-500/20 to-pink-900/20',
    skills: [
      { name: 'Git', icon: '📦' },
      { name: 'GitHub', icon: '🐙' },
      { name: 'VS Code', icon: '💙' },
      { name: 'Postman', icon: '📮' },
      { name: 'Figma', icon: '🎭' },
    ],
  },
  {
    title: 'Other Skills',
    emoji: '🌟',
    color: 'from-violet-500/20 to-violet-900/20',
    skills: [
      { name: 'SEO', icon: '🔍' },
      { name: 'Social Media Mgmt', icon: '📱' },
      { name: 'Web Administration', icon: '🌐' },
      { name: 'Content Strategy', icon: '📝' },
    ],
  },
];

export default function SkillsSection() {
  const { ref, isInView } = useInView();

  return (
    <section id="skills" className="py-24 relative hexagon-bg" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-cyber-cyan text-sm">{'<section id="skills">'}</span>
          <h2 className="section-title text-3xl sm:text-4xl font-bold mt-2 gradient-text">
            Tech Stack & Skills
          </h2>
          <div className="neon-line max-w-xs mx-auto mt-4" />
          <p className="text-cyber-muted mt-4 max-w-lg mx-auto text-sm">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className="cyber-card rounded-xl overflow-hidden"
            >
              <div className={`bg-gradient-to-r ${category.color} px-6 py-4 border-b border-cyber-border`}>
                <h3 className="font-display text-sm font-semibold text-white flex items-center gap-2">
                  <span>{category.emoji}</span>
                  {category.title}
                </h3>
              </div>
              <div className="p-4">
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="skill-badge px-3 py-1.5 rounded-md text-xs font-mono text-cyber-text flex items-center gap-1.5 cursor-default"
                    >
                      <span>{skill.icon}</span>
                      {skill.name}
                    </span>
                  ))}
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
