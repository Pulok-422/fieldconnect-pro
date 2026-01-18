import { motion } from "framer-motion";
import { 
  FileEdit, 
  Wifi, 
  BarChart3, 
  MapPin, 
  LayoutDashboard, 
  Scale,
  Download,
  Shield
} from "lucide-react";

const features = [
  {
    icon: FileEdit,
    title: "Form Builder & Questionnaire Design",
    description: "Build questionnaires fast with intuitive tools, 25+ question types, skip logic & validation, multilingual forms, and smart duplicate-case handling with integrated follow-up.",
  },
  {
    icon: Wifi,
    title: "Offline & Online Data Collection",
    description: "Collect data anywhere, anytime—offline or online, on any device. Use the Android app or a web browser with seamless syncing when connectivity returns.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Review & Validation",
    description: "Review and validate submissions in real time to maintain high data quality across teams and locations.",
  },
  {
    icon: MapPin,
    title: "Maps & Reporting",
    description: "Visualize data with custom maps and reports to track coverage, gaps, and progress across teams and locations.",
  },
  {
    icon: LayoutDashboard,
    title: "Project, Data & Team Management",
    description: "Manage projects, teams, and data with fine-grained permissions, unlimited collectors/collaborators, and the ability to connect data across multiple projects.",
  },
  {
    icon: Scale,
    title: "Scalability",
    description: "Scale smoothly from small pilots to millions of respondents with unlimited projects and multi-team, multi-location deployments.",
  },
  {
    icon: Download,
    title: "Data Export & Interoperability",
    description: "Download clean data in XLS, CSV, KML, or ZIP formats. GeoJSON export is planned and will be enabled as it rolls out.",
  },
  {
    icon: Shield,
    title: "Security & Data Control",
    description: "Secure, smart, and seamless by design—user-owned data with full access control, high security standards, and optional standalone deployments with custom support on demand.",
  },
];

export default function FeatureCards() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="badge-feature mb-4">Platform Features</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything You Need for Field Data Programs
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A complete platform to design questionnaires, collect data offline or online, review quality in real time, visualize with maps and reports, and manage projects securely at scale.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="card-base p-6 hover:-translate-y-1 transition-transform"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
