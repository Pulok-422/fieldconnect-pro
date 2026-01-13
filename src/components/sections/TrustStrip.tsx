import { motion } from "framer-motion";

const partners = [
  "Global Health Initiative",
  "Agricultural Development Fund",
  "UN Development Partners",
  "Ministry of Health",
  "Research Foundation",
  "Climate Action Network",
];

export default function TrustStrip() {
  return (
    <section className="py-12 border-y border-border bg-muted/30">
      <div className="container-custom">
        <p className="text-center text-sm text-muted-foreground mb-8">
          Trusted by public health, development, and research teams
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {partners.map((partner, i) => (
            <motion.div
              key={partner}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="text-muted-foreground/50 font-semibold text-sm md:text-base"
            >
              {partner}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
