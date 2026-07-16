import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import AchievementsSection from './components/AchievementsSection';
import GitHubSection from './components/GitHubSection';
import ContactSection from './components/ContactSection';
import ReadmeSection from './components/ReadmeSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-cyber-darker text-cyber-text relative">
      <ParticleBackground />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <div className="neon-line" />
        <AboutSection />
        <div className="neon-line" />
        <SkillsSection />
        <div className="neon-line" />
        <ProjectsSection />
        <div className="neon-line" />
        <ExperienceSection />
        <div className="neon-line" />
        <AchievementsSection />
        <div className="neon-line" />
        <GitHubSection />
        <div className="neon-line" />
        <ContactSection />
        <div className="neon-line" />
        <ReadmeSection />
      </main>
      <Footer />
    </div>
  );
}
