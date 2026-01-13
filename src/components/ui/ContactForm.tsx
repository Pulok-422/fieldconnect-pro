import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, Loader2 } from "lucide-react";

const useCaseOptions = [
  "Health Facility Assessment",
  "Household Surveys",
  "Climate & Disaster Response",
  "Agriculture Monitoring",
  "Vaccination Microplanning",
  "Research Studies",
  "Census / Population Surveys",
  "WASH Programs",
  "Other",
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    phone: "",
    country: "",
    useCase: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="card-base p-8 text-center"
      >
        <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-success" />
        </div>
        <h3 className="text-xl font-bold mb-2">Thank You!</h3>
        <p className="text-muted-foreground mb-4">
          We've received your message and will respond within 1 business day.
        </p>
        <button
          onClick={() => {
            setIsSubmitted(false);
            setFormData({
              name: "",
              organization: "",
              email: "",
              phone: "",
              country: "",
              useCase: "",
              message: "",
            });
          }}
          className="text-primary font-medium hover:underline"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card-base p-6 md:p-8 space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="input-base"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label htmlFor="organization" className="block text-sm font-medium mb-2">
            Organization *
          </label>
          <input
            type="text"
            id="organization"
            name="organization"
            required
            value={formData.organization}
            onChange={handleChange}
            className="input-base"
            placeholder="Your Organization"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="input-base"
            placeholder="john@organization.org"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-2">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="input-base"
            placeholder="+1 (555) 123-4567"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="country" className="block text-sm font-medium mb-2">
            Country *
          </label>
          <input
            type="text"
            id="country"
            name="country"
            required
            value={formData.country}
            onChange={handleChange}
            className="input-base"
            placeholder="Your Country"
          />
        </div>
        <div>
          <label htmlFor="useCase" className="block text-sm font-medium mb-2">
            Use Case
          </label>
          <select
            id="useCase"
            name="useCase"
            value={formData.useCase}
            onChange={handleChange}
            className="input-base"
          >
            <option value="">Select a use case</option>
            {useCaseOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="input-base resize-none"
          placeholder="Tell us about your project and requirements..."
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full btn-primary py-4 text-base disabled:opacity-70"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            Send Message
          </>
        )}
      </button>

      <p className="text-xs text-muted-foreground text-center">
        By submitting, you agree to our{" "}
        <a href="/privacy" className="text-primary hover:underline">
          Privacy Policy
        </a>{" "}
        and{" "}
        <a href="/terms" className="text-primary hover:underline">
          Terms of Service
        </a>
        .
      </p>
    </form>
  );
}
