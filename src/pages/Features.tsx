import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import CTABanner from "@/components/sections/CTABanner";
import {
  FileEdit,
  Wifi,
  BarChart3,
  MapPin,
  LayoutDashboard,
  Scale,
  Download,
  Shield,
  CheckCircle,
} from "lucide-react";
import formBuilder from "@/assets/form-builder.png";
import dashboardAnalytics from "@/assets/dashboard-analytics.png";
import gisMap from "@/assets/gis-map.png";
import fieldWorker from "@/assets/field-worker.png";

const features = [
  {
    id: "form-builder",
    icon: FileEdit,
    title: "Form Builder & Questionnaire Design",
    description:
      "Create sophisticated questionnaires with our intuitive visual form builder or import existing designs from Excel.",
    image: formBuilder,
    benefits: [
      "25+ question types (quantitative & qualitative)",
      "Excel-based form design and import",
      "Skip logic, constraints, and validation rules",
      "Multilingual form support",
      "Templates and question libraries",
      "Smart duplicate-case detection",
    ],
  },
  {
    id: "data-collection",
    icon: Wifi,
    title: "Offline & Online Data Collection",
    description:
      "Collect data anywhere with our offline-first mobile app. Designed for remote field work with intermittent connectivity.",
    image: fieldWorker,
    benefits: [
      "Works 100% offline on Android devices",
      "Web browser support for online collection",
      "Automatic sync when connectivity returns",
      "Built for remote / low-connectivity field work",
      "GPS and photo capture capabilities",
      "Multi-visit and follow-up surveys",
    ],
  },
  {
    id: "monitoring",
    icon: BarChart3,
    title: "Real-Time Monitoring & Quality Control",
    description:
      "Track your field operations in real time. Supervisors can review, flag, and provide feedback to enumerators instantly.",
    image: dashboardAnalytics,
    benefits: [
      "Live monitoring dashboards",
      "Supervisor review and flagging",
      "Enumerator feedback loop",
      "Data validation alerts",
      "Progress tracking by team/area",
      "Customizable quality indicators",
    ],
  },
  {
    id: "gis-mapping",
    icon: MapPin,
    title: "GIS & Mapping",
    description:
      "Visualize your data geographically. Capture GPS coordinates and export to GIS-compatible formats.",
    image: gisMap,
    benefits: [
      "GPS coordinate capture",
      "Interactive map-based visualization",
      "Coverage and density mapping",
      "Geospatial exports (KML/GeoJSON)*",
      "Boundary and polygon support",
      "Location clustering and heatmaps",
    ],
    note: "* Depending on project configuration",
  },
  {
    id: "dashboards",
    icon: LayoutDashboard,
    title: "Dashboards & Reporting",
    description:
      "Build custom dashboards to track progress, coverage, and key metrics across your entire program.",
    benefits: [
      "Custom dashboard builder",
      "Coverage and progress tracking",
      "Team performance metrics",
      "Automated report generation",
      "Export reports to PDF/Excel",
      "Role-based dashboard access",
    ],
  },
  {
    id: "scalability",
    icon: Scale,
    title: "Scalability",
    description:
      "From pilot studies to national-scale programs. ComMicPlan handles any deployment size with ease.",
    benefits: [
      "Supports millions of records",
      "Multi-team, multi-location deployments",
      "Hierarchical team structures",
      "Load balancing and performance optimization",
      "Flexible hosting options",
      "Incremental rollout support",
    ],
  },
  {
    id: "exports",
    icon: Download,
    title: "Data Management & Export",
    description:
      "Clean, organized data exports ready for analysis. Multiple formats for different downstream needs.",
    benefits: [
      "Excel, CSV, ZIP export formats",
      "Clean, structured data outputs",
      "Automated data cleaning options",
      "Integration-ready formats",
      "Scheduled export automation",
      "Data versioning and history",
    ],
  },
  {
    id: "security",
    icon: Shield,
    title: "Security & Data Integrity",
    description:
      "Enterprise-grade security features to protect sensitive field data and ensure compliance.",
    benefits: [
      "Role-based access (Admin/Supervisor/Enumerator)",
      "Encryption in transit (HTTPS)",
      "Secure sync protocols",
      "Audit trails and logging",
      "Data integrity checks",
      "Backup and recovery options",
    ],
  },
];

export default function Features() {
  return (
    <>
      <Helmet>
        <title>Features - ComMicPlan Data Collection Platform</title>
        <meta
          name="description"
          content="Explore ComMicPlan's comprehensive features: form builder, offline collection, real-time monitoring, GIS mapping, dashboards, and enterprise security."
        />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="hero-gradient section-padding">
          <div className="container-custom text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="badge-feature mb-6">Platform Features</span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Powerful Tools for Field Data Programs
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                From form design to GIS exports, ComMicPlan provides everything you need
                to run successful field data collection programs at any scale.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Feature Sections */}
        {features.map((feature, i) => (
          <section
            key={feature.id}
            id={feature.id}
            className={`section-padding ${i % 2 === 0 ? "bg-background" : "bg-muted/30"}`}
          >
            <div className="container-custom">
              <div
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  i % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <motion.div
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={i % 2 === 1 ? "lg:order-2" : ""}
                >
                  <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center mb-6">
                    <feature.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">{feature.title}</h2>
                  <p className="text-lg text-muted-foreground mb-8">{feature.description}</p>
                  <ul className="space-y-3">
                    {feature.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-success shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  {feature.note && (
                    <p className="text-sm text-muted-foreground mt-4 italic">{feature.note}</p>
                  )}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: i % 2 === 0 ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={i % 2 === 1 ? "lg:order-1" : ""}
                >
                  {feature.image ? (
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="rounded-2xl shadow-card w-full"
                    />
                  ) : (
                    <div className="aspect-video rounded-2xl bg-muted flex items-center justify-center">
                      <feature.icon className="w-20 h-20 text-muted-foreground/30" />
                    </div>
                  )}
                </motion.div>
              </div>
            </div>
          </section>
        ))}

        <CTABanner />
      </Layout>
    </>
  );
}
