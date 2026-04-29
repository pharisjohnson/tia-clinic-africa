import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-transformation.png";

import skincare from "@/assets/skincare-treatment.png";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tia Clinics — Where Wellness Meets Aesthetic Excellence" },
      {
        name: "description",
        content:
          "Tia Clinics: Nairobi's premier aesthetic and wellness clinic. Non-surgical facelifts, FUE hair transplants, IV therapy, and stem-cell pain management.",
      },
      { property: "og:title", content: "Tia Clinics — Wellness & Aesthetic Excellence" },
      {
        property: "og:description",
        content: "Real transformations. Refined care. Discover Tia Clinics in Nairobi.",
      },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <Hero />
      <TransformationCallout />
      <ServicesPreview />
      <Recovery />
      <TestimonialsPreview />
      <SiteFooter />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#fff8f5] via-white to-[#fdeef2]">
      {/* Decorative ambient orbs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -left-32 w-[520px] h-[520px] rounded-full opacity-60 blur-3xl"
        style={{ background: "radial-gradient(circle at center, rgba(241,93,141,0.18), transparent 70%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -right-32 w-[600px] h-[600px] rounded-full opacity-50 blur-3xl"
        style={{ background: "radial-gradient(circle at center, rgba(201,162,107,0.22), transparent 70%)" }}
      />
      {/* Subtle grain / dot texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(0,0,0,0.6) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-16 lg:py-24 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-5rem)]">
        {/* Left: text + actions */}
        <div className="relative z-10 text-foreground">
          
          <h1
            className="font-serif text-foreground font-light"
            style={{
              fontSize: "clamp(28px, 6vw, 96px)",
              lineHeight: "clamp(1.02, 1.05, 1.08)",
              letterSpacing: "clamp(-0.005em, -0.015em, -0.025em)",
            }}
          >
            <span className="lg:hidden">
              Where Wellness Meets <em className="text-gold font-light">Aesthetic Excellence</em>
            </span>
            <span className="hidden lg:inline">
              Where Wellness Meets <em className="text-gold font-light">Aesthetic Excellence.</em>
            </span>
          </h1>
          <div className="gold-divider w-32 my-8" />
          <p className="text-muted-foreground text-lg md:text-xl font-light max-w-xl leading-relaxed">
            Real journeys. Real results. Pioneering non-surgical facelifts, hair restoration,
            wellness therapy and continuum care in Nairobi.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-8">
            <Link to="/booking" className="btn-gold px-10 py-4 rounded-sm text-center">
              Book Consultation
            </Link>
            <Link
              to="/treatments"
              className="text-gold font-medium tracking-wide uppercase text-sm border-b border-gold/40 pb-1 hover:border-gold transition-colors"
            >
              Explore Treatments →
            </Link>
          </div>
        </div>

        {/* Right: hero image */}
        <div className="relative w-full aspect-[4/5] lg:aspect-auto lg:h-[80vh] rounded-sm overflow-hidden bg-gradient-to-br from-secondary to-[#f7e3e9] shadow-2xl ring-1 ring-gold/20">
          <img
            src={heroImg}
            alt="Tia Clinics patient transformation — one year wellness journey"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div aria-hidden className="absolute inset-0 ring-1 ring-inset ring-white/30" />
        </div>
      </div>
    </section>
  );
}

function TransformationCallout() {
  return (
    <section className="bg-forest text-[var(--warm-white)] py-20 px-6 lg:px-12">
      <div className="mx-auto max-w-5xl text-center">
        <p className="eyebrow text-gold mb-6">The Tia Continuum</p>
        <h2 className="font-serif text-3xl md:text-5xl leading-tight">
          Transformation is a journey — <em className="text-gold">we walk it with you.</em>
        </h2>
        <div className="gold-divider w-20 mx-auto my-8" />
        <p className="text-[var(--warm-white)]/80 font-light text-lg max-w-3xl mx-auto leading-relaxed">
          From your first consultation through nutrition, treatment, and recovery, every step is
          curated by physicians who believe true beauty is built on lasting wellness.
        </p>
      </div>
    </section>
  );
}

