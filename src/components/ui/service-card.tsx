import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  priceFrom: string;
  imageUrl?: string;
  href?: string;
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  features,
  priceFrom,
  imageUrl,
  href = "/contact",
}: ServiceCardProps) {
  return (
    <div className="group bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-border">
      {/* Image Section */}
      {imageUrl && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-overlay-subtle"></div>
          <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-lg">
            <Icon className="w-6 h-6 text-primary" />
          </div>
        </div>
      )}

      {/* Content Section */}
      <div className="p-6">
        {!imageUrl && (
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
            <Icon className="w-6 h-6 text-primary" />
          </div>
        )}

        <h3 className="font-heading font-bold text-xl text-foreground mb-2">
          {title}
        </h3>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          {description}
        </p>

        {/* Features List */}
        <ul className="space-y-2 mb-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start space-x-2 text-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-1.5"></span>
              <span className="text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>

        {/* Price and CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div>
            <p className="text-xs text-muted-foreground">Starting from</p>
            <p className="font-heading font-bold text-lg text-primary">
              {priceFrom}
            </p>
          </div>
          <Button asChild size="sm" className="gradient-grass">
            <Link href={href}>Get Quote</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
