import React from "react";

export const TopBanner = () => {
  return (
    <div className="bg-[rgba(49,49,49,1)] flex w-full flex-col items-center text-sm text-white leading-none justify-center px-[70px] py-[7px] max-md:max-w-full max-md:px-5">
      <div className="flex w-[261px] max-w-full items-stretch gap-[17px]">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/4f7ca061f2a94b24bf1c38618dcebabf/b8d179f62d9ee8b00c5f8458f5dbb5aee10b02e6?placeholderIfAbsent=true"
          alt="Review stars"
          className="aspect-[5.68] object-contain w-[68px] shrink-0"
        />
        <div className="grow shrink w-[162px]">5 star on Google Reviews</div>
      </div>
    </div>
  );
};
