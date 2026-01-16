import { motion } from "framer-motion";
import { AlertCircle, HelpCircle, Frown, HeartCrack } from "lucide-react";

const painPoints = [
  {
    icon: AlertCircle,
    text: "Sofre com acne persistente?",
  },
  {
    icon: HelpCircle,
    text: "Já testou vários produtos e nada parece funcionar?",
  },
  {
    icon: Frown,
    text: "Tem medo de piorar a pele usando receitas da internet?",
  },
  {
    icon: HeartCrack,
    text: "Sente que a acne afeta sua autoestima todos os dias?",
  },
];

export function PainPointsSection() {
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
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            😣 Você se identifica?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center gap-4 p-5 bg-secondary/50 rounded-xl border border-border hover:border-primary/30 transition-colors"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center">
                <point.icon className="w-6 h-6 text-destructive" />
              </div>
              <p className="text-foreground font-medium">{point.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center">
            <p className="text-lg md:text-xl text-foreground font-medium leading-relaxed">
              💬 <strong>A verdade é:</strong>
              <br />
              <span className="text-muted-foreground">
                A acne não é falta de limpeza — ela é resultado de{" "}
                <strong className="text-primary">desequilíbrios que quase ninguém te explica direito.</strong>
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
