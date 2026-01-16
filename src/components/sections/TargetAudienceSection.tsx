import { motion } from "framer-motion";
import { CheckCircle, XCircle, ArrowRight } from "lucide-react";

const forWho = [
  "Para quem sofre com acne leve a moderada",
  "Para quem quer entender a própria pele",
  "Para quem cansou de testar produtos sem resultado",
  "Para quem busca orientação clara e responsável",
];

const notFor = [
  "Não é um guia milagroso",
  "Não substitui acompanhamento médico",
];

export function TargetAudienceSection() {
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
          <span className="inline-block text-4xl mb-4">🎯</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Para Quem é Esse Guia?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* For who */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-2xl p-8 shadow-card border border-primary/20"
          >
            <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
              <CheckCircle className="w-6 h-6" />
              Ideal para você se...
            </h3>
            <div className="space-y-4">
              {forWho.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-foreground">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Not for */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-card rounded-2xl p-8 shadow-card border border-border"
          >
            <h3 className="text-xl font-bold text-muted-foreground mb-6 flex items-center gap-2">
              <XCircle className="w-6 h-6" />
              Importante saber
            </h3>
            <div className="space-y-4 mb-6">
              {notFor.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
            <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-xl">
              <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-foreground font-medium">
                É um <strong className="text-primary">primeiro passo inteligente</strong> para melhorar sua pele
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
