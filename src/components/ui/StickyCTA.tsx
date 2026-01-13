import { Link } from "react-router-dom";
import { Calendar, Play } from "lucide-react";

export default function StickyCTA() {
  return (
    <>
      {/* Desktop: Sticky side button */}
      <div className="hidden lg:block fixed right-0 top-1/2 -translate-y-1/2 z-40">
        <Link
          to="/contact"
          className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-3 rounded-l-xl shadow-lg hover:shadow-xl transition-all hover:pr-6 group"
        >
          <Calendar className="w-5 h-5" />
          <span className="font-medium text-sm whitespace-nowrap">Book Demo</span>
        </Link>
      </div>

      {/* Mobile: Bottom bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-md border-t border-border p-3">
        <div className="flex gap-3">
          <Link
            to="/contact"
            className="flex-1 btn-secondary text-center text-sm py-2.5"
          >
            <Play className="w-4 h-4 inline mr-2" />
            Free Trial
          </Link>
          <Link
            to="/contact"
            className="flex-1 btn-primary text-center text-sm py-2.5"
          >
            <Calendar className="w-4 h-4 inline mr-2" />
            Book Demo
          </Link>
        </div>
      </div>
    </>
  );
}
