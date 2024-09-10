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



"use client";

import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, LogOut } from "lucide-react";
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

export default function Navbar() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [username, setUsername] = React.useState("");

  React.useEffect(() => {
    const token = localStorage.getItem('userToken');
    const storedUsername = localStorage.getItem('userFullName');
    if (token && storedUsername) {
      setIsLoggedIn(true);
      setUsername(storedUsername);
    }
  }, []);

  const handleLogin = () => {
    navigate('/login');
  };

  const handleSignup = () => {
    navigate('/login');
  };

  const handleSignout = () => {
    localStorage.removeItem('userToken');
    localStorage.removeItem('userRole');
    localStorage.removeItem('username');
    setIsLoggedIn(false);
    setUsername("");
    navigate('/');
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
        to="/register"
        className="text-gray-600 hover:text-gray-900 transition-colors duration-200 ease-in-out"
      >
        Register your startup
      </Link>
      <div className="flex items-center gap-4">
        {isLoggedIn ? (
          <>
            <span className="text-gray-600">Hey, {username}</span>
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