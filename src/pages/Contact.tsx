import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import ContactForm from "@/components/ui/ContactForm";
import { Mail, MapPin, Clock, Calendar, Phone } from "lucide-react";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Us - ComMicPlan</title>
        <meta
          name="description"
          content="Get in touch with ComMicPlan. Book a demo, request pricing, or contact our team for support. We typically respond within 1 business day."
        />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="hero-gradient section-padding">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <span className="badge-feature mb-6">Contact Us</span>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Let's Talk About Your Project
                </h1>
                <p className="text-lg text-muted-foreground">
                  Whether you're planning a pilot study or a national program, we'd love to hear 
                  from you. Book a demo, request pricing, or ask us anything.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid lg:grid-cols-5 gap-12">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-2"
              >
                <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form and our team will get back to you within 1 business day. 
                  We're here to help you find the right solution for your field data needs.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <a href="mailto:info@commicplan.com" className="text-muted-foreground hover:text-primary transition-colors">
                        info@commicplan.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Sales</h3>
                      <a href="mailto:sales@commicplan.com" className="text-muted-foreground hover:text-primary transition-colors">
                        sales@commicplan.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Location</h3>
                      <p className="text-muted-foreground">Global Operations</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Response Time</h3>
                      <p className="text-muted-foreground">We typically respond within 1 business day</p>
                    </div>
                  </div>
                </div>

                {/* Demo Booking */}
                <div className="mt-8 p-6 rounded-2xl bg-muted/50 border border-border">
                  <div className="flex items-center gap-3 mb-4">
                    <Calendar className="w-6 h-6 text-primary" />
                    <h3 className="font-semibold">Book a Demo</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    See ComMicPlan in action with a personalized demo. Our team will walk you 
                    through the platform and answer your questions.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Fill out the contact form with "Demo Request" in the message, and we'll 
                    send you a calendar link to schedule a convenient time.
                  </p>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-3"
              >
                <ContactForm />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Map Placeholder */}
        <section className="bg-muted/30">
          <div className="container-custom py-12">
            <div className="aspect-[3/1] rounded-2xl bg-muted flex items-center justify-center border border-border">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-muted-foreground/30 mx-auto mb-2" />
                <p className="text-muted-foreground">Global Operations</p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
