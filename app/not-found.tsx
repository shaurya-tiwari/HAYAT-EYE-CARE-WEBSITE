import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <SectionWrapper id="not-found" bgVariant="default" className="min-h-[70vh] flex items-center justify-center">
      <div className="flex flex-col items-center justify-center text-center max-w-lg mx-auto">
        <AlertCircle size={64} className="text-[--primary] mb-6 opacity-80" />
        <h2 className="text-4xl md:text-5xl font-extrabold text-[--text-primary] tracking-tight mb-4">
          Page Not Found
        </h2>
        <p className="text-[--text-muted] text-lg mb-8 leading-relaxed">
          The page you are looking for doesn't exist, has been moved, or is temporarily unavailable.
        </p>
        <Button href="/" variant="primary" size="lg">
          Return Home
        </Button>
      </div>
    </SectionWrapper>
  );
}
