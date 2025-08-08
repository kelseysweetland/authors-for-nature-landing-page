import { motion } from "framer-motion";
import { ArrowRight, Leaf, BookOpen, Sparkles, CheckCircle2, HeartHandshake, Globe2, Megaphone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import SlingshotAwardSection from "@/components/SlingshotAwardSection";

// Hero image URL - custom Authors for Nature illustration
import heroImage from "@assets/Authors_For_Nature_1754604538308.jpg";
const HERO_URL = heroImage;

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <Hero />
      <TrustBar />
      <HowItWorks />
      <SlingshotAwardSection />
      <Programs />
      <Outcomes />
      <Testimonials />
      <CallToAction />
      <SiteFooter />
    </div>
  );
}

function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-custom bg-background/80 border-b border-border">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-semibold" data-testid="logo-link">
          <Leaf className="h-6 w-6 text-nature-primary" />
          <span className="tracking-tight">Authors for Nature</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#how" className="hover:text-nature-primary transition-colors" data-testid="nav-how">How it works</a>
          <a href="#programs" className="hover:text-nature-primary transition-colors" data-testid="nav-programs">Programs</a>
          <a href="#outcomes" className="hover:text-nature-primary transition-colors" data-testid="nav-outcomes">Outcomes</a>
          <a href="#community" className="hover:text-nature-primary transition-colors" data-testid="nav-community">Community</a>
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild variant="ghost" className="hidden sm:inline-flex" data-testid="button-login"> 
            <a href="https://authors-for-nature.mykajabi.com/login" target="_blank" rel="noreferrer">Log in</a>
          </Button>
          <Button asChild className="bg-nature-primary hover:bg-nature-primary-dark" data-testid="button-join">
            <Link href="/join" className="inline-flex items-center gap-2">
              Join now <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative">
      <div className="absolute inset-0">
        <img src={HERO_URL} alt="Authors for Nature hero" className="h-full w-full object-cover" data-testid="hero-image" />
        <div className="absolute inset-0 hero-gradient" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-28">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight" data-testid="hero-title">
            Become a published author
            <span className="block text-nature-accent">and a force for nature.</span>
          </h1>
          <p className="mt-6 text-lg text-white/90" data-testid="hero-description">
            A guided program for ages 13–25 to create, publish, and promote a children's book that advances a UN Sustainable Development Goal.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-nature-secondary hover:opacity-90" data-testid="button-join-community">
              <Link href="/join" className="inline-flex items-center gap-2">
                Join the community <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="bg-white/90 text-nature-ink hover:bg-white" data-testid="button-how-works">
              <a href="#how">See how it works</a>
            </Button>
          </div>
          <div className="mt-6 text-sm text-white/80" data-testid="hero-guarantee">
            Guaranteed publishing to Amazon, Barnes & Noble, and more.
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TrustBar() {
  return (
    <section className="bg-nature-paper/80 border-y border-border">
      <div className="mx-auto max-w-7xl px-4 py-6 grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
        <Stat kpi="400+" label="community members" />
        <Stat kpi="4" label="founder‑published books" />
        <Stat kpi="10+" label="nonprofit partners" />
        <Stat kpi="100%" label="publishing support" />
      </div>
    </section>
  );
}

function Stat({ kpi, label }: { kpi: string; label: string }) {
  return (
    <div className="text-center" data-testid={`stat-${label.replace(/\s+/g, '-')}`}>
      <div className="text-2xl font-bold text-nature-primary">{kpi}</div>
      <div className="text-[13px] text-muted-foreground uppercase tracking-wide">{label}</div>
    </div>
  );
}

