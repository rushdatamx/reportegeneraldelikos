"use client";

import SlideWrapper from "./SlideWrapper";

export default function Slide15FDAPortada() {
  return (
    <SlideWrapper className="bg-[#F5F5F5] justify-center items-center text-center relative" hideFooter>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#E31837]/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#F7B500]/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/60 blur-3xl" />
      </div>
      <div className="relative z-10 space-y-6">
        <div className="flex justify-center">
          <img src="/delikos-logo.jpeg" alt="Botanas Delikos" className="h-36 object-contain rounded-lg" />
        </div>
      </div>
    </SlideWrapper>
  );
}
