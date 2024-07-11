"use client"

import { Sparkles } from "./lunar/Sparkles"
import { PinContainer } from "./aceternity/3d-pin";
import SparklesText from "./magicui/sparkle-text";

export function AnimatedPinDemo() {
  return (
    <>
      <div className="h-[40rem] w-full items-center justify-center">
        <PinContainer
          title="/arxiv.org"
          href="https://arxiv.org/abs/2006.11276"
        >
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
              An Improved Spin-Down Rate for the Proposed White-Dwarf Pulsar AR Scorpii
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500 ">
                Read more about my most recent publication. 📄
              </span>
            </div>
            <div className="flex flex-1 w-full rounded-lg mt-4 bg-cover bg-center" style={{ backgroundImage: "url('/images/paper_1.webp')" }} />
          </div>
        </PinContainer>

      </div>

      
    </>
  )
}
