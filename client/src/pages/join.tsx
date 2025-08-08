import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Leaf, ArrowLeft } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Join() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <JoinHeader />
      <JoinHero />
      <AccountCreation />
      <JoinFooter />
    </div>
  );
}

function JoinHeader() {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-custom bg-background/80 border-b border-border">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-semibold" data-testid="logo-link">
          <Leaf className="h-6 w-6 text-nature-primary" />
          <span className="tracking-tight">Authors for Nature</span>
        </Link>
        <div className="flex items-center gap-2">
          <Button asChild variant="ghost" className="hidden sm:inline-flex" data-testid="button-login"> 
            <a href="https://authors-for-nature.mykajabi.com/login" target="_blank" rel="noreferrer">Log in</a>
          </Button>
          <Button asChild variant="outline" data-testid="button-back">
            <Link href="/" className="inline-flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" /> Back to home
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

function JoinHero() {
  return (
    <section className="py-16 bg-nature-paper">
      <div className="mx-auto max-w-7xl px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-4xl md:text-5xl font-bold text-nature-primary" data-testid="join-title">
            Start Your Author Journey
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="join-description">
            Choose the program that fits your goals and begin creating your published children's book for environmental impact.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function AccountCreation() {
  const plans = [
    {
      title: "Basic Bookmaking",
      price: "$500",
      popular: false,
      description: [
        "Video course led by Kelsey Sweetland",
        "Guaranteed publishing (Amazon, B&N, more)",
        "One 1:1 mentoring session",
        "Environmental nonprofit partnership guidance"
      ],
      link: "https://authors-for-nature.mykajabi.com/offers/QL3iybzo/checkout"
    },
    {
      title: "Pro Author Package",
      price: "$1,500",
      popular: true,
      description: [
        "Everything in the basic bookmaking package",
        "Ten 1:1 mentoring sessions",
        "Personalized introductions to environmental nonprofits"
      ],
      link: "https://authors-for-nature.mykajabi.com/offers/2Fck7A7E/checkout"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold" data-testid="plans-title">Choose Your Path</h2>
          <p className="mt-3 text-muted-foreground" data-testid="plans-description">
            Select the mentorship level that matches your timeline and goals.
          </p>
        </div>
        
        <div className="grid gap-8 sm:grid-cols-2 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Card 
                className={`relative rounded-2xl shadow-lg h-full ${
                  plan.popular 
                    ? "border-2 border-nature-secondary ring-2 ring-nature-secondary/20" 
                    : "border border-border"
                }`}
                data-testid={`plan-card-${i + 1}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-nature-secondary text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-2xl font-bold">{plan.title}</CardTitle>
                  <div className="mt-2">
                    <span className="text-4xl font-bold text-nature-primary">{plan.price}</span>
                    <span className="text-muted-foreground"> one-time</span>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <ul className="space-y-4">
                    {plan.description.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-nature-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    asChild 
                    size="lg" 
                    className={`w-full ${
                      plan.popular 
                        ? "bg-nature-secondary hover:bg-nature-secondary/90" 
                        : "bg-nature-primary hover:bg-nature-primary-dark"
                    }`}
                    data-testid={`button-choose-plan-${i + 1}`}
                  >
                    <a href={plan.link} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2">
                      Choose {plan.title} <ArrowRight className="h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
            Both programs include guaranteed publishing and access to our supportive community. 
            Questions? <a href="mailto:authorsfornature@gmail.com" className="text-nature-primary hover:underline">Contact us</a> for guidance.
          </p>
        </div>
      </div>
    </section>
  );
}

function JoinFooter() {
  return (
    <footer className="bg-nature-paper border-t border-border py-12">
      <div className="mx-auto max-w-7xl px-4 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Leaf className="h-6 w-6 text-nature-primary" />
          <span className="font-semibold text-lg">Authors for Nature</span>
        </div>
        <p className="text-muted-foreground text-sm">
          Empowering young voices to create environmental change through storytelling.
        </p>
        <div className="mt-6 flex justify-center gap-6 text-sm">
          <a href="https://www.instagram.com/authorsfornature/" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-nature-primary">
            Instagram
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-nature-primary">
            LinkedIn
          </a>
          <a href="mailto:authorsfornature@gmail.com" className="text-muted-foreground hover:text-nature-primary">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}