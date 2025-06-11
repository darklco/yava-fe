'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <nav
      className="relative z-30 bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-md flex items-center justify-between px-6"
      style={{ width: '100%', height: '85px' }}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-wider">
          <img src="/heroimage/Logo - White (1).png" alt="YAVA" className="h-8 w-auto" />
        </Link>

        {/* Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link href="/lontar-sugar" className="hover:underline text-sm md:text-base">
            Lontar sugar
          </Link>

          {/* Dropdown */}
          <div className="relative">
            <button
              className="flex items-center gap-1 hover:underline text-sm md:text-base focus:outline-none"
              onClick={() => setOpenDropdown((prev) => !prev)}
              aria-expanded={openDropdown}
            >
              Our Foods <ChevronDown size={16} />
            </button>
            {openDropdown && (
              <div
                className="absolute bg-white text-black mt-2 p-2 rounded shadow-lg z-50 w-40"
                onMouseLeave={() => setOpenDropdown(false)} // Tutup saat kursor keluar
              >
                <Link
                  href="/our-foods"
                  className="block px-2 py-1 hover:bg-gray-100"
                  onClick={() => setOpenDropdown(false)}
                >
                  Food 1
                </Link>
                <Link
                  href="/our-foods/food-2"
                  className="block px-2 py-1 hover:bg-gray-100"
                  onClick={() => setOpenDropdown(false)}
                >
                  Food 2
                </Link>
              </div>
            )}
          </div>

          <Link href="/momoyo" className="hover:underline text-sm md:text-base">
            Ingredients
          </Link>
          <Link href="/app/company" className="hover:underline text-sm md:text-base">
            Company
          </Link>
          <Link href="/app/yavakatamereka" className="hover:underline text-sm md:text-base">
            YAVAKataMereka
          </Link>
          <Link href="/news-event" className="hover:underline text-sm md:text-base">
            News & Event
          </Link>
        </div>

        {/* Language Selector */}
        <div className="flex items-center space-x-2 text-sm">
          <span>ID</span>
          <span className="bg-red-600 text-white px-2 py-0.5 rounded-full">EN</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;