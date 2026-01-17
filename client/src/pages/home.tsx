import { motion } from "framer-motion";
import { ArrowRight, Leaf, BookOpen, Sparkles, CheckCircle2, HeartHandshake, Globe2, Megaphone, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import SlingshotAwardSection from "@/components/SlingshotAwardSection";
import FaqSection from "@/components/FaqSection";

// Hero image URL - custom Authors for Nature illustration
import heroImage from "@assets/Authors_For_Nature_1754604538308.jpg";
import alishaPatelImage from "@assets/alisha_photo_converted.jpg";
import endangeredAnimalsOceanCover from "@assets/Endangered Animals of The Ocean Cover.png";
import alfredIvanCover from "@assets/Alfred and Ivan's Adventure Cover.png";
import founderImage from "@assets/IMG_4819-EV copy.jpg";
const HERO_URL = heroImage;

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <Hero />
      <TrustBar />
      <HowItWorks />
      <RecentBooks />
      <SlingshotAwardSection />
      <AIPhilosophy />
      <Programs />
      <FaqSection />
      <Outcomes />
      <AboutFounder />
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
            A program to help young adults become environmental authors and inspire global change.
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
      <div className="mx-auto max-w-7xl px-4 py-6 grid grid-cols-1 md:grid-cols-3 gap-6 items-center justify-center">
        <Stat kpi="4" label="founder‑published books" />
        <Stat kpi="2" label="youth author books published" />
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
      title: "Pick an environmental nonprofit",
      text: "Choose an environmental goal that inspires you and partner with an aligned nonprofit.",
    },
    {
      icon: <BookOpen className="h-5 w-5" />,
      title: "Create your book",
      text: "Follow our video course and mentorship to write and illustrate your story.",
    },
    {
      icon: <Megaphone className="h-5 w-5" />,
      title: "Publish & make a difference",
      text: "We publish your book while you bring awareness, donations, and true impact to your environmental mission.",
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

function RecentBooks() {
  const books = [
    {
      title: "Endangered Animals of The Ocean",
      author: "Alisha Patel",
      illustrator: "Saige Sefcik",
      school: "Castilleja School",
      partnerNonprofit: "Mission Blue",
      description: "Follow Goldie the goldfish on her adventure as she discovers and meets the unique animals of the sea. Endangered Animals of the Sea, is written by Alisha (Nyx) Patel and illustrated by Saige Sefcik, two 16 year old environmental advocates who hope to bring more awareness to environmental issues to kids and families. Endangered Animals of the Sea is their first book!",
      amazonLink: "https://www.amazon.com/Endangered-Animals-Ocean-Alisha-Patel/dp/B0F9WJ9M5H",
      coverImage: endangeredAnimalsOceanCover,
    },
    {
      title: "Alfred & Ivan's Adventure",
      author: "Vanessa Harnish",
      illustrator: "Sophie Liew",
      school: "Hillbrook School",
      partnerNonprofit: "Mission Blue and Save the Whales",
      description: "Alfred and Ivan's Adventure is a story of two fin whale brothers who get lost and need to find their way to the feeding grounds. Alfred and Ivan's Adventure is written by Vanessa Harnish and illustrated by Sophie Liew, two 14 year old eighth grade students trying to spread awareness about endangered animals to kids and families.",
      amazonLink: "http://amazon.com/Alfred-Ivans-Adventure-Vanessa-Harnish/dp/B0FHPRBDLX",
      coverImage: alfredIvanCover,
    }
  ];

  return (
    <section className="py-20 bg-nature-paper">
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold" data-testid="recent-books-title">Recently Published Books</h2>
          <p className="mt-3 text-muted-foreground" data-testid="recent-books-description">Stories making a difference, written by our young environmental advocates.</p>
        </div>
        <div className="mt-10 grid gap-12 sm:grid-cols-2 lg:grid-cols-2">
          {books.map((book, i) => (
            <div key={i} className="flex flex-col h-full" data-testid={`book-card-${i + 1}`}>
              <div className="p-8 flex justify-center">
                <div className="w-72 h-96 flex items-center justify-center">
                  <img 
                    src={book.coverImage} 
                    alt={`${book.title} book cover`} 
                    className="max-w-full max-h-full object-contain rounded-lg shadow-md"
                    data-testid={`book-cover-${i + 1}`}
                  />
                </div>
              </div>
              <div className="px-8 pb-8 flex-1 flex flex-col">
                <div className="mb-4">
                  <h3 className="text-3xl font-bold text-nature-primary mb-3 leading-tight" data-testid={`book-title-${i + 1}`}>
                    {book.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-1">
                    By <span className="font-medium">{book.author}</span>
                    {book.illustrator && <>, Illustrated by <span className="font-medium">{book.illustrator}</span></>}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="inline-flex items-center rounded-full bg-nature-secondary/20 px-2.5 py-0.5 text-xs font-medium text-nature-secondary">
                      {book.school}
                    </span>
                    <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                      Partner: {book.partnerNonprofit}
                    </span>
                  </div>
                </div>
                <div className="flex-1 flex flex-col">
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1" data-testid={`book-description-${i + 1}`}>
                    {book.description}
                  </p>
                  <Button asChild className="w-full bg-nature-primary hover:bg-nature-primary-dark mt-auto" data-testid={`book-amazon-button-${i + 1}`}>
                    <a href={book.amazonLink} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2">
                      Buy on Amazon <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AIPhilosophy() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center" data-testid="ai-philosophy-title">Our AI Philosophy</h2>
          <div className="mt-6 space-y-6 text-muted-foreground text-lg leading-relaxed text-left" data-testid="ai-philosophy-description">
            <p>
              At Authors for Nature, we believe that people, not AI, should create art. While many of us fear that AI will replace artists, at Authors for Nature, we believe the opposite.
            </p>
            <p>
              In the age of Generative AI, we need creators and innovators now, more than ever. Anyone can access AI, but people with ideas, dreams, and purpose will be able to use this incredibly powerful tool to have a larger impact than any one person or AI alone. A person can be replaced by an AI, but a person who knows how to use AI ethically to amplify and support their own abilities, never will. For this reason, Authors for Nature teaches students not only how to make a book, but also empowers them to be creators and activists with a mission.
            </p>
            <p>
              Students have access to our specialized book-making and publishing AIs which streamline the book-making process. They teach students new skills, clarify next steps, and resolve confusion. We provide basic education on how to use these and other AIs in the Authors for Nature video course.
            </p>
            <p>
              We teach students how to amplify their mission and creative voice with AI, rather than using it to replace them. Authors for Nature students graduate with a published book, a mission to help the planet, and a foundation in AI literacy and ethics so they can leave as passionate, competent, and powerful change makers.
            </p>
          </div>
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
      ],
      href: "https://authors-for-nature.mykajabi.com/offers/QL3iybzo/checkout",
      highlight: false,
    },
    {
      name: "Pro Author Package",
      price: "$1,500",
      features: [
        "Video course led by Kelsey Sweetland",
        "Guaranteed publishing (Amazon, B&N, more)",
        "Post-publication interview on the Authors for Nature Podcast",
        "Access to our specialized bookmaking and publishing AIs",
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

function AboutFounder() {
  return (
    <section className="py-20 bg-nature-paper">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center" data-testid="about-founder-title">About Our Founder</h2>
        <div className="grid md:grid-cols-2 gap-4 items-center">
          {/* Photo on the left */}
          <div className="flex justify-center">
            <img
              src={founderImage}
              alt="Kelsey Sweetland, Founder of Authors for Nature"
              className="rounded-lg shadow-lg w-full max-w-xs object-cover"
              data-testid="founder-image"
            />
          </div>
          {/* Text on the right */}
          <div className="flex flex-col justify-center space-y-6">
            <p className="text-muted-foreground text-lg leading-relaxed indent-8" data-testid="about-founder-paragraph-1">
              Hi! My name is Kelsey Sweetland. I am 19 years old, a four-time published author, and the founder of Authors for Nature.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed indent-8" data-testid="about-founder-paragraph-2">
              When I was 12, I began writing and publishing children's books to raise awareness about the numerous environmental issues affecting our planet. Four years and four books later, I founded Authors for Nature to empower youth to become published authors and environmental change-makers.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed indent-8" data-testid="about-founder-paragraph-3">
              By joining our community, you become part of a group of motivated authors, artists, innovators, students, families, and nonprofits who are all aligned with one belief: that we can make a difference and save our planet.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const testimonials = [
    {
      quote: "Learning how to create and publish a book has been an amazing experience. It was so moving to know my book, Endangered Animals of the Ocean, inspired my little cousins to become marine biologists!",
      name: "Alisha Patel",
      role: "Author of: Endangered Animals of the Ocean, Age 16",
      image: alishaPatelImage
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
              <Button asChild variant="secondary" data-testid="button-youtube">
                <a href="https://www.youtube.com/@BuildingAuthorsForNature-ow3mo" target="_blank" rel="noreferrer">Follow on YouTube</a>
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
