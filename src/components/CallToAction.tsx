import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import backgroundImage from "@assets/generated_images/Hero_workspace_background_image_68e01820.png";

export default function CallToAction() {
  return (
    <section className="relative py-24 bg-black overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        {/* Dark overlay layers */}
        <div className="absolute inset-0 bg-black/65" />
        {/* Subtle blue accent */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.15),transparent)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent" />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white"
            style={{ fontFamily: "Outfit, sans-serif" }}
            data-testid="text-cta-heading"
          >
            Ready to explore what makes our brands different?
          </h2>
          <p className="text-lg text-white/80 mb-10" data-testid="text-cta-subtext">
            Discover thoughtfully designed products that enhance everyday living.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="https://soulxy.com" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="default" className="group" data-testid="button-cta-soulxy">
                Visit Soulxy
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
            <a href="https://cubulystore.com" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="secondary" className="group" data-testid="button-cta-cubuly">
                Visit Cubuly
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
