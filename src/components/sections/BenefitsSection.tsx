import { motion } from "framer-motion";
import { Check } from "lucide-react";

const benefits = [
  "O que é acne de verdade (e por que ela insiste em voltar)",
  "As 5 principais causas da acne que quase ninguém investiga",
  "Os erros comuns que pioram a inflamação",
  "Rotina ideal de cuidados para pele acneica (manhã e noite)",
  "Relação entre alimentação e acne",
  "Quando procurar ajuda profissional",
  "Plano simples de 7 dias para começar a controlar a acne",
];

export function BenefitsSection() {
  return (
    <section className="py-20 md:py-28 bg-card">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-4xl mb-4">📘</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            O Que Você Vai Aprender
          </h2>
          <p className="text-lg text-muted-foreground">
            Conteúdo prático e direto ao ponto
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-8 md:p-10 border border-border">
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="flex items-start gap-4 p-4 bg-card/80 backdrop-blur-sm rounded-xl hover:shadow-soft transition-shadow"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full gradient-cta flex items-center justify-center">
                    <Check className="w-4 h-4 text-accent-foreground" />
                  </div>
                  <p className="text-foreground font-medium pt-1">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
