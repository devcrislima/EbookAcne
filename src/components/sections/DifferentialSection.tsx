import { motion } from "framer-motion";
import { ShieldCheck, Clock, Brain, UserCheck } from "lucide-react";

const differentials = [
  {
    icon: ShieldCheck,
    title: "Sem receitas perigosas",
    description: "Não incentiva receitas caseiras arriscadas",
  },
  {
    icon: Clock,
    title: "Sem falsas promessas",
    description: "Não promete \"pele perfeita em 3 dias\"",
  },
  {
    icon: Brain,
    title: "Estratégia, não só produto",
    description: "Ensina a pensar estratégia de cuidado",
  },
  {
    icon: UserCheck,
    title: "Experiência real",
    description: "Feito por quem trabalha com estética na prática",
  },
];

export function DifferentialSection() {
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
          <span className="inline-block text-4xl mb-4">🧠</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Por Que Esse Guia é Diferente?
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
          {differentials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-center p-6 bg-secondary/50 rounded-2xl border border-border hover:border-primary/30 hover:shadow-soft transition-all"
            >
              <div className="w-14 h-14 rounded-2xl gradient-trust flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full">
            <span className="text-lg">📌</span>
            <p className="text-primary font-semibold">
              Resultado real vem de consistência + orientação correta
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
