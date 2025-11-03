import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroImage from "@assets/generated_images/Hero_workspace_background_image_68e01820.png";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        {/* Enhanced dark overlay layers for depth */}
        <div className="absolute inset-0 bg-black/65" />
        {/* Subtle blue accent */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-blue-500/5" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-6 text-white drop-shadow-2xl"
          style={{ fontFamily: "Outfit, sans-serif" }}
          data-testid="text-hero-headline"
        >
          Innovating Everyday Living Through{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-secondary">
            Modern E-commerce
          </span>{" "}
          Brands
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed drop-shadow-lg"
          data-testid="text-hero-subtext"
        >
          At Deaudere, we build and manage online brands that combine quality,
          creativity, and convenience. Our mission is to deliver products that
          inspire confidence, comfort, and individuality — every day.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <a href="https://soulxy.com" target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              variant="default"
              className="group"
              data-testid="button-explore-soulxy"
            >
              Explore Soulxy
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </a>
          <a href="https://cubulystore.com" target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              variant="secondary"
              className="group"
              data-testid="button-visit-cubuly"
            >
              Visit Cubuly
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
