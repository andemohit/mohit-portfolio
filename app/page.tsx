import Nav from '@/components/nav';
import Hero from '@/components/hero';
import StatsBar from '@/components/stats-bar';
import Projects from '@/components/projects';
import TechMarquee from '@/components/tech-marquee';
import About from '@/components/about';
import Experience from '@/components/experience';
import Contact from '@/components/contact';
import Footer from '@/components/footer';
import ScrollProgress from '@/components/scroll-progress';
import CustomCursor from '@/components/custom-cursor';
import BackToTop from '@/components/back-to-top';
import InViewObserver from '@/components/in-view-observer';

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <CustomCursor />
      <div className="bg-pattern" />
      <div className="bg-spotlight" />
      <Nav />
      <main>
        <Hero />
        <section className="section-tight">
          <div className="container">
            <StatsBar />
          </div>
        </section>
        <Projects />
        <TechMarquee />
        <About />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
      <InViewObserver />
    </>
  );
}
