/* eslint-disable react/no-unescaped-entities */
"use client"

import React from 'react'
import { MagneticText } from "./MagneticText"


import Meteors from "./magicui/meteors";

export default function HeroSection() {
  const text = "Hello, I'm Yadira Gaibor"

  return (
    <>
      
      <div className="mx-auto sticky h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        <div>
          <Meteors number={15} />
          <MagneticText body={text} as="div" className="w-full text-center font-var text-2xl md:text-6xl">
            {(tokens: any[]) =>
              tokens.map((token, index) => (
                <MagneticText.Token key={index} body={token} className="inline-block cursor-default whitespace-pre" />
              ))
            }
          </MagneticText>
        </div>
        <div className="text-center text-white md:text-xl lg:w-1/2 w-3/4 mt-7">
          <p>I am a PhD Candidate at MIT's Physics Department, unraveling the mysteries of exoplanets and binary systems with the TESS team 🖖</p>
        </div>

      </div>
    </>
  )
}
