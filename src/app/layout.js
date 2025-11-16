import { Inter } from "next/font/google";
import "./globals.css";
import NavbarWrapper from "@/homePage-components/navComponent";
import "./globals.css";
import localFont from "next/font/local";

const eduCursive = localFont({
  src: [
    {
      path: "../../public/fonts/Edu_NSW_ACT_Cursive/EduNSWACTCursive-VariableFont_wght.ttf",
      weight: "100 900", // variable font range
    },
  ],
  variable: "--font-edu-cursive",
});


// Lusitana font
const lusitana = localFont({
  src: [
    {
      path: "../../public/fonts/Lusitana/Lusitana-Regular.ttf",
      weight: "400",
    },
    {
      path: "../../public/fonts/Lusitana/Lusitana-Bold.ttf",
      weight: "700",
    },
  ],
  variable: "--font-lusitana",
});

// Pacifico font
const pacifico = localFont({
  src: "../../public/fonts/Pacifico/Pacifico.ttf",
  variable: "--font-pacifico",
  weight:"200"
});

const poppins = localFont({
  src: [
    {
      path: "../../public/fonts/Poppins/Poppins-Regular.ttf",
      weight: "400",
    },
    {
      path: "../../public/fonts/Poppins/Poppins-Medium.ttf",
      weight: "500",
    },
    {
      path: "../../public/fonts/Poppins/Poppins-Bold.ttf",
      weight: "700",
    },
  ],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Pratham's Canvas",
  description: "Portfolio by Pratham",
  icons: {
    icon: "/fav.ico",
  },
};
export default function RootLayout({ children }) {
 

  return (
    <html
      lang="en"
      className={`${lusitana.variable} ${pacifico.variable} ${poppins.variable} ${eduCursive.variable}`}
    >
      <body className="flex flex-col justify-between antialiased">
        <NavbarWrapper />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body
//         className={`flex flex-col justify-between antialiased`}
//       >
//         <NavbarWrapper />
//           <main className="flex-1">
//         {children}
//         </main>
//         {/* <Footer /> */}
//         {/* <Analytics /> */}
//       </body>
//     </html>
//   );
// }

