import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Play, CheckCircle } from "lucide-react";
import heroMockup from "@/assets/hero-mockup.png";

const highlights = [
  "Offline-first data collection",
  "Real-time monitoring",
  "GIS mapping & exports",
];

export default function Hero() {
  return (
    <section className="hero-gradient overflow-hidden">
      <div className="container-custom section-padding pb-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="badge-feature mb-6">
              Trusted by development teams worldwide
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-balance">
              Field Data Collection & GIS Microplanning—
              <span className="gradient-text">Offline First</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl">
              ComMicPlan helps teams design smart forms, collect data offline on mobile, 
              monitor quality in real time, and map coverage with GIS exports—ready for 
              large-scale programs.
            </p>

            {/* Highlights */}
            <div className="flex flex-wrap gap-4 mb-8">
              {highlights.map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-foreground">
                  <CheckCircle className="w-5 h-5 text-success" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-primary text-base">
                Book a Demo
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/contact" className="btn-secondary text-base">
                <Play className="w-5 h-5" />
                Start Free Trial
              </Link>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={heroMockup}
                alt="ComMicPlan platform showing mobile survey app and web dashboard with GIS mapping"
                className="w-full h-auto"
              />
            </div>
            {/* Floating stat cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-card rounded-xl shadow-card p-4 border border-border"
            >
              <div className="text-2xl font-bold text-primary">Millions</div>
              <div className="text-sm text-muted-foreground">Records Supported</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -top-6 -right-6 bg-card rounded-xl shadow-card p-4 border border-border"
            >
              <div className="text-2xl font-bold text-success">100%</div>
              <div className="text-sm text-muted-foreground">Offline Ready</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
