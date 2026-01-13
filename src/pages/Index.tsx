import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import Hero from "@/components/sections/Hero";
import TrustStrip from "@/components/sections/TrustStrip";
import FeatureCards from "@/components/sections/FeatureCards";
import HowItWorks from "@/components/sections/HowItWorks";
import UseCases from "@/components/sections/UseCases";
import SecuritySection from "@/components/sections/SecuritySection";
import PricingPreview from "@/components/sections/PricingPreview";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import CTABanner from "@/components/sections/CTABanner";
import Metrics from "@/components/sections/Metrics";

export default function Index() {
  return (
    <>
      <Helmet>
        <title>ComMicPlan - Offline-First Mobile Data Collection & GIS Microplanning</title>
        <meta
          name="description"
          content="ComMicPlan helps teams design smart forms, collect data offline on mobile, monitor quality in real time, and map coverage with GIS exports—ready for large-scale programs."
        />
        <meta
          name="keywords"
          content="mobile data collection, offline survey app, GIS mapping, microplanning, field monitoring, dashboards, data export, CAPI"
        />
        <meta property="og:title" content="ComMicPlan - Offline-First Mobile Data Collection & GIS Microplanning" />
        <meta
          property="og:description"
          content="Design forms, collect data offline, monitor quality in real time, and generate GIS outputs for large-scale field programs."
        />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "ComMicPlan",
            description: "Offline-first mobile data collection and GIS microplanning platform",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Android, Web",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
              description: "Free trial available",
            },
          })}
        </script>
      </Helmet>
      <Layout>
        <Hero />
        <TrustStrip />
        <Metrics />
        <FeatureCards />
        <HowItWorks />
        <UseCases />
        <Testimonials />
        <SecuritySection />
        <PricingPreview />
        <FAQ />
        <CTABanner />
      </Layout>
    </>
  );
}
