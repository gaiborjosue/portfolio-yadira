/* eslint-disable react/no-children-prop */
"use client"

import React, {useEffect, useState, Suspense} from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Experience from './components/Experience'
import clsx from "clsx"
import { TextReveal } from "./components/lunar/TextReveal"
import Gallery from './components/Gallery'
import Spark from './components/SparkSection'

import { ColorSwapper } from "./components/lunar/ColorSwapper"
import LoadingPage from './components/LoadingPage'
import { IconHome, IconBrandLinkedin, IconBrain } from "@tabler/icons-react";
import { FloatingNav } from "./components/aceternity/floating-navbar";

import FooterMinimal from "./components/Footer";

export default function page() {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading completion
  // eslint-disable-next-line react-hooks/rules-of-hooks
  React.useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000); // Remove loading screen after 3 seconds
  }, []);


  const text = "I am currently pursuing my PhD in Physics with a focus on Astrophysics at MIT, expected to graduate in 2026. I hold a Bachelor of Science in Physics with an emphasis in Astronomy and Astrophysics, along with a minor in Mathematics and a Computational Science Certificate from Missouri State University, where I graduated in May 2021."

  const navItems = [
    {
      name: "Home",
      link: "#home",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Experience",
      link: "#experience",
      icon: <IconBrain className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/yadiragaibor/",
      icon: (
        <IconBrandLinkedin className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];

  return (
  <>
    {isLoading && <LoadingPage />} 
    {!isLoading &&
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} /> &&
    <div className='h-screen bg-black'>
      
      <ColorSwapper className={undefined}>
        <ColorSwapper.Portal />
        <ColorSwapper.Group className="relative px-8">
          <ColorSwapper.Block className="" activeClass="bg-black" id="home">
            <div className='max-w-7xl mx-auto'>
              <HeroSection />
            </div>
          </ColorSwapper.Block>


          <ColorSwapper.Block className="" activeClass="bg-[#1a1a2e]" id="about">
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

          <ColorSwapper.Block className="" activeClass="bg-[#1a1a2e]" id="experience">
            <div className='max-w-7xl mx-auto p-5'>
              <Experience />
            </div>
          </ColorSwapper.Block>



          <ColorSwapper.Block className="" activeClass="bg-[#16213e]" id="gallery">
            <div className='max-w-7xl mx-auto p-5'>
              <Gallery />
            </div>
          </ColorSwapper.Block>

        </ColorSwapper.Group>
        
      </ColorSwapper>

      <Spark />
      <FooterMinimal />
    </div>
    </div>
    
    }
  </>
    
  )
}
