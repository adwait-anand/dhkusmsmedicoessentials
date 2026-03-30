import { BookOpen, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/30 bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <BookOpen className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-foreground tracking-tight">
                  DH-KUSMS
                </h3>
                <p className="text-[10px] text-muted-foreground tracking-widest uppercase">Medical Exam Preparation</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Your trusted partner for FMGE, NMCLE and university exam preparation. Quality notes crafted by expert faculty.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-display font-bold text-foreground tracking-tight">Quick Links</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li className="hover:text-primary cursor-pointer transition-colors duration-200">About Us</li>
              <li className="hover:text-primary cursor-pointer transition-colors duration-200">Sample Notes</li>
              <li className="hover:text-primary cursor-pointer transition-colors duration-200">Testimonials</li>
              <li className="hover:text-primary cursor-pointer transition-colors duration-200">FAQ</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-display font-bold text-foreground tracking-tight">Contact Us</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-primary" />
                <span>dhkusms@dhulikhel.com</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-primary" />
                <span>+9779823409169</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
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

        <div className="mt-10 border-t border-border/30 pt-8 text-center text-sm text-muted-foreground">
          <p>© 2026 DH-KUSMS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
