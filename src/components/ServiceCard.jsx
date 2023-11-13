import React from "react";

const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-2xl px-10 py-16">
      <div className="w-11 flex h-11 justify-center items-center  bg-red-500 rounded-full">
        <img src={imgURL} alt={label} />
      </div>
      <h3 className="mt-5 font-mono text-3xl leading-normal font-bold">
        {label}
      </h3>
      <p className="mt-3 break-words font-mono text-lg leading-normal text-slate-600">
        {subtext}
      </p>
    </div>
  );
};

export default ServiceCard;
