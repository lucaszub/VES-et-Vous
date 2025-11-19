import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Appointment from "./components/Appointment";
import AdvanceImmédiate from "./components/AdvanceImmediate";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Services />
        <Appointment />
        <AdvanceImmédiate />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
