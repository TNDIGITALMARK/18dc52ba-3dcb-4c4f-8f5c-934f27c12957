import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/ui/cta-section";
import { Award, Users, Heart, Sprout, CheckCircle, Target, Shield, TrendingUp } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Customer First",
      description:
        "Your satisfaction is our priority. We listen to your vision and work tirelessly to exceed your expectations on every project.",
    },
    {
      icon: Award,
      title: "Quality Craftsmanship",
      description:
        "With 15+ years of combined experience, we bring professional expertise and attention to detail to every landscape we create.",
    },
    {
      icon: Sprout,
      title: "Sustainable Practices",
      description:
        "We prioritize eco-friendly solutions that enhance your property while respecting the natural Niagara environment.",
    },
    {
      icon: Shield,
      title: "Reliability & Trust",
      description:
        "On-time service, transparent pricing, and honest communication. We build lasting relationships with our clients.",
    },
  ];

  const teamMembers = [
    {
      name: "Mike Johnson",
      role: "Co-Founder & Lead Landscaper",
      bio: "With 8 years of professional landscaping experience, Mike specializes in hardscaping and custom outdoor living spaces. His passion for transforming yards into beautiful retreats drives every project.",
      expertise: ["Hardscaping", "Patio Design", "Retaining Walls", "Outdoor Kitchens"],
    },
    {
      name: "Sarah Chen",
      role: "Co-Founder & Design Specialist",
      bio: "Sarah brings 7 years of landscape design expertise with a focus on sustainable gardens and native plantings. Her creative eye and horticultural knowledge ensure stunning, low-maintenance results.",
      expertise: ["Garden Design", "Plant Selection", "Sustainable Landscaping", "Project Management"],
    },
  ];

  const milestones = [
    {
      year: "2024",
      title: "GreenSweep Founded",
      description: "Mike and Sarah launched GreenSweep Niagara to bring professional landscaping services to the region.",
    },
    {
      year: "2024",
      title: "First 50+ Projects",
      description: "Successfully completed diverse projects across St. Catharines, Niagara Falls, and Welland.",
    },
    {
      year: "2024",
      title: "Growing Team",
      description: "Expanded to serve more homeowners while maintaining our commitment to quality and personal service.",
    },
  ];

  const stats = [
    { number: "15+", label: "Years Combined Experience" },
    { number: "100+", label: "Happy Clients" },
    { number: "150+", label: "Projects Completed" },
    { number: "100%", label: "Satisfaction Guarantee" },
  ];

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden bg-gradient-forest">
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">About GreenSweep Niagara</h1>
          <p className="text-xl max-w-3xl mx-auto text-white/90 animate-fade-in-up">
            Your trusted local landscaping partner, creating beautiful outdoor spaces across the Niagara region
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="spacing-section bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Our Story</h2>
            </div>

            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                GreenSweep Niagara was founded in 2024 by Mike Johnson and Sarah Chen, two passionate landscaping
                professionals with a shared vision: to bring exceptional outdoor transformations to homeowners
                across the Niagara region.
              </p>

              <p>
                With over 15 years of combined experience in the landscaping industry, Mike and Sarah recognized
                a gap in the market for a company that truly listens to clients, delivers quality craftsmanship,
                and provides reliable service at fair prices. They started GreenSweep to fill that need.
              </p>

              <p>
                What began as a small operation has grown into a trusted name throughout St. Catharines,
                Niagara Falls, Welland, and surrounding communities. We've completed over 150 projects ranging
                from weekly lawn maintenance to complete yard transformations worth tens of thousands of dollars.
              </p>

              <p className="font-semibold text-foreground">
                Today, GreenSweep Niagara stands as your local landscaping partner, dedicated to creating
                outdoor spaces that enhance your property value, improve your lifestyle, and exceed your
                expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="spacing-section bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm md:text-base text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="spacing-section bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These core principles guide everything we do, from our first consultation to the final walkthrough
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-6 bg-card rounded-lg shadow-sm border border-border hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-3 text-foreground">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="spacing-section bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The passionate experts behind every beautiful landscape we create
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-card rounded-lg shadow-lg border border-border overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="p-8">
                  <div className="w-24 h-24 bg-gradient-forest rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-12 h-12 text-white" />
                  </div>

                  <div className="text-center mb-6">
                    <h3 className="font-heading font-bold text-2xl text-foreground mb-1">{member.name}</h3>
                    <p className="text-primary font-semibold">{member.role}</p>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-6">{member.bio}</p>

                  <div>
                    <h4 className="font-heading font-semibold text-foreground mb-3">Expertise:</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey Section */}
      <section className="spacing-section bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Our Journey</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From humble beginnings to becoming Niagara's trusted landscaping partner
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-forest rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {milestone.year}
                  </div>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="font-heading font-bold text-xl text-foreground mb-2">{milestone.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="spacing-section bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Why Choose GreenSweep?</h2>
            </div>

            <div className="bg-card rounded-lg shadow-lg border border-border p-8 md:p-12">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-foreground mb-2">Local Expertise</h3>
                    <p className="text-muted-foreground">
                      We understand Niagara's unique climate, soil conditions, and native plants. Our designs
                      are optimized for long-term success in this region.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                      Personalized Service
                    </h3>
                    <p className="text-muted-foreground">
                      When you work with GreenSweep, you work directly with Mike and Sarah. No middlemen, no
                      miscommunication—just clear, personal attention to your project.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                      Transparent Pricing
                    </h3>
                    <p className="text-muted-foreground">
                      No hidden fees or surprise charges. We provide detailed quotes upfront and keep you informed
                      throughout the entire process.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                      Quality Guaranteed
                    </h3>
                    <p className="text-muted-foreground">
                      We stand behind our work with comprehensive warranties. If something isn't right, we make
                      it right—no questions asked.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-foreground mb-2">Proven Results</h3>
                    <p className="text-muted-foreground">
                      Don't just take our word for it—check out our portfolio of completed projects and hear
                      from satisfied homeowners across the Niagara region.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Work with Niagara's Trusted Landscaping Experts?"
        description="Let's discuss your project and create an outdoor space that you'll love for years to come. Get your free quote today and discover the GreenSweep difference."
      />

      <Footer />
    </main>
  );
}
