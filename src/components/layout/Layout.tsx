import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BackToTop from "../ui/BackToTop";
import CookieConsent from "../ui/CookieConsent";
import StickyCTA from "../ui/StickyCTA";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-[73px]">{children}</main>
      <Footer />
      <BackToTop />
      <CookieConsent />
      <StickyCTA />
    </div>
  );
}
