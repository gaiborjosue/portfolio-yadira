import React from 'react'
import Link from "next/link"

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 flex h-16 w-full items-center justify-between px-4 md:px-6 z-50">
      <Link href="#" className="flex items-center gap-2 font-bold" prefetch={false}>
        <h1 className='text-2xl font-bold underline underline-offset-8 decoration-white-500'>Yadira Gaibor</h1>
      </Link>
      <nav className="flex items-center gap-4">
        <Link href="#" aria-label="LinkedIn" prefetch={false}>
          <LinkedinIcon className="h-5 w-5 hover:scale-125 transition-all" />
        </Link>
        <Link href="#" aria-label="Papers" prefetch={false}>
          <FileIcon className="h-5 w-5 hover:scale-125 transition-all" />
        </Link>
      </nav>
    </header>
  )
}

function FileIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    </svg>
  )
}


function LinkedinIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}
