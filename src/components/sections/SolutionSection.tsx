import { motion } from "framer-motion";
import { Check, Shield, BookOpen, Heart } from "lucide-react";

const features = [
  { icon: Check, text: "Simples" },
  { icon: Shield, text: "Segura" },
  { icon: BookOpen, text: "Baseada em prática clínica" },
  { icon: Heart, text: "Sem promessas irreais" },
];

export function SolutionSection() {
  return (
    <section className="py-20 md:py-28 gradient-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-4xl mb-4">💡</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            A Solução que Você Precisa
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            O <strong className="text-primary">Guia Definitivo para Combater a Acne</strong> foi criado para te mostrar:
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            {[
              "O que realmente causa a acne",
              "O que está piorando sua pele sem você perceber",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-card rounded-xl shadow-soft">
                <span className="flex-shrink-0 w-8 h-8 rounded-full gradient-trust flex items-center justify-center text-primary-foreground text-sm font-bold">
                  {i + 1}
                </span>
                <p className="text-foreground font-medium pt-1">{item}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            {[
              "Como montar uma rotina correta, sem exageros",
              "Quando o tratamento caseiro não é suficiente",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-card rounded-xl shadow-soft">
                <span className="flex-shrink-0 w-8 h-8 rounded-full gradient-trust flex items-center justify-center text-primary-foreground text-sm font-bold">
                  {i + 3}
                </span>
                <p className="text-foreground font-medium pt-1">{item}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-5 py-3 bg-card rounded-full shadow-soft border border-border"
            >
              <feature.icon className="w-5 h-5 text-primary" />
              <span className="font-medium text-foreground">{feature.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
