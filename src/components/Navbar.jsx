import { useEffect, useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import login from "../pages/Login";
import D from "../assets/D.jpg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldUseDark = storedTheme ? storedTheme === 'dark' : prefersDark;
    setIsDark(shouldUseDark);
    document.documentElement.classList.toggle('dark', shouldUseDark);
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
    // Optional: adjust root background class set in index.html
    document.documentElement.classList.toggle('bg-gray-900', next);
    document.documentElement.classList.toggle('bg-white', !next);
  };

  return (
    <nav className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img src={D} alt="Logo" className="h-10 w-10 mr-2" />
            <span className="font-bold text-xl">DJ TECH PVT LTD</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <NavLink to="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Home</NavLink>
            <NavLink to="/about" className="hover:text-blue-600 dark:hover:text-blue-400 transition">About</NavLink>
            <NavLink to="/service" className="hover:text-blue-600 dark:hover:text-blue-400 transition">SaaS</NavLink>
            <NavLink to="/contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Contact</NavLink>
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-2">
            <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
              {isDark ? <Sun className="text-yellow-400" /> : <Moon className="text-gray-700" />}
            </button>
            <button onClick={() => navigate("/login")} className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg font-medium text-white">
              Sign In / Sign Up
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 px-4 py-3 space-y-3">
          <NavLink
            to="/"
            className="block hover:text-blue-600 dark:hover:text-blue-400"
            onClick={() => setIsOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="block hover:text-blue-600 dark:hover:text-blue-400"
            onClick={() => setIsOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            to="/service"
            className="block hover:text-blue-600 dark:hover:text-blue-400"
            onClick={() => setIsOpen(false)}
          >
            SaaS
          </NavLink>
          <NavLink
            to="/contact"
            className="block hover:text-blue-600 dark:hover:text-blue-400"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </NavLink>
          <button
            onClick={() => {
              navigate("/login");
              setIsOpen(false); // close after login click
            }}
            className="w-full bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-medium mt-2 text-white"
          >
            Login
          </button>
        </div>
      )}

    </nav>
  );
}
