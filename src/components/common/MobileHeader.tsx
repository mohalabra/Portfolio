"use client"

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MenuItems } from "@/src/utils/Constants";
import ThemeToggle from "../../theme/ThemeToggle";
import { FiMenu, FiX } from "react-icons/fi";

const MobileHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuVariants = {
    hidden: {
      opacity: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.2 },
    },
  };

  return (
    <header className="flex items-center justify-between p-4">
      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Hamburger Menu Icon */}
      <button
        className="text-2xl md:hidden focus:outline-none"
        onClick={toggleMenu}
      >
        {isMenuOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute top-14 right-0 w-64 bg-gray-700 text-white shadow-lg rounded-lg z-50"
          >
            <ul className="flex flex-col space-y-2 p-4">
              {MenuItems.map((item, index) => (
                <li key={index} className="hover:text-gray-300">
                  <a href={item.to} className="flex items-center space-x-2">
                    <item.icon />
                    <span>{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Menu (hidden on small screens) */}
      <nav className="hidden md:flex space-x-6">
        {MenuItems.map((item, index) => (
          <a
            key={index}
            href={item.to}
            className="hover:text-gray-300 flex items-center space-x-2"
          >
            <item.icon />
            <span>{item.name}</span>
          </a>
        ))}
      </nav>
    </header>
  );
};

export default MobileHeader;
