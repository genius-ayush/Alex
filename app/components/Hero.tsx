"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Button from "./Button";
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

              <Button />

              
            </div>

          </>
        }
      >
        <video
          controls
          className="mx-auto rounded-xl object-cover h-full object-left-top border-4 border-[#403F92]"
          height={720}
          width={1400}
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
      </ContainerScroll>
    </div>
  );
}

export default Hero
