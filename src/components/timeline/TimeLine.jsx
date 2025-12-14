import React from "react";
import CurvedLoop from "../curveloop/CurvedLoop";
import Time from "./Time";

const TimeLine = () => {
  return (
    <section className="relative w-full bg-black text-white overflow-hidden">
      
      {/* Curved Heading */}
      <div className="w-full flex justify-center py-4 md:py-10 lg:py-16">
        <CurvedLoop
          marqueeText="JOURNEY ✦ WORK EXPERIENCE ✦ JOURNEY ✦ WORK EXPERIENCE ✦"
          speed={2}
          curveAmount={350}
          direction="left"
          interactive
        />
      </div>

      {/* Timeline */}
      <div className="relative w-full">
        <Time />
      </div>

    </section>
  );
};

export default TimeLine;