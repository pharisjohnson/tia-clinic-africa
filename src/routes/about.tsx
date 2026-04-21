import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import clinicRoom from "@/assets/clinic-room.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Tia Clinics — Pioneering Aesthetic & Wellness Care in Nairobi" },
      {
        name: "description",
        content:
          "Tia Clinics is an aesthetic and wellness clinic specializing in non-surgical facelifts, hair transplants, anti-oxidant therapy and pain management — first in Kenya.",
      },
      { property: "og:title", content: "About Tia Clinics" },
      { property: "og:description", content: "First in the country to introduce non-surgical facelifts and stem-cell pain management." },
      { property: "og:image", content: clinicRoom },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="relative py-32 px-6 lg:px-12 bg-secondary overflow-hidden">
        <div className="mx-auto max-w-5xl text-center">
          <p className="eyebrow mb-6">About Tia Clinics</p>
          <h1 className="font-serif text-5xl md:text-7xl text-forest leading-[1.05]">
            Pioneers of <em className="text-gold">aesthetic wellness</em> in Kenya
          </h1>
          <div className="gold-divider w-24 mx-auto mt-10" />
        </div>
      </section>

      <section className="py-24 px-6 lg:px-12">
        <div className="mx-auto max-w-4xl space-y-8 font-light text-lg leading-relaxed text-muted-foreground">
          <p className="first-letter:font-serif first-letter:text-7xl first-letter:text-gold first-letter:float-left first-letter:mr-3 first-letter:leading-none first-letter:mt-1">
            Tia Clinics is an aesthetic and wellness clinic, specializing in non-surgical
            facelifts, hair transplants, anti-oxidant therapy and pain management.
          </p>
          <p>
            Being the <span className="text-forest font-normal">first in the country</span> to
            introduce non-surgical facelifts and pain management through stem cell therapy, we
            also offer a wide range of aesthetic treatments including peels, botox, fillers,
            medical facials, microdermabrasion, and micro-needling, among others.
          </p>

          <div className="gold-divider w-16 my-12" />

          <h2 className="font-serif text-3xl text-forest">Non-Surgical Facelifts</h2>
          <p>
            Also known as <em>lunch-time lifts</em>, these are painless procedures that lift the
            face and any body part in an hour's time — restoring contour and youth without the
            downtime of surgery.
          </p>

          <h2 className="font-serif text-3xl text-forest">Hair Transplant</h2>
          <p>
            Our hair transplant facility offers the latest method of hair restoration known as
            FUE (Follicular Unit Extraction) — a one-day or two-day procedure depending on the
            requirement of each patient.
          </p>

          <h2 className="font-serif text-3xl text-forest">Anti-Oxidant Therapy</h2>
          <p>
            Our facility also offers anti-oxidant therapy, also known as IV therapy. With our
            current lifestyle and eating habits we put our body through a lot of oxidative
            stress, leading to a build-up of harmful free radicals in our body and blood — which
            contributes to many underlying diseases. IV therapy helps neutralize these free
            radicals and restores vitality from within.
          </p>
        </div>
      </section>

      <section className="bg-forest text-background py-24 px-6 lg:px-12">
        <div className="mx-auto max-w-5xl grid md:grid-cols-3 gap-12 text-center">
          <div>
            <p className="font-serif text-5xl text-gold">1st</p>
            <p className="mt-3 text-sm tracking-[0.18em] uppercase text-background/80">
              In Kenya for Non-Surgical Facelifts
            </p>
          </div>
          <div>
            <p className="font-serif text-5xl text-gold">10+</p>
            <p className="mt-3 text-sm tracking-[0.18em] uppercase text-background/80">
              Years of Pioneering Care
            </p>
          </div>
          <div>
            <p className="font-serif text-5xl text-gold">24/7</p>
            <p className="mt-3 text-sm tracking-[0.18em] uppercase text-background/80">
              Continuum of Recovery
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-12 text-center">
        <h2 className="font-serif text-3xl md:text-5xl text-forest">
          Begin your <em className="text-gold">journey with us</em>
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
