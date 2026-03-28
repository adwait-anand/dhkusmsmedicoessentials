import { BookOpen, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <BookOpen className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground">
                  DH-KUSMS
                </h3>
                <p className="text-xs text-muted-foreground">Medical Exam Preparation</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Your trusted partner for FMGE, NMCLE and university exam preparation. Quality notes crafted by expert faculty.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-display font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="hover:text-primary cursor-pointer transition-colors">About Us</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Sample Notes</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Testimonials</li>
              <li className="hover:text-primary cursor-pointer transition-colors">FAQ</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-display font-semibold text-foreground">Contact Us</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>dhkusms@dhulikhel.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>+9779823409169</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <a
                  href="https://maps.app.goo.gl/F1ERUhZwjeqQbfMx6?g_st=ac"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  View on Google Maps
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Embedded Google Map */}
        <div className="mt-8 border-t border-border pt-8">
          <h4 className="mb-4 font-display font-semibold text-foreground text-center">Our Location</h4>
          <div className="rounded-lg overflow-hidden border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1000!2d85.5422!3d27.6217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb09a7f1e6d4b7%3A0x5e2e7b0e9b1e1e1e!2sDH-KUSMS%20Medico%20Essentials!5e0!3m2!1sen!2snp!4v1700000000000!5m2!1sen!2snp"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="DH-KUSMS Shop Location"
            />
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© 2026 DH-KUSMS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
