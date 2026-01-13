import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";

export default function Terms() {
  return (
    <>
      <Helmet>
        <title>Terms of Service - ComMicPlan</title>
      </Helmet>
      <Layout>
        <section className="section-padding bg-background">
          <div className="container-custom max-w-4xl">
            <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p><strong>Last Updated:</strong> January 2026</p>
              <h2 className="text-xl font-semibold text-foreground mt-8">1. Acceptance of Terms</h2>
              <p>By accessing ComMicPlan, you agree to these terms. If you disagree, please do not use our services.</p>
              <h2 className="text-xl font-semibold text-foreground mt-8">2. Service Description</h2>
              <p>ComMicPlan provides mobile data collection, monitoring, and GIS mapping tools for field programs.</p>
              <h2 className="text-xl font-semibold text-foreground mt-8">3. User Responsibilities</h2>
              <p>You are responsible for maintaining account security, ensuring data accuracy, and complying with applicable laws.</p>
              <h2 className="text-xl font-semibold text-foreground mt-8">4. Data Ownership</h2>
              <p>You retain full ownership of all data collected through ComMicPlan. We do not claim any rights to your data.</p>
              <h2 className="text-xl font-semibold text-foreground mt-8">5. Contact</h2>
              <p>Questions? Contact <a href="mailto:legal@commicplan.com" className="text-primary hover:underline">legal@commicplan.com</a>.</p>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
