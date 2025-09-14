import { type ReactNode } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "./utils";

interface NavItem {
  name: string;
  href: string;
}

interface LayoutProps {
  children: ReactNode;
}

const navItems: NavItem[] = [
  { name: "Tutoring", href: "#tutoring" },
  { name: "Test Packs", href: createPageUrl("TestPacks") },
  { name: "Simulations", href: "#simulations" },
  { name: "About", href: "#about" }
];

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="bg-white text-gray-900 min-h-screen font-sans">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to={createPageUrl("Home")} className="flex items-center">
            <img 
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/529eebcf2_Screenshot2025-08-30at84742PM.png"
              alt="ARise Education"
              className="h-12"
            />
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              item.href.startsWith("#") ? (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-normal text-gray-600 hover:text-gray-900 transition-colors duration-300"
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-sm font-normal text-gray-600 hover:text-gray-900 transition-colors duration-300"
                >
                  {item.name}
                </Link>
              )
            ))}
          </nav>
          <button className="hidden md:block bg-gray-900 text-white px-5 py-2 rounded-lg font-medium text-sm hover:bg-gray-800 transition-colors duration-300">
            Contact Us
          </button>
          <button className="md:hidden text-lg font-normal text-gray-600">
            &#9776;
          </button>
        </div>
      </header>

      <main>{children}</main>

      <footer className="bg-gray-50 py-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-500">
          <p className="font-normal">&copy; {new Date().getFullYear()} ARise Education. All rights reserved.</p>
          <p className="text-sm mt-2 font-light">Unlock Your Potential. Achieve Success.</p>
        </div>
      </footer>
    </div>
  );
}