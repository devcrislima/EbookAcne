import { motion } from "framer-motion";
import { CTAButton } from "@/components/ui/cta-button";
import { Sparkles, ShieldCheck } from "lucide-react";

export function FinalCTASection() {
  const scrollToPrice = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 md:py-28 gradient-section relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-block text-5xl mb-6">🚀</span>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Fechamento Emocional
          </h2>

          <div className="space-y-4 mb-10">
            {[
              "Você não precisa continuar sofrendo sem entender sua pele.",
              "Informação certa evita erros, gastos desnecessários e frustração.",
              "Esse guia é o primeiro passo para virar o jogo.",
            ].map((text, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                className="flex items-center justify-center gap-3 text-lg md:text-xl text-foreground"
              >
                <Sparkles className="w-5 h-5 text-accent flex-shrink-0" />
                <span>{text}</span>
              </motion.p>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="inline-block"
          >
            <p className="text-xl md:text-2xl font-bold text-primary mb-6">
              👉 Comece hoje por apenas <span className="text-accent">R$ 19,90</span>
            </p>

            <CTAButton size="xl" onClick={scrollToPrice} className="mb-4">
              Quero Meu Guia Agora
            </CTAButton>

            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <ShieldCheck className="w-4 h-4" />
              <span>Compra segura • Acesso imediato</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
