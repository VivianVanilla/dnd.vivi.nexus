import { useState } from "react";
import SidebarButton from "./SidebarButton"; 
import { Link, useLocation } from "react-router";



function Layout({ children }) {
   const [sidebarOpen, setSidebarOpen] = useState(false);
   const location = useLocation();

     const sidebarLinks = [
    { label: "Home", path: "/"  },
    { label: "Feats", path: "/Feats" },
    { label: "Classes", path: "/Classes" },
    { label: "Races", path: "/Races" },
    { label: "Fragmented Pantheon" , path: "/FragmentedPantheon" },
    { label: "Veins of the Abyss" , path: "/VotA" },
    { label: "Archived", path: "/Archived" },

  ];


  return (
    <div className="min-h-screen flex flex-col sm:flex-row">
      {/* Sidebar for desktop, dropdown for mobile */}
      <aside className="sm:w-60 w-full sm:min-h-screen flex-shrink-0">
        {/* Mobile Dropdown */}
        <div className="sm:hidden w-full px-4 py-2 bg-white/80 border-b-2 border-blue-800 flex items-center justify-between">
          <span className="font-bold text-blue-900 text-lg">Menu</span>
          <button
            className="p-2 rounded-md border border-blue-800 bg-blue-900 text-white"
            onClick={() => setSidebarOpen((open) => !open)}
            aria-label="Toggle sidebar menu"
          >
            {sidebarOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
        {/* Dropdown menu for mobile */}
        {sidebarOpen && (
          <nav className="sm:hidden flex flex-col gap-2 px-4 py-2 bg-white/90 border-b-2 border-blue-800 z-10">
            {sidebarLinks.map((link) => (
              <SidebarButton
                 path={link.path}
              key={link.label}
              label={link.label}
              active={location.pathname === link.path}
              />
            ))}
          </nav>
        )}
        {/* Sidebar for desktop */}
        <nav className="hidden sm:flex flex-col gap-2 py-8 px-2 bg-white/80 min-h-screen border-r-2 border-blue-800 items-stretch">
          {sidebarLinks.map((link) => (
            <SidebarButton
              path={link.path}
              key={link.label}
              label={link.label}
              active={location.pathname === link.path}
            />
          ))}
        </nav>
      </aside>
      <main className="flex-1">{children}</main>
    </div>
  );
}

export default Layout;

