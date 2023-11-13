import React from "react";

const ShoeCard = ({ imgUrl, changeBigShoeImage, bigShoeImg }) => {
  function handleClick() {
    if (bigShoeImg !== imgUrl.bigShoe) {
      changeBigShoeImage(imgUrl.bigShoe);
    }
  }
  return (
    <div
      className={`border-2 rounded-xl  ${
        bigShoeImg === imgUrl.bigShoe ? "border-red-500" : "border-transparent"
      } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-slate-300 bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl  max-sm:p-4">
        <img
          src={imgUrl.thumbnail}
          alt="shoe collection"
          width={127}
          height={103}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ShoeCard;
