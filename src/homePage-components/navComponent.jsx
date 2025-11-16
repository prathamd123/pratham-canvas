"use client";

import { usePathname } from "next/navigation";
import Navbar from "./navbar"; // Adjust path if needed

export default function NavbarWrapper() {
  const pathName = usePathname();

  // Hide Navbar if the route starts with "/cms"
  if (pathName.startsWith("/cms")||pathName.startsWith("/invite")) return null;

  return <Navbar />;
}
