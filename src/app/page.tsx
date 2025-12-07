import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/ui/service-card";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { CTASection } from "@/components/ui/cta-section";
import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import {
  Sprout,
  Hammer,
  Scissors,
  PenTool,
  CheckCircle,
  ArrowRight,
  Award,
  Users,
  Clock,
} from "lucide-react";

export default function HomePage() {
  const services = [
    {
      icon: Scissors,
      title: "Lawn Care & Maintenance",
      description:
        "Keep your lawn pristine year-round with our professional maintenance services.",
      features: [
        "Weekly or bi-weekly mowing",
        "Edge trimming and cleanup",
        "Fertilization programs",
        "Seasonal cleanup services",
      ],
      priceFrom: "$150/month",
      imageUrl: "/generated/lawn-care-service.png",
    },
    {
      icon: Sprout,
      title: "Landscaping",
      description:
        "Transform your property with beautiful gardens, plants, and natural features.",
      features: [
        "Garden design and installation",
        "Plant selection and placement",
        "Mulching and edging",
        "Seasonal plantings",
      ],
      priceFrom: "Custom Quote",
      imageUrl: "/generated/landscaping-garden.png",
    },
    {
      icon: Hammer,
      title: "Hardscaping",
      description:
        "Create stunning outdoor living spaces with premium stonework and structures.",
      features: [
        "Patios and walkways",
        "Retaining walls",
        "Outdoor kitchens",
        "Fire pits and seating areas",
      ],
      priceFrom: "$3,500+",
      imageUrl: "/generated/hardscaping-patio.png",
    },
    {
      icon: PenTool,
      title: "Custom Landscape Design",
      description:
        "Bring your vision to life with personalized design and complete yard transformations.",
      features: [
        "Professional design consultation",
        "3D visualization",
        "Complete project management",
        "Full property transformation",
      ],
      priceFrom: "$200 consultation",
      imageUrl: "/generated/custom-design.png",
    },
  ];

  const testimonials = [
    {
      name: "Jennifer Morrison",
      location: "St. Catharines, ON",
      rating: 5,
      text: "GreenSweep transformed our backyard into an absolute paradise! The patio they built is stunning, and our kids love the new play area. Mike and Sarah were professional, creative, and a pleasure to work with.",
      projectType: "Full Yard Makeover",
    },
    {
      name: "David Chen",
      location: "Niagara Falls, ON",
      rating: 5,
      text: "Best landscaping company in the region! They maintain our lawn weekly and it's never looked better. Reliable, affordable, and they genuinely care about quality work.",
      projectType: "Lawn Maintenance",
    },
    {
      name: "Patricia Williams",
      location: "Welland, ON",
      rating: 5,
      text: "The custom design service exceeded our expectations. They listened to our needs, created a beautiful plan, and executed it flawlessly. Our property value has definitely increased!",
      projectType: "Custom Design",
    },
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: "15+ Years Experience",
      description:
        "Combined expertise from Mike and Sarah, bringing professional craftsmanship to every project.",
    },
    {
      icon: Users,
      title: "Locally Owned & Operated",
      description:
        "Based in Niagara since 2024, we understand the local climate and your needs.",
    },
    {
      icon: CheckCircle,
      title: "Quality Guaranteed",
      description:
        "We stand behind our work with comprehensive warranties and ongoing support.",
    },
    {
      icon: Clock,
      title: "Reliable Service",
      description:
        "On-time arrivals, clear communication, and projects completed on schedule.",
    },
  ];

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/generated/hero-landscape.png)" }}
        >
          <div className="absolute inset-0 gradient-overlay-dark"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center hero-text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Transform Your Outdoor Space
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in-up">
            Professional landscaping services in Niagara. From beautiful lawns to complete yard
            transformations, we create outdoor spaces your family will love.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8">
              <Link href="/contact">
                Get Your Free Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-primary text-lg px-8"
            >
              <Link href="/services">View Our Services</Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>15+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>Locally Owned Since 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>Serving All Niagara Region</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="spacing-section bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Welcome to GreenSweep Niagara
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Founded in 2024 by Mike and Sarah, GreenSweep Niagara brings over 15 years of
              combined landscaping expertise to the Niagara region. We're a locally owned business
              dedicated to creating beautiful, functional outdoor spaces that enhance your
              property and your lifestyle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="text-center p-6 bg-card rounded-lg shadow-sm border border-border hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2 text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="spacing-section bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From regular lawn maintenance to complete property transformations, we offer
              comprehensive landscaping solutions tailored to your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" variant="outline" className="font-semibold">
              <Link href="/services">
                View All Services & Pricing
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="spacing-section bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it. Hear from satisfied homeowners across the Niagara
              region.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Transform Your Outdoor Space?"
        description="Get a free, no-obligation quote for your landscaping project. We'll work with you to create a beautiful, functional outdoor space that fits your budget and exceeds your expectations."
      />

      <Footer />
    </main>
  );
}
