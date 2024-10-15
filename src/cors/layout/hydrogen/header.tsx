'use client';

import Link from "next/link";
import HamburgerButton from "../hamburger-button";
import StickyHeader from "../sticky-header";
import Sidebar from "./sidebar";
import HeaderMenuRight from "../header-menu-right";
import Logo from "@/componnets/logo";
import SearchWidget from "@/componnets/search/search";
import ContactUs from "./ContactUs";
import Image from "next/image";

export default function Header() {
  return (
    <StickyHeader className="z-[990] 2xl:py-5 3xl:px-8  4xl:px-10 border-b">
      <div className="flex w-full max-w-2xl items-center">
        <HamburgerButton
          view={<Sidebar className="static w-full 2xl:w-full" />}
        />
        {/* <Link
          href={"/"}
          aria-label="Site Logo"
          className=""
        > */}
        {/* <Logo iconOnly={true} /> */}
        <Image
          src={"/Vector.svg"}
          alt="Isomorphic"
          width={64}
          height={64}
          className="w-7 h-7 me-4 shrink-0 text-gray-800 hover:text-gray-900 lg:me-5 xl:hidden"
        />
        {/* </Link> */}

        <div className="sm:flex hidden w-full ">
          <ContactUs />
        </div>
      </div>

      <HeaderMenuRight />
    </StickyHeader>
  );
}
