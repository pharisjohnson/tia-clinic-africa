import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import heroImg from "@/assets/hero-transformation.png";

export const Route = createFileRoute("/stories")({
  head: () => ({
    meta: [
      { title: "Patient Stories — Real Transformations at Tia Clinics" },
      {
        name: "description",
        content:
          "Real journeys, real results. Read transformation stories from patients of Tia Clinics — wellness, hair restoration, and aesthetic care in Nairobi.",
      },
      { property: "og:title", content: "Patient Stories — Tia Clinics" },
      { property: "og:description", content: "Real transformations from Tia Clinics patients." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: StoriesPage,
});

const stories = [
  {
    name: "A One-Year Journey",
    treatment: "Wellness & Nutrition Program",
    quote:
      "From the first consultation, the team treated me as a whole person — not a procedure. A year later, I feel stronger and more confident than ever.",
    image: heroImg,
  },
  {
    name: "Wanjiru K.",
    treatment: "Non-Surgical Facelift",
    quote:
      "Tia Clinics gave me back my confidence — the care was unmatched, the results refined and entirely natural.",
  },
  {
    name: "Aisha M.",
    treatment: "FUE Hair Restoration",
    quote:
      "From consultation through recovery, every detail was considered. It felt less like a clinic and more like a retreat.",
  },
  {
    name: "James O.",
    treatment: "Stem Cell Pain Therapy",
    quote:
      "After years of chronic pain, the difference in just a few sessions has been life-changing.",
  },
];

function StoriesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="relative py-32 px-6 lg:px-12 bg-secondary">
        <div className="mx-auto max-w-5xl text-center">
          <p className="eyebrow mb-6">Patient Stories</p>
          <h1 className="font-serif text-5xl md:text-7xl text-forest leading-[1.05]">
            Voices of <em className="text-gold">transformation</em>
          </h1>
          <div className="gold-divider w-24 mx-auto mt-10" />
        </div>
      </section>

      <section className="py-24 px-6 lg:px-12">
        <div className="mx-auto max-w-6xl space-y-20">
          {stories.map((s, i) => (
            <article
              key={s.name}
              className={`grid lg:grid-cols-5 gap-12 items-center ${
                i % 2 === 1 ? "lg:[&>figure]:order-2" : ""
              }`}
            >
              {s.image ? (
                <figure className="lg:col-span-2">
                  <img src={s.image} alt={s.name} className="w-full h-[420px] object-cover object-top rounded-sm shadow-xl" />
                </figure>
              ) : (
                <figure className="lg:col-span-2 bg-secondary h-[420px] flex items-center justify-center rounded-sm">
                  <span className="font-serif text-9xl text-gold/40 italic">
                    {s.name.charAt(0)}
                  </span>
                </figure>
              )}
              <div className="lg:col-span-3">
                <p className="eyebrow text-gold mb-4">{s.treatment}</p>
                <blockquote className="font-serif text-2xl md:text-3xl text-forest italic font-light leading-snug">
                  "{s.quote}"
                </blockquote>
                <div className="gold-divider w-16 my-6" />
                <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground">{s.name}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-forest text-background py-20 px-6 lg:px-12 text-center">
        <h2 className="font-serif text-3xl md:text-5xl">
          Your story <em className="text-gold">begins here</em>
        </h2>
        <div className="gold-divider w-20 mx-auto my-8" />
        <Link to="/booking" className="btn-gold inline-flex px-10 py-4 rounded-sm">
          Book Consultation
        </Link>
      </section>

      <SiteFooter />
    </div>
  );
}
