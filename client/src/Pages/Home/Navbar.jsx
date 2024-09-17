// "use client"

// import * as React from "react"
// import { Link } from "react-router-dom"
// import { Menu } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import {
//   Sheet,
//   SheetContent,
//   SheetTrigger,
// } from "@/components/ui/sheet"

// const AyushIcon = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     className="h-6 w-6 text-green-500"
//   >
//     <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
//   </svg>
// )

// export default function Navbar() {
//   const MenuItems = () => (
//     <>
//       <Link 
//         to="/" 
//         className="text-gray-600 hover:text-gray-900 transition-colors duration-200 ease-in-out"
//       >
//         Home
//       </Link>
//       <Link 
//         to="/register" 
//         className="text-gray-600 hover:text-gray-900 transition-colors duration-200 ease-in-out"
//       >
//         Register your startup
//       </Link>
//       <div className="flex items-center gap-4">
//         <Button 
//           variant="ghost" 
//           className="text-gray-600 hover:text-gray-900 transition-colors duration-200 ease-in-out"
//         >
//           Log in
//         </Button>
//         <Button 
//           className="bg-green-500 hover:bg-green-600 text-white transition-colors duration-200 ease-in-out"
//         >
//           Sign up
//         </Button>
//       </div>
//     </>
//   )

//   return (
//     <nav className="bg-white border-b border-gray-100 sticky top-0 z-10">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16">
//           <div className="flex items-center">
//             <Link to="/" className="flex-shrink-0 flex items-center space-x-2">
//               <AyushIcon />
//               <span className="text-xl font-semibold text-gray-900">Ayush</span>
//             </Link>
//           </div>
//           <div className="hidden md:flex md:items-center md:space-x-8">
//             <MenuItems />
//           </div>
//           <div className="flex items-center md:hidden">
//             <Sheet>
//               <SheetTrigger asChild>
//                 <Button 
//                   variant="ghost" 
//                   size="icon" 
//                   className="text-gray-600 hover:text-gray-900 transition-colors duration-200 ease-in-out"
//                 >
//                   <Menu className="h-6 w-6" />
//                   <span className="sr-only">Open menu</span>
//                 </Button>
//               </SheetTrigger>
//               <SheetContent side="right" className="w-[300px] sm:w-[400px]">
//                 <div className="flex items-center mb-8">
//                   <AyushIcon />
//                   <span className="text-xl font-semibold text-gray-900 ml-3">Ayush</span>
//                 </div>
//                 <nav className="flex flex-col space-y-8">
//                   <MenuItems />
//                 </nav>
//               </SheetContent>
//             </Sheet>
//           </div>
//         </div>
//       </div>
//     </nav>
//   )
// }



// "use client";

// import * as React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { Menu, LogOut } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

// const AyushIcon = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     className="h-6 w-6 text-green-500"
//   >
//     <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
//   </svg>
// );

// export default function Navbar() {
//   const navigate = useNavigate();
//   const [isLoggedIn, setIsLoggedIn] = React.useState(false);
//   const [username, setUsername] = React.useState("");

//   React.useEffect(() => {
//     const token = localStorage.getItem('userToken');
//     const storedUsername = localStorage.getItem('userFullName');
//     if (token && storedUsername) {
//       setIsLoggedIn(true);
//       setUsername(storedUsername);
//     }
//   }, []);

//   const handleLogin = () => {
//     navigate('/login');
//   };

//   const handleSignup = () => {
//     navigate('/login');
//   };

//   const handleSignout = () => {
//     localStorage.removeItem('userToken');
//     localStorage.removeItem('userRole');
//     localStorage.removeItem('username');
//     setIsLoggedIn(false);
//     setUsername("");
//     navigate('/');
//   };

