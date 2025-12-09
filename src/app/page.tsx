// app/page.tsx

import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ActivitySection from "./components/ActivitySection";
import ContactSection from "./components/ContactSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ActivitySection />
      <ContactSection />
    </>
  );
}
