import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import BrochureDownload from "@/components/ui/BrochureDownload";
import {
  BookOpen,
  FileText,
  Download,
  ArrowRight,
  ExternalLink,
  Calendar,
} from "lucide-react";

const documentation = [
  {
    title: "Getting Started Guide",
    description: "Learn the basics of setting up your first project in ComMicPlan.",
    category: "Basics",
  },
  {
    title: "Form Builder Reference",
    description: "Complete guide to all question types, skip logic, and validation rules.",
    category: "Forms",
  },
  {
    title: "Mobile App User Guide",
    description: "Instructions for field teams on using the Android data collection app.",
    category: "Collection",
  },
  {
    title: "Dashboard Configuration",
    description: "How to build custom dashboards and monitoring views.",
    category: "Monitoring",
  },
  {
    title: "Data Export Guide",
    description: "Export formats, automation, and integration options.",
    category: "Data",
  },
  {
    title: "Admin & Security Settings",
    description: "User management, roles, and security configuration.",
    category: "Admin",
  },
];

const blogPosts = [
  {
    title: "Offline-First Data Collection: Best Practices",
    excerpt:
      "Learn how to design and execute field surveys in low-connectivity environments with offline-first strategies.",
    date: "January 10, 2026",
    readTime: "8 min read",
    category: "Best Practices",
  },
  {
    title: "Quality Control in Field Surveys: A Practical Guide",
    excerpt:
      "Implement effective quality control measures to ensure data integrity in your field operations.",
    date: "January 5, 2026",
    readTime: "6 min read",
    category: "Quality",
  },
  {
    title: "From Survey Data to GIS Insights",
    excerpt:
      "Transform your field data into actionable geographic insights with GIS mapping and visualization.",
    date: "December 28, 2025",
    readTime: "10 min read",
    category: "GIS",
  },
];

const downloads = [
  {
    title: "ComMicPlan Product Brochure",
    description: "Comprehensive overview of features, use cases, and platform capabilities.",
    format: "PDF",
    gated: true,
  },
  {
    title: "Sample Excel Form Template",
    description: "Example questionnaire template to get started with Excel-based form design.",
    format: "XLSX",
    gated: false,
  },
];

export default function Resources() {
  const [showBrochureModal, setShowBrochureModal] = useState(false);

  return (
    <>
      <Helmet>
        <title>Resources - ComMicPlan Documentation & Downloads</title>
        <meta
          name="description"
          content="Access ComMicPlan documentation, guides, blog posts, and downloadable resources including product brochure and sample templates."
        />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="hero-gradient section-padding">
          <div className="container-custom text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <span className="badge-feature mb-6">Resources</span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Documentation & Resources
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Everything you need to get the most out of ComMicPlan—guides, templates, and insights.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Documentation */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Documentation</h2>
                <p className="text-muted-foreground">Guides and references for all skill levels</p>
              </div>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {documentation.map((doc, i) => (
                <motion.div
                  key={doc.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className="card-base p-6 group hover:-translate-y-1 transition-transform cursor-pointer"
                >
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                    {doc.category}
                  </span>
                  <h3 className="font-semibold mt-4 mb-2 group-hover:text-primary transition-colors">
                    {doc.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">{doc.description}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                    Read Guide <ArrowRight className="w-4 h-4" />
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Downloads */}
        <section className="section-padding bg-muted/30">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center">
                <Download className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Downloads</h2>
                <p className="text-muted-foreground">Brochures, templates, and more</p>
              </div>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-6 max-w-2xl">
              {downloads.map((download, i) => (
                <motion.div
                  key={download.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="card-base p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <FileText className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">{download.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{download.description}</p>
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded">
                          {download.format}
                        </span>
                        <button
                          onClick={() => download.gated && setShowBrochureModal(true)}
                          className="text-sm font-medium text-primary hover:underline inline-flex items-center gap-1"
                        >
                          <Download className="w-4 h-4" />
                          Download
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Blog */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-between mb-8"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Blog</h2>
                  <p className="text-muted-foreground">Insights and best practices</p>
                </div>
              </div>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {blogPosts.map((post, i) => (
                <motion.article
                  key={post.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="card-base p-6 group hover:-translate-y-1 transition-transform cursor-pointer"
                >
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                    {post.category}
                  </span>
                  <h3 className="font-semibold mt-4 mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">{post.excerpt}</p>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-muted/30">
          <div className="container-custom text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Need More Help?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
                Our team is ready to help you succeed with ComMicPlan.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="btn-primary">
                  <Calendar className="w-5 h-5" />
                  Book a Demo
                </Link>
                <Link to="/contact" className="btn-secondary">
                  Contact Support
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <BrochureDownload isOpen={showBrochureModal} onClose={() => setShowBrochureModal(false)} />
      </Layout>
    </>
  );
}
