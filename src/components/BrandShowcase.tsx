import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import soulxyImage from "@assets/generated_images/Soulxy_brand_lifestyle_image_02628018.png";
import cubulyImage from "@assets/generated_images/Cubuly_brand_product_image_3e37ae0a.png";

const brands = [
  {
    name: "Soulxy",
    url: "https://soulxy.com",
    tagline: "Simple. Elegant. Meaningful.",
    description:
      "Soulxy is a modern lifestyle brand dedicated to offering thoughtfully designed products that bring elegance and simplicity into everyday living. From home essentials to personal accessories, Soulxy combines minimalism with functionality.",
    image: soulxyImage,
    color: "primary",
    imagePosition: "left",
  },
  {
    name: "Cubuly",
    url: "https://cubulystore.com",
    tagline: "Smart Products. Bright Ideas.",
    description:
      "Cubuly is your go-to destination for fun, trendy, and practical products that make life easier. Built for the creative and curious, Cubuly blends affordability with style, curating collections that speak to modern consumers.",
    image: cubulyImage,
    color: "secondary",
    imagePosition: "right",
  },
];

export default function BrandShowcase() {
  return (
    <section className="relative py-24 bg-black overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black/95" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.1),transparent)]" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white"
            style={{ fontFamily: "Outfit, sans-serif" }}
            data-testid="text-brands-heading"
          >
            Our Brands
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-12">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="overflow-hidden hover-elevate transition-all duration-300 border-2 border-white/10 bg-black/50 backdrop-blur-sm shadow-2xl">
                <div
                  className={`grid md:grid-cols-2 gap-0 ${
                    brand.imagePosition === "right" ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div
                    className={`relative ${
                      brand.imagePosition === "right" ? "md:order-2" : ""
                    }`}
                  >
                    <div
                      className="h-64 md:h-full bg-cover bg-center relative"
                      style={{ backgroundImage: `url(${brand.image})` }}
                    >
                      {/* Dark overlay for better text contrast */}
                      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60" />
                    </div>
                  </div>
                  <div className="p-8 md:p-12 flex flex-col justify-center bg-black/40">
                    <h3
                      className={`text-3xl font-bold mb-3 ${
                        brand.color === "primary" ? "text-primary" : "text-secondary"
                      }`}
                      style={{ fontFamily: "Outfit, sans-serif" }}
                      data-testid={`text-brand-${brand.name.toLowerCase()}`}
                    >
                      {brand.name}
                    </h3>
                    <p
                      className="text-lg font-medium text-white/70 mb-4 italic"
                      data-testid={`text-tagline-${brand.name.toLowerCase()}`}
                    >
                      {brand.tagline}
                    </p>
                    <p className="text-white/80 leading-relaxed mb-6" data-testid={`text-description-${brand.name.toLowerCase()}`}>
                      {brand.description}
                    </p>
                    <div>
                      <a href={brand.url} target="_blank" rel="noopener noreferrer">
                        <Button
                          variant={brand.color === "primary" ? "default" : "secondary"}
                          className="group"
                          data-testid={`button-visit-${brand.name.toLowerCase()}`}
                        >
                          Visit {brand.name}
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
