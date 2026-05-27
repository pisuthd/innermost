import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/home/Hero';
import AudienceSection from '../components/home/AudienceSection';
import KeyFeatures from '../components/home/KeyFeatures';
import RoadmapSection from '../components/home/RoadmapSection';
import CTA from '../components/home/CTA';

function Home() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <Header />
      <main className="pt-20">
        <Hero />
        <AudienceSection />
        <KeyFeatures />
        <RoadmapSection />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
