import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Building2, 
  Home, 
  CloudRain, 
  Leaf, 
  Syringe, 
  GraduationCap,
  ArrowRight
} from "lucide-react";

const useCases = [
  {
    icon: Building2,
    title: "Health Facility Assessment",
    description: "Map and assess health facilities, track equipment, staff, and service availability.",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    icon: Home,
    title: "Household Surveys",
    description: "Conduct population surveys with GPS tracking, photo capture, and multi-visit support.",
    color: "bg-emerald-500/10 text-emerald-600",
  },
  {
    icon: CloudRain,
    title: "Climate & Disaster Assessment",
    description: "Rapid assessments for disaster response, damage surveys, and needs mapping.",
    color: "bg-orange-500/10 text-orange-600",
  },
  {
    icon: Leaf,
    title: "Agriculture Extension Monitoring",
    description: "Track farm visits, inputs distribution, and agricultural interventions.",
    color: "bg-green-500/10 text-green-600",
  },
  {
    icon: Syringe,
    title: "Vaccination Microplanning",
    description: "Plan vaccination campaigns, track coverage, and identify unreached populations.",
    color: "bg-rose-500/10 text-rose-600",
  },
  {
    icon: GraduationCap,
    title: "Research Field Studies",
    description: "Academic and operational research with structured data collection protocols.",
    color: "bg-violet-500/10 text-violet-600",
  },
];

export default function UseCases() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="badge-feature mb-4">Use Cases</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Built for Programs That Matter
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From public health to climate action, ComMicPlan supports diverse field programs across sectors.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, i) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="card-base p-6 group hover:-translate-y-1 transition-transform"
            >
              <div className={`w-12 h-12 rounded-xl ${useCase.color} flex items-center justify-center mb-4`}>
                <useCase.icon className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2">{useCase.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{useCase.description}</p>
              <Link 
                to="/solutions" 
                className="inline-flex items-center gap-2 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity"
              >
                Learn more <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/solutions" className="btn-secondary">
            Explore All Solutions
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
