"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  HomeIcon,
  Location,
  Door,
  People,
  Area,
  Construction,
  Contact,
  Phone,
} from "../../../../public/icons";

interface NavItemProps {
  href: string;
  icon: React.ReactNode;
  isActive: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ href, icon, isActive }) => (
  <Link href={href}>
    <div
      className={`flex items-center p-4 cursor-pointer ${
        isActive
          ? "text-[#BC9861] border-r-4 border-[#BC9861]"
          : "text-[#C0C0C0]"
      }`}
    >
      <div className="w-8 h-8">{icon}</div>
    </div>
  </Link>
);

const Navbar: React.FC = () => {
  const pathname = usePathname();

  const activeColor = "#BC9861";
  const inactiveColor = "#C0C0C0";

  return (
    <div className="flex flex-col w-24 h-screen">
      <nav className="flex flex-col flex-grow">
        <NavItem
          href="/"
          icon={
            <HomeIcon color={pathname === "/" ? activeColor : inactiveColor} />
          }
          isActive={pathname === "/"}
        />
        <NavItem
          href="/map-location"
          icon={
            <Location
              color={pathname === "/map-location" ? activeColor : inactiveColor}
            />
          }
          isActive={pathname === "/map-location"}
        />
        <NavItem
          href="/door"
          icon={
            <Door color={pathname === "/door" ? activeColor : inactiveColor} />
          }
          isActive={pathname === "/door"}
        />
        <NavItem
          href="/family"
          icon={
            <People
              color={pathname === "/family" ? activeColor : inactiveColor}
            />
          }
          isActive={pathname === "/family"}
        />
        <NavItem
          href="/house"
          icon={
            <Area color={pathname === "/house" ? activeColor : inactiveColor} />
          }
          isActive={pathname === "/house"}
        />
        <NavItem
          href="/room"
          icon={
            <Construction
              color={pathname === "/room" ? activeColor : inactiveColor}
            />
          }
          isActive={pathname === "/room"}
        />
        <NavItem
          href="/phone"
          icon={
            <Contact
              color={pathname === "/phone" ? activeColor : inactiveColor}
            />
          }
          isActive={pathname === "/phone"}
        />
        <div className="flex items-center p-4 mt-44">
          <div className="w-8 h-8">
            <Phone />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
