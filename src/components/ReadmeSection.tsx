import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from './useInView';
import { Copy, Check, Download, Eye, Code2, FileText } from 'lucide-react';



export default function ReadmeSection() {
  const { ref, isInView } = useInView();
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'preview' | 'raw'>('preview');

  const handleCopy = async () => {
    try {
      const response = await fetch('/README.md');
      const text = await response.text();
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
      setCopied(false);
    }
  };

  const handleDownload = async () => {
    try {
      const response = await fetch('/README.md');
      const text = await response.text();
      const blob = new Blob([text], { type: 'text/markdown' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'README.md';
      a.click();
      URL.revokeObjectURL(url);
    } catch {
      // Handle error
    }
  };

  return (
    <section className="py-24 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-cyber-cyan text-sm">{'<section id="readme">'}</span>
          <h2 className="section-title text-3xl sm:text-4xl font-bold mt-2 gradient-text">
            📄 GitHub README.md
          </h2>
          <div className="neon-line max-w-xs mx-auto mt-4" />
          <p className="text-cyber-muted mt-4 max-w-lg mx-auto text-sm">
            Your professional README.md file is ready! Copy or download it below.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <button
              onClick={handleCopy}
              className="px-6 py-3 bg-gradient-to-r from-cyber-purple to-cyber-dark-purple text-white font-mono text-sm rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all flex items-center gap-2"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              {copied ? 'Copied!' : 'Copy README.md'}
            </button>
            <button
              onClick={handleDownload}
              className="px-6 py-3 border border-cyber-cyan/50 text-cyber-cyan font-mono text-sm rounded-lg hover:bg-cyber-cyan/10 hover:border-cyber-cyan transition-all flex items-center gap-2"
            >
              <Download className="w-4 h-4" /> Download README.md
            </button>
          </div>

          {/* Tabs */}
          <div className="flex items-center gap-2 mb-4">
            <button
              onClick={() => setActiveTab('preview')}
              className={`px-4 py-2 text-sm font-mono rounded-lg flex items-center gap-2 transition-all ${
                activeTab === 'preview'
                  ? 'bg-cyber-purple/20 text-cyber-purple border border-cyber-purple/30'
                  : 'text-cyber-muted hover:text-white'
              }`}
            >
              <Eye className="w-4 h-4" /> Preview
            </button>
            <button
              onClick={() => setActiveTab('raw')}
              className={`px-4 py-2 text-sm font-mono rounded-lg flex items-center gap-2 transition-all ${
                activeTab === 'raw'
                  ? 'bg-cyber-purple/20 text-cyber-purple border border-cyber-purple/30'
                  : 'text-cyber-muted hover:text-white'
              }`}
            >
              <Code2 className="w-4 h-4" /> Instructions
            </button>
          </div>

          {/* Content */}
          <div className="cyber-card rounded-xl overflow-hidden">
            {activeTab === 'preview' ? (
              <div className="p-6">
                <div className="flex items-center gap-2 mb-6 pb-4 border-b border-cyber-border">
                  <FileText className="w-5 h-5 text-cyber-purple" />
                  <span className="font-mono text-sm text-white">README.md</span>
                  <span className="px-2 py-0.5 bg-cyber-green/10 text-cyber-green text-xs font-mono rounded ml-auto">
                    Ready
                  </span>
                </div>

                {/* Preview Card */}
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="inline-block px-4 py-2 bg-gradient-to-r from-cyber-purple/20 to-cyber-cyan/20 rounded-lg border border-cyber-purple/30 mb-4">
                      <span className="text-lg">🎉</span>
                      <span className="text-sm font-mono text-cyber-cyan ml-2">Your README.md is ready!</span>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-cyber-darker/50 border border-cyber-border">
                      <h4 className="text-sm font-display font-semibold text-white mb-2">✅ Included Sections</h4>
                      <ul className="space-y-1.5 text-xs text-cyber-muted">
                        <li>• 🎨 Custom Cyberpunk Banner</li>
                        <li>• ⌨️ Animated Typing Text</li>
                        <li>• 👤 About Me (YAML Block)</li>
                        <li>• 🛠️ Tech Stack Badges</li>
                        <li>• 🚀 Featured Projects (4)</li>
                        <li>• 💼 Experience Section</li>
                        <li>• 🎓 Education Section</li>
                        <li>• 🏆 Achievements Table</li>
                        <li>• 📊 GitHub Stats & Analytics</li>
                        <li>• 🔥 GitHub Streak</li>
                        <li>• 🏅 GitHub Trophies</li>
                        <li>• 📈 Contribution Graph</li>
                        <li>• 👀 Profile Views Counter</li>
                        <li>• 📧 Contact Links</li>
                        <li>• 💼 Open to Work Badge</li>
                        <li>• 🐍 Snake Animation</li>
                        <li>• 💬 Favorite Quote</li>
                        <li>• 🎮 Fun Facts</li>
                      </ul>
                    </div>

                    <div className="p-4 rounded-lg bg-cyber-darker/50 border border-cyber-border">
                      <h4 className="text-sm font-display font-semibold text-white mb-2">🎨 Design Features</h4>
                      <ul className="space-y-1.5 text-xs text-cyber-muted">
                        <li>• 🌊 Waving Header & Footer</li>
                        <li>• 💜 Purple & Cyan Theme</li>
                        <li>• 🏷️ For-the-badge Style Badges</li>
                        <li>• 📊 Midnight Purple Stats Theme</li>
                        <li>• 📐 Clean Table Layouts</li>
                        <li>• 🎯 Animated Fluent Emojis</li>
                        <li>• 🖼️ Capsule Render Banners</li>
                        <li>• ⌨️ Typing SVG Animation</li>
                        <li>• 📱 Mobile Responsive</li>
                        <li>• 🔗 Clickable Social Links</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="p-6">
                <h3 className="font-display text-lg font-bold text-white mb-4">📋 Setup Instructions</h3>
                <div className="space-y-4 text-sm text-cyber-muted">
                  <div className="p-4 rounded-lg bg-cyber-darker/50 border border-cyber-border">
                    <p className="font-mono text-cyber-cyan mb-2">Step 1: Create GitHub Repository</p>
                    <p>Create a new repository named <code className="px-1.5 py-0.5 bg-cyber-purple/20 text-cyber-purple rounded text-xs">bkbnc-atharvjadhav</code> (must match your username exactly)</p>
                  </div>
                  <div className="p-4 rounded-lg bg-cyber-darker/50 border border-cyber-border">
                    <p className="font-mono text-cyber-cyan mb-2">Step 2: Add README.md</p>
                    <p>Click the <strong>"Copy README.md"</strong> button above, then paste it as the <code className="px-1.5 py-0.5 bg-cyber-purple/20 text-cyber-purple rounded text-xs">README.md</code> file in your repository.</p>
                  </div>
                  <div className="p-4 rounded-lg bg-cyber-darker/50 border border-cyber-border">
                    <p className="font-mono text-cyber-cyan mb-2">Step 3: Enable Snake Animation (Optional)</p>
                    <p>Create <code className="px-1.5 py-0.5 bg-cyber-purple/20 text-cyber-purple rounded text-xs">.github/workflows/snake.yml</code> with the GitHub Actions workflow for the snake contribution graph animation.</p>
                  </div>
                  <div className="p-4 rounded-lg bg-cyber-darker/50 border border-cyber-border">
                    <p className="font-mono text-cyber-cyan mb-2">Step 4: Customize</p>
                    <p>Update placeholder links (marked with "Update Required") with your actual URLs as they become available.</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>

        <div className="text-center mt-12">
          <span className="font-mono text-cyber-cyan text-sm">{'</section>'}</span>
        </div>
      </div>
    </section>
  );
}
