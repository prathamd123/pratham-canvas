import React from "react";

const Intro = () => {
  return (
    <div className="bg-black text-white h-screen border-0 w-full flex items-center justify-center px-4">
      <div className="text-center leading-tight max-w-[900px]">
        
        {/* Line 1 — clean + bold font */}
        <h1
          className="
            font-poppins font-semibold
            text-3xl        /* mobile */
            sm:text-4xl     /* small screens */
            md:text-5xl     /* tablets */
            lg:text-6xl     /* desktops */
          "
        >
          Hi, I'm Pratham
        </h1>

        {/* Line 2 — mixed fonts */}
        <h2
          className="
            font-poppins font-semibold mt-4
            text-2xl        /* mobile */
            sm:text-3xl
            md:text-4xl
            lg:text-5xl
          "
        >
          <span className="font-edu font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            I{" "}
          </span>
          bu
          <span className="font-edu font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            i
          </span>
          ld beaut
          <span className="font-edu font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            if
          </span>
          ul web exper
          <span className="font-edu font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            i
          </span>
          ences
        </h2>
      </div>
    </div>
  );
};

export default Intro; 