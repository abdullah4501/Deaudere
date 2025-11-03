import Navigation from "@/components/Navigation";
import AboutHero from "@/components/AboutHero";
import AboutContent from "@/components/AboutContent";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <main>
        <AboutHero />
        <AboutContent />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
