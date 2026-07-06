"use client";

import { useEffect } from "react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";
import { AlertTriangle } from "lucide-react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <SectionWrapper id="error" bgVariant="dark" className="min-h-[70vh] flex items-center justify-center">
      <div className="flex flex-col items-center justify-center text-center max-w-lg mx-auto p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl">
        <AlertTriangle size={64} className="text-red-400 mb-6 opacity-90" />
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
          Something went wrong
        </h2>
        <p className="text-white/60 text-base mb-8 leading-relaxed">
          We encountered an unexpected error while loading this page. Our team has been notified.
        </p>
        <div className="flex gap-4">
          <Button onClick={reset} variant="primary" size="md">
            Try again
          </Button>
          <Button href="/" variant="outline" size="md">
            Go Home
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
}
