import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import BrandShowcase from "@/components/BrandShowcase";
import MissionValues from "@/components/MissionValues";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <BrandShowcase />
        <MissionValues />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
