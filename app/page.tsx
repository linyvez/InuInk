import NextButton from "@/components/Buttons/NextButton";
import MainSection from "@/components/MainSection/MainSection";
import SliderDots from "@/components/SliderDots/SliderDots";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col h-full min-h-0">
      <MainSection />
      <NextButton />
      <SliderDots />
    </main>
  );
}
