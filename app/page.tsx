import AboutSection from "@/components/AboutSection/AboutSection";
import HomeSlider from "@/components/HomeSlider/HomeSlider";
import MainSection from "@/components/MainSection/MainSection";
import RegisterSection from "@/components/RegisterSection/RegisterSection";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col min-h-0 overflow-hidden">
      <HomeSlider>
        <MainSection />
        <AboutSection />
        <RegisterSection />
      </HomeSlider>
    </main>
  );
}
