import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import CTABanner from "@/components/sections/CTABanner";
import {
  Building2,
  Home,
  CloudRain,
  Leaf,
  Syringe,
  GraduationCap,
  ArrowRight,
  CheckCircle,
  FileEdit,
  Smartphone,
  BarChart3,
  MapPin,
} from "lucide-react";

const solutions = [
  {
    id: "health",
    icon: Building2,
    title: "Health Facility Assessment",
    subtitle: "Map and assess health infrastructure",
    description:
      "Conduct comprehensive assessments of health facilities, track equipment inventory, staff availability, and service readiness. Generate coverage maps and identify gaps in health service delivery.",
    outcomes: [
      "Complete facility inventory with GPS locations",
      "Service readiness scoring and gap analysis",
      "Equipment and supply tracking",
      "Staff capacity assessment",
      "Coverage mapping for microplanning",
    ],
    modules: ["Form Builder", "GPS Capture", "GIS Mapping", "Dashboards", "Reporting"],
    workflow: [
      { icon: FileEdit, label: "Design assessment form" },
      { icon: Smartphone, label: "Deploy to field teams" },
      { icon: MapPin, label: "Collect data with GPS" },
      { icon: BarChart3, label: "Analyze & map coverage" },
    ],
  },
  {
    id: "household",
    icon: Home,
    title: "Household Surveys",
    subtitle: "Population and demographic data collection",
    description:
      "Execute large-scale household surveys with support for complex questionnaires, multi-visit protocols, and GPS tracking. Ideal for census operations, demographic surveys, and baseline studies.",
    outcomes: [
      "Geo-referenced household data",
      "Multi-visit and follow-up tracking",
      "Real-time coverage monitoring",
      "Quality control and validation",
      "Clean exports for statistical analysis",
    ],
    modules: ["Skip Logic", "Offline Collection", "Multi-Visit", "Monitoring", "Exports"],
    workflow: [
      { icon: FileEdit, label: "Create questionnaire" },
      { icon: Smartphone, label: "Collect offline" },
      { icon: BarChart3, label: "Monitor progress" },
      { icon: MapPin, label: "Map coverage" },
    ],
  },
  {
    id: "disaster",
    icon: CloudRain,
    title: "Climate & Disaster Rapid Assessment",
    subtitle: "Emergency response and needs assessment",
    description:
      "Quickly deploy rapid assessment tools for disaster response. Capture damage assessments, identify affected populations, and prioritize response activities with real-time data.",
    outcomes: [
      "Rapid damage and needs assessment",
      "Affected population mapping",
      "Resource allocation prioritization",
      "Real-time situation monitoring",
      "Coordination with response teams",
    ],
    modules: ["Quick Deploy", "Photo Capture", "GPS", "Real-Time Sync", "Dashboards"],
    workflow: [
      { icon: FileEdit, label: "Deploy assessment" },
      { icon: Smartphone, label: "Rapid data capture" },
      { icon: BarChart3, label: "Real-time analysis" },
      { icon: MapPin, label: "Priority mapping" },
    ],
  },
  {
    id: "agriculture",
    icon: Leaf,
    title: "Agriculture Extension Monitoring",
    subtitle: "Farm visits and intervention tracking",
    description:
      "Track agricultural extension activities, monitor farm visits, record input distributions, and measure intervention outcomes. Support farmer registration and crop monitoring programs.",
    outcomes: [
      "Farmer registration and profiling",
      "Extension visit tracking",
      "Input distribution monitoring",
      "Crop status and yield tracking",
      "Intervention outcome measurement",
    ],
    modules: ["Farmer Registry", "Visit Logs", "Input Tracking", "Photo Evidence", "Reports"],
    workflow: [
      { icon: FileEdit, label: "Register farmers" },
      { icon: Smartphone, label: "Log farm visits" },
      { icon: BarChart3, label: "Track interventions" },
      { icon: MapPin, label: "Map farm locations" },
    ],
  },
  {
    id: "vaccination",
    icon: Syringe,
    title: "Vaccination Microplanning",
    subtitle: "Campaign planning and coverage tracking",
    description:
      "Plan and execute vaccination campaigns with precision microplanning. Map target populations, track vaccinator movements, monitor coverage in real time, and identify unreached areas.",
    outcomes: [
      "Target population enumeration",
      "Vaccinator deployment planning",
      "Real-time coverage monitoring",
      "Zero-dose and missed population identification",
      "Post-campaign coverage assessment",
    ],
    modules: ["Population Mapping", "Team Tracking", "Coverage Dashboards", "GIS", "Alerts"],
    workflow: [
      { icon: FileEdit, label: "Enumerate targets" },
      { icon: Smartphone, label: "Track vaccination" },
      { icon: BarChart3, label: "Monitor coverage" },
      { icon: MapPin, label: "Identify gaps" },
    ],
  },
  {
    id: "research",
    icon: GraduationCap,
    title: "Research Field Studies",
    subtitle: "Academic and operational research",
    description:
      "Conduct rigorous research studies with structured data collection protocols. Support for complex sampling, longitudinal tracking, and research-grade data quality controls.",
    outcomes: [
      "Protocol-compliant data collection",
      "Sampling frame management",
      "Longitudinal participant tracking",
      "Research-grade quality controls",
      "Analysis-ready data exports",
    ],
    modules: ["Sampling Tools", "Consent Tracking", "Quality Checks", "Audit Trails", "Exports"],
    workflow: [
      { icon: FileEdit, label: "Design protocol" },
      { icon: Smartphone, label: "Collect with QC" },
      { icon: BarChart3, label: "Validate data" },
      { icon: MapPin, label: "Export for analysis" },
    ],
  },
];

