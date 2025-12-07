import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-forest text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">GS</span>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-xl leading-none">
                  GreenSweep
                </span>
                <span className="text-xs text-white/70">Niagara</span>
              </div>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Transforming Niagara properties into beautiful, functional outdoor spaces since 2024.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white/80 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/80 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/80 hover:text-white transition-colors">
                  Contact & Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-grass-green">Lawn Care & Maintenance</li>
              <li className="text-grass-green">Landscaping</li>
              <li className="text-grass-green">Hardscaping</li>
              <li className="text-grass-green">Custom Design</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <a
                href="tel:9055550123"
                className="flex items-start space-x-2 text-white/80 hover:text-white transition-colors"
              >
                <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>(905) 555-0123</span>
              </a>
              <a
                href="mailto:quotes@greensweepniagara.com"
                className="flex items-start space-x-2 text-white/80 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>quotes@greensweepniagara.com</span>
              </a>
              <div className="flex items-start space-x-2 text-white/80">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>
                  Serving St. Catharines, Niagara Falls, Welland, and surrounding Niagara region
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/60 text-sm">
          <p>
            &copy; {currentYear} GreenSweep Niagara. All rights reserved. | Locally owned and operated since 2024.
          </p>
        </div>
      </div>
    </footer>
  );
}
