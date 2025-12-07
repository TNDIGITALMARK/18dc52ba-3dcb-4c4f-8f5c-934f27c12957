"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/Footer";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function ContactPage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    propertyType: "",
    budget: "",
    timeline: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Quote Request Received!",
      description:
        "Thank you for your interest. We'll contact you within 24 hours to discuss your project.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      propertyType: "",
      budget: "",
      timeline: "",
      message: "",
    });

    setIsSubmitting(false);
  };

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[300px] flex items-center justify-center overflow-hidden bg-gradient-forest">
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get Your Free Quote</h1>
          <p className="text-xl max-w-3xl mx-auto text-white/90">
            Let's discuss your landscaping project and create a custom solution for your property
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="spacing-section bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6 text-foreground">Contact Information</h2>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-foreground mb-1">Phone</h3>
                      <a
                        href="tel:9055550123"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        (905) 555-0123
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">Mon-Sat: 8am-6pm</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-foreground mb-1">Email</h3>
                      <a
                        href="mailto:quotes@greensweepniagara.com"
                        className="text-muted-foreground hover:text-primary transition-colors break-all"
                      >
                        quotes@greensweepniagara.com
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">
                        We respond within 24 hours
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-foreground mb-1">
                        Service Area
                      </h3>
                      <p className="text-muted-foreground">
                        St. Catharines, Niagara Falls, Welland, and surrounding Niagara region
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-foreground mb-1">
                        Business Hours
                      </h3>
                      <div className="text-muted-foreground text-sm space-y-1">
                        <p>Monday - Friday: 8:00am - 6:00pm</p>
                        <p>Saturday: 9:00am - 4:00pm</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Response Badge */}
              <div className="bg-accent/10 border-2 border-accent/20 rounded-lg p-6 text-center">
                <h3 className="font-heading font-bold text-lg text-foreground mb-2">
                  24-Hour Response Guarantee
                </h3>
                <p className="text-sm text-muted-foreground">
                  We value your time. All quote requests receive a response within one business day.
                </p>
              </div>
            </div>

            {/* Quote Request Form */}
            <div className="lg:col-span-2">
              <div className="bg-card p-8 rounded-lg shadow-lg border border-border">
                <h2 className="text-2xl font-bold mb-6 text-foreground">
                  Request Your Free Quote
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full"
                      placeholder="John Smith"
                    />
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full"
                        placeholder="(905) 555-0123"
                      />
                    </div>
                  </div>

                  {/* Service Type */}
                  <div>
                    <label htmlFor="service" className="block mb-2">
                      Service Interested In *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full"
                    >
                      <option value="">Select a service...</option>
                      <option value="lawn-care">Lawn Care & Maintenance</option>
                      <option value="landscaping">Landscaping</option>
                      <option value="hardscaping">Hardscaping</option>
                      <option value="custom-design">Custom Landscape Design</option>
                      <option value="multiple">Multiple Services</option>
                      <option value="not-sure">Not Sure - Need Consultation</option>
                    </select>
                  </div>

                  {/* Property Type & Budget */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="propertyType" className="block mb-2">
                        Property Type
                      </label>
                      <select
                        id="propertyType"
                        name="propertyType"
                        value={formData.propertyType}
                        onChange={handleChange}
                        className="w-full"
                      >
                        <option value="">Select property type...</option>
                        <option value="residential">Residential Home</option>
                        <option value="condo">Condo/Townhouse</option>
                        <option value="commercial">Commercial Property</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="budget" className="block mb-2">
                        Estimated Budget
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full"
                      >
                        <option value="">Select budget range...</option>
                        <option value="under-1000">Under $1,000</option>
                        <option value="1000-3000">$1,000 - $3,000</option>
                        <option value="3000-5000">$3,000 - $5,000</option>
                        <option value="5000-10000">$5,000 - $10,000</option>
                        <option value="10000-plus">$10,000+</option>
                        <option value="not-sure">Not Sure</option>
                      </select>
                    </div>
                  </div>

                  {/* Timeline */}
                  <div>
                    <label htmlFor="timeline" className="block mb-2">
                      Preferred Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full"
                    >
                      <option value="">Select timeline...</option>
                      <option value="asap">As soon as possible</option>
                      <option value="1-2-months">Within 1-2 months</option>
                      <option value="3-6-months">Within 3-6 months</option>
                      <option value="planning">Just planning ahead</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block mb-2">
                      Project Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full"
                      placeholder="Tell us about your project, property size, specific requirements, or any questions you have..."
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full gradient-forest btn-text-white text-lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Quote Request
                        <Send className="ml-2 w-5 h-5" />
                      </>
                    )}
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    By submitting this form, you agree to be contacted by GreenSweep Niagara
                    regarding your quote request.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
