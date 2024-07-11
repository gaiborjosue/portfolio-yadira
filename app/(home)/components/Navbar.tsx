import React from 'react'
import Link from "next/link"

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 flex h-16 w-full items-center justify-between px-4 md:px-6 z-50">
      <Link href="#" className="flex items-center gap-2 font-bold" prefetch={false}>
        <h1 className='text-2xl font-bold underline underline-offset-8 decoration-white-500 '>Yadira Gaibor</h1>
      </Link>
    </header>
  )
}