//   const MenuItems = () => (
//     <>
//       <Link
//         to="/"
//         className="text-gray-600 hover:text-gray-900 transition-colors duration-200 ease-in-out"
//       >
//         Home
//       </Link>
//       <Link
//         to="/applicationform"
//         className="text-gray-600 hover:text-gray-900 transition-colors duration-200 ease-in-out"
//       >
//         Apply For PMSS
//       </Link>
//       <Link
//         to="/FAQ"
//         className="text-gray-600 hover:text-gray-900 transition-colors duration-200 ease-in-out"
//       >
//         FAQ
//       </Link>
//       <div className="flex items-center gap-4">
//         {isLoggedIn ? (
//           <>
//             <span className="text-gray-600">Hey, {username}</span>
//             <Button
//               variant="ghost"
//               className="text-gray-600 hover:text-gray-900 transition-colors duration-200 ease-in-out"
//               onClick={handleSignout}
//             >
//               <LogOut className="mr-2 h-4 w-4" />
//               Sign out
//             </Button>
//           </>
//         ) : (
//           <>
//             <Button
//               variant="ghost"
//               className="text-gray-600 hover:text-gray-900 transition-colors duration-200 ease-in-out"
//               onClick={handleLogin}
//             >
//               Log in
//             </Button>
//             <Button
//               className="bg-green-500 hover:bg-green-600 text-white transition-colors duration-200 ease-in-out"
//               onClick={handleSignup}
//             >
//               Sign up
//             </Button>
//           </>
//         )}
//       </div>
//     </>
//   );

//   return (
//     <nav className="bg-white border-b border-gray-100 sticky top-0 z-10">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16">
//           <div className="flex items-center">
//             <Link to="/" className="flex-shrink-0 flex items-center space-x-2">
//               <AyushIcon />
//               <span className="text-xl font-semibold text-gray-900">Ayush</span>
//             </Link>
//           </div>
//           <div className="hidden md:flex md:items-center md:space-x-8">
//             <MenuItems />
//           </div>
//           <div className="flex items-center md:hidden">
//             <Sheet>
//               <SheetTrigger asChild>
//                 <Button
//                   variant="ghost"
//                   size="icon"
//                   className="text-gray-600 hover:text-gray-900 transition-colors duration-200 ease-in-out"
//                 >
//                   <Menu className="h-6 w-6" />
//                   <span className="sr-only">Open menu</span>
//                 </Button>
//               </SheetTrigger>
//               <SheetContent side="right" className="w-[300px] sm:w-[400px]">
//                 <div className="flex items-center mb-8">
//                   <AyushIcon />
//                   <span className="text-xl font-semibold text-gray-900 ml-3">Ayush</span>
//                 </div>
//                 <nav className="flex flex-col space-y-8">
//                   <MenuItems />
//                 </nav>
//               </SheetContent>
//             </Sheet>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }



// "use client";

// import * as React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { Menu, LogOut, ChevronDown } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";

// const AyushIcon = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     className="h-6 w-6 text-green-500"
//   >
//     <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
//   </svg>
// );

// export default function Navbar() {
//   const navigate = useNavigate();
//   const [isLoggedIn, setIsLoggedIn] = React.useState(false);
//   const [username, setUsername] = React.useState("");

//   React.useEffect(() => {
//     const token = localStorage.getItem('userToken');
//     const storedUsername = localStorage.getItem('userFullName');
//     if (token && storedUsername) {
//       setIsLoggedIn(true);
//       setUsername(storedUsername);
//     }
//   }, []);

//   const handleLogin = () => {
//     navigate('/login');
//   };

//   const handleSignup = () => {
//     navigate('/login');
//   };

//   const handleSignout = () => {
//     localStorage.removeItem('userToken');
//     localStorage.removeItem('userRole');
//     localStorage.removeItem('username');
//     setIsLoggedIn(false);
//     setUsername("");
//     navigate('/');
//   };

