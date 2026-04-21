import { BookOpen, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/30 bg-card/30 backdrop-blur-sm relative">
      <div className="container mx-auto px-4 lg:px-6 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl gradient-button text-primary-foreground shadow-glow-soft">
                <BookOpen className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display text-base font-black text-primary tracking-tighter uppercase">
                  DH-KUSMS
                </h3>
                <p className="text-[10px] text-muted-foreground tracking-widest uppercase">Medico Essentials</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Precision Crafted for Clinicians. Your trusted partner in medical education and practice.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-display font-bold text-foreground tracking-tight uppercase text-xs">Quick Links</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li className="hover:text-primary cursor-pointer transition-colors duration-200">About Us</li>
              <li className="hover:text-primary cursor-pointer transition-colors duration-200">Sample Notes</li>
              <li className="hover:text-primary cursor-pointer transition-colors duration-200">Testimonials</li>
              <li className="hover:text-primary cursor-pointer transition-colors duration-200">FAQ</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-display font-bold text-foreground tracking-tight uppercase text-xs">Products</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li className="hover:text-primary cursor-pointer transition-colors duration-200">Handwritten Notes</li>
              <li className="hover:text-primary cursor-pointer transition-colors duration-200">FastTrack Books</li>
              <li className="hover:text-primary cursor-pointer transition-colors duration-200">Medical Instruments</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-display font-bold text-foreground tracking-tight uppercase text-xs">Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <span>dhkusms@dhulikhel.com</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <span>+977 9823409169</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <a
                  href="https://maps.app.goo.gl/F1ERUhZwjeqQbfMx6?g_st=ac"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors duration-200"
                >
                  View on Google Maps
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border/30 pt-8 text-center text-xs text-muted-foreground tracking-wide">
          <p>© 2026 DH-KUSMS Medico Essentials. Precision Crafted for Clinicians.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
