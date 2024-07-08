import React,  { useState } from 'react'
import MenuIcon from '../assets/icons/MenuIcon';
import SearchIcon from '../assets/icons/SearchIcon';
import CartIcon from '../assets/icons/CartIcon';
import LogoCart from '../assets/icons/LogoCart';
import LogoPart from '../assets/icons/LogoPart';
const NavBar = () => {

    const Links = [
        { name: "HOME", link: "/" },
        { name: "DESIGNERS", link: "/about" },
        { name: "ABOUT", link: "/product" },
        { name: "CONTACT", link: "/" },
      ];
      const [open, setOpen] = useState(false);
  return (
    <div className=" w-full top-0 left-0 bg-white z-50 h-[81px] border border-b-1 border-cool-grey">
    <div className="max-w-[1800px] flex items-center justify-between mx-auto py-4 md:px-10 px-7">
      <div className="cursor-pointer flex items-center justify-center">
        <span className="text-headline-small  m-auto  text-verdigris">
          TinbuExpress
        </span>
        {/* <span><LogoCart/></span>
        <span><LogoPart/></span> */}
      </div>

      {/* <div
        
        className="text-3xl absolute right-8 top-5 cursor-pointer lg:hidden"
      >
        {open ? (
          <IoClose className="text-4xl text-[#bcbcbc]" />
        ) : (
          <IoMenu className="text-4xl text-[#bcbcbc]" />
        )}
      </div> */}

      <ul
        className={`lg:flex lg:items-center lg:pb-0  absolute lg:static text-[20px] font-[300] bg-white lg:z-auto z-50 left-0 w-full lg:w-auto lg:pl-0 pl-6 transition-all duration-500 ease-in ${
          open ? "top-20" : "top-[-490px]"
        }`}
      >
        {Links.map((link) => (
          <li key={link.name} className="lg:mx-8 text-label-small lg:my-0  my-3">
            <a
              href={link.link}
              className="text-gray-800 hover:text-gray-400 duration-500"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>

      <ul
        className={`flex items-center pb-0 justify-end  pr-0  static bg-white z-auto left-0  w-auto pl-0 transition-all duration-500 ease-in `}
      >
        <li className="block relative mx-4 " onClick={() => setOpen(!open)}>
          <MenuIcon  className="cursor-pointer" />
         
        </li>
        <li className="block relative mx-4 ">
          <SearchIcon  />
          
        </li>
       
       <li  className="mx-4 ml-8 py-2 border-l-3 border-l-french-grey">
       <CartIcon/>
       </li>
      </ul>
     
    </div>
  </div>
  )
}

export default NavBar
