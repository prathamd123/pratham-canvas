// "use client";

// import React, { useEffect, useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import Link from "next/link";
// import Image from "next/image";
// import { usePathname } from "next/navigation";
// import { X, Menu } from "lucide-react";
// import { useMobile } from "@/hooks/useMobile";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const isMobile = useMobile();
//   const pathName = usePathname();
//   const isLaunchPage = pathName === "/launch";

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 10);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const activeLink = (link) => pathName === link;

//   const NavItems = [
//     { name: "Home", link: "/" },
//     { name: "About", link: "/about" },
//     { name: "Projects", link: "/projects" },
//   ];

//   return (
//     <div className="flex justify-center">
//       <header className="fixed top-3 lg:top-7 z-[999999] w-full flex justify-center">
//         <motion.div
//           initial={{ opacity: 0, y: -100 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.2, ease: "easeInOut" }}
//           className={`text-white w-[90vw] md:w-[70vw] rounded-full transition-all duration-500 ease-out
//             ${
//               scrolled
//                 ? "lg:w-[50vw] bg-[#000000] py-2"
//                 : "lg:w-[80vw] bg-[#000000]  md:bg-inherit md:border-none py-2"
//             }
//             ${isLaunchPage ? "bg-black/30 backdrop-blur-md" : ""}    
//             `}
//         >
//           <div className="flex items-center justify-between px-6">
//             {/* Logo */}
//             <div className="flex items-center">
//               <Link href="/">
//                 <Image
//                   src="/logo-no-background.png"
//                   alt="logo"
//                   width={isMobile ? 50 : scrolled ? 50 : 70}
//                   height={isMobile ? 50 : scrolled ? 50 : 70}
//                   className="object-contain transition-all duration-300 ease-out"
//                 />
//               </Link>
//             </div>

//             {/* Desktop Navigation */}
//             <div className="hidden md:flex">
//               <ul className="flex items-center gap-6 lg:gap-8 text-[#aeaeb8]">
//                 {NavItems.map((item, index) => (
//                   <li
//                     key={index}
//                     className={`hover:text-[#6ee2f5] text-sm xl:text-base transition cursor-pointer ${
//                       activeLink(item.link) ? "text-[#6ee2f5]" : ""
//                     }`}
//                   >
//                     <Link href={item.link}>{item.name}</Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Get Started Button (Desktop) */}
//             <Link
//               href="https://stelle.chat/register"
//               target="_blank"
//               className={`hidden md:flex text-black bg-gradient-to-b from-cyan-300 via-cyan-500 to-cyan-900 py-2 px-4 ${scrolled ? "lg:py-2   lg:px-5" : "lg:py-3 lg:px-6"} text-sm xl:text-base rounded-full scale-100 hover:scale-105 active:scale-95 transition`}
//             >
//               Get Started
//             </Link>

//             {/* Mobile Menu Toggle */}
//             <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
//               {isOpen ? (
//                 <X size={28} className="text-white cursor-pointer" />
//               ) : (
//                 <Menu size={28} className="text-white cursor-pointer" />
//               )}
//             </div>
//           </div>
//         </motion.div>
//       </header>

//       {/* Mobile Fullscreen Menu */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.3 }}
//             className="fixed top-0 left-0 w-full h-full bg-[#122024] flex flex-col justify-center items-center overflow-y-hidden z-[9999999]"
//           >
//             {/* Logo Top Left */}
//             <div className="absolute top-6 left-6">
//               <Link href="/">
//                 <Image
//                   src="/logo-no-background.png"
//                   alt="logo"
//                   width={40}
//                   height={40}
//                   className="object-contain w-16"
//                 />
//               </Link>
//             </div>

//             {/* Close Icon */}
//             <div
//               className="absolute top-8 right-6 text-white cursor-pointer"
//               onClick={() => setIsOpen(false)}
//             >
//               <X size={32} />
//             </div>

//             {/* Mobile Navigation Links */}
//             <ul className="text-white text-lg space-y-6 text-center">
//               {NavItems.map((item, index) => (
//                 <li key={index} className="text-xl font-semibold">
//                   <Link href={item.link} onClick={() => setIsOpen(false)}>
//                     {item.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default Navbar;




