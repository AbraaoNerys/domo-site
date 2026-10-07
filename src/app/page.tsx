import AboutSection from "@/components/sections/AboutSection";
import EnvironmentsSection from "@/components/sections/EnvironmentsSection";
import HeroSection from "@/components/sections/HeroSection";

export default function Home() {
  return (
    <main className="flex-1">
      <HeroSection />
      <AboutSection />
      <EnvironmentsSection />
    </main>
  );
}
