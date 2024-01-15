"use client";

import { useEffect, useState } from "react";

import { useTheme } from "next-themes";
import { usePathname, useRouter } from "next/navigation";

import { MoonIcon, SunIcon } from "lucide-react";

import { cn } from "@/lib/utils";

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const [icon, setIcon] = useState(<MoonIcon size={20} />);

  const router = useRouter();

  useEffect(() => {
    setIcon(theme !== "dark" ? <SunIcon size={25} /> : <MoonIcon size={25} />);
  }, [theme]);

  const toggleNightMode = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header
      className={cn(
        "absolute z-50 flex w-full items-center justify-between px-16 py-8 max-md:px-8 max-md:py-4",
        pathname === "/"
          ? "bg-opacity-0"
          : "bg-white bg-opacity-100 dark:bg-black",
      )}
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
      <nav className="flex items-center space-x-4 text-lg">
        <a
          className="group cursor-pointer transition duration-300"
          onClick={() => router.push("/about")}
        >
          About
          <span className="block h-0.5 max-w-0 bg-black transition-all duration-300 group-hover:max-w-full dark:bg-white"></span>
        </a>
        <a
          className="group cursor-pointer transition duration-300"
          onClick={() => router.push("/projects")}
        >
          Projects
          <span className="block h-0.5 max-w-0 bg-black transition-all duration-300 group-hover:max-w-full dark:bg-white"></span>
        </a>
      </nav>
      <div className="flex items-center hover:animate-wiggle">
        <button onClick={toggleNightMode} className="cursor-pointer">
          {icon}
        </button>
      </div>
    </header>
  );
};

export default Header;
