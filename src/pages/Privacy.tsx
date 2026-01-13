import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";

export default function Privacy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - ComMicPlan</title>
      </Helmet>
      <Layout>
        <section className="section-padding bg-background">
          <div className="container-custom max-w-4xl">
            <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p><strong>Last Updated:</strong> January 2026</p>
              <h2 className="text-xl font-semibold text-foreground mt-8">1. Information We Collect</h2>
              <p>We collect information you provide directly, including contact details, organization information, and usage data to improve our services.</p>
              <h2 className="text-xl font-semibold text-foreground mt-8">2. How We Use Your Information</h2>
              <p>We use collected information to provide and improve ComMicPlan services, communicate with you, and ensure platform security.</p>
              <h2 className="text-xl font-semibold text-foreground mt-8">3. Data Storage & Security</h2>
              <p>Your data is stored securely with encryption in transit (HTTPS) and appropriate access controls. We implement industry-standard security measures.</p>
              <h2 className="text-xl font-semibold text-foreground mt-8">4. Your Rights</h2>
              <p>You have the right to access, correct, or delete your personal data. Contact us at privacy@commicplan.com for any requests.</p>
              <h2 className="text-xl font-semibold text-foreground mt-8">5. Contact Us</h2>
              <p>For privacy-related questions, contact us at <a href="mailto:privacy@commicplan.com" className="text-primary hover:underline">privacy@commicplan.com</a>.</p>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
