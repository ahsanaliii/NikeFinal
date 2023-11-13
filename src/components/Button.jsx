import React from "react";

const Button = ({
  label,
  iconUrl,
  backgroundColor,
  borderColor,
  textColor,
  fullWidth,
}) => {
  return (
    <>
      <button
        className={`flex justify-center items-center gap-2 px-7 py-4 border font-mono text-lg leading-none 
      ${
        backgroundColor
          ? ` ${backgroundColor} ${textColor} ${borderColor}`
          : "bg-red-500 text-white "
      } rounded-full ${fullWidth && "w-full"}`}
      >
        {label}
        {iconUrl && (
          <img
            src={iconUrl}
            alt="image"
            className="ml-2 rounded-full w-5 h-5"
          />
        )}
      </button>
    </>
  );
};

export default Button;
