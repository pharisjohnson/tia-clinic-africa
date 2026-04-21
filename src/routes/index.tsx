import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-wellness.png";
import logo from "@/assets/tia-logo.png";
import clinicRoom from "@/assets/clinic-room.png";
import skincare from "@/assets/skincare-treatment.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tia Clinics — Where Wellness Meets Aesthetic Excellence" },
      {
        name: "description",
        content:
          "Tia Clinics: premier aesthetic and wellness destination offering surgical and non-surgical treatments, hair restoration, and luxury post-operative recovery care.",
      },
      { property: "og:title", content: "Tia Clinics — Wellness & Aesthetic Excellence" },
      {
        property: "og:description",
        content:
          "Hair, skin & nutrition. Discover serene, world-class aesthetic care at Tia Clinics.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <Services />
      <Recovery />
      <Trust />
      <Testimonials />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-30">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 py-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <img src={logo} alt="Tia Clinics" className="h-12 w-auto" />
        </a>
        <nav className="hidden md:flex items-center gap-10 text-[0.78rem] tracking-[0.2em] uppercase text-foreground/80">
          <a href="#services" className="hover:text-gold transition-colors">Treatments</a>
          <a href="#recovery" className="hover:text-gold transition-colors">Recovery</a>
          <a href="#trust" className="hover:text-gold transition-colors">Excellence</a>
          <a href="#testimonials" className="hover:text-gold transition-colors">Stories</a>
        </nav>
        <a href="#book" className="btn-gold inline-flex items-center px-6 py-3 rounded-sm">
          Book Consultation
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
      <img
        src={heroImg}
        alt="Tia Clinics — wellness and aesthetic excellence"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/20 to-background/90" />
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-24">
        <p className="eyebrow text-gold mb-6">Hair · Skin · Nutrition</p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-ivory leading-[1.05] text-background">
          Where Wellness Meets
          <br />
          <em className="text-gold font-light">Aesthetic Excellence</em>
        </h1>
        <div className="gold-divider w-32 mx-auto my-10" />
        <p className="text-background/90 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
          A serene sanctuary where advanced science meets refined artistry — pioneering non-surgical
          facelifts, hair restoration, and continuum care in Nairobi.
        </p>
        <div className="mt-12 flex flex-col sm:flex-row gap-4 items-center justify-center">
          <a href="#book" className="btn-gold px-10 py-4 rounded-sm">Book Consultation</a>
          <a href="#services" className="btn-outline-gold px-10 py-4 rounded-sm bg-background/80">
            Explore Treatments
          </a>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    {
      title: "Non-Surgical Facelifts",
      desc: "Painless lunch-time lifts that restore contour and youth in under an hour.",
      tag: "Signature",
    },
    {
      title: "FUE Hair Restoration",
      desc: "Follicular unit extraction performed with precision for natural, lasting results.",
      tag: "Transplant",
    },
    {
      title: "Anti-Oxidant IV Therapy",
      desc: "Intravenous wellness infusions to neutralize free radicals and restore vitality.",
      tag: "Wellness",
    },
    {
      title: "Medical Facials & Peels",
      desc: "Bespoke skin protocols including microdermabrasion and microneedling.",
      tag: "Skin",
    },
    {
      title: "Botox & Dermal Fillers",
      desc: "Subtle enhancements by physicians trained in the art of natural beauty.",
      tag: "Injectables",
    },
    {
      title: "Pain Management",
      desc: "Stem cell therapy and integrative protocols for chronic pain relief.",
      tag: "Therapy",
    },
  ];

  return (
    <section id="services" className="py-32 px-6 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <p className="eyebrow mb-4">Our Treatments</p>
          <h2 className="font-serif text-4xl md:text-6xl text-forest max-w-3xl mx-auto leading-tight">
            Refined care, <em className="text-gold">tailored to you</em>
          </h2>
          <div className="gold-divider w-24 mx-auto mt-8" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {services.map((s) => (
            <article
              key={s.title}
              className="group bg-card p-10 lg:p-12 transition-all duration-500 hover:bg-secondary"
            >
              <p className="eyebrow text-gold mb-6">{s.tag}</p>
              <h3 className="font-serif text-2xl md:text-3xl text-forest mb-4 leading-snug">
                {s.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed font-light">{s.desc}</p>
              <div className="mt-8 flex items-center gap-3 text-gold text-xs tracking-[0.2em] uppercase opacity-70 group-hover:opacity-100 transition-opacity">
                <span>Discover</span>
                <span className="h-px w-8 bg-gold transition-all group-hover:w-12" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Recovery() {
  return (
    <section id="recovery" className="relative py-32 px-6 lg:px-12 bg-secondary">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div className="relative">
          <img
            src={clinicRoom}
            alt="Luxury post-operative recovery suite at Tia Clinics"
            className="w-full h-[600px] object-cover rounded-sm shadow-2xl"
          />
          <div className="absolute -bottom-8 -right-8 hidden md:block bg-forest text-background p-8 max-w-xs">
            <p className="font-serif text-4xl text-gold">24/7</p>
            <p className="text-sm font-light tracking-wide mt-2 text-background/80">
              Continuum of care, from consultation to full recovery
            </p>
          </div>
        </div>

        <div>
          <p className="eyebrow mb-6">The Recovery Wing</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-forest leading-tight">
            A sanctuary for <em className="text-gold">healing in elegance</em>
          </h2>
          <div className="gold-divider w-20 my-8" />
          <p className="text-muted-foreground text-lg leading-relaxed font-light mb-6">
            Our luxury post-operative wing is designed as an extension of home — where rest,
            nourishment, and clinical attentiveness converge. Every suite is appointed with
            sumptuous linens, private nursing, and curated wellness rituals.
          </p>
          <p className="text-muted-foreground leading-relaxed font-light mb-10">
            We believe true aesthetic excellence is measured not only in outcomes, but in how
            gracefully you arrive at them. Our continuum-of-care philosophy keeps your medical
            team beside you long after the procedure ends.
          </p>
          <ul className="space-y-4">
            {[
              "Private en-suite recovery rooms",
              "Dedicated nursing & nutrition support",
              "Bespoke aftercare wellness protocols",
              "Discreet concierge services",
            ].map((item) => (
              <li key={item} className="flex items-center gap-4">
                <span className="h-px w-8 bg-gold" />
                <span className="text-forest font-light">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Trust() {
  const pillars = [
    {
      label: "International",
      title: "Accredited Excellence",
      desc: "Standards aligned with global aesthetic medicine councils, audited annually.",
    },
    {
      label: "Technology",
      title: "3D Imaging & Diagnostics",
      desc: "Visualize your transformation before treatment with precision 3D facial mapping.",
    },
    {
      label: "Expertise",
      title: "Pioneering Physicians",
      desc: "First in the country to introduce non-surgical facelifts and stem-cell pain therapy.",
    },
  ];
  return (
    <section id="trust" className="py-32 px-6 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <p className="eyebrow mb-4">Why Tia</p>
          <h2 className="font-serif text-4xl md:text-6xl text-forest max-w-3xl mx-auto leading-tight">
            Trusted by those who <em className="text-gold">demand the finest</em>
          </h2>
          <div className="gold-divider w-24 mx-auto mt-8" />
        </div>
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {pillars.map((p) => (
            <div key={p.title} className="text-center px-4">
              <div className="mx-auto w-16 h-16 border border-gold rounded-full flex items-center justify-center mb-8">
                <span className="font-serif text-gold text-2xl italic">T</span>
              </div>
              <p className="eyebrow mb-3">{p.label}</p>
              <h3 className="font-serif text-2xl text-forest mb-4">{p.title}</h3>
              <p className="text-muted-foreground font-light leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const quotes = [
    {
      q: "Tia Clinics gave me back my confidence — the care was unmatched, the results refined and entirely natural.",
      n: "Wanjiru K.",
      r: "Non-Surgical Facelift",
    },
    {
      q: "From consultation through recovery, every detail was considered. It felt less like a clinic and more like a retreat.",
      n: "Aisha M.",
      r: "FUE Hair Restoration",
    },
  ];
  return (
    <section id="testimonials" className="py-32 px-6 lg:px-12 bg-forest text-background relative overflow-hidden">
      <img
        src={skincare}
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover opacity-10"
      />
      <div className="relative mx-auto max-w-6xl">
        <div className="text-center mb-20">
          <p className="eyebrow text-gold mb-4">Patient Stories</p>
          <h2 className="font-serif text-4xl md:text-5xl text-background max-w-3xl mx-auto leading-tight">
            Voices of <em className="text-gold">transformation</em>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {quotes.map((q) => (
            <figure key={q.n} className="border-l border-gold pl-8">
              <span className="font-serif text-gold text-6xl leading-none">"</span>
              <blockquote className="font-serif text-2xl md:text-3xl text-background/95 leading-snug italic font-light -mt-4">
                {q.q}
              </blockquote>
              <figcaption className="mt-8 text-sm tracking-[0.2em] uppercase text-background/70">
                {q.n} <span className="text-gold">·</span> {q.r}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="book" className="bg-background py-24 px-6 lg:px-12 border-t border-border">
      <div className="mx-auto max-w-5xl text-center">
        <img src={logo} alt="Tia Clinics" className="h-16 w-auto mx-auto mb-8" />
        <h3 className="font-serif text-3xl md:text-5xl text-forest leading-tight">
          Begin your <em className="text-gold">journey</em>
        </h3>
        <div className="gold-divider w-20 mx-auto my-8" />
        <p className="text-muted-foreground font-light max-w-xl mx-auto mb-10">
          Reserve a private consultation with our medical team. We look forward to welcoming you to
          Tia Clinics.
        </p>
        <a href="tel:+254782777779" className="btn-gold inline-flex px-12 py-4 rounded-sm">
          Book Consultation
        </a>
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-sm text-muted-foreground font-light">
          <div>
            <p className="eyebrow mb-3">Visit</p>
            <p>Muthaiga Grove, Nairobi</p>
          </div>
          <div>
            <p className="eyebrow mb-3">Call</p>
            <p>+254 782 777 779</p>
          </div>
          <div>
            <p className="eyebrow mb-3">Hours</p>
            <p>Mon — Sat · By appointment</p>
          </div>
        </div>
        <p className="mt-16 text-xs tracking-[0.2em] uppercase text-muted-foreground/70">
          © Tia Clinics · Hair · Skin · Nutrition
        </p>
      </div>
    </footer>
  );
}