function HowItWorks() {
  const steps = [
    {
      icon: <Globe2 className="h-5 w-5" />,
      title: "Pick a UN SDG",
      text: "Choose a goal that inspires you and partner with an aligned nonprofit.",
    },
    {
      icon: <BookOpen className="h-5 w-5" />,
      title: "Create your book",
      text: "Follow our video course and mentorship to write and illustrate your story.",
    },
    {
      icon: <Megaphone className="h-5 w-5" />,
      title: "Publish & promote",
      text: "We handle distribution and help you launch with readings and events.",
    },
  ];

  return (
    <section id="how" className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold" data-testid="how-works-title">How it works</h2>
          <p className="mt-3 text-muted-foreground" data-testid="how-works-description">A simple, supportive path from idea to impact.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((s, i) => (
            <Card key={i} className="card-hover rounded-2xl shadow-sm border-border" data-testid={`step-card-${i + 1}`}>
              <CardHeader>
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-nature-paper text-nature-primary">
                  {s.icon}
                </div>
                <CardTitle className="mt-2 text-xl">{s.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">{s.text}</CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Programs() {
  const tiers = [
    {
      name: "Basic Bookmaking",
      price: "$500",
      features: [
        "Video course led by Kelsey Sweetland",
        "Guaranteed publishing (Amazon, B&N, more)",
        "One 1:1 mentoring session",
        "Nonprofit partnership guidance",
      ],
      href: "https://authors-for-nature.mykajabi.com/offers/QL3iybzo/checkout",
      highlight: false,
    },
    {
      name: "Pro Author Package",
      price: "$1,500",
      features: [
        "Ten 1:1 mentoring sessions",
        "Personalized nonprofit introductions",
        "Video course + advanced templates",
        "Full launch & promo playbook",
      ],
      href: "https://authors-for-nature.mykajabi.com/offers/2Fck7A7E/checkout",
      highlight: true,
    },
  ];

  return (
    <section id="programs" className="py-20 bg-nature-paper">
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold" data-testid="programs-title">Programs & Pricing</h2>
          <p className="mt-3 text-muted-foreground" data-testid="programs-description">Pick the mentorship level that fits your goals and timeline.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {tiers.map((t, i) => (
            <Card key={i} className={`rounded-2xl border-2 ${t.highlight ? "border-nature-secondary shadow-lg" : "border-transparent shadow-sm"}`} data-testid={`program-card-${i + 1}`}>
              <CardHeader>
                <div className="text-sm font-medium text-muted-foreground">{t.name}</div>
                <CardTitle className="text-4xl tracking-tight">{t.price}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {t.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-1 h-5 w-5 text-nature-primary" />
                      <span className="text-muted-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild size="lg" className="mt-6 w-full bg-nature-primary hover:bg-nature-primary-dark" data-testid={`button-buy-${i + 1}`}>
                  <a href={t.href} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2">
                    Buy now <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Outcomes() {
  const items = [
    { icon: <Sparkles className="h-5 w-5" />, title: "A published book", text: "You'll hold your finished book—ISBN, retail links, and distribution included." },
    { icon: <HeartHandshake className="h-5 w-5" />, title: "Nonprofit partnership", text: "Credible impact through aligned organizations and real-world events." },
    { icon: <Megaphone className="h-5 w-5" />, title: "Launch support", text: "From readings to signings, we help you get your story into the world." },
  ];

  return (
    <section id="outcomes" className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold" data-testid="outcomes-title">What you'll walk away with</h2>
          <p className="mt-3 text-muted-foreground" data-testid="outcomes-description">Professional publishing, mentorship, and momentum.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <Card key={i} className="card-hover rounded-2xl shadow-sm border-border" data-testid={`outcome-card-${i + 1}`}>
              <CardHeader>
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-nature-paper text-nature-primary">
                  {it.icon}
                </div>
                <CardTitle className="mt-2 text-xl">{it.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">{it.text}</CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const testimonials = [
    {
      quote: "Publishing my book about ocean conservation was incredible. The mentorship helped me connect with actual marine biologists and see real impact.",
      name: "Emma K.",
      role: "Age 16, Student Author",
      image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300"
    },
    {
      quote: "From idea to Amazon in 6 months. The community support and professional guidance made all the difference in my publishing journey.",
      name: "Marcus R.",
      role: "Age 22, Published Author", 
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300"
    },
    {
      quote: "Watching my daughter grow from shy teenager to confident author and environmental advocate has been amazing. This program is truly transformative.",
      name: "Sarah M.",
      role: "Parent",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300"
    },
    {
      quote: "These young authors bring fresh perspectives to environmental issues. Their books help us reach new audiences and inspire action.",
      name: "Dr. James L.",
      role: "Nonprofit Partner",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300"
    }
  ];

  return (
    <section id="community" className="py-20 bg-nature-paper">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <h2 className="text-3xl md:text-4xl font-bold" data-testid="community-title">A supportive, mission‑driven community</h2>
            <p className="mt-3 text-muted-foreground" data-testid="community-description">Authors, parents, students, and nonprofit partners who believe stories can move people to protect our planet.</p>
            <div className="mt-6 flex gap-3">
              <Button asChild className="bg-nature-secondary hover:opacity-90" data-testid="button-instagram">
                <a href="https://www.instagram.com/authorsfornature/" target="_blank" rel="noreferrer">Follow on Instagram</a>
              </Button>
              <Button asChild variant="secondary" data-testid="button-linkedin">
                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">Connect on LinkedIn</a>
              </Button>
            </div>
          </div>
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            {testimonials.map((testimonial, i) => (
              <Card key={i} className="rounded-2xl shadow-sm border-border" data-testid={`testimonial-card-${i + 1}`}>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <img 
                      src={testimonial.image} 
                      alt={`${testimonial.name} testimonial`} 
                      className="w-12 h-12 rounded-full object-cover"
                      data-testid={`testimonial-avatar-${i + 1}`}
                    />
                    <div>
                      <div className="font-medium" data-testid={`testimonial-name-${i + 1}`}>{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground" data-testid={`testimonial-role-${i + 1}`}>{testimonial.role}</div>
                    </div>
                  </div>
                  <blockquote className="text-muted-foreground" data-testid={`testimonial-quote-${i + 1}`}>
                    "{testimonial.quote}"
                  </blockquote>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CallToAction() {
  return (
    <section className="py-20 bg-nature-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold" data-testid="cta-title">Ready to become an author for nature?</h2>
        <p className="mt-4 text-lg text-primary-foreground/90 max-w-2xl mx-auto" data-testid="cta-description">Join other young writers making a difference through storytelling. Your voice matters, and your story can change the world.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" className="bg-nature-secondary hover:opacity-90 text-lg" data-testid="button-start-journey">
            <Link href="/join" className="inline-flex items-center gap-2">
              Start your journey <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="secondary" className="bg-white/20 hover:bg-white/30 text-primary-foreground text-lg" data-testid="button-learn-more">
            <a href="#how">Learn more</a>
          </Button>
        </div>
        <div className="mt-6 text-sm text-primary-foreground/80" data-testid="cta-features">
          🌱 Guaranteed publishing • 🤝 Nonprofit partnerships • 📚 Expert mentorship
        </div>
      </div>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer className="bg-nature-ink text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 font-semibold text-lg mb-4" data-testid="footer-logo">
              <Leaf className="h-6 w-6 text-nature-accent" />
              <span className="text-white">Authors for Nature</span>
            </div>
            <p className="text-gray-400 text-sm" data-testid="footer-description">
              Empowering young authors to create meaningful stories that advance environmental and social causes through the UN Sustainable Development Goals.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-white" data-testid="footer-programs-title">Programs</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#programs" className="hover:text-white transition-colors" data-testid="footer-basic-link">Basic Bookmaking</a></li>
              <li><a href="#programs" className="hover:text-white transition-colors" data-testid="footer-pro-link">Pro Author Package</a></li>
              <li><a href="#how" className="hover:text-white transition-colors" data-testid="footer-how-link">How It Works</a></li>
              <li><a href="#outcomes" className="hover:text-white transition-colors" data-testid="footer-outcomes-link">Expected Outcomes</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-white" data-testid="footer-community-title">Community</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="https://www.instagram.com/authorsfornature/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors" data-testid="footer-instagram-link">Instagram</a></li>
              <li><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors" data-testid="footer-linkedin-link">LinkedIn</a></li>
              <li><a href="#community" className="hover:text-white transition-colors" data-testid="footer-testimonials-link">Testimonials</a></li>
              <li><a href="mailto:authorsfornature@gmail.com" className="hover:text-white transition-colors" data-testid="footer-contact-link">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-white" data-testid="footer-resources-title">Resources</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="https://www.authors-for-nature.mykajabi.com/login" target="_blank" rel="noreferrer" className="hover:text-white transition-colors" data-testid="footer-login-link">Student Login</a></li>
              <li><a href="#" className="hover:text-white transition-colors" data-testid="footer-writing-link">Writing Resources</a></li>
              <li><a href="#" className="hover:text-white transition-colors" data-testid="footer-publishing-link">Publishing Guide</a></li>
              <li><a href="#" className="hover:text-white transition-colors" data-testid="footer-sdg-link">UN SDG Information</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-400" data-testid="footer-copyright">
            © {new Date().getFullYear()} Authors for Nature. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm" data-testid="footer-privacy-link">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm" data-testid="footer-terms-link">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
