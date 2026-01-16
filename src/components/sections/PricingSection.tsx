import { motion } from "framer-motion";
import { CTAButton } from "@/components/ui/cta-button";
import { BookOpen, Smartphone, Clock, ShieldCheck, ArrowRight } from "lucide-react";

const includes = [
  { icon: BookOpen, text: "Acesso imediato ao conteúdo" },
  { icon: Smartphone, text: "Leitura simples no celular" },
  { icon: Clock, text: "Consulte quando quiser" },
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 md:py-28 gradient-section relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-4xl mb-4">💰</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Investimento Simbólico
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-lg mx-auto"
        >
          <div className="bg-card rounded-3xl shadow-card border-2 border-primary/20 overflow-hidden">
            {/* Header */}
            <div className="gradient-trust p-6 text-center">
              <p className="text-primary-foreground/80 text-sm mb-1">De</p>
              <p className="text-primary-foreground/80 text-2xl line-through mb-2">R$ 97,00</p>
              <p className="text-primary-foreground text-sm mb-2">Por apenas</p>
              <p className="text-5xl md:text-6xl font-extrabold text-primary-foreground">
                R$ 19,90
              </p>
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="space-y-4 mb-8">
                {includes.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-foreground font-medium">{item.text}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-3 mb-8 p-4 bg-secondary/50 rounded-xl">
                <div className="flex items-center gap-2 text-sm text-foreground">
                  <ArrowRight className="w-4 h-4 text-primary" />
                  <span>Menos que o preço de um cosmético errado</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-foreground">
                  <ArrowRight className="w-4 h-4 text-primary" />
                  <span>Muito mais valor que testar sozinho</span>
                </div>
              </div>

              <CTAButton size="xl" className="w-full mb-4">
                Quero Começar a Controlar Minha Acne Agora
              </CTAButton>

              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <ShieldCheck className="w-4 h-4" />
                <span>Compra segura • Acesso imediato</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
