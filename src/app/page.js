import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Divisions from "@/components/Divisions";
import Portfolio from "@/components/Portfolio";
import Philosophy from "@/components/Philosophy";
import Engagement from "@/components/Engagement";
import Contact from "@/components/Contact";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <div className="relative font-sans text-charcoal bg-ivory">
      <ScrollReveal />
      <Navigation />
      <main>
        <Hero />
        <div className="reveal"><About /></div>
        <div className="reveal"><Services /></div>
        <div className="reveal"><Divisions /></div>
        <div className="reveal"><Portfolio /></div>
        <div className="reveal"><Philosophy /></div>
        <div className="reveal"><Engagement /></div>
        <Contact />
      </main>
    </div>
  );
}

