"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
// import ShimmerButton from "@/components/ui/ShimmerButton";

function Hero() {
  return (
    <div className="flex flex-col overflow-hidden bg-gradient-to-b from-black via-[#414093] to-black">
      <ContainerScroll
        titleComponent={
          <>
            <div className="mb-20 font-sans">
              <div className="text-4xl md:text-[5rem] font-semibold mt-1 leading-none bg-gradient-to-b from-white via-gray-200 to-[#1E1E44] bg-clip-text text-transparent tracking-tight ">
                The Cursor for Xcode.
              </div>

              <div className="flex justify-center">
                <p className="text-center w-2/3 text-xl mt-2 tracking-tight">
                  Alex is a lightning-fast sidebar app for Xcode with powerful commands like Cmd+L, Cmd+K, and Apply Code—just like Cursor, but better.
                </p>

              </div>

              <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-xl border border-[#7270FF] bg-[linear-gradient(110deg,#7270FF,45%,#5b58e6,55%,#7270FF)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#7270FF] focus:ring-offset-2 focus:ring-offset-slate-50 mt-10">
                Download
              </button>

            </div>

          </>
        }
      >
        <video controls>don't you know
          <source src="/hero.mp4" type="video/mp4" height={720}
            width={1400} className="mx-auto rounded-2xl object-cover h-full object-left-top" />
          Your browser does not support the video tag.
        </video>
      </ContainerScroll>
    </div>
  );
}

export default Hero
