"use client"

import React, {useEffect, useState, Suspense} from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Experience from './components/Experience'
import clsx from "clsx"
import { TextReveal } from "./components/lunar/TextReveal"
import Gallery from './components/Gallery'
import SparkSection from './components/SparkSection'

import { ColorSwapper } from "./components/lunar/ColorSwapper"
import LoadingPage from './components/LoadingPage'

export default function page() {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading completion
  // eslint-disable-next-line react-hooks/rules-of-hooks
  React.useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000); // Remove loading screen after 3 seconds
  }, []);


  const text = "I am currently pursuing my PhD in Physics with a focus on Astrophysics at MIT, expected to graduate in 2026. I hold a Bachelor of Science in Physics with an emphasis in Astronomy and Astrophysics, along with a minor in Mathematics and a Computational Science Certificate from Missouri State University, where I graduated in May 2021."

  return (
  <>
    {isLoading && <LoadingPage />} 
    {!isLoading &&
    <div className='h-screen bg-black'>
      
      <ColorSwapper>
        <ColorSwapper.Portal />
        <ColorSwapper.Group className="relative px-8">
          <ColorSwapper.Block className="" activeClass="bg-black">
            <div className='max-w-7xl mx-auto p-5'>
              <Navbar />
              <HeroSection />
            </div>
          </ColorSwapper.Block>


          <ColorSwapper.Block className="" activeClass="bg-[#1a1a2e]">
            <div className='max-w-7xl mx-auto p-5'>
              <TextReveal body={text} className="relative mx-auto h-[200vh] w-full max-w-lg">
                {(tokens: any[]) => (
                  <div className="sticky left-0 top-0 flex h-1/2 items-center sm:text-xl font-medium text-center leading-tight text-white">
                    <div>
                      {tokens.map((token, index) => (
                        <TextReveal.Token key={index} index={index}>
                          {(isActive: any) => (
                            <span
                              className={clsx(
                                {
                                  "opacity-10": !isActive,
                                },
                                "transition",
                              )}>
                              {token}
                            </span>
                          )}
                        </TextReveal.Token>
                      ))}
                    </div>
                  </div>
                )}
              </TextReveal>
            </div>
          </ColorSwapper.Block>

          <ColorSwapper.Block className="" activeClass="bg-[#1a1a2e]">
            <div className='max-w-7xl mx-auto p-5'>
              <Experience />
            </div>
          </ColorSwapper.Block>



          <ColorSwapper.Block className="" activeClass="bg-[#16213e]">
            <div className='max-w-7xl mx-auto p-5'>
              <Gallery />
            </div>
          </ColorSwapper.Block>


          <ColorSwapper.Block className="" activeClass="bg-black">
            <div className='mx-auto'>
              <SparkSection />
            </div>
          </ColorSwapper.Block>

        </ColorSwapper.Group>
      </ColorSwapper>
      
    </div>
    }
  </>
    
  )
}
