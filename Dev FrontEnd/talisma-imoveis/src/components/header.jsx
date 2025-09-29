"use client"
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";


const navLinks = [
  { name: 'Início', href: '/' },
  { name: 'Imóveis', href: '/imoveis' },
  { name: 'Sobre nós', href: '/sobre' },
  { name: 'Contato', href: '/contato' },
];

export default function Header({ currentPage }) {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full h-24 flex justify-center shadow-md z-10 bg-white">
      <div className="w-[90%] flex items-center justify-between z-20">
        <Link href="/">
          <Image
            src="/images/Logo-Red.svg"
            alt="Logo da imobiliária"
            width={150}
            height={50}
          />
        </Link>

        <nav className="hidden md:flex w-1/4 justify-between">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-poppins text-lg ${
                currentPage === link.name
                  ? 'text-[#8d001a] underline'
                  : 'text-[#8d001a] hover:text-black hover:underline'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <IoMdClose  className="w-6 h-6 text-[#8d001a]" />
            ) : (
              <GiHamburgerMenu  className="w-6 h-6 text-[#8d001a]" />
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="absolute top-24 left-0 w-full bg-white shadow-md flex flex-col items-center md:hidden z-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`w-full text-center py-4 font-poppins text-lg border-b border-gray-200 ${
                currentPage === link.name
                  ? 'text-[#8d001a] underline'
                  : 'text-[#8d001a] hover:text-black hover:underline'
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
