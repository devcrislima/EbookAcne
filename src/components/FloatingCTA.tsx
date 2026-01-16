import { motion, useScroll, useTransform } from "framer-motion";
import { CTAButton } from "@/components/ui/cta-button";
import { ArrowUp } from "lucide-react";

export function FloatingCTA() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  const scrollToPrice = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div
      style={{ opacity }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 md:hidden"
    >
      <CTAButton size="default" onClick={scrollToPrice} className="shadow-cta">
        Garantir Meu Guia
        <ArrowUp className="w-4 h-4" />
      </CTAButton>
    </motion.div>
  );
}
