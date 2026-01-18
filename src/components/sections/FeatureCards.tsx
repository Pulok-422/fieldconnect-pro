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
    description: "Build questionnaires with intuitive tools, 25 question types, skip logic & validation, multilingual forms, and smart duplicate-case follow-up workflows.",
  },
  {
    icon: Wifi,
    title: "Offline & Online Data Collection",
    description: "Collect data offline or online on any device—use the Android app or a web browser, with seamless syncing when connectivity returns.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Monitoring & QC",
    description: "Review and validate submissions in real time with supervisor oversight to maintain high data quality.",
  },
  {
    icon: MapPin,
    title: "GIS & Mapping",
    description: "Visualize field data with custom maps and reports, and export geospatial files (KML supported; GeoJSON available for selected projects).",
  },
  {
    icon: LayoutDashboard,
    title: "Dashboards & Reporting",
    description: "Custom reporting to track coverage and progress across projects, teams, and locations.",
  },
  {
    icon: Scale,
    title: "Scalability",
    description: "Scale from pilots to millions of respondents with multi-project, multi-team deployments and unlimited data collectors/collaborators.",
  },
  {
    icon: Download,
    title: "Data Management & Export",
    description: "Download clean data in XLS, CSV, KML, and ZIP formats—and GeoJSON where enabled for downstream analysis.",
  },
  {
    icon: Shield,
    title: "Security & Integrity",
    description: "Fine-grained permissions, user-owned data control, and security-by-design, with options for DPAs and standalone deployments.",
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
            A complete platform to design questionnaires, collect data offline or online, review quality in real time, and generate maps and exports for reporting.
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
