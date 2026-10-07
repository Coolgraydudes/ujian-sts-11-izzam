import React from 'react'
import { NavLink } from 'react-router'
import { buttonVariants } from '@/components/ui/button'

export default function Navbar() {
  return (
    <div>
      <nav className="flex items-center justify-between py-4 px-28  4">


        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-black rounded-sm font-bold text-white flex items-center justify-center">
                L
            </div>
            <h1 className="font-bold pt-1.5">LOGO</h1>
          </div>
            <NavLink to="/" end className={buttonVariants({ variant: "ghost" })}>Home</NavLink>
            <NavLink to="/about" className={buttonVariants({ variant: "ghost" })}>About</NavLink>
            <NavLink to="/testimony" className={buttonVariants({ variant: "ghost" })}>Testimony</NavLink>
            <NavLink to="/faq" className={buttonVariants({ variant: "ghost" })}>FAQ</NavLink>
        </div>

        <div className="flex gap-4">
            <NavLink className={buttonVariants({ variant: "default" })}>Sign In</NavLink>
            </div>

      </nav>
    </div>
  )
}
