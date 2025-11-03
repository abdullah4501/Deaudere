import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import backgroundImage from "@assets/generated_images/Hero_workspace_background_image_68e01820.png";

export default function AboutContent() {
  return (
    <section className="relative py-24 bg-black overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.08),transparent)]" />
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8 h-full bg-black/40 backdrop-blur-sm border-white/10 shadow-xl">
              <h2 className="text-2xl font-bold mb-4 text-white" data-testid="text-about-company-heading">
                About Our Company
              </h2>
              <p className="text-white/80 leading-relaxed mb-4" data-testid="text-about-company-p1">
                Deaudere is more than just a company — it's a vision for the
                future of digital commerce. We believe in combining design,
                technology, and customer understanding to create brands that
                people love.
              </p>
              <p className="text-white/80 leading-relaxed" data-testid="text-about-company-p2">
                Our experienced team handles everything from product sourcing and
                branding to web development and digital marketing, ensuring that
                every Deaudere brand provides a seamless online shopping
                experience.
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8 h-full bg-black/40 backdrop-blur-sm border-white/10 border-primary/20 shadow-xl">
              <h2 className="text-2xl font-bold mb-4 text-white" data-testid="text-about-story-heading">
                Our Story
              </h2>
              <p className="text-white/80 leading-relaxed" data-testid="text-about-story-content">
                Deaudere was founded with a simple goal — to create eCommerce
                brands that truly serve people. We noticed a gap between generic
                online stores and customer-focused experiences, and decided to
                bridge it by developing unique, value-driven brands under one
                parent company.
              </p>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2
            className="text-3xl font-bold mb-8 text-center text-white"
            style={{ fontFamily: "Outfit, sans-serif" }}
            data-testid="text-meet-brands-heading"
          >
            Meet Our Brands
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 hover-elevate transition-all duration-300 bg-black/40 backdrop-blur-sm border-white/10 shadow-xl hover:border-primary/30" data-testid="card-brand-soulxy">
              <h3 className="text-xl font-bold text-primary mb-2">Soulxy</h3>
              <p className="text-white/70">
                A premium lifestyle and home essentials brand.
              </p>
            </Card>
            <Card className="p-6 hover-elevate transition-all duration-300 bg-black/40 backdrop-blur-sm border-white/10 shadow-xl hover:border-secondary/30 bg-secondary" data-testid="card-brand-cubuly">
              <h3 className="text-xl font-bold text-white mb-2">Cubuly</h3>
              <p className="text-white/70">
                A playful and affordable eCommerce store for everyday products.
              </p>
            </Card>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mt-12"
        >
          {/* Background image for Join Our Network section */}
          <div
            className="absolute inset-0 rounded-lg bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${backgroundImage})`,
            }}
          >
            {/* Dark overlay layers */}
            <div className="absolute inset-0 rounded-lg bg-black/65" />
            {/* Subtle blue accent */}
            <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-blue-600/8 via-transparent to-blue-500/4" />
          </div>
          
          <Card className="relative p-8 bg-black/40 backdrop-blur-sm border-white/10 border-secondary/20 shadow-xl">
            <h2 className="text-2xl font-bold mb-4 text-white" data-testid="text-join-network-heading">
              Join Our Network
            </h2>
            <p className="text-white leading-relaxed" data-testid="text-join-network-content">
              If you're a supplier, designer, or digital partner interested in
              collaborating with Deaudere, we'd love to hear from you. Together,
              we can create exceptional shopping experiences.
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
