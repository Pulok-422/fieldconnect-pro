import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Download } from "lucide-react";

interface CTABannerProps {
  title?: string;
  description?: string;
  primaryCTA?: { text: string; href: string };
  secondaryCTA?: { text: string; href: string };
}

export default function CTABanner({
  title = "Ready to Transform Your Field Operations?",
  description = "Join development teams worldwide who trust ComMicPlan for offline-first data collection, real-time monitoring, and GIS mapping.",
  primaryCTA = { text: "Book a Demo", href: "/contact" },
  secondaryCTA = { text: "Download Brochure", href: "/resources" },
}: CTABannerProps) {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl gradient-bg p-8 md:p-12 lg:p-16 text-center"
        >
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2" />
          </div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4 max-w-3xl mx-auto">
              {title}
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to={primaryCTA.href}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary-foreground text-foreground font-semibold hover:bg-primary-foreground/90 transition-colors shadow-lg"
              >
                <Calendar className="w-5 h-5" />
                {primaryCTA.text}
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to={secondaryCTA.href}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-primary-foreground/30 text-primary-foreground font-semibold hover:bg-primary-foreground/10 transition-colors"
              >
                <Download className="w-5 h-5" />
                {secondaryCTA.text}
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
