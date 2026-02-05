import Image from "next/image";
import {
  Phone,
  Shield,
  Clock,
  Award,
  Star,
  ChevronRight,
  MapPin,
  Wrench,
  Home,
  Layers,
  Snowflake,
  CheckCircle,
  Users,
  ThumbsUp,
  Zap,
  Mail,
  Facebook,
} from "lucide-react";

/* ───────────────────────── NAV ───────────────────────── */
function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="A2Z Roofing LLC"
              width={160}
              height={107}
              className="h-14 w-auto object-contain"
              priority
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-white/80 hover:text-white text-sm font-medium transition-colors">Services</a>
            <a href="#about" className="text-white/80 hover:text-white text-sm font-medium transition-colors">About</a>
            <a href="#areas" className="text-white/80 hover:text-white text-sm font-medium transition-colors">Service Areas</a>
            <a href="#testimonials" className="text-white/80 hover:text-white text-sm font-medium transition-colors">Reviews</a>
            <a href="#contact" className="text-white/80 hover:text-white text-sm font-medium transition-colors">Contact</a>
          </div>

          {/* CTA */}
          <div className="flex items-center gap-4">
            <a
              href="tel:9707734833"
              className="hidden sm:flex items-center gap-2 text-white font-semibold"
            >
              <Phone className="w-4 h-4 text-accent" />
              (970) 773-4833
            </a>
            <a
              href="#contact"
              className="bg-accent hover:bg-accent-hover text-navy-dark font-bold px-6 py-2.5 rounded-lg text-sm transition-all"
            >
              Free Estimate
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

/* ───────────────────────── HERO ───────────────────────── */
function Hero() {
  return (
    <section className="relative min-h-[100vh] flex items-center pt-20">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=2000&q=80')",
        }}
      />
      <div className="hero-gradient absolute inset-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="animate-fade-in-up inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
            <Shield className="w-4 h-4 text-accent" />
            <span className="text-white/90 text-sm font-medium">
              Fully Licensed &amp; Insured &bull; 17+ Years Experience
            </span>
          </div>

          <h1 className="animate-fade-in-up animation-delay-200 text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight">
            Colorado&apos;s Western Slope
            <span className="block text-accent mt-2">Roofing Experts</span>
          </h1>

          <p className="animate-fade-in-up animation-delay-400 mt-6 text-xl text-white/80 max-w-xl leading-relaxed">
            Family-owned and trusted since day one. From Aspen to Parachute, we
            deliver clean, reliable, and fast quality roofing &mdash; backed by
            our 100% satisfaction guarantee.
          </p>

          <div className="animate-fade-in-up animation-delay-600 mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="cta-pulse inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-navy-dark font-bold px-8 py-4 rounded-xl text-lg transition-all"
            >
              Get Your Free Estimate
              <ChevronRight className="w-5 h-5" />
            </a>
            <a
              href="tel:9707734833"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </div>
        </div>
      </div>

      {/* Bottom stats bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-navy-dark/80 backdrop-blur-md border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Award, label: "Years Experience", value: "17+" },
              { icon: ThumbsUp, label: "Satisfaction Rate", value: "100%" },
              { icon: Clock, label: "Response Time", value: "Same Day" },
              { icon: Shield, label: "Warranty", value: "5 Year" },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center gap-3">
                <div className="w-11 h-11 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                  <stat.icon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="text-white font-bold text-lg leading-tight">
                    {stat.value}
                  </div>
                  <div className="text-white/50 text-xs font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── SECTION HEADER ───────────────────────── */
type SectionHeaderProps = {
  subtitle: string;
  title: string;
  description: string;
  light?: boolean;
};

function SectionHeader({ subtitle, title, description, light = false }: SectionHeaderProps) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-16">
      <span className="inline-block text-accent font-semibold text-sm tracking-widest uppercase mb-3">
        {subtitle}
      </span>
      <h2 className={`text-4xl sm:text-5xl font-extrabold tracking-tight ${light ? "text-white" : "text-navy"}`}>
        {title}
      </h2>
      <p className={`mt-4 text-lg leading-relaxed ${light ? "text-white/60" : "text-gray-500"}`}>
        {description}
      </p>
    </div>
  );
}

