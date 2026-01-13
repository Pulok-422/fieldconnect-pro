import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import FAQ from "@/components/sections/FAQ";
import { Check, ArrowRight, HelpCircle } from "lucide-react";

const plans = [
  {
    name: "Starter",
    description: "Perfect for pilots and small-scale studies",
    price: "Contact us",
    features: [
      { text: "Core form builder with 25+ question types", included: true },
      { text: "Offline data collection (Android)", included: true },
      { text: "Basic exports (Excel, CSV)", included: true },
      { text: "Up to 5 users", included: true },
      { text: "Email support", included: true },
      { text: "Basic dashboards", included: true },
      { text: "GPS capture", included: true },
      { text: "Custom dashboards", included: false },
      { text: "GIS map views & exports", included: false },
      { text: "Advanced user roles", included: false },
    ],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Professional",
    description: "For multi-team field operations",
    price: "Contact us",
    features: [
      { text: "Everything in Starter", included: true },
      { text: "Unlimited users", included: true },
      { text: "Team roles & permissions", included: true },
      { text: "Custom dashboards", included: true },
      { text: "GIS map views & visualization", included: true },
      { text: "Advanced exports (ZIP, structured)", included: true },
      { text: "Real-time monitoring", included: true },
      { text: "Priority support", included: true },
      { text: "API access", included: true },
      { text: "SSO integration", included: false },
    ],
    cta: "Request Pricing",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "For national-scale programs",
    price: "Custom",
    features: [
      { text: "Everything in Professional", included: true },
      { text: "SSO integration (optional)", included: true },
      { text: "Advanced admin controls", included: true },
      { text: "Dedicated account manager", included: true },
      { text: "Custom integrations", included: true },
      { text: "On-premise hosting options", included: true },
      { text: "SLA guarantees", included: true },
      { text: "Custom training programs", included: true },
      { text: "Geospatial exports (KML/GeoJSON)", included: true },
      { text: "White-labeling options", included: true },
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

const addons = [
  {
    name: "Training Package",
    description: "Comprehensive training for your team including form design, field operations, and data management.",
    price: "Custom quote",
  },
  {
    name: "Custom Dashboards",
    description: "Bespoke dashboard development tailored to your specific monitoring and reporting needs.",
    price: "Custom quote",
  },
  {
    name: "Managed Hosting",
    description: "Dedicated hosting environment with enhanced performance, backups, and security.",
    price: "Custom quote",
  },
  {
    name: "Data Migration",
    description: "Migrate existing data from other platforms with mapping, cleaning, and validation.",
    price: "Custom quote",
  },
  {
    name: "Custom Integrations",
    description: "Connect ComMicPlan with your existing systems like DHIS2, PowerBI, or custom APIs.",
    price: "Custom quote",
  },
  {
    name: "Extended Support",
    description: "24/7 support coverage with dedicated response times and escalation paths.",
    price: "Custom quote",
  },
];

export default function Pricing() {
  return (
    <>
      <Helmet>
        <title>Pricing - ComMicPlan Data Collection Platform</title>
        <meta
          name="description"
          content="Flexible pricing plans for ComMicPlan. From starter pilots to enterprise national-scale deployments. Contact us for a custom quote."
        />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="hero-gradient section-padding">
          <div className="container-custom text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <span className="badge-feature mb-6">Pricing</span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Plans That Scale With Your Programs
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Pricing depends on scale, modules, and hosting options. Start with a free trial
                or contact us for a tailored quote.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid md:grid-cols-3 gap-8">
              {plans.map((plan, i) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className={`card-base p-8 relative ${
                    plan.popular ? "ring-2 ring-primary" : ""
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full gradient-bg text-primary-foreground text-sm font-semibold">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground mb-4">{plan.description}</p>
                  <div className="text-3xl font-bold text-primary mb-6">{plan.price}</div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature.text} className="flex items-start gap-3 text-sm">
                        <Check
                          className={`w-5 h-5 shrink-0 mt-0.5 ${
                            feature.included ? "text-success" : "text-muted-foreground/30"
                          }`}
                        />
                        <span className={feature.included ? "" : "text-muted-foreground/50"}>
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className={`w-full text-center block ${
                      plan.popular ? "btn-primary" : "btn-secondary"
                    }`}
                  >
                    {plan.cta}
                    <ArrowRight className="w-4 h-4 inline ml-2" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Add-ons */}
        <section className="section-padding bg-muted/30">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Add-On Services</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Enhance your ComMicPlan deployment with additional services tailored to your needs.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {addons.map((addon, i) => (
                <motion.div
                  key={addon.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className="card-base p-6"
                >
                  <h3 className="font-semibold mb-2">{addon.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{addon.description}</p>
                  <span className="text-sm font-medium text-primary">{addon.price}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Note */}
        <section className="py-12 bg-background">
          <div className="container-custom">
            <div className="card-base p-6 flex items-start gap-4 max-w-3xl mx-auto">
              <HelpCircle className="w-6 h-6 text-primary shrink-0" />
              <div>
                <h4 className="font-semibold mb-1">Need a Custom Solution?</h4>
                <p className="text-sm text-muted-foreground">
                  Every program is unique. We offer flexible configurations including custom modules,
                  dedicated hosting, and volume-based pricing. Contact our team for a personalized quote
                  that matches your exact requirements.
                </p>
              </div>
            </div>
          </div>
        </section>

        <FAQ />

        {/* CTA */}
        <section className="section-padding bg-muted/30">
          <div className="container-custom text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
                Start with a free trial or book a demo to see ComMicPlan in action.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="btn-primary">
                  Request Pricing
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/contact" className="btn-secondary">
                  Book a Demo
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </Layout>
    </>
  );
}
