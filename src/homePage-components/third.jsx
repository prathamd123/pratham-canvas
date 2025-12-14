"use client";
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Third = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const aboutRef = useRef(null);
  const imgRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      const text = headingRef.current.innerText;
      const words = text.split(" ");

      headingRef.current.innerHTML = words
        .map(
          (word) =>
            `<span class="inline-block overflow-hidden">
              <span class="inline-block opacity-0 translate-x-5" style="filter: blur(10px)">
                ${word}&nbsp;
              </span>
            </span>`
        )
        .join("");

      const wordSpans = headingRef.current.querySelectorAll("span > span");

      gsap.to(wordSpans, {
        opacity: 1,
        x: 0,
        filter: "blur(0px)",
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.04, // fast & smooth
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
          once: true,
        },
      });

      // ABOUT TEXT
      gsap.from(aboutRef.current, {
        opacity: 0,
        x: -30,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 85%",
          once: true,
        },
      });

      // IMAGE
      gsap.from(imgRef.current, {
        opacity: 0,
        x: 30,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: imgRef.current,
          start: "top 85%",
          once: true,
        },
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div id="about" ref={sectionRef} className="bg-black text-white min-h-screen w-full px-6 py-24">

      {/* HEADING */}
      <h1
        ref={headingRef}
        className="
          text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
          font-poppins font-light text-center
          max-w-4xl mx-auto leading-tight
        "
      >
        I turn imagination into experiences that feel real.
      </h1>

      {/* CONTENT GRID */}
      <div className="mt-20 mb-0 grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">

        <div ref={aboutRef}>
          <h2 className="text-3xl font-semibold mb-4">About Me</h2>

          <p className="text-lg font-poppins text-gray-300 font-light leading-relaxed">
  <span className="font-poppins text-5xl float-left pr-2 leading-none">I</span>
  ’m Pratham — a frontend developer who loves crafting smooth, meaningful, and
  immersive digital experiences.
  <br /><br />
  My work blends storytelling, clean design, performance-driven engineering, and
  that one extra polish that makes a UI truly “feel right”.
  <br /><br />
  Beyond coding, I enjoy working on Figma designs and experimenting with 3D
  renders — turning creative ideas into visually satisfying and intuitive
  experiences.
</p>
        </div>

        <div className="flex justify-center md:justify-end">
          <img
            ref={imgRef}
            src="/me.png"
            alt="Pratham"
            className="w-64 h-64 md:w-80 md:h-80 object-cover shadow-xl rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Third;