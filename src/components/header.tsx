"use client";

import { useEffect, useState } from "react";

import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";

import { MoonIcon, SunIcon } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [icon, setIcon] = useState(<MoonIcon size={20} />);

  const router = useRouter();

  useEffect(() => {
    setIcon(theme !== "dark" ? <SunIcon size={20} /> : <MoonIcon size={20} />);
  }, [theme]);

  const toggleNightMode = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header
      className={
        "absolute z-20 flex w-full items-center justify-between px-16 py-8 max-sm:p-6"
      }
    >
      <div className="flex items-center">
        <Avatar
          className="h-12 w-12 cursor-pointer border-2"
          onClick={() => router.push("/")}
        >
          <AvatarImage src="avatartion.png" alt="@guan-ming" />
          <AvatarFallback>GM</AvatarFallback>
        </Avatar>
      </div>
      <nav className="flex items-center space-x-4">
        <div
          className="cursor-pointer text-gray-500 hover:text-gray-700"
          onClick={() => router.push("/about")}
        >
          About
        </div>
        <div
          className="cursor-pointer text-gray-500 hover:text-gray-700"
          onClick={() => router.push("/projects")}
        >
          Projects
        </div>
      </nav>
      <div className="flex items-center">
        <button
          onClick={toggleNightMode}
          className="cursor-pointer text-gray-500 hover:text-gray-700"
        >
          {icon}
        </button>
      </div>
    </header>
  );
};

export default Header;
