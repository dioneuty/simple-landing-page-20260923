import About from "@/components/About";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MenuSection from "@/components/MenuSection";
import OrderCTA from "@/components/OrderCTA";
import ReviewsSection from "@/components/ReviewsSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <MenuSection />
        <ReviewsSection />
        <OrderCTA />
      </main>
      <Footer />
    </>
  );
}
