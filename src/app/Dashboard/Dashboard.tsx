import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import LogoutButton from "./LogoutButton";
import { Menu } from "lucide-react";

const Dashboard: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  React.useEffect(() => {
    setIsSidebarOpen(false);
  }, [location.pathname]);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 z-40 h-full w-64 bg-gray-800 text-white p-4 transform transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:relative md:block`}
      >
        <div className="flex items-center mb-8">
          <img src="/LOGO.jpg" alt="Logo" className="h-12 w-15 mr-2" />
          <span className="text-xl font-bold">Dashboard</span>
        </div>
        <nav>
          <ul>
            {[
              { to: "/dashboard/projects", label: "Projects" },
              { to: "/dashboard/blogs", label: "Blog" },
              { to: "/dashboard/messages", label: "Contact Messages" },
              { to: "/dashboard/testimonials", label: "Testimonials" },
            ].map((item) => (
              <li className="mb-4" key={item.to}>
                <Link
                  to={item.to}
                  className="flex items-center p-2 rounded hover:bg-gray-700"
                  onClick={() => setIsSidebarOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Overlay on mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-30 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div
        className={`flex-1 flex flex-col transition-all duration-300 ease-in-out ${
          isSidebarOpen ? "ml-0" : ""
        } md:ml-64`}
      >
        <header className="bg-white shadow p-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            {/* Burger menu button (only visible on mobile) */}
            <button
              className="md:hidden text-gray-700"
              onClick={() => setIsSidebarOpen((prev) => !prev)}
            >
              <Menu className="w-6 h-6" />
            </button>
            <h1 className="text-2xl font-bold">Dashboard</h1>
          </div>
          <LogoutButton />
        </header>

        <main className="p-4 flex-1 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;