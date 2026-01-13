import { motion } from "framer-motion";
import { FileEdit, Users, Smartphone, BarChart3, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: FileEdit,
    step: "01",
    title: "Design Forms",
    description: "Create smart questionnaires with our intuitive form builder or Excel import.",
  },
  {
    icon: Users,
    step: "02",
    title: "Deploy Teams",
    description: "Set up teams with roles, assign areas, and distribute surveys to mobile devices.",
  },
  {
    icon: Smartphone,
    step: "03",
    title: "Collect Offline",
    description: "Field teams collect data anywhere—online or offline. Syncs when connected.",
  },
  {
    icon: BarChart3,
    step: "04",
    title: "Monitor & Export",
    description: "Track progress in real-time, review quality, and export data for analysis.",
  },
];

export default function HowItWorks() {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="badge-feature mb-4">How It Works</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            From Design to Insights in Four Steps
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A streamlined workflow that takes your field data programs from concept to actionable insights.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="card-base p-6 h-full">
                <div className="text-5xl font-bold text-primary/10 mb-4">{item.step}</div>
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 -translate-y-1/2 z-10">
                  <ArrowRight className="w-6 h-6 text-primary/30" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
