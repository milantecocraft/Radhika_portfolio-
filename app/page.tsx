import { site } from "@/lib/data";
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Impact from "@/components/Impact";
import Skills from "@/components/Skills";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function HomePage() {
  // SEO: structured data for a person/portfolio.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.role,
    description: site.tagline,
    email: `mailto:${site.email}`,
    sameAs: [site.socials.linkedin, site.socials.dribbble],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ScrollProgress />
      <Navbar />
      <main id="main">
        <Hero />
        <TrustedBy />
        <Projects />
        <Services />
        <Process />
        <Impact />
        <About />
        <Skills />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
