import React from "react";
import CustomerReviews from "./sections/CustomerReviews";
import Hero from "./sections/Hero";
import PopularProducts from "./sections/PopularProducts";
import Services from "./sections/Services";
import SpecialOffers from "./sections/SpecialOffers";
import SuperQuality from "./sections/SuperQuality";
import Footer from "./sections/Footer";
import Subscribe from "./sections/Subscribe";
import Nav from "./components/Nav";

export default function App() {
  return (
    <>
      <main className="relative">
        <Nav />
        <section className="xl:padding-l wide:padding-r padding-b">
          <Hero />
        </section>
        <section className="padding">
          <PopularProducts />
        </section>
        <section className="padding">
          <SuperQuality />
        </section>
        <section className="padding-x py-10">
          <Services />
        </section>
        <section className="padding">
          <SpecialOffers />
        </section>
        <section className="padding bg-pale-blue">
          CustomerReviews
          <CustomerReviews />
        </section>
        <section className="padding-x py-16 w-full sm:py-32">
          <Subscribe />
        </section>
        <section className="padding-x bg-black padding-t pb-8">
          <Footer />
        </section>
      </main>
    </>
  );
}
