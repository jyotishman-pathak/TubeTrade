"use client"

import React from 'react';
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import { useTheme } from 'next-themes';
import { Button } from "@/components/ui/button";
import { FaAngleDown } from "react-icons/fa";
import Link from 'next/link';


import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
  } from "@/components/ui/command"
  

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  const themeHandler = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <nav className= ' w-full h-[52px] flex justify-between items-center'>
      <div className="flex items-center">
        <h1 className='text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-pink-500 to-blue-500'>
          TubeTrade
        </h1>
        <div className='ml-4 flex gap-3 items-center'>
          <Link href='/markets' className=''>
          Markets
          </Link>
          <Link href='/trade' className=''>Trade</Link>
          <Link href='/more' className=' flex items-center'>
            More
            <span className='ml-0'>
              <FaAngleDown />
            </span>
          </Link>
        </div>
      </div>

        <div className=" h-[42px] w-[280px]">
        <Command>
  <CommandInput placeholder="Type a command or search..." />
  <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Suggestions">
      <CommandItem>Calendar</CommandItem>
      <CommandItem>Search Emoji</CommandItem>
      <CommandItem>Calculator</CommandItem>
    </CommandGroup>
    <CommandSeparator />
    <CommandGroup heading="Settings">
      <CommandItem>Profile</CommandItem>
      <CommandItem>Billing</CommandItem>
      <CommandItem>Settings</CommandItem>
    </CommandGroup>
  </CommandList>
</Command>

        </div>

      <div className="flex items-center gap-3">
        <Button asChild>
          <Link href="/login">Connect Your Wallet</Link>
        </Button>
       
     
        <Button onClick={themeHandler} variant="link">
          {theme === 'dark' ? <MdDarkMode size={24} /> : <MdOutlineDarkMode size={24} />}
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
