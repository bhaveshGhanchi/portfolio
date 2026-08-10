import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ScrollProgress } from "@/components/ScrollProgress";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { FeaturedOtas } from "@/components/sections/FeaturedOtas";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main className="flex-1">
        <Hero />
        <FeaturedOtas />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
