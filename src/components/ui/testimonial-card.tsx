import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  location: string;
  rating: number;
  text: string;
  projectType: string;
}

export function TestimonialCard({
  name,
  location,
  rating,
  text,
  projectType,
}: TestimonialCardProps) {
  return (
    <div className="bg-card p-6 rounded-lg shadow-md border border-border hover:shadow-lg transition-shadow duration-300">
      {/* Rating Stars */}
      <div className="flex items-center space-x-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < rating
                ? "text-accent fill-accent"
                : "text-muted-foreground/30"
            }`}
          />
        ))}
      </div>

      {/* Testimonial Text */}
      <p className="text-foreground italic leading-relaxed mb-4">
        "{text}"
      </p>

      {/* Customer Info */}
      <div className="flex items-center justify-between pt-4 border-t border-border">
        <div>
          <p className="font-heading font-semibold text-foreground">{name}</p>
          <p className="text-sm text-muted-foreground">{location}</p>
        </div>
        <div className="text-right">
          <p className="text-xs text-muted-foreground">Project</p>
          <p className="text-sm font-medium text-primary">{projectType}</p>
        </div>
      </div>
    </div>
  );
}
