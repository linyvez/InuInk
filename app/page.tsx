import NextButton from "@/components/Buttons/NextButton";
import Header from "@/components/Header/Header";
import MainSection from "@/components/MainSection/MainSection";
import SliderDots from "@/components/SliderDots/SliderDots";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col h-screen">
      <Header />

      <MainSection />
      <NextButton />

      <SliderDots />
    </main>
  );
}