//   const MenuItems = () => (
//     <>
//       <Link
//         to="/"
//         className="text-gray-600 hover:text-gray-900 transition-colors duration-200 ease-in-out"
//       >
//         Home
//       </Link>
//       <Link
//         to="/applicationform"
//         className="text-gray-600 hover:text-gray-900 transition-colors duration-200 ease-in-out"
//       >
//         Apply For PMSS
//       </Link>
//       <Link
//         to="/FAQ"
//         className="text-gray-600 hover:text-gray-900 transition-colors duration-200 ease-in-out"
//       >
//         FAQ
//       </Link>
//       <DropdownMenu>
//         <DropdownMenuTrigger asChild>
//           <Button variant="ghost" className="text-gray-600 hover:text-gray-900 transition-colors duration-200 ease-in-out">
//             More <ChevronDown className="ml-1 h-4 w-4" />
//           </Button>
//         </DropdownMenuTrigger>
//         <DropdownMenuContent>
//           <DropdownMenuItem>
//             <Link to="/track" className="w-full">Track</Link>
//           </DropdownMenuItem>
//           <DropdownMenuItem>
//             <Link to="/about-us" className="w-full">About Us</Link>
//           </DropdownMenuItem>
//           <DropdownMenuItem>
//             <Link to="/career" className="w-full">Career</Link>
//           </DropdownMenuItem>
//         </DropdownMenuContent>
//       </DropdownMenu>
//       <div className="flex items-center gap-4">
//         {isLoggedIn ? (
//           <>
//             <span className="text-gray-600">Hey, {username}</span>
//             <Button
//               variant="ghost"
//               className="text-gray-600 hover:text-gray-900 transition-colors duration-200 ease-in-out"
//               onClick={handleSignout}
//             >
//               <LogOut className="mr-2 h-4 w-4" />
//               Sign out
//             </Button>
//           </>
//         ) : (
//           <>
//             <Button
//               variant="ghost"
//               className="text-gray-600 hover:text-gray-900 transition-colors duration-200 ease-in-out"
//               onClick={handleLogin}
//             >
//               Log in
//             </Button>
//             <Button
//               className="bg-green-500 hover:bg-green-600 text-white transition-colors duration-200 ease-in-out"
//               onClick={handleSignup}
//             >
//               Sign up
//             </Button>
//           </>
//         )}
//       </div>
//     </>
//   );

//   return (
//     <nav className="bg-white border-b border-gray-100 sticky top-0 z-10">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16">
//           <div className="flex items-center">
//             <Link to="/" className="flex-shrink-0 flex items-center space-x-2">
//               <AyushIcon />
//               <span className="text-xl font-semibold text-gray-900">Ayush</span>
//             </Link>
//           </div>
//           <div className="hidden md:flex md:items-center md:space-x-8">
//             <MenuItems />
//           </div>
//           <div className="flex items-center md:hidden">
//             <Sheet>
//               <SheetTrigger asChild>
//                 <Button
//                   variant="ghost"
//                   size="icon"
//                   className="text-gray-600 hover:text-gray-900 transition-colors duration-200 ease-in-out"
//                 >
//                   <Menu className="h-6 w-6" />
//                   <span className="sr-only">Open menu</span>
//                 </Button>
//               </SheetTrigger>
//               <SheetContent side="right" className="w-[300px] sm:w-[400px]">
//                 <div className="flex items-center mb-8">
//                   <AyushIcon />
//                   <span className="text-xl font-semibold text-gray-900 ml-3">Ayush</span>
//                 </div>
//                 <nav className="flex flex-col space-y-8">
//                   <MenuItems />
//                 </nav>
//               </SheetContent>
//             </Sheet>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, LogOut, ChevronDown, User, Settings, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const AyushIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6 text-green-500"
  >
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
  </svg>
);