/* ───────────────────────── SERVICES ───────────────────────── */
const services = [
  {
    icon: Layers,
    title: "New Roof Installation",
    description:
      "Complete new construction roofing with premium materials and expert craftsmanship.",
    features: ["Architectural Shingles", "Pro-Panel Metal", "Standing Seam"],
  },
  {
    icon: Wrench,
    title: "Roof Repairs",
    description:
      "Fast, reliable repairs to protect your home from leaks and weather damage.",
    features: ["Leak Detection", "Storm Damage", "Emergency Repairs"],
  },
  {
    icon: Home,
    title: "Re-Roofing & Tear-Offs",
    description:
      "Full tear-off and replacement with modern, energy-efficient roofing systems.",
    features: ["Complete Tear-Off", "Deck Inspection", "New Installation"],
  },
  {
    icon: Shield,
    title: "Roof Inspections",
    description:
      "Comprehensive inspections to assess your roof's condition and remaining lifespan.",
    features: ["Detailed Reports", "Photo Documentation", "Free Estimates"],
  },
  {
    icon: Layers,
    title: "Flat Roof Systems",
    description:
      "Single-ply membrane flat roofing solutions for commercial and residential properties.",
    features: ["TPO / EPDM", "Commercial Grade", "Waterproof Warranty"],
  },
  {
    icon: Snowflake,
    title: "Snow & Ice Removal",
    description:
      "Protect your roof from heavy Colorado snow loads and ice dam damage.",
    features: ["Ice Dam Removal", "Snow Load Relief", "Preventive Solutions"],
  },
];

