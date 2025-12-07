import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/ui/service-card";
import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/ui/cta-section";
import {
  Sprout,
  Hammer,
  Scissors,
  PenTool,
  CheckCircle,
  Leaf,
  TreeDeciduous,
  Fence,
} from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      icon: Scissors,
      title: "Lawn Care & Maintenance",
      description:
        "Keep your lawn pristine year-round with our professional maintenance services including mowing, fertilization, and seasonal care.",
      features: [
        "Weekly or bi-weekly mowing service",
        "Professional edge trimming and cleanup",
        "Customized fertilization programs",
        "Spring and fall cleanup services",
        "Weed control and pest management",
        "Aeration and overseeding",
      ],
      priceFrom: "$150/month",
      imageUrl: "/generated/lawn-care-service.png",
    },
    {
      icon: Sprout,
      title: "Landscaping & Garden Design",
      description:
        "Transform your property with beautiful gardens, thoughtful plant selections, and natural features that enhance curb appeal.",
      features: [
        "Custom garden design and installation",
        "Expert plant selection for Niagara climate",
        "Premium mulching and decorative edging",
        "Seasonal flower planting programs",
        "Perennial and shrub installations",
        "Garden bed maintenance and care",
      ],
      priceFrom: "Custom Quote",
      imageUrl: "/generated/landscaping-garden.png",
    },
    {
      icon: Hammer,
      title: "Hardscaping & Stonework",
      description:
        "Create stunning outdoor living spaces with premium stonework, patios, walkways, and functional structures built to last.",
      features: [
        "Custom patio design and installation",
        "Natural stone and paver walkways",
        "Retaining walls and terracing",
        "Outdoor kitchens and BBQ areas",
        "Fire pits and seating areas",
        "Decorative stone features",
      ],
      priceFrom: "$3,500+",
      imageUrl: "/generated/hardscaping-patio.png",
    },
    {
      icon: PenTool,
      title: "Custom Landscape Design",
      description:
        "Bring your vision to life with personalized design consultations, 3D visualizations, and complete yard transformations.",
      features: [
        "Professional design consultation",
        "3D landscape visualization",
        "Complete project management",
        "Full property transformation packages",
        "Budget-friendly design options",
        "Ongoing design support",
      ],
      priceFrom: "$200 consultation",
      imageUrl: "/generated/custom-design.png",
    },
  ];

  const additionalServices = [
    {
      icon: TreeDeciduous,
      title: "Tree & Shrub Care",
      description: "Professional pruning, trimming, and health maintenance for trees and shrubs.",
    },
    {
      icon: Leaf,
      title: "Seasonal Cleanup",
      description:
        "Spring and fall cleanup services to prepare your property for every season.",
    },
    {
      icon: Fence,
      title: "Fencing & Privacy Solutions",
      description: "Custom fencing installations for privacy, security, and aesthetic appeal.",
    },
  ];

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden bg-gradient-forest">
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Professional Landscaping Services
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-white/90">
            Comprehensive solutions for all your outdoor needs in the Niagara region
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="spacing-section bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Our Core Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From regular maintenance to complete transformations, we provide expert landscaping
              solutions tailored to your property and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="spacing-section bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Additional Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Specialized services to enhance and maintain your outdoor spaces
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-lg shadow-md border border-border hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-xl text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <Button asChild size="sm" variant="outline">
                  <Link href="/contact">Learn More</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="spacing-section bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Serving the Niagara Region
              </h2>
              <p className="text-lg text-muted-foreground">
                Proudly providing professional landscaping services throughout Niagara
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              {[
                "St. Catharines",
                "Niagara Falls",
                "Welland",
                "Niagara-on-the-Lake",
                "Fort Erie",
                "Thorold",
                "Port Colborne",
                "Grimsby",
              ].map((city, index) => (
                <div
                  key={index}
                  className="p-4 bg-card rounded-lg border border-border flex items-center justify-center"
                >
                  <p className="font-medium text-foreground">{city}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-muted-foreground mb-4">
                Don't see your area listed? Contact us to confirm service availability.
              </p>
              <Button asChild variant="outline">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="spacing-section bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Why Choose GreenSweep?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "15+ Years Combined Experience",
                  description:
                    "Mike and Sarah bring professional craftsmanship and expertise to every project.",
                },
                {
                  title: "Local Niagara Expertise",
                  description:
                    "We understand the unique climate, soil, and plant requirements of the Niagara region.",
                },
                {
                  title: "Quality Materials & Workmanship",
                  description:
                    "We use only premium materials and stand behind our work with comprehensive warranties.",
                },
                {
                  title: "Personalized Service",
                  description:
                    "Every project is tailored to your specific needs, budget, and vision for your property.",
                },
                {
                  title: "Reliable & Professional",
                  description:
                    "On-time arrivals, clear communication, and projects completed on schedule.",
                },
                {
                  title: "Competitive Pricing",
                  description:
                    "Fair, transparent pricing with no hidden fees. Free quotes for all projects.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-6 bg-card rounded-lg border border-border"
                >
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Get Started?"
        description="Request a free quote and let's discuss how we can transform your outdoor space. No obligation, just honest advice and expert recommendations."
      />

      <Footer />
    </main>
  );
}