"use client";
import { MoveUpRight } from "lucide-react";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { X, Menu } from "lucide-react";
import { useMobile } from "@/hooks/useMobile";
 //nav item interface
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useMobile();
  const pathName = usePathname();
  const isLaunchPage = pathName === "/launch";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const activeLink = (link) => pathName === link;

  const NavItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    // { name: "Blogs", link: "/" },
    // { name: "Resources", link: "#" },
    // { name: "Product", link: "/product" },
  ];

  return (
    <div className="flex justify-center">
      <header className="fixed top-3 lg:top-7 z-[999999] w-full flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className={`text-white w-[90vw] md:w-[70vw] rounded-full transition-all duration-500 ease-out
            ${
              scrolled
                ? "lg:w-[50vw] bg-[#000000] py-2"
                : "lg:w-[80vw] bg-[#000000]  md:bg-inherit md:border-none py-2"
            }
            ${isLaunchPage ? "bg-black/30 backdrop-blur-md" : ""}    
            `}
        >
          <div className="flex items-center justify-between px-6">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/">
                <Image
                  src="/Pratham.png"
                  alt="logo"
                  width={isMobile ? 50 : scrolled ? 50 : 70}
                  height={isMobile ? 50 : scrolled ? 50 : 70}
                  className="object-contain transition-all duration-300 ease-out"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex">
              <ul className="flex items-center font-poppins font-thin gap-6 lg:gap-8 text-[#aeaeb8]">
                {NavItems.map((item, index) => (
                  <li
                    key={index}
                    className={`hover:text-[#fff] text-sm xl:text-base transition cursor-pointer ${
                      activeLink(item.link) ? "text-[#ffff]" : ""
                    }`}
                  >
                    <Link href={item.link}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href="https://linktr.ee/prathamd123"
              target="_blank"
              className="hidden md:flex"
            >
        <button 
  className="
    cursor-pointer relative overflow-hidden rounded-4xl 
    bg-gradient-to-b from-purple-500 via-purple-600 to-purple-700
    h-12 min-w-[140px] px-6 py-2 text-white group

    /* outer glow */
    shadow-lg shadow-neutral-900/40

    /* INNER shadow for 3D depth */
    shadow-[inset_0_4px_8px_rgba(0,0,0,0.55),inset_0_-3px_6px_rgba(255,255,255,0.15)]
    
    border border-white/20
  "
>
  {/* Current text */}
  <span className="absolute font-poppins font-thin inset-0 flex items-center justify-center text-base transition-transform duration-500 group-hover:translate-y-[-100%]">
    Have an Idea ?
  </span>

  {/* New text */}
  <span className="absolute font-poppins font-thin inset-0 flex items-center justify-center text-base translate-x-[-100%] translate-y-full transition-transform duration-500 group-hover:translate-x-0 group-hover:translate-y-0">
    Let&apos;s Connect
    <MoveUpRight size={12} className="ml-2" />
  </span>
</button>
            </Link>
            {/* <Link
              href="https://stelle.chat/register"
              target="_blank"
              className={`hidden md:flex text-black bg-[#fff] py-2 px-4 ${scrolled ? "lg:py-2   lg:px-5" : "lg:py-3 lg:px-6"} text-sm xl:text-base rounded-full scale-100 hover:scale-105 active:scale-95 transition`}
            >
              Get In Touch
            </Link> */}

            {/* Mobile Menu Toggle */}
            <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <X size={28} className="text-white cursor-pointer" />
              ) : (
                <Menu size={28} className="text-white cursor-pointer" />
              )}
            </div>
          </div>
        </motion.div>
      </header>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 w-full h-full bg-[#000] flex flex-col justify-center items-center overflow-y-hidden z-[9999999]"
          >
            {/* Logo Top Left */}
            <div className="absolute top-6 left-6">
              <Link href="/">
                <Image
                  src="/Pratham.png"
                  alt="logo"
                  width={40}
                  height={40}
                  className="object-contain w-16"
                />
              </Link>
            </div>

            {/* Close Icon */}
            <div
              className="absolute top-8 right-6 text-white cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              <X size={32} />
            </div>

            {/* Mobile Navigation Links */}
            <ul className="text-white text-lg space-y-6 text-center">
              {NavItems.map((item, index) => (
                <li key={index} className="text-xl font-semibold">
                  <Link href={item.link} onClick={() => setIsOpen(false)}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
