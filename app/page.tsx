import { FloatingNavBar } from '@/components/layout/floating-navbar';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/sections/hero-section';
import { AboutSection } from '@/components/sections/about-section';
import { SkillsSection } from '@/components/sections/skills-section';
import { ProjectsSection } from '@/components/sections/projects-section';
import { LeadershipSection } from '@/components/sections/leadership-section';
import { HackathonsSection } from '@/components/sections/hackathons-section';
import { ContactSection } from '@/components/sections/contact-section';

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <FloatingNavBar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <LeadershipSection />
      <HackathonsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
