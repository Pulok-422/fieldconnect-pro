import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "ComMicPlan transformed how we manage household surveys. The offline capability means our field teams can work in the most remote areas without worrying about connectivity.",
    author: "M&E Manager",
    role: "International Health Organization",
    avatar: "ME",
  },
  {
    quote: "The real-time monitoring dashboard gives us instant visibility into field operations. We can spot issues early and provide immediate feedback to enumerators.",
    author: "Field Coordinator",
    role: "Development NGO",
    avatar: "FC",
  },
  {
    quote: "Being able to visualize our survey data on maps and export to GIS formats has been invaluable for our microplanning activities. The coverage maps drive better decision-making.",
    author: "GIS Analyst",
    role: "Public Health Research Institute",
    avatar: "GA",
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="badge-feature mb-4">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by Field Teams Worldwide
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from M&E professionals, field coordinators, and researchers who rely on ComMicPlan.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="card-base p-6 lg:p-8"
            >
              <Quote className="w-10 h-10 text-primary/20 mb-4" />
              <blockquote className="text-foreground mb-6">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center text-primary-foreground font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
