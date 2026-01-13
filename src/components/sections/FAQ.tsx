import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Does ComMicPlan work offline?",
    answer: "Yes! ComMicPlan is designed offline-first. Field teams can collect data without internet connectivity, and the data syncs automatically when they're back online. This makes it perfect for remote and low-connectivity areas.",
  },
  {
    question: "What devices does ComMicPlan support?",
    answer: "ComMicPlan supports Android devices (phones and tablets) for mobile data collection, and web browsers for form design, monitoring, and administration. iOS support is on our roadmap.",
  },
  {
    question: "Can I import my existing questionnaires?",
    answer: "Absolutely. ComMicPlan supports Excel-based form design. You can design your questionnaire in Excel and import it directly, or use our visual form builder.",
  },
  {
    question: "What export formats are available?",
    answer: "You can export data in Excel, CSV, and ZIP formats. For geospatial data, we support exports like KML/GeoJSON depending on project configuration.",
  },
  {
    question: "How does ComMicPlan handle data security?",
    answer: "Security is built into every layer. We use HTTPS encryption for all data transmission, role-based access control (Admin/Supervisor/Enumerator), secure sync protocols, and audit-friendly logging.",
  },
  {
    question: "Can ComMicPlan scale to national-level programs?",
    answer: "Yes. ComMicPlan is designed to handle everything from small pilot studies to national-scale programs with millions of records. Multi-team, multi-location deployments are fully supported.",
  },
  {
    question: "Do you offer training and support?",
    answer: "Yes, we offer training packages, documentation, and support options. Enterprise customers receive dedicated support and can request custom training for their teams.",
  },
  {
    question: "How is pricing determined?",
    answer: "Pricing depends on the scale of your deployment, the modules you need, and hosting preferences. Contact us for a tailored quote based on your specific requirements.",
  },
];

export default function FAQ() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="badge-feature mb-4">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about ComMicPlan.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b border-border">
                <AccordionTrigger className="text-left font-medium py-4 hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
