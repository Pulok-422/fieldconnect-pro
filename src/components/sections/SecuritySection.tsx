import { motion } from "framer-motion";
import { Shield, Lock, Users, FileCheck, Server, Eye } from "lucide-react";
import { Link } from "react-router-dom";

const securityFeatures = [
  {
    icon: Lock,
    title: "Encryption in Transit",
    description: "All data encrypted via HTTPS during transmission",
  },
  {
    icon: Users,
    title: "Role-Based Access",
    description: "Admin, Supervisor, and Enumerator permission levels",
  },
  {
    icon: FileCheck,
    title: "Audit-Friendly Exports",
    description: "Complete data trails for compliance and reporting",
  },
  {
    icon: Server,
    title: "Secure Sync",
    description: "Reliable synchronization with data integrity checks",
  },
  {
    icon: Eye,
    title: "Data Ownership",
    description: "Your data belongs to you—export anytime",
  },
  {
    icon: Shield,
    title: "Backup Options",
    description: "Configurable backup policies (depending on hosting)",
  },
];

export default function SecuritySection() {
  return (
    <section className="section-padding bg-foreground text-primary-foreground">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium rounded-full bg-primary-foreground/10 text-primary-foreground mb-6">
              <Shield className="w-4 h-4" />
              Security & Compliance
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Enterprise-Grade Security for Sensitive Field Data
            </h2>
            <p className="text-primary-foreground/70 mb-8">
              ComMicPlan is built with security and data integrity at its core. 
              Role-based access control, encrypted transmissions, and audit-friendly 
              exports ensure your field data meets the highest compliance standards.
            </p>
            <Link to="/security" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary-foreground text-foreground font-semibold hover:bg-primary-foreground/90 transition-colors">
              Learn About Data Security
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {securityFeatures.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-4 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10"
              >
                <feature.icon className="w-6 h-6 mb-3 text-accent" />
                <h4 className="font-semibold mb-1">{feature.title}</h4>
                <p className="text-sm text-primary-foreground/60">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
