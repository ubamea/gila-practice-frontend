import React from "react";
import { Link, useLocation } from "react-router-dom";

interface NavItemProps {
  to?: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const NavItem = ({ to, children, onClick, className }: NavItemProps) => {
  const { pathname } = useLocation();
  const isActive = to ? pathname === to : false;

  return to ? (
    <Link
      to={to}
      className={`hover:text-white block px-3 py-1 rounded-md transition ${
        isActive ? "text-white font-bold bg-gray-700" : "text-gray-300"
      } ${className}`}
      onClick={onClick}
    >
      {children}
    </Link>
  ) : (
    <div
      className={`text-gray-300 hover:text-white block px-3 py-1 rounded-md transition ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

const Navbar = () => {
  return (
    <nav className="bg-gray-800 px-6 py-3 w-full sticky top-0 z-50">
      <div className="flex items-center space-x-2"></div>
      <ul className="flex items-center space-x-3 list-none m-0 p-0 h-full">
        <NavItem to="/send-message">Send Message</NavItem>
        <NavItem to="/logs">Logs</NavItem>
      </ul>
    </nav>
  );
};

export default Navbar;