function ServicesPreview() {
  const services = [
    { title: "Non-Surgical Facelifts", desc: "Painless lunch-time lifts in under an hour.", tag: "Signature" },
    { title: "FUE Hair Restoration", desc: "Follicular unit extraction for natural, lasting results.", tag: "Transplant" },
    { title: "Anti-Oxidant IV Therapy", desc: "Wellness infusions that restore vitality.", tag: "Wellness" },
  ];
  return (
    <section className="py-32 px-6 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <p className="eyebrow mb-4">Our Treatments</p>
          <h2 className="font-serif text-4xl md:text-6xl text-forest max-w-3xl mx-auto leading-tight">
            Refined care, <em className="text-gold">tailored to you</em>
          </h2>
          <div className="gold-divider w-24 mx-auto mt-8" />
        </div>
        <div className="grid md:grid-cols-3 gap-px bg-border">
          {services.map((s) => (
            <article key={s.title} className="group bg-card p-10 lg:p-12 transition-all duration-500 hover:bg-secondary">
              <p className="eyebrow text-gold mb-6">{s.tag}</p>
              <h3 className="font-serif text-2xl md:text-3xl text-forest mb-4 leading-snug">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed font-light">{s.desc}</p>
            </article>
          ))}
        </div>
        <div className="text-center mt-16">
          <Link to="/treatments" className="btn-outline-gold px-10 py-4 rounded-sm">
            View All Treatments
          </Link>
        </div>
      </div>
    </section>
  );
}

function Recovery() {
  return (
    <section className="relative py-32 px-6 lg:px-12 bg-secondary">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div className="relative">
          <div className="relative w-full aspect-video rounded-sm overflow-hidden shadow-2xl bg-ink">
            <iframe
              src="https://www.viddler.com/embed/player?id=11019&playbackId=VlRkz9hnDA9w36f3XkItS97Q00ubCt02CJ6cMvjvrrxw00&color=default"
              className="absolute inset-0 w-full h-full"
              title="Tia Clinics — The Recovery Wing"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="absolute -bottom-8 -right-8 hidden md:block bg-forest text-[var(--warm-white)] p-8 max-w-xs">
            <p className="font-serif text-4xl text-gold">24/7</p>
            <p className="text-sm font-light tracking-wide mt-2 text-[var(--warm-white)]/80">
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
          <p className="text-muted-foreground text-lg leading-relaxed font-light mb-10">
            Our luxury post-operative wing is designed as an extension of home — where rest,
            nourishment, and clinical attentiveness converge.
          </p>
          <Link to="/about" className="btn-outline-gold px-8 py-3 rounded-sm">Learn More</Link>
        </div>
      </div>
    </section>
  );
}

function TestimonialsPreview() {
  return (
    <section className="py-32 px-6 lg:px-12 bg-forest text-[var(--warm-white)] relative overflow-hidden">
      <img src={skincare} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover opacity-10" />
      <div className="relative mx-auto max-w-4xl text-center">
        <p className="eyebrow text-gold mb-4">Patient Stories</p>
        <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-12">
          Voices of <em className="text-gold">transformation</em>
        </h2>
        <blockquote className="font-serif text-2xl md:text-3xl italic font-light leading-snug max-w-3xl mx-auto">
          "Tia Clinics gave me back my confidence — the care was unmatched, the results refined and entirely natural."
        </blockquote>
        <p className="mt-8 text-sm tracking-[0.2em] uppercase text-[var(--warm-white)]/70">Wanjiru K. <span className="text-gold">·</span> Wellness Journey</p>
        <div className="mt-12">
          <Link to="/stories" className="btn-gold px-10 py-4 rounded-sm">Read All Stories</Link>
        </div>
      </div>
    </section>
  );
}
