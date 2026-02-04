import React from "react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  const linkStyle = ({ isActive }) =>
    `transition hover:text-gray-900 dark:hover:text-white ${
      isActive ? "text-blue-600 font-semibold" : ""
    }`;

  return (
    <footer className="bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400 w-full py-7">
      <div className="flex flex-col md:flex-row justify-between items-center px-6 w-full">
        
        {/* Left side */}
        <div className="text-sm mb-4 md:mb-0">
          © 2024 <span className="font-semibold text-gray-900 dark:text-white">DJ TECH PVT LTD™</span>. All Rights Reserved.
        </div>

        {/* Right side */}
        <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
          <NavLink to="/about" className={linkStyle}>
            About
          </NavLink>

          <NavLink to="/privacy-policy" className={linkStyle}>
            Privacy Policy
          </NavLink>

          <NavLink to="/terms-and-conditions" className={linkStyle}>
            Terms & Conditions
          </NavLink>

          <NavLink to="/refund-policy" className={linkStyle}>
            Refund Policy
          </NavLink>

          <NavLink to="/contact" className={linkStyle}>
            Contact
          </NavLink>
        </div>
      </div>
    </footer>
  );
}
