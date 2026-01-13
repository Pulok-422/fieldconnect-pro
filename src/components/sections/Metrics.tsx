import { motion } from "framer-motion";
import { Globe, Database, Wifi, Users } from "lucide-react";

const metrics = [
  {
    icon: Globe,
    value: "National-Scale",
    label: "Designed for country-wide programs",
  },
  {
    icon: Database,
    value: "Millions",
    label: "Built for millions of records",
  },
  {
    icon: Wifi,
    value: "Offline-Ready",
    label: "Works in low-connectivity areas",
  },
  {
    icon: Users,
    value: "Multi-Team",
    label: "Supports distributed deployments",
  },
];

export default function Metrics() {
  return (
    <section className="py-16 bg-background">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center mx-auto mb-4">
                <metric.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                {metric.value}
              </div>
              <div className="text-sm text-muted-foreground">{metric.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
