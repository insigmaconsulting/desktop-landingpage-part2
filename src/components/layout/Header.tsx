import React from "react";

export const Header = () => {
  return (
    <header className="bg-white flex w-full flex-col items-stretch font-normal max-md:max-w-full">
      <TopBanner />
      <nav className="bg-white self-center flex w-[1388px] max-w-full items-center gap-5 text-[rgba(49,49,49,1)] flex-wrap justify-between pr-4 py-[17px]">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/4f7ca061f2a94b24bf1c38618dcebabf/37c5941c62c5a2f5127dd95b82a0f72488045289?placeholderIfAbsent=true"
          alt="Company logo"
          className="aspect-[7.94] object-contain w-[167px] bg-blend-normal self-stretch shrink-0 max-w-full my-auto"
        />
        <div className="self-stretch flex items-stretch gap-[21px] text-[17px] leading-none flex-wrap my-auto max-md:max-w-full">
          <button className="grow">Our Services</button>
          <button className="basis-auto">Who We Are</button>
          <button className="basis-auto">Process Framework</button>
          <button>Why Us</button>
        </div>
        <div className="self-stretch flex items-stretch gap-[30px] text-sm leading-none">
          <button className="bg-[rgba(208,172,128,1)] px-[19px] py-4 rounded-[25px] max-md:pr-5">
            About us
          </button>
          <button className="bg-[rgba(208,172,128,1)] whitespace-nowrap px-6 py-4 rounded-[25px] max-md:px-5">
            Socials
          </button>
          <button className="bg-[rgba(208,172,128,1)] px-[18px] py-4 rounded-[25px]">
            Contact Us
          </button>
        </div>
      </nav>
    </header>
  );
};
