// app/page.tsx

import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ActivitySection from "./components/ActivitySection";
import ContactSection from "./components/LinksSection";
import LinksSection from "./components/LinksSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ActivitySection />
      <LinksSection />
    </>
  );
}
