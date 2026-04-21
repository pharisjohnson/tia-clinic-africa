import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import skincare from "@/assets/skincare-treatment.png";

export const Route = createFileRoute("/treatments")({
  head: () => ({
    meta: [
      { title: "Treatments — Tia Clinics Aesthetic & Wellness Services" },
      {
        name: "description",
        content:
          "Explore Tia Clinics' full range of treatments: non-surgical facelifts, FUE hair transplant, IV therapy, botox, fillers, medical facials, and stem-cell pain management.",
      },
      { property: "og:title", content: "Treatments at Tia Clinics" },
      { property: "og:description", content: "Aesthetic and wellness treatments by Kenya's pioneering clinic." },
      { property: "og:image", content: skincare },
    ],
  }),
  component: TreatmentsPage,
});

const treatments = [
  {
    id: "facelifts",
    tag: "Signature",
    title: "Non-Surgical Facelifts",
    desc: "Also known as lunch-time lifts, these painless procedures lift the face and any body part in under an hour — restoring contour without surgery or downtime.",
  },
  {
    id: "hair",
    tag: "Restoration",
    title: "FUE Hair Transplant",
    desc: "Follicular Unit Extraction — the latest method of hair restoration. A one or two-day procedure tailored to each patient's needs, delivering natural, lasting results.",
  },
  {
    id: "iv",
    tag: "Wellness",
    title: "Anti-Oxidant IV Therapy",
    desc: "Intravenous wellness infusions that neutralize harmful free radicals built up from modern lifestyle and diet — restoring vitality and supporting overall health.",
  },
  {
    id: "pain",
    tag: "Therapy",
    title: "Pain Management — Stem Cell Therapy",
    desc: "We were the first in the country to introduce stem-cell-based pain management, an integrative protocol for chronic pain relief.",
  },
  {
    id: "injectables",
    tag: "Injectables",
    title: "Botox & Dermal Fillers",
    desc: "Subtle, physician-administered enhancements that smooth lines and restore volume with the artistry of natural beauty.",
  },
  {
    id: "facials",
    tag: "Skin",
    title: "Medical Facials & Chemical Peels",
    desc: "Bespoke skin protocols for clarity, glow, and renewal — formulated to your skin's specific needs.",
  },
  {
    id: "microderm",
    tag: "Skin",
    title: "Microdermabrasion",
    desc: "Gentle resurfacing that polishes away dull, dead skin to reveal smoother, brighter texture.",
  },
  {
    id: "microneedling",
    tag: "Skin",
    title: "Micro-Needling",
    desc: "Collagen induction therapy that improves skin texture, scarring, and firmness over a series of sessions.",
  },
];

function TreatmentsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="relative py-32 px-6 lg:px-12 bg-secondary">
        <div className="mx-auto max-w-5xl text-center">
          <p className="eyebrow mb-6">Our Treatments</p>
          <h1 className="font-serif text-5xl md:text-7xl text-forest leading-[1.05]">
            Refined care, <em className="text-gold">tailored to you</em>
          </h1>
          <div className="gold-divider w-24 mx-auto mt-10" />
          <p className="mt-8 text-muted-foreground font-light text-lg max-w-2xl mx-auto leading-relaxed">
            From signature non-surgical facelifts to advanced wellness therapies, every treatment
            is delivered by physicians trained in the art of natural beauty.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-12">
        <div className="mx-auto max-w-7xl grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {treatments.map((t) => (
            <article
              key={t.id}
              id={t.id}
              className="group bg-card p-10 lg:p-12 transition-all duration-500 hover:bg-secondary scroll-mt-24"
            >
              <p className="eyebrow text-gold mb-6">{t.tag}</p>
              <h2 className="font-serif text-2xl md:text-3xl text-forest mb-4 leading-snug">
                {t.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed font-light">{t.desc}</p>
              <Link
                to="/booking"
                className="mt-8 inline-flex items-center gap-3 text-gold text-xs tracking-[0.2em] uppercase opacity-80 group-hover:opacity-100 transition-opacity"
              >
                <span>Enquire</span>
                <span className="h-px w-8 bg-gold transition-all group-hover:w-12" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-forest text-background py-20 px-6 lg:px-12 text-center">
        <h2 className="font-serif text-3xl md:text-5xl">
          Not sure where to <em className="text-gold">begin?</em>
        </h2>
        <div className="gold-divider w-20 mx-auto my-8" />
        <p className="text-background/80 font-light max-w-xl mx-auto mb-10">
          Our medical team will guide you through a personalized consultation.
        </p>
        <Link to="/booking" className="btn-gold inline-flex px-10 py-4 rounded-sm">
          Book Consultation
        </Link>
      </section>

      <SiteFooter />
    </div>
  );
}
