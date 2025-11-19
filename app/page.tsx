import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import TrustBadges from "./components/TrustBadges";
import Services from "./components/Services";
import Zones from "./components/Zones";
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
        <TrustBadges />
        <Services />
        <Zones />
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
