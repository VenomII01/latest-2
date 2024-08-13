import Choose from "./components/Choose";
import Hero from "./components/home/Hero";
import Contact from "./components/HomeContact";
import News from "./components/News";
import Projects from "./components/Projects";
import Testimonial from "./components/Testimonial";
import Us from "./components/Us";
import We from "./components/We";
import { Metadata } from "next";

export const metadata = {
  title: "PEINSO: Sea Transport and Logistics Services | Home", // Enhanced title
  description:
    "PEINSO offers comprehensive sea transport and logistics solutions tailored to your business needs. Get a free quote today.", // More descriptive content
  keywords: [
    "sea transport",
    "logistics",
    "shipping",
    "freight",
    "cargo",
    "supply chain",
    "PEINSO",
  ], // Consolidated and relevant keywords
  authors: [{ name: "PEINSO" }],
  creator: "PEINSO",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
};

export default function Home() {
  return (
    <main className="flex flex-col gap-24 ">
      <Hero />
      <We />
      <Us />
      <Projects />
      <Testimonial />
      <Contact />
      <Choose />
      <News />
    </main>
  );
}
