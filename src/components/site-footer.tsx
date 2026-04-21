import { Link } from "@tanstack/react-router";
import logo from "@/assets/tia-logo.png";

export function SiteFooter() {
  return (
    <footer className="bg-background py-20 px-6 lg:px-12 border-t border-border">
      <div className="mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div>
            <img src={logo} alt="Tia Clinics" className="h-12 w-auto mb-4" />
            <p className="text-sm text-muted-foreground font-light leading-relaxed">
              Where wellness meets aesthetic excellence.
            </p>
          </div>
          <div>
            <p className="eyebrow mb-4">Explore</p>
            <ul className="space-y-2 text-sm font-light text-muted-foreground">
              <li><Link to="/" className="hover:text-gold">Home</Link></li>
              <li><Link to="/about" className="hover:text-gold">About</Link></li>
              <li><Link to="/treatments" className="hover:text-gold">Treatments</Link></li>
              <li><Link to="/stories" className="hover:text-gold">Stories</Link></li>
              <li><Link to="/booking" className="hover:text-gold">Booking</Link></li>
            </ul>
          </div>
          <div>
            <p className="eyebrow mb-4">Visit</p>
            <p className="text-sm font-light text-muted-foreground">Muthaiga Grove<br />Nairobi, Kenya</p>
          </div>
          <div>
            <p className="eyebrow mb-4">Contact</p>
            <p className="text-sm font-light text-muted-foreground">
              <a href="tel:+254782777779" className="hover:text-gold">+254 782 777 779</a><br />
              Mon — Sat · By appointment
            </p>
          </div>
        </div>
        <div className="border-t border-border pt-8 text-center">
          <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground/70">
            © Tia Clinics · Hair · Skin · Nutrition
          </p>
        </div>
      </div>
    </footer>
  );
}