function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="What We Do"
          title="Roofing Services"
          description="From new installations to emergency repairs, A2Z has you covered with comprehensive roofing solutions."
        />

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="service-card bg-white border border-gray-100 rounded-2xl p-8 shadow-sm"
            >
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                <s.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">{s.title}</h3>
              <p className="text-gray-500 leading-relaxed mb-5">
                {s.description}
              </p>
              <ul className="space-y-2">
                {s.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2 text-sm text-gray-600"
                  >
                    <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── ABOUT ───────────────────────── */
function About() {
  return (
    <section id="about" className="py-24 bg-slate-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div
              className="aspect-[4/3] rounded-2xl bg-cover bg-center shadow-2xl"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80')",
              }}
            />
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-white rounded-xl shadow-xl p-5 border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-navy-dark" />
                </div>
                <div>
                  <div className="font-bold text-navy text-2xl">17+</div>
                  <div className="text-gray-500 text-sm">Years in Business</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="inline-block text-accent font-semibold text-sm tracking-widest uppercase mb-3">
              About A2Z Roofing
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-navy tracking-tight leading-tight">
              Family-Owned. <br />
              Community Trusted.
            </h2>
            <p className="mt-6 text-gray-600 text-lg leading-relaxed">
              A2Z Roofing LLC is a family-owned and operated roofing company
              based in Silt, Colorado. For over 17 years, we&apos;ve been the
              Western Slope&apos;s go-to roofers &mdash; delivering clean,
              reliable, and fast quality work using only the best products and
              materials.
            </p>
            <p className="mt-4 text-gray-600 text-lg leading-relaxed">
              We answer and return your calls the same day. Our customers
              can always rely on our communication, professionalism, and
              commitment to getting the job done right the first time.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-6">
              {[
                { icon: Shield, text: "Licensed & Insured" },
                { icon: Users, text: "Family-Owned" },
                { icon: ThumbsUp, text: "100% Satisfaction" },
                { icon: Zap, text: "Same-Day Response" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-navy font-semibold text-sm">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="mt-10 inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-white font-bold px-8 py-4 rounded-xl text-base transition-all"
            >
              Get a Free Estimate
              <ChevronRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── SERVICE AREAS ───────────────────────── */
const areas = [
  "Silt",
  "Rifle",
  "Glenwood Springs",
  "Carbondale",
  "Basalt",
  "Aspen",
  "New Castle",
  "Parachute",
  "Battlement Mesa",
  "Meeker",
  "Craig",
  "Vail",
];

function ServiceAreas() {
  return (
    <section id="areas" className="py-24 bg-navy relative overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="Where We Work"
          title="Serving the Roaring Fork Valley & Beyond"
          description="From Aspen to Parachute, Rifle to Meeker \u2014 we cover the entire Western Slope of Colorado."
          light
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {areas.map((area) => (
            <div
              key={area}
              className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl px-4 py-3 transition-all"
            >
              <MapPin className="w-4 h-4 text-accent shrink-0" />
              <span className="text-white font-medium text-sm">{area}</span>
            </div>
          ))}
        </div>

        <p className="text-center text-white/40 text-sm mt-8">
          Don&apos;t see your area? Give us a call &mdash; we likely serve your
          neighborhood too.
        </p>
      </div>
    </section>
  );
}

/* ───────────────────────── TESTIMONIALS ───────────────────────── */
const testimonials = [
  {
    name: "Mike & Sarah Thompson",
    location: "Glenwood Springs, CO",
    text: "A2Z Roofing replaced our entire roof after hail damage. They were fast, professional, and the new roof looks incredible. Best roofing experience we've ever had.",
    rating: 5,
  },
  {
    name: "Jennifer Hayes",
    location: "Rifle, CO",
    text: "Called about a leak on a Sunday and they were out Monday morning. Fixed it perfectly and at a fair price. This is what customer service should look like.",
    rating: 5,
  },
  {
    name: "Robert & Linda Garcia",
    location: "Carbondale, CO",
    text: "We got three quotes and A2Z was the most thorough and professional. They installed a beautiful standing seam metal roof. Five stars all the way.",
    rating: 5,
  },
];

function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="Testimonials"
          title="What Our Customers Say"
          description="Real reviews from real homeowners across the Western Slope."
        />

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="testimonial-card bg-white border border-gray-100 rounded-2xl p-8 shadow-sm"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-accent fill-accent"
                  />
                ))}
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-navy rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-navy text-sm">
                    {t.name}
                  </div>
                  <div className="text-gray-400 text-xs">{t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── CTA ───────────────────────── */
function CTA() {
  return (
    <section
      id="contact"
      className="relative py-24 overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&w=2000&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-navy/90" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block text-accent font-semibold text-sm tracking-widest uppercase mb-3">
          Ready to Get Started?
        </span>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Get Your Free Roof Estimate Today
        </h2>
        <p className="mt-4 text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
          We&apos;ll come evaluate your roof, provide our honest and
          professional opinion, and send you a competitive estimate &mdash;
          all at no cost to you.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="tel:9707734833"
            className="cta-pulse inline-flex items-center justify-center gap-3 bg-accent hover:bg-accent-hover text-navy-dark font-bold px-10 py-5 rounded-xl text-lg transition-all"
          >
            <Phone className="w-6 h-6" />
            (970) 773-4833
          </a>
          <a
            href="mailto:rickyarchuleta04@gmail.com"
            className="inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-bold px-10 py-5 rounded-xl text-lg transition-all"
          >
            <Mail className="w-6 h-6" />
            Email Us
          </a>
        </div>

        <p className="mt-6 text-white/40 text-sm">
          Same-day call response &bull; Free estimates &bull; 5-year warranty
        </p>
      </div>
    </section>
  );
}

/* ───────────────────────── FOOTER ───────────────────────── */
function Footer() {
  return (
    <footer className="bg-navy-dark py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <Image
                src="/logo.png"
                alt="A2Z Roofing LLC"
                width={160}
                height={107}
                className="h-16 w-auto object-contain"
              />
            </div>
            <p className="text-white/50 leading-relaxed max-w-md">
              Family-owned and operated roofing company serving Colorado&apos;s
              Western Slope for over 17 years. Licensed, insured, and committed
              to 100% customer satisfaction.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href="https://www.facebook.com/profile.php?id=61576636978315"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-accent/20 rounded-lg flex items-center justify-center transition-all"
              >
                <Facebook className="w-5 h-5 text-white/70" />
              </a>
              <a
                href="mailto:rickyarchuleta04@gmail.com"
                className="w-10 h-10 bg-white/10 hover:bg-accent/20 rounded-lg flex items-center justify-center transition-all"
              >
                <Mail className="w-5 h-5 text-white/70" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "Services", href: "#services" },
                { label: "About", href: "#about" },
                { label: "Service Areas", href: "#areas" },
                { label: "Reviews", href: "#testimonials" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/50 hover:text-accent text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-white/50">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                <a href="tel:9707734833" className="hover:text-accent transition-colors">(970) 773-4833</a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                <a href="mailto:rickyarchuleta04@gmail.com" className="hover:text-accent transition-colors">rickyarchuleta04@gmail.com</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                <span>PO Box 364, Silt, CO 81652</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-sm">
            &copy; {new Date().getFullYear()} A2Z Roofing Company LLC. All
            rights reserved.
          </p>
          <a
            href="https://www.obieo.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-white/25 hover:text-accent text-xs transition-colors"
          >
            <Zap className="w-3 h-3" />
            Designed &amp; Built by <span className="font-semibold text-white/40">Obieo</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

/* ───────────────────────── PAGE ───────────────────────── */
export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <ServiceAreas />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}