export default function Solutions() {
  return (
    <>
      <Helmet>
        <title>Solutions & Use Cases - ComMicPlan</title>
        <meta
          name="description"
          content="Discover how ComMicPlan supports health assessments, household surveys, disaster response, agriculture monitoring, vaccination campaigns, and research studies."
        />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="hero-gradient section-padding">
          <div className="container-custom text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <span className="badge-feature mb-6">Solutions</span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Built for Programs That Matter
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                From public health to climate action, explore how ComMicPlan supports diverse
                field programs across sectors worldwide.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-8">
              {solutions.map((solution, i) => (
                <motion.div
                  key={solution.id}
                  id={solution.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="card-base p-8"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center shrink-0">
                      <solution.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold">{solution.title}</h2>
                      <p className="text-muted-foreground">{solution.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6">{solution.description}</p>

                  {/* Workflow */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold mb-3">Typical Workflow</h4>
                    <div className="flex items-center gap-2 overflow-x-auto pb-2">
                      {solution.workflow.map((step, idx) => (
                        <div key={idx} className="flex items-center gap-2 shrink-0">
                          <div className="flex flex-col items-center">
                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                              <step.icon className="w-5 h-5 text-primary" />
                            </div>
                            <span className="text-xs text-muted-foreground mt-1 text-center max-w-20">
                              {step.label}
                            </span>
                          </div>
                          {idx < solution.workflow.length - 1 && (
                            <ArrowRight className="w-4 h-4 text-muted-foreground shrink-0" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Outcomes */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold mb-3">Key Outcomes</h4>
                    <ul className="space-y-2">
                      {solution.outcomes.slice(0, 4).map((outcome) => (
                        <li key={outcome} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-success shrink-0 mt-0.5" />
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Modules */}
                  <div className="flex flex-wrap gap-2">
                    {solution.modules.map((module) => (
                      <span
                        key={module}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-muted text-muted-foreground"
                      >
                        {module}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <CTABanner
          title="Have a Different Use Case?"
          description="ComMicPlan is flexible and customizable. Contact us to discuss how we can support your specific field data needs."
          primaryCTA={{ text: "Discuss Your Project", href: "/contact" }}
        />
      </Layout>
    </>
  );
}
