import { motion } from "framer-motion";
import aboutPattern from "@assets/generated_images/About_section_background_pattern_95cfc56e.png";

export default function AboutHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center py-24 overflow-hidden bg-black">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${aboutPattern})`,
        }}
      >
        {/* Enhanced dark overlay layers */}
        <div className="absolute inset-0 bg-black/65" />
        {/* Subtle blue accent */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/8 via-transparent to-blue-500/4" />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white"
          style={{ fontFamily: "Outfit, sans-serif" }}
          data-testid="text-about-hero-heading"
        >
          About Deaudere
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-white/80 max-w-3xl mx-auto"
          data-testid="text-about-hero-subtext"
        >
          More than just a company — a vision for the future of digital commerce.
        </motion.p>
      </div>
    </section>
  );
}
