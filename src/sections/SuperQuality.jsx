import React from "react";
import Button from "../components/Button";
import { shoe8 } from "../assets/images";

export default function SuperQuality() {
  return (
    <section
      id="abou-us"
      className="flex justify-between max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col ">
        <h2 className="mt-10 font-mono text-4xl capitalize lg:max-w-lg font-bold">
          We Provide you
          <br />
          <span className=" text-red-500"> Super </span>
          <span className=" text-red-500"> Quality </span> shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          ensuring premium comfort and style , our meticlously crafted footwear
          isdesigned to elivate your experience, providing you with the
          unmatched quality , innovation and a touch of elegance.
        </p>
        <p className="info-text mt-6 lg:max-w-lg">
          our dedication to detail and excellence ensures your satisfaction.
        </p>
        <div className="mt-11">
          <Button label="View Details" />
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img
          src={shoe8}
          alt="shoe8"
          width={570}
          height={523}
          className="object-contain"
        />
      </div>
    </section>
  );
}
