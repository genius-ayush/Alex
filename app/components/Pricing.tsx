"use client";
import React from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";


export default function Pricing() {
  return (
    <div className="w-full bg-black">
    <div className="bg-black flex justify-center pb-20 ">
      <BackgroundGradient className="text-center rounded-[22px]  max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
      <p className="text-base font-bold sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
      🎉 Exclusive Beta Offer!
        </p>
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          Pricing
        </p>

        <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-10">
        <span className="font-bold">Free</span> while in beta.
        </p>
        <button className="rounded-full pl-6 pr-6 py-5 text-white flex  mx-auto items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
          <span>Download Now </span>
          
        </button>
      </BackgroundGradient  >
    </div>
    </div>
  );
}
