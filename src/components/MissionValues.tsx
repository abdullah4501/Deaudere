import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Lightbulb, Shield, Users, Leaf } from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We constantly evolve with changing consumer needs.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "Transparency and authenticity are at the heart of what we do.",
  },
  {
    icon: Users,
    title: "Customer-Centricity",
    description: "Every decision begins and ends with the customer.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description: "We believe in mindful growth and responsible practices.",
  },
];

export default function MissionValues() {
  return (
    <section className="relative py-24 bg-black overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.08),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(43,90,150,0.08),transparent)]" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white"
            style={{ fontFamily: "Outfit, sans-serif" }}
            data-testid="text-mission-heading"
          >
            Our Mission & Values
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-primary to-secondary mx-auto rounded-full mb-8" />
          <p className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed" data-testid="text-mission-statement">
            To build eCommerce brands that connect emotionally with customers
            while maintaining a standard of excellence in design, functionality,
            and service.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover-elevate transition-all duration-300 border-2 border-white/10 bg-black/40 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:border-primary/30" data-testid={`card-value-${value.title.toLowerCase()}`}>
                  <div className="flex flex-col items-center text-center">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 border border-primary/30">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-white" data-testid={`text-value-title-${value.title.toLowerCase()}`}>
                      {value.title}
                    </h3>
                    <p className="text-sm text-white/70" data-testid={`text-value-description-${value.title.toLowerCase()}`}>
                      {value.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
