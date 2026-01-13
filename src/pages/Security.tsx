import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Shield, Lock, Users, Server, FileCheck, Eye } from "lucide-react";

const securityFeatures = [
  { icon: Lock, title: "Encryption in Transit", description: "All data transmitted via HTTPS encryption." },
  { icon: Users, title: "Role-Based Access", description: "Admin, Supervisor, and Enumerator permission levels." },
  { icon: FileCheck, title: "Audit Trails", description: "Complete logging for compliance and accountability." },
  { icon: Server, title: "Secure Infrastructure", description: "Enterprise-grade hosting with regular backups." },
  { icon: Eye, title: "Data Ownership", description: "Your data belongs to you—export anytime." },
  { icon: Shield, title: "Compliance Ready", description: "Designed to meet organizational security requirements." },
];

export default function Security() {
  return (
    <>
      <Helmet>
        <title>Data Security - ComMicPlan</title>
      </Helmet>
      <Layout>
        <section className="hero-gradient section-padding">
          <div className="container-custom text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <Shield className="w-16 h-16 text-primary mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Data Security</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                ComMicPlan is built with security at its core, ensuring your sensitive field data is protected.
              </p>
            </motion.div>
          </div>
        </section>
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {securityFeatures.map((feature, i) => (
                <motion.div key={feature.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }} className="card-base p-6">
                  <feature.icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
