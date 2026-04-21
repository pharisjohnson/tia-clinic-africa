import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/booking")({
  head: () => ({
    meta: [
      { title: "Book a Consultation — Tia Clinics Nairobi" },
      {
        name: "description",
        content:
          "Reserve a private consultation with the medical team at Tia Clinics. Aesthetic and wellness care in Muthaiga Grove, Nairobi.",
      },
      { property: "og:title", content: "Book a Consultation — Tia Clinics" },
      { property: "og:description", content: "Reserve your private consultation today." },
    ],
  }),
  component: BookingPage,
});

const services = [
  "Non-Surgical Facelift",
  "FUE Hair Transplant",
  "Anti-Oxidant IV Therapy",
  "Pain Management (Stem Cell)",
  "Botox & Dermal Fillers",
  "Medical Facials & Peels",
  "Microdermabrasion",
  "Micro-Needling",
  "General Consultation",
];

function BookingPage() {
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      toast.success("Consultation requested", {
        description: "Our team will reach out within 24 hours to confirm.",
      });
      (e.target as HTMLFormElement).reset();
      setSubmitting(false);
    }, 600);
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <Toaster />

      <section className="relative py-28 px-6 lg:px-12 bg-secondary">
        <div className="mx-auto max-w-4xl text-center">
          <p className="eyebrow mb-6">Booking</p>
          <h1 className="font-serif text-5xl md:text-7xl text-forest leading-[1.05]">
            Reserve your <em className="text-gold">consultation</em>
          </h1>
          <div className="gold-divider w-24 mx-auto mt-10" />
          <p className="mt-8 text-muted-foreground font-light text-lg max-w-xl mx-auto">
            Share a few details and our concierge will be in touch within 24 hours.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-12">
        <div className="mx-auto max-w-5xl grid lg:grid-cols-5 gap-16">
          <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <Field label="First Name" name="firstName" required />
              <Field label="Last Name" name="lastName" required />
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <Field label="Email" name="email" type="email" required />
              <Field label="Phone" name="phone" type="tel" required />
            </div>
            <div>
              <label className="block eyebrow mb-3">Treatment of Interest</label>
              <select
                name="service"
                required
                className="w-full bg-transparent border-b border-forest/30 py-3 text-foreground font-light focus:outline-none focus:border-gold transition-colors"
              >
                <option value="">Select a treatment</option>
                {services.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </div>
            <Field label="Preferred Date" name="date" type="date" />
            <div>
              <label className="block eyebrow mb-3">Message</label>
              <textarea
                name="message"
                rows={4}
                className="w-full bg-transparent border-b border-forest/30 py-3 text-foreground font-light focus:outline-none focus:border-gold transition-colors resize-none"
                placeholder="Tell us a little about your goals..."
              />
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="btn-gold px-12 py-4 rounded-sm disabled:opacity-60"
            >
              {submitting ? "Sending..." : "Request Consultation"}
            </button>
          </form>

          <aside className="lg:col-span-2 bg-forest text-background p-10">
            <p className="eyebrow text-gold mb-6">Contact</p>
            <div className="space-y-8 font-light">
              <div>
                <p className="text-sm tracking-[0.18em] uppercase text-background/60 mb-2">Visit</p>
                <p>Muthaiga Grove<br />Nairobi, Kenya</p>
              </div>
              <div>
                <p className="text-sm tracking-[0.18em] uppercase text-background/60 mb-2">Call</p>
                <a href="tel:+254782777779" className="hover:text-gold">+254 782 777 779</a>
              </div>
              <div>
                <p className="text-sm tracking-[0.18em] uppercase text-background/60 mb-2">Hours</p>
                <p>Monday — Saturday<br />By appointment</p>
              </div>
            </div>
            <div className="gold-divider w-16 my-10" />
            <p className="text-sm text-background/70 font-light leading-relaxed italic">
              "Every consultation is private, unhurried, and guided by physicians."
            </p>
          </aside>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block eyebrow mb-3">{label}</label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full bg-transparent border-b border-forest/30 py-3 text-foreground font-light focus:outline-none focus:border-gold transition-colors"
      />
    </div>
  );
}
