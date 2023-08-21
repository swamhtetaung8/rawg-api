import {  NavLink } from "react-router-dom"
import dpad from "/dpad.png"
import {BsSearch} from "react-icons/bs"
import { Button } from '@mantine/core';
import PrimaryButton from "./Buttons/PrimaryButton";
import SecondaryButton from "./Buttons/SecondaryButton";
const Navbar = () => {
  return (
    <nav className=" layout-container absolute top-0 w-full py-5 z-50">
      <div className="flex justify-between items-center">
        <div className=" flex divide-x-[1px] gap-5">
            <img src={dpad} width={40} className=" object-contain" height={40} alt="" />
            <div className="flex items-center gap-6">
                <NavLink to={"/"} className=" text-gray-300 font-medium  ml-5">Explore</NavLink>
                <NavLink to={"/"} className=" text-gray-300 font-medium ">Releases</NavLink>
                <div className="relative">
                    <input type="search" name="Search" placeholder="Discover New Games" className=" py-3  pl-14 pr-5 rounded-2xl sm:w-auto focus:outline-none bg-[#153d3c] text-gray-100 focus:bg-[#133534]  " />
                    <BsSearch className=" absolute text-white top-[15px] left-5 text-xl"/>
                </div>
            </div>
        </div>
        <div className="flex gap-5 items-center">
            <SecondaryButton>Login</SecondaryButton>
            <PrimaryButton>Sign Up</PrimaryButton>
        </div>
      </div>
      
    </nav>
  )
}

export default Navbar
