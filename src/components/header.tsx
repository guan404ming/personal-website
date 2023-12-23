"use client";

import React, { useState } from "react";

import { MoonIcon, SunIcon } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Header = () => {
  const [isNightMode, setIsNightMode] = useState(false);

  const toggleNightMode = () => {
    setIsNightMode(!isNightMode);
  };

  return (
    <header
      className={
        "absolute z-20 flex w-full items-center justify-between px-16 py-8 max-sm:p-6"
      }
    >
      <div className="flex items-center">
        <Avatar className="h-12 w-12">
          <AvatarImage src="avatartion.png" alt="@guan-ming" />
          <AvatarFallback>GM</AvatarFallback>
        </Avatar>
      </div>
      <nav className="flex items-center space-x-4">
        <a href="/about" className="text-gray-500 hover:text-gray-700">
          About
        </a>
        <a href="/projects" className="text-gray-500 hover:text-gray-700">
          Projects
        </a>
      </nav>
      <div className="flex items-center">
        <button
          onClick={toggleNightMode}
          className="text-gray-500 hover:text-gray-700"
        >
          {isNightMode ? <SunIcon size={20} /> : <MoonIcon size={20} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
