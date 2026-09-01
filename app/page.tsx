import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import SignalPath from "@/components/SignalPath/SignalPath";
import Projects from "@/components/Projects/Projects";
import Strip from "@/components/Strip/Strip";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SignalPath />
        <Projects />
        <Strip />
      </main>
      <Footer />
    </>
  );
}
