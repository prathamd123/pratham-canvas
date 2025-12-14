"use client";

import { useEffect, useRef, useState } from "react";

const events = [
  {
    from: 'December 2025',
    to: 'present',
    role: "Frontend Developer Intern",
    company: "Deuex Solutions",
    location: "Mumbai, India",
    logo: "https://deuexsolutions.com/images/logo-v2.svg",
    content:
      "working on real world projects and learning new technologies",
  },
  {
    from: 'September 2025',
    to: 'October 2025',
    role: "Full Stack Developer Intern",
    company: "Zyngate",
    location: "Delhi, India",
    logo: "https://static.wixstatic.com/media/b4bf2e_091d967778fb4788abdbbc3161dd8f20~mv2.png/v1/fill/w_192,h_200,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/logo-icon_edited.png",
    content:
      "worked on Ai Project and and enhanced my skills in frontend development",
  },
  {
    from: 'July 2025',
    to: 'September 2025',
    role: "Frontend Developer Intern",
    company: "Maitri Global Italy",
    location: "Remote",
    logo: "https://maitriglobalitaly.com/logomtg.png",
    content:
      "worked on company website to revamp the design and enhance the user experience",
  },
];

const TimelineItem = ({ event, index }) => {
    const ref = useRef(null);
    const [show, setShow] = useState(false);
    const isLeft = index % 2 === 0;
  
    useEffect(() => {
      const obs = new IntersectionObserver(
        ([e]) => e.isIntersecting && setShow(true),
        { threshold: 0.3 }
      );
      if (ref.current) obs.observe(ref.current);
      return () => obs.disconnect();
    }, []);
  
    return (
      <div ref={ref} className="relative flex w-full">
        
        {/* center logo circle */}
        <span
          className={`
            absolute lg:z-10 left-1/2 top-4 md:top-6 -translate-x-1/2
            h-18 w-18 rounded-full
            bg-white border-2 border-[#020024]
            flex items-center justify-center
            transition-all duration-500
            ${show ? "scale-100 opacity-100" : "scale-75 opacity-0"}
          `}
        >
          <img
            src={event.logo}
            alt={event.company}
            className="h-8 w-8 object-contain"
          />
        </span>
  
        {/* card */}
        <div
          className={`
            relative w-[420px] bg-white p-4 md:p-5 text-[#020024]
            shadow-[12px_12px_0_#7c3aed]
            transition-all duration-700
            ${show ? "opacity-100 translate-x-0" : "opacity-0"}
            ${
              isLeft
                ? "ml-auto mr-[calc(50%+30px+96px)] -translate-x-24 max-w-[calc(50%-30px-96px)]"
                : "ml-[calc(50%+30px)] translate-x-24"
            }
            max-md:ml-auto max-md:mr-auto max-md:mx-auto max-md:translate-x-0 max-md:w-[calc(100%-3rem)] max-md:max-w-none
          `}
        >
          <time className="block text-lg font-bold mb-1">
            {event.from} – {event.to}
          </time>
          <h4 className="text-sm font-semibold">{event.role}</h4>
          <h3 className="font-bold">{event.company}</h3>
          <p className="italic text-sm">{event.location}</p>
          <p className="text-sm mt-2">{event.content}</p>
        </div>
      </div>
    );
  };
export default function Timeline() {
  return (
    <section className="relative py-8 md:py-16 lg:py-24 px-4 md:px-6 lg:px-8">
      {/* center line */}
      <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-neutral-500" />

      <div className="relative flex flex-col gap-8 md:gap-16 lg:gap-24">
        {events.map((event, i) => (
          <TimelineItem key={i} event={event} index={i} />
        ))}
      </div>
    </section>
  );
}