import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import CTABanner from "@/components/sections/CTABanner";
import { Target, Users, Lightbulb, Shield, Globe, Heart } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Accuracy",
    description: "We believe in data you can trust. Every feature is designed to ensure data quality and integrity.",
  },
  {
    icon: Users,
    title: "Transparency",
    description: "Open communication with our users and partners. Your data is yours—always accessible, always exportable.",
  },
  {
    icon: Lightbulb,
    title: "Scalability",
    description: "From pilot studies to national programs. Our platform grows with your ambitions.",
  },
  {
    icon: Shield,
    title: "Security",
    description: "Enterprise-grade security for sensitive field data. Compliance-ready for the most demanding programs.",
  },
  {
    icon: Globe,
    title: "Accessibility",
    description: "Offline-first design for the most remote locations. Field-ready anywhere in the world.",
  },
  {
    icon: Heart,
    title: "Impact",
    description: "We're driven by the impact our users create—healthier communities, better decisions, real change.",
  },
];

const team = [
  {
    initials: "CEO",
    role: "Chief Executive Officer",
    description: "Leading vision and strategy",
  },
  {
    initials: "CTO",
    role: "Chief Technology Officer",
    description: "Platform architecture and innovation",
  },
  {
    initials: "CPO",
    role: "Chief Product Officer",
    description: "User experience and product design",
  },
  {
    initials: "CSO",
    role: "Chief Solutions Officer",
    description: "Implementation and customer success",
  },
];

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us - ComMicPlan</title>
        <meta
          name="description"
          content="Learn about ComMicPlan's mission to empower field teams with reliable data collection and GIS insights for impactful programs worldwide."
        />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="hero-gradient section-padding">
          <div className="container-custom">
            <div className="max-w-3xl">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <span className="badge-feature mb-6">About Us</span>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Empowering Field Teams with Data They Can Trust
                </h1>
                <p className="text-lg text-muted-foreground">
                  ComMicPlan was born from a simple belief: field teams deserve tools that work 
                  anywhere—online or offline—and deliver insights that drive real impact. We're 
                  building the platform we wished existed when we worked in the field ourselves.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  To empower development organizations, governments, and research teams with 
                  reliable, offline-first data collection tools that transform field data into 
                  actionable insights and GIS-powered decisions.
                </p>
                <p className="text-muted-foreground mb-6">
                  We understand the challenges of field work—intermittent connectivity, complex 
                  questionnaires, distributed teams, and the need for real-time visibility. 
                  ComMicPlan addresses these challenges head-on with a platform designed by 
                  people who've been in the field.
                </p>
                <p className="text-muted-foreground">
                  From health facility assessments to vaccination campaigns, from agricultural 
                  monitoring to disaster response—we're proud to support programs that make a 
                  difference in people's lives.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-6"
              >
                <div className="card-base p-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">Designed</div>
                  <div className="text-muted-foreground">For national-scale programs</div>
                </div>
                <div className="card-base p-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">Built</div>
                  <div className="text-muted-foreground">For millions of records</div>
                </div>
                <div className="card-base p-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">Ready</div>
                  <div className="text-muted-foreground">For low-connectivity areas</div>
                </div>
                <div className="card-base p-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">Trusted</div>
                  <div className="text-muted-foreground">By global teams</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-padding bg-muted/30">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we build and every partnership we form.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, i) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="card-base p-6"
                >
                  <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Leadership Team</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Experienced leaders in data collection, software development, and international development.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {team.map((member, i) => (
                <motion.div
                  key={member.role}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-20 h-20 rounded-full gradient-bg flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary-foreground font-bold text-lg">{member.initials}</span>
                  </div>
                  <h3 className="font-semibold">{member.role}</h3>
                  <p className="text-sm text-muted-foreground">{member.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Careers */}
        <section className="section-padding bg-muted/30">
          <div className="container-custom text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Team</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
                We're always looking for passionate people who want to make a difference through technology.
              </p>
              <Link to="/contact" className="btn-primary">
                View Open Positions
              </Link>
            </motion.div>
          </div>
        </section>

        <CTABanner />
      </Layout>
    </>
  );
}
