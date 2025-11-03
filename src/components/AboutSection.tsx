import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

export default function AboutSection() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-black via-black/95 to-black overflow-hidden">
      {/* Background pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIGZpbGw9IiNmZmYiIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-30" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
            data-testid="text-about-heading"
          >
            About Deaudere
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-primary to-secondary mx-auto rounded-full mb-8" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="p-8 md:p-12 bg-black/40 backdrop-blur-sm border-white/10 shadow-2xl">
            <p className="text-lg leading-relaxed text-white/90 mb-6" data-testid="text-about-intro">
              Deaudere is a forward-thinking eCommerce company focused on creating
              and nurturing digital-first brands. We specialize in identifying
              consumer needs and transforming them into meaningful online
              experiences.
            </p>
            <p className="text-lg leading-relaxed text-white/90" data-testid="text-about-mission">
              Founded with a vision to redefine online retail, Deaudere currently
              owns and operates two thriving brands: <span className="font-semibold text-primary">Soulxy</span> and{" "}
              <span className="font-semibold text-secondary">Cubuly</span> — each catering to unique
              lifestyles and customer values.
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
