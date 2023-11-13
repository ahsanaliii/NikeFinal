import React from "react";
import { reviews } from "../constants";
import ReviewCard from "../components/ReviewCard";

export default function CustomerReviews() {
  return (
    <section className="max-container">
      <h3 className="font-sans text-4xl text-center font-bold">
        What our
        <span className="text-red-500"> Customer</span> say?
      </h3>
      <p className="info-text m-auto mt-4 max-w-lg  text-center">
        Here genuine stories from our satisfied customers about their
        exceptional experience with us
      </p>
      <div className="mt-4  flex flex-1 justify-evenly items-center max-lg:flex-col  gap-14">
        {reviews.map((review) => (
          <ReviewCard
            key={review.customerName}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          />
        ))}
      </div>
    </section>
  );
}
