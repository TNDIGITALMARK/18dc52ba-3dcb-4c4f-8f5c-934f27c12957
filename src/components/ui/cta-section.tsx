import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

interface CTASectionProps {
  title: string;
  description: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  showPhoneButton?: boolean;
}

export function CTASection({
  title,
  description,
  primaryButtonText = "Get Your Free Quote",
  primaryButtonHref = "/contact",
  showPhoneButton = true,
}: CTASectionProps) {
  return (
    <section className="spacing-section bg-gradient-forest text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            {title}
          </h2>
          <p className="text-lg text-white/90 mb-8 leading-relaxed">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-semibold text-lg px-8"
            >
              <Link href={primaryButtonHref}>
                {primaryButtonText}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            {showPhoneButton && (
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-primary font-semibold text-lg px-8"
              >
                <a href="tel:9055550123">
                  <Phone className="mr-2 w-5 h-5" />
                  (905) 555-0123
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
