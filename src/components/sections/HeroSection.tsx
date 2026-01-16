import { motion } from "framer-motion";
import { CTAButton } from "@/components/ui/cta-button";
import { CheckCircle, ArrowDown } from "lucide-react";

export function HeroSection() {
  const scrollToPrice = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen gradient-hero overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 pt-12 pb-20 md:pt-20 md:pb-28">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
            >
              📘 E-book Digital
            </motion.span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              <span className="text-gradient">Guia Definitivo</span>
              <br />
              <span className="text-foreground">para Combater a Acne</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              O passo a passo simples e seguro para controlar a oleosidade, reduzir inflamações e evitar novas lesões — 
              <strong className="text-foreground"> mesmo se você já tentou de tudo.</strong>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-2 text-sm text-foreground"
              >
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>Desenvolvido por profissional da área estética</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-2 text-sm text-foreground"
              >
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>Linguagem clara e prática</span>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <CTAButton size="xl" onClick={scrollToPrice} className="w-full sm:w-auto">
                Quero Controlar Minha Acne Agora
                <ArrowDown className="w-5 h-5 animate-bounce" />
              </CTAButton>
              <p className="text-sm text-muted-foreground mt-3">
                Compra segura • Acesso imediato
              </p>
            </motion.div>
          </motion.div>

          {/* Ebook Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex-1 flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute inset-0 gradient-cta rounded-3xl blur-2xl opacity-20 scale-110" />
              <div className="relative bg-card rounded-3xl shadow-card p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="w-64 md:w-80 aspect-[3/4] gradient-trust rounded-2xl flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30" />
                  <div className="text-center text-primary-foreground relative z-10 p-6">
                    <span className="text-6xl mb-4 block">📘</span>
                    <h3 className="text-xl font-bold mb-2">Guia Definitivo</h3>
                    <p className="text-sm opacity-90">para Combater a Acne</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
