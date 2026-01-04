// import { Outlet, NavLink, Link } from "react-router-dom";
// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { CarFront } from "lucide-react";
// import {
//   Menu,
//   X,
//   LayoutDashboard,
//   Car,
//   ClipboardList,
//   PlusCircle,
//   UserCircle,
//   Home,
//   Moon,
//   Sun,
//   ChevronDown,
// } from "lucide-react";

// const DashboardLayout = () => {
//   const [open, setOpen] = useState(true);
//   const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
//   const [profileOpen, setProfileOpen] = useState(false);

//   useEffect(() => {
//     document.documentElement.setAttribute("data-theme", theme);
//     localStorage.setItem("theme", theme);
//   }, [theme]);

//   const toggleTheme = () =>
//     setTheme(theme === "light" ? "dark" : "light");

//   const activeClass =
//     "bg-indigo-600/10 text-indigo-600 dark:text-indigo-400 font-semibold";
//   const baseClass =
//     "flex items-center gap-3 px-4 py-2 rounded-lg transition hover:bg-indigo-600/10";

//   return (
//     <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">

//       {/* ───── Top Navbar ───── */}
//       <header className="sticky top-0 z-40 bg-white/80 dark:bg-gray-800/80 backdrop-blur border-b border-gray-200 dark:border-white/10">
//         <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">

//           <div className="flex items-start gap-3">
//             <button
//               onClick={() => setOpen(!open)}
//               className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700"
//             >
//               {open ? <X size={18} /> : <Menu size={18} />}
//             </button>
//             <span className="text-2xl font-black tracking-tight bg-gradient-to-r from-blue-600 to-indigo-400 
//            dark:from-blue-800 dark:to-purple-700 bg-clip-text text-transparent font-extrabold">
//               TravelEase
//             </span>
//           </div>

//           <div className="flex items-center gap-4">

//             {/* Theme */}
//             <button
//               onClick={toggleTheme}
//               className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700"
//             >
//               {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
//             </button>

//             {/* Profile Dropdown */}
//             <div className="relative">
//               <button
//                 onClick={() => setProfileOpen(!profileOpen)}
//                 className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-indigo-600/10"
//               >
//                 <UserCircle size={22} />
//                 <ChevronDown size={16} />
//               </button>

//               {profileOpen && (
//                 <div className="absolute right-0 mt-2 w-44 bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
//                   <Link
//                     to="/dashboard"
//                     className="block px-4 py-2 text-sm hover:bg-indigo-600/10"
//                   >
//                     Overview
//                   </Link>
//                   <Link
//                     to="/dashboard/profile"
//                     className="block px-4 py-2 text-sm hover:bg-indigo-600/10"
//                   >
//                     Edit Profile
//                   </Link>
//                   <button className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-500/10">
//                     Logout
//                   </button>
//                 </div>
//               )}
//             </div>

//           </div>
//         </div>
//       </header>

//       <div className="flex">

//         {/* ───── Sidebar ───── */}


//         <motion.aside
//           animate={{ width: open ? 260 : 0 }}
//           transition={{ type: "spring", stiffness: 200, damping: 30 }}
//           className="bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-white/10 overflow-hidden h-[calc(100vh-64px)] sticky top-16"
//         >
//           <nav className="p-4 space-y-1 text-sm">

//             <NavLink
//               to="/dashboard"
//               end
//               className={({ isActive }) =>
//                 `${baseClass} ${isActive && activeClass}`
//               }
//             >
//               <LayoutDashboard size={18} />
//               Overview
//             </NavLink>

//             <NavLink
//               to="/dashboard/add-vehicle"
//               className={({ isActive }) =>
//                 `${baseClass} ${isActive && activeClass}`
//               }
//             >
//               <PlusCircle size={18} />
//               Add Vehicle
//             </NavLink>

//             <NavLink
//               to="/dashboard/my-vehicles"
//               className={({ isActive }) =>
//                 `${baseClass} ${isActive && activeClass}`
//               }
//             >
//               <Car size={18} />
//               My Vehicles
//             </NavLink>


//             <NavLink
//               to="/dashboard/book-vehicle"
//               className={({ isActive }) =>
//                 `${baseClass} ${isActive && activeClass}`
//               }
//             >
//               <CarFront size={18} />
//               {open && "Book Vehicle"}
//             </NavLink>


//             <NavLink
//               to="/dashboard/my-bookings"
//               className={({ isActive }) =>
//                 `${baseClass} ${isActive && activeClass}`
//               }
//             >
//               <ClipboardList size={18} />
//               My Bookings
//             </NavLink>

//             <div className="my-3 border-t border-gray-200 dark:border-white/10" />

//             <NavLink
//               to="/"
//               className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-indigo-600/10"
//             >
//               <Home size={18} />
//               Main Home
//             </NavLink>

//           </nav>
//         </motion.aside>

//         {/* ───── Main Content ───── */}
//         <main className="flex-1 p-6">
//           <Outlet />
//         </main>
//       </div>
//     </div>
//   );
// };

