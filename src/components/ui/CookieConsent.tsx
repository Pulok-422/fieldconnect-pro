import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 bg-card border-t border-border shadow-lg"
        >
          <div className="container-custom flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex-1">
              <p className="text-sm text-foreground">
                We use cookies to enhance your browsing experience, analyze site traffic, and personalize content.{" "}
                <a href="/privacy" className="text-primary hover:underline">
                  Learn more
                </a>
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={declineCookies}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Decline
              </button>
              <button
                onClick={acceptCookies}
                className="btn-primary text-sm py-2 px-4"
              >
                Accept Cookies
              </button>
              <button
                onClick={() => setIsVisible(false)}
                className="p-2 rounded-lg hover:bg-muted transition-colors"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
