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
    description: "25+ question types, Excel import, skip logic, constraints, multilingual support, and smart duplicate detection.",
  },
  {
    icon: Wifi,
    title: "Offline & Online Data Collection",
    description: "Works offline on Android and web browsers. Syncs automatically when connectivity returns.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Monitoring & QC",
    description: "Live dashboards, supervisor review and flagging, enumerator feedback loop for quality control.",
  },
  {
    icon: MapPin,
    title: "GIS & Mapping",
    description: "GPS capture, map visualization, and geospatial exports like KML/GeoJSON (depending on project configuration).",
  },
  {
    icon: LayoutDashboard,
    title: "Dashboards & Reporting",
    description: "Custom dashboards, maps, and reports. Track coverage and progress across teams and locations.",
  },
  {
    icon: Scale,
    title: "Scalability",
    description: "From small pilots to millions of records. Multi-team, multi-location deployments supported.",
  },
  {
    icon: Download,
    title: "Data Management & Export",
    description: "Clean exports in Excel, CSV, ZIP formats. Integration-ready outputs for downstream analysis.",
  },
  {
    icon: Shield,
    title: "Security & Integrity",
    description: "Role-based access (Admin/Supervisor/Enumerator), secure sync, and data integrity measures.",
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
            A complete platform for designing surveys, collecting data offline, monitoring quality, and generating GIS outputs.
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
