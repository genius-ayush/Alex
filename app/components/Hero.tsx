"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Button from "./Button";
import { BackgroundGradient } from "@/components/ui/hero-gradient";
import Image from 'next/image'
// import ShimmerButton from "@/components/ui/ShimmerButton";
import Video from 'next-video';

function Hero() {
  return (
    <div className="flex flex-col overflow-hidden bg-gradient-to-b from-black via-[#414093] to-black">
      <ContainerScroll
      
      
        titleComponent={
          <>
            <div className="mb-20 font-sans mt-32">
              <div className="text-4xl md:text-[5rem] font-semibold mt-1 leading-none bg-gradient-to-b from-white via-gray-200 to-[#1E1E44] bg-clip-text text-transparent tracking-tight ">
                The Cursor for Xcode.
              </div>

              <div className="flex justify-center">
                <p className="text-center w-2/3 text-lg mt-2 sm:tracking-tighter font-light text-gray-300 font-sans">
                  Alex is a lightning-fast sidebar app for Xcode with powerful commands like Cmd+L, Cmd+K, and Apply Code—just like Cursor, but better.
                </p>

              </div>

              <div className="">
              
              <div className="mt-10 font-semibold">Backed by <span className=""><Image src="/yc.svg" alt="Video" className="mx-auto mt-1" width={100} height={100}/> </span></div> 

              </div>

              <Button />

              
            </div>

          </>
        }
      >
        <BackgroundGradient className="text-center rounded-[22px]  bg-white dark:bg-zinc-900">
        <video
          controls
          className="mx-auto rounded-[22px] object-cover h-full object-left-top border-0 border-[#403F92]"
          height={720}
          width={1400}
          poster="image.png"
          src="/hero.mp4"
        >
          {/* <source src="/hero.mp4" type="video.mp4" /> */}
        </video>
        {/* { <Video src={"/hero.mp4"} className="mx-auto rounded-3xl object-cover h-full object-left-top border-0 border-[#403F92]" poster="image.png"/>  */}
        </BackgroundGradient> 
       
      </ContainerScroll>
    </div>
  );
}

export default Hero