const DropdownMenu = ({ items, isOpen, setIsOpen }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.2 }}
        className="absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
      >
        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
          {items.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default function Navbar() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [userRole, setUserRole] = useState("");
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const moreButtonRef = useRef(null);
  const moreDropdownRef = useRef(null);

  useEffect(() => {
    const token = localStorage.getItem('userToken');
    const storedUsername = localStorage.getItem('userFullName');
    const storedRole = localStorage.getItem('userRole');
    if (token && storedUsername) {
      setIsLoggedIn(true);
      setUsername(storedUsername);
      setUserRole(storedRole);
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        moreButtonRef.current &&
        !moreButtonRef.current.contains(event.target) &&
        moreDropdownRef.current &&
        !moreDropdownRef.current.contains(event.target)
      ) {
        setIsMoreOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogin = () => navigate('/login');
  const handleSignup = () => navigate('/login');

  const handleSignout = () => {
    localStorage.removeItem('userToken');
    localStorage.removeItem('userRole');
    localStorage.removeItem('username');
    setIsLoggedIn(false);
    setUsername("");
    setUserRole("");
    navigate('/');
  };

  const moreMenuItems = [
    { label: "Track", href: "/track" },
    { label: "About Us", href: "/about-us" },
    { label: "Career", href: "/career" },
  ];

  const getProfileMenuItems = () => {
    const commonItems = [
      { label: "Profile", href: "/profile", icon: User },
      { label: "Settings", href: "/settings", icon: Settings },
    ];

    switch (userRole) {
      case "admin":
        return [
          ...commonItems,
          { label: "Admin Dashboard", href: "/admin", icon: FileText },
        ];
      case "government":
        return [
          ...commonItems,
          { label: "Government Portal", href: "/government", icon: FileText },
        ];
      default:
        return commonItems;
    }
  };

  const MenuItems = () => (
    <>
      <Link
        to="/"
        className="text-gray-600 hover:text-gray-900 transition-colors duration-200 ease-in-out"
      >
        Home
      </Link>
      <Link
        to="/applicationform"
        className="text-gray-600 hover:text-gray-900 transition-colors duration-200 ease-in-out"
      >
        Apply For PMSS
      </Link>
      <Link
        to="/FAQ"
        className="text-gray-600 hover:text-gray-900 transition-colors duration-200 ease-in-out"
      >
        FAQ
      </Link>
      <div 
        className="relative"
        onMouseEnter={() => setIsMoreOpen(true)}
        onMouseLeave={() => setIsMoreOpen(false)}
      >
        <Button
          ref={moreButtonRef}
          variant="ghost"
          className="text-gray-600 hover:text-gray-900 transition-colors duration-200 ease-in-out"
        >
          More <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${isMoreOpen ? 'rotate-180' : ''}`} />
        </Button>
        <div ref={moreDropdownRef}>
          <DropdownMenu items={moreMenuItems} isOpen={isMoreOpen} setIsOpen={setIsMoreOpen} />
        </div>
      </div>
      <div className="flex items-center gap-4">
        {isLoggedIn ? (
          <>
            <div className="relative">
              <Button
                variant="ghost"
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200 ease-in-out"
                onClick={() => setIsProfileOpen(!isProfileOpen)}
              >
                Hey, {username} <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${isProfileOpen ? 'rotate-180' : ''}`} />
              </Button>
              <DropdownMenu items={getProfileMenuItems()} isOpen={isProfileOpen} setIsOpen={setIsProfileOpen} />
            </div>
            <Button
              variant="ghost"
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200 ease-in-out"
              onClick={handleSignout}
            >
              <LogOut className="mr-2 h-4 w-4" />
              Sign out
            </Button>
          </>
        ) : (
          <>
            <Button
              variant="ghost"
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200 ease-in-out"
              onClick={handleLogin}
            >
              Log in
            </Button>
            <Button
              className="bg-green-500 hover:bg-green-600 text-white transition-colors duration-200 ease-in-out"
              onClick={handleSignup}
            >
              Sign up
            </Button>
          </>
        )}
      </div>
    </>
  );

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center space-x-2">
              <AyushIcon />
              <span className="text-xl font-semibold text-gray-900">Ayush</span>
            </Link>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-8">
            <MenuItems />
          </div>
          <div className="flex items-center md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-200 ease-in-out"
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex items-center mb-8">
                  <AyushIcon />
                  <span className="text-xl font-semibold text-gray-900 ml-3">Ayush</span>
                </div>
                <nav className="flex flex-col space-y-8">
                  <MenuItems />
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}