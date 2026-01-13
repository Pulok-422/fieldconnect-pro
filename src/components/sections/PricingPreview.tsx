import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Starter",
    description: "For pilots and small teams",
    features: [
      "Core form builder",
      "Offline data collection",
      "Basic exports (Excel, CSV)",
      "Up to 5 users",
      "Email support",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Professional",
    description: "For multi-team deployments",
    features: [
      "Everything in Starter",
      "Team roles & permissions",
      "Custom dashboards",
      "GIS map views",
      "Advanced exports",
      "Priority support",
    ],
    cta: "Request Pricing",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "For national-scale programs",
    features: [
      "Everything in Professional",
      "SSO integration (optional)",
      "Advanced admin controls",
      "Dedicated support",
      "Custom integrations",
      "On-premise options",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export default function PricingPreview() {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="badge-feature mb-4">Pricing</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Plans That Scale With Your Programs
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pricing depends on scale, modules, and hosting options. Contact us for a tailored quote.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`card-base p-6 lg:p-8 relative ${
                plan.popular ? "ring-2 ring-primary" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full gradient-bg text-primary-foreground text-xs font-semibold">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <p className="text-muted-foreground mb-6">{plan.description}</p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check className="w-5 h-5 text-success shrink-0 mt-0.5" />
                    <span>{feature}</span>
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
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/pricing" className="inline-flex items-center gap-2 text-primary font-medium hover:underline">
            View full pricing details
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