// export default DashboardLayout;


import { Outlet, NavLink, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import {
  Menu,
  X,
  LayoutDashboard,
  Car,
  ClipboardList,
  PlusCircle,
  UserCircle,
  Home,
  Moon,
  Sun,
  ChevronDown,
  CarFront,
  Settings,
  LogOut
} from "lucide-react";
import { useAuth } from "../hooks/useAuth";

const DashboardLayout = () => {
  const { user, logOut } = useAuth(); 
  const [open, setOpen] = useState(true);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [profileOpen, setProfileOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  // Gradient Active Class
  const activeClass = "bg-gradient-to-r from-blue-600/10 to-indigo-600/10 text-blue-600 dark:text-blue-400 font-bold border-r-4 border-blue-600";
  const baseClass = "flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-700/50 group";

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0a0f1a] text-gray-800 dark:text-gray-100">
      
      {/* ───── Top Navbar ───── */}
      <header className="sticky top-0 z-40 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-white/5">
        <div className="w-full px-4 h-16 flex items-center justify-between">
          
          {/* Left: Logo & Toggle */}
          <div className="flex items-center gap-4">
            <span className="text-2xl font-black tracking-tighter bg-gradient-to-r from-blue-600 to-indigo-400 dark:from-blue-400 dark:to-purple-500 bg-clip-text text-transparent">
              TravelEase
            </span>
            <button
              onClick={() => setOpen(!open)}
              className="p-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-500 hover:text-blue-600 transition-colors"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 hover:ring-2 ring-blue-500/20 transition-all"
            >
              {theme === "dark" ? <Sun size={18} className="text-yellow-400" /> : <Moon size={18} className="text-blue-600" />}
            </button>

            {/* Profile Dropdown */}
            <div className="relative">
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="flex items-center gap-2 p-1.5 pr-3 rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all border border-transparent hover:border-gray-200 dark:hover:border-white/10"
              >
                {user?.photoURL ? (
                  <img src={user.photoURL} alt="profile" className="w-8 h-8 rounded-xl object-cover border border-blue-500/50" />
                ) : (
                  <UserCircle size={28} className="text-gray-400" />
                )}
                <ChevronDown size={14} className={`transition-transform duration-300 ${profileOpen ? 'rotate-180' : ''}`} />
              </button>

              {profileOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute right-0 mt-3 w-48 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-100 dark:border-white/5 overflow-hidden p-2"
                >
                  <div className="px-3 py-2 border-b border-gray-100 dark:border-white/5 mb-1">
                     <p className="text-xs text-gray-500 font-medium">Signed in as</p>
                     <p className="text-sm font-bold truncate">{user?.displayName || 'Traveler'}</p>
                  </div>
                  <button 
                    onClick={logOut}
                    className="flex items-center gap-2 w-full px-3 py-2.5 text-sm text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-xl transition-colors font-semibold"
                  >
                    <LogOut size={16} /> Logout
                  </button>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* ───── Sidebar ───── */}
        <motion.aside
          animate={{ width: open ? 280 : 0, opacity: open ? 1 : 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 25 }}
          className="bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-white/5 overflow-y-auto h-[calc(100vh-64px)] sticky top-16"
        >
          <nav className="p-4 space-y-2">
            <div className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-4 px-4">Main Menu</div>
            
            <NavLink to="/dashboard" end className={({ isActive }) => `${baseClass} ${isActive ? activeClass : ''}`}>
              <LayoutDashboard size={20} /> Overview
            </NavLink>

            <NavLink to="/dashboard/add-vehicle" className={({ isActive }) => `${baseClass} ${isActive ? activeClass : ''}`}>
              <PlusCircle size={20} /> Add Vehicle
            </NavLink>

            <NavLink to="/dashboard/my-vehicles" className={({ isActive }) => `${baseClass} ${isActive ? activeClass : ''}`}>
              <Car size={20} /> My Vehicles
            </NavLink>

            <NavLink to="/dashboard/book-vehicle" className={({ isActive }) => `${baseClass} ${isActive ? activeClass : ''}`}>
              <CarFront size={20} /> Book Vehicle
            </NavLink>

            <NavLink to="/dashboard/my-bookings" className={({ isActive }) => `${baseClass} ${isActive ? activeClass : ''}`}>
              <ClipboardList size={20} /> My Bookings
            </NavLink>

            <div className="pt-6">
              <div className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-4 px-4">Preference</div>
              
              <NavLink to="/" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all text-gray-600 dark:text-gray-400 font-medium">
                <Home size={20} /> Back Home
              </NavLink>

              <NavLink to="/dashboard/profile" className={({ isActive }) => `${baseClass} ${isActive ? activeClass : ''}`}>
                <Settings size={20} /> Edit Profile
              </NavLink>
            </div>
          </nav>
        </motion.aside>

        {/* ───── Main Content ───── */}
        <main className="flex-1 bg-gray-50 dark:bg-[#0a0f1a]">
          <div className="max-w-7xl mx-auto p-4 md:p-8">
             <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;