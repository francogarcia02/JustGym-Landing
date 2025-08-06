import Hero from "./sections/Hero";
import Information from "./sections/Information";
import Testimonials from "./sections/Testimonios";
import Precios from "./sections/Precios";
import CTA from "./sections/CTA";
import Footer from "./sections/Footer";

export default function Home() {
    return (
        <div
            className={`flex flex-col w-full justify-center items-center`}
        >
          <Hero/>
          <Information/>
          <Precios/>
          <CTA/>
          <Footer/>
        </div>
    );
}
