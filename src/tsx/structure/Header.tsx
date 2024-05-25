import React from 'react';
import { FaHome, FaPlus, FaSearch, FaStar } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { PiTelevisionBold } from "react-icons/pi";
import { RiMovie2Line } from "react-icons/ri";
import Logo from "../../assets/image/disney-logo.png";
import { HeaderItems } from "./HeaderItems"
import { useState } from 'react';

export const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false)

  function handleMenu() {
    setMenuOpen(!menuOpen)
  }

  const menu = [
    {
      name: "HOME",
      icon: FaHome,
    },
    {
      name: "SEARCH",
      icon: FaSearch,
    },
    {
      name: "PLUS",
      icon: FaPlus,
    },
    {
      name: "FAVORIES",
      icon: FaStar,
    },
    {
      name: "MOVIES",
      icon: PiTelevisionBold,
    },
    {
      name: "SERIES",
      icon: RiMovie2Line,
    },
  ]

  return (
    <div className='flex items-center justify-between p-4'>
      <div className="flex items-center gap-4">
        <img src={Logo} alt="Logo Disney Plus" className='max-w-[80px] object-cover'/>

        <div className="hidden md:flex items-center gap-6">
          {menu.map((item) => (
            <HeaderItems key={item.name} name={item.name} Icon={item.icon} />
          ))}
        </div>

        <div className="flex md:hidden items-center gap-6">
          {menu.map((item, index) => index < 3 && (
            <HeaderItems key={item.name} name={item.name} Icon={item.icon} />
          ))}
        </div>

        <div className="relative md:hidden" onClick={handleMenu}>
          <HeaderItems name={""} Icon={BsThreeDotsVertical} />
          {menuOpen ? 
            <div className='absolute mt-3 z-[100] bg-[#060a12]
            bordor border-gray-700 px-6 py-3 flex flex-col gap-2 rounded-md'>
              {menu.map((item, index) => index >= 3 && (
              <HeaderItems key={item.name} name={item.name} Icon={item.icon} />
              ))}
            </div> : null 
          }
        </div>
      </div>
      <img src="https://cdn.pfps.gg/pfps/5346-venom-moon.png" alt="User" className='w-10 h-10 rounded-full cursor-pointer' />
          
      </div>
  )
}
