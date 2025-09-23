import { useState } from "react";
import { Menu, X ,Sun} from "lucide-react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import login from "../pages/Login";
import D from "../assets/D.jpg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="bg-gray-900 text-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img src={D} alt="Logo" className="h-10 w-10 mr-2" />
            <span className="font-bold text-xl">DJ TECH PVT LTD</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <NavLink to="/" className="hover:text-blue-400 transition">Home</NavLink>
            <NavLink to="/about" className="hover:text-blue-400 transition">About</NavLink>
            <NavLink to="/service" className="hover:text-blue-400 transition">SaaS</NavLink>
            <NavLink to="/contact" className="hover:text-blue-400 transition">Contact</NavLink>
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-2">
            <button className="p-2 rounded-full hover:bg-gray-800"><Sun className="hover:text-blue-400 transition"/></button>
            <button onClick={() => navigate("/login")  } className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg font-medium">
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
        <div className="md:hidden bg-gray-800 px-4 py-3 space-y-3">
          <NavLink to="/" className="block hover:text-blue-400">Home</NavLink>
          <NavLink to="/about" className="block hover:text-blue-400">About</NavLink>
          <NavLink to="/service" className="block hover:text-blue-400">SaaS</NavLink>
          <NavLink to="/contact" className="block hover:text-blue-400">Contact</NavLink>
          <button onClick={() => navigate("/login")} className="w-full bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-medium mt-2">
            Login
          </button>
        </div>
      )}
    </nav>
  );
}
