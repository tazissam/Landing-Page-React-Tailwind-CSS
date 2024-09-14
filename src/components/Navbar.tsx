import  { useState } from 'react'
import logo from "../assets/logo.png"
import { navItems } from "../constants"
import { X, Menu } from "lucide-react"

const Navbar = () => {
  const [MobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!MobileDrawerOpen);
  };
  return (
    <nav className='sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80'>
      <div className="container px-4 mx-auto relative text-sm list-none	">
        <div className="flex justify-between items-center">
          <div className=" flex items-center flex-shrink-0">
            <img src={logo} alt="logo here" className='size-10 mr-2' />
            <span className="text-xl tracking-ligh">
              VirtualR
            </span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items center">
            <a href="$" className='py-2 px-3 border rounded-md'>
              Sign in
            </a>
            <a href="#" className='py-2 px-3 bg-gradient-to-r from-orange-500 to-orange-800 rounded-md '>
              Create an account
            </a>
          </div>
          <div className="lg:hidden md:flex-col justiy-end">
            <button onClick={toggleNavbar}>
              {MobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {MobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full px-12 py-8 flex flex-col justify-center items-center lg:hidden">
            {navItems.map((item, index) => (
              <li key={index} className="py-4" >
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
            <div className="col space-x-6 mt-4">
              <a href="#" className='py-2 px-3 border rounded-md'>
                Sign in
              </a>
              <a href="#" className='py-2 px-3 bg-gradient-to-r from-orange-500 to-orange-800 rounded-md '>
                Create an account
              </a>
            </div>
          </div>

        )}

      </div>
    </nav>
  )
}

export default Navbar