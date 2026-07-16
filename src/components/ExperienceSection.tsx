import { motion } from 'framer-motion';
import { useInView } from './useInView';
import { Briefcase, Calendar, MapPin, Award, Code2 } from 'lucide-react';

export default function ExperienceSection() {
  const { ref, isInView } = useInView();

  const responsibilities = [
    'Website Management',
    'Social Media Strategy',
    'Event Promotion',
    'Student Communication',
    'Digital Infrastructure Support',
  ];

  const technologies = ['HTML', 'CSS', 'JavaScript', 'Blogger', 'Analytics'];

  return (
    <section id="experience" className="py-24 relative hexagon-bg" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-cyber-cyan text-sm">{'<section id="experience">'}</span>
          <h2 className="section-title text-3xl sm:text-4xl font-bold mt-2 gradient-text">
            Experience
          </h2>
          <div className="neon-line max-w-xs mx-auto mt-4" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="cyber-card rounded-xl overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-cyber-purple/20 to-cyber-cyan/20 p-6 border-b border-cyber-border">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyber-purple to-cyber-cyan flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-lg font-bold text-white">
                    Digital Communications Lead
                  </h3>
                  <p className="text-cyber-cyan font-mono text-sm mt-1">
                    Website Incharge | Social Media Coordinator
                  </p>
                  <p className="text-cyber-muted text-sm mt-2 flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5" />
                    B.K. Birla Night Arts, Science & Commerce College, Kalyan
                  </p>
                  <div className="flex items-center gap-4 mt-2">
                    <span className="flex items-center gap-1 text-xs font-mono text-cyber-muted">
                      <Calendar className="w-3.5 h-3.5 text-cyber-green" /> 2025 - Present
                    </span>
                    <span className="px-2 py-0.5 bg-cyber-green/10 border border-cyber-green/30 rounded text-xs text-cyber-green font-mono">
                      Current
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="p-6 space-y-6">
              {/* Responsibilities */}
              <div>
                <h4 className="text-sm font-display font-semibold text-white mb-3 flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-cyber-purple" /> Responsibilities
                </h4>
                <div className="space-y-2">
                  {responsibilities.map((resp, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-cyber-muted">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyber-cyan flex-shrink-0" />
                      {resp}
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-sm font-display font-semibold text-white mb-3 flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-cyber-cyan" /> Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <span key={tech} className="skill-badge px-3 py-1.5 rounded-md text-xs font-mono text-cyber-text">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Achievement */}
              <div className="p-4 rounded-lg bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-amber-400" />
                  <span className="text-sm font-semibold text-amber-300">Key Achievement</span>
                </div>
                <p className="text-sm text-cyber-muted mt-2">
                  📊 20K+ Social Media Engagement Managed — Streamlined digital communication workflow across all college platforms
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-3xl mx-auto mt-8"
        >
          <div className="cyber-card rounded-xl overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500/20 to-indigo-500/20 p-6 border-b border-cyber-border">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🎓</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-lg font-bold text-white">
                    B.Sc Computer Science
                  </h3>
                  <p className="text-cyber-cyan font-mono text-sm mt-1">
                    Specialization: Computer Science
                  </p>
                  <p className="text-cyber-muted text-sm mt-2 flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5" />
                    B.K. Birla Night Arts, Science & Commerce College, Kalyan
                  </p>
                  <span className="flex items-center gap-1 text-xs font-mono text-cyber-muted mt-2">
                    <Calendar className="w-3.5 h-3.5 text-cyber-green" /> 2025 - 2028
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="text-center mt-12">
          <span className="font-mono text-cyber-cyan text-sm">{'</section>'}</span>
        </div>
      </div>
    </section>
  );
}
