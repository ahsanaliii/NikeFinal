import React from "react";
import { offer } from "../assets/images";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";

export default function SpecialOffers() {
  return (
    <section className="flex items-center flex-wrap  max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer}
          alt="offer"
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col ">
        <h2 className="mt-10 font-mono text-4xl capitalize lg:max-w-lg font-bold">
          <span className=" text-red-500"> special </span> offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          ensuring premium comfort and style , our meticlously crafted footwear
          isdesigned to elivate your experience, providing you with the
          unmatched quality , innovation and a touch of elegance.
        </p>
        <p className="info-text mt-6 lg:max-w-lg">
          our dedication to detail and excellence ensures your satisfaction.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Buy Now" iconUrl={arrowRight} />
          <Button
            label="learn more"
            backgroundColor="bg-white"
            borderColor="border-slate-500"
            textColor="text-slate-700"
          />
        </div>
      </div>
    </section>
  );
}
