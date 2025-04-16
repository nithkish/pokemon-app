import React from "react";
import Link from "next/link";
import NavButtons from "@/components/nav-buttons/NavButtons";
import Image from "next/image";

function NavBar() {
  // This component renders a navigation bar with a logo and navigation buttons
  // The logo is a link to the home page
  // The navigation buttons include links to different sections of the application
  // The navigation bar is sticky and remains at the top of the page when scrolling
  return (
    <nav className="sticky top-0 w-full border-b  bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 lg:p-5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
              <Image
                src={"/pokemon--logo.png"}
                width={140}
                height={100}
                alt="logo"
              />
            </Link>
          </div>
          <NavButtons />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
