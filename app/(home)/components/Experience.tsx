import React from "react";
import { SparklesCore } from "./sparkles";
import Timeline from './timeline/Timeline';
import { TimelineEvent } from './timeline/TimelineTypes';

const events: TimelineEvent[] = [
  {
    date: 'Spring 2024 | Massachusetts Institute of Technology',
    title: 'Physics Mentor Program',
    description: '',
    details: ['Mentored undergraduate students in various areas such as academic, research and soft skills'],
  },
  {
    date: 'June 2020-August 2020 | California Institute of Technology',
    title: 'WAVE Summer Fellow',
    description: '',
    details: ['Research on the stochasticity and sources of r-process enrichment events in galaxy formation/evolution', 'Developed Python scripts to analyze results of cosmological simulations on three different sized galaxies', 'Wrote final report and presented at Caltech Summer Seminar Day'],
    people: [
      {
        id: 1,
        name: "Dr. Philip Hopkins",
        designation: 'Professor of Theoretical Astrophysics',
        image: "/images/dr_PhilipHopkins.jpg"
      }
    ]
  },
  {
    date: 'August 2019-May 2020 | Missouri State University',
    title: 'NASA Space Grant Consortium Intern',
    description: '',
    details: ['Exoplanet research focused on Warm Jupiter companions and their impact on formation/evolution of these systems.', 'Developed code with REBOUND and REBOUNDx N-body integrators to perform dynamical simulations for Kepler planetary systems', 'Presented poster at CUWiP and will also present at the annual AAS Division for Planetary Sciences virtual meeting on Oct. 2020'],
    people: [
      {
        id: 1,
        name: "Dr. Sarah Morrison",
        designation: 'Professor Physics Astronomy and Materials Sci',
        image: "/images/dr_SarahMorrison.jpg"
      }
    ]
  },
  {
    date: 'May 2019-July 2019 | University of Notre Dame',
    title: 'NSF REU Participant',
    description: '',
    details: ['Research on white dwarf pulsar AR Scorpii with multi-site photometry data', 'Developed Python code to extract main pulse from light curve, with the goal of obtaining an improved spin-down rate for white dwarf', 'Wrote project report and presented findings at REU Symposium', 'Published first-author paper in MNRAS'],
    people: [
      {
        id: 1,
        name: "Dr. Peter Garnavich",
        designation: 'Professor Physics & Astronomy',
        image: "/images/dr_PeterGarnavich.jpg"
      }
    ]
  },
  {
    date: 'August 2018-May 2019 | Missouri State University',
    title: 'NASA Space Grant Consortium Intern',
    description: '',
    details: ['RAsteroseismology research on sdB type stars with Kepler K2 Mission data', 'Analyzed light curves to look for pulsation patterns (frequency multiplets), in order to determine pulsation period and star rotation', 'Presented findings at the NASA-Missouri Space Grant Conference on April 2019'],
    people: [
      {
        id: 1,
        name: "Dr. Michael Reed",
        designation: 'Professor Physics Astronomy and Materials Sci',
        image: "/images/dr_MichaelReed.jpg"
      }
    ]
  },
];

export default function Experience() {
  return (
    <>

      <div className="p-6 sm:p-10">
        <div className="w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
          <h1 className="md:text-4xl text-2xl lg:text-5xl font-bold text-center text-white relative z-20 mb-3">
            My Experience
          </h1>
          <div className="w-[40rem] h-30 relative">
            {/* Gradients */}
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

            {/* Core component */}
            <SparklesCore
              background="transparent"
              minSize={0.4}
              maxSize={1}
              particleDensity={250}
              className="w-full h-full"
              particleColor="#FFFFFF"
            />

            {/* Radial Gradient to prevent sharp edges */}
            <div className="absolute inset-0 w-full h-full bg-[#1a1a2e] [mask-image:radial-gradient(250px_100px_at_top,transparent_20%,white)]"></div>


          </div>
        </div>


        <div className="App">
          <Timeline events={events} />
        </div>




      </div>


    </>
  );
}