import { motion } from 'framer-motion';
import { useInView } from './useInView';

const username = 'bkbnc-atharvjadhav';

export default function GitHubSection() {
  const { ref, isInView } = useInView();

  return (
    <section className="py-24 relative hexagon-bg" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-cyber-cyan text-sm">{'<section id="github">'}</span>
          <h2 className="section-title text-3xl sm:text-4xl font-bold mt-2 gradient-text">
            GitHub Activity
          </h2>
          <div className="neon-line max-w-xs mx-auto mt-4" />
          <p className="text-cyber-muted mt-4 max-w-lg mx-auto text-sm">
            My open-source contributions and coding activity
          </p>
        </motion.div>

        <div className="space-y-8">
          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-2 gap-6"
          >
            <div className="cyber-card rounded-xl p-6 flex items-center justify-center">
              <img
                src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=midnight-purple&bg_color=0a0a0f&border_color=1e1e2e&title_color=8b5cf6&text_color=94a3b8&icon_color=06b6d4&hide_border=false&count_private=true`}
                alt="GitHub Stats"
                className="max-w-full h-auto"
                loading="lazy"
              />
            </div>
            <div className="cyber-card rounded-xl p-6 flex items-center justify-center">
              <img
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=midnight-purple&bg_color=0a0a0f&border_color=1e1e2e&title_color=8b5cf6&text_color=94a3b8&hide_border=false`}
                alt="Top Languages"
                className="max-w-full h-auto"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Streak */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="cyber-card rounded-xl p-6 flex items-center justify-center"
          >
            <img
              src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=midnight-purple&background=0a0a0f&border=1e1e2e&ring=8b5cf6&fire=06b6d4&currStreakLabel=06b6d4&sideLabels=8b5cf6&dates=94a3b8`}
              alt="GitHub Streak"
              className="max-w-full h-auto"
              loading="lazy"
            />
          </motion.div>

          {/* Trophies */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="cyber-card rounded-xl p-6 flex items-center justify-center overflow-x-auto"
          >
            <img
              src={`https://github-profile-trophy.vercel.app/?username=${username}&theme=discord&no-bg=true&no-frame=true&column=7&margin-w=10`}
              alt="GitHub Trophies"
              className="max-w-full h-auto"
              loading="lazy"
            />
          </motion.div>

          {/* Contribution Graph */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="cyber-card rounded-xl p-6 flex items-center justify-center overflow-x-auto"
          >
            <img
              src={`https://github-readme-activity-graph.vercel.app/graph?username=${username}&theme=react-dark&bg_color=0a0a0f&color=8b5cf6&line=06b6d4&point=ec4899&area=true&area_color=8b5cf6&hide_border=true`}
              alt="Contribution Graph"
              className="max-w-full h-auto"
              loading="lazy"
            />
          </motion.div>

          {/* Profile Views */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex items-center justify-center gap-4 flex-wrap"
          >
            <img
              src={`https://komarev.com/ghpvc/?username=${username}&color=8b5cf6&style=for-the-badge&label=PROFILE+VIEWS`}
              alt="Profile Views"
              loading="lazy"
            />
            <img
              src={`https://img.shields.io/github/followers/${username}?style=for-the-badge&color=8b5cf6&labelColor=0a0a0f&logo=github`}
              alt="Followers"
              loading="lazy"
            />
          </motion.div>
        </div>

        <div className="text-center mt-12">
          <span className="font-mono text-cyber-cyan text-sm">{'</section>'}</span>
        </div>
      </div>
    </section>
  );
}
