'use client';
import styles from '@/components/Card.module.scss'
import { projects } from '@/cards/data';
import Card from '@/cards/index';
import { useScroll } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Lenis from 'lenis'

export default function Home() {
  const headingRef = useRef(null);
  const container = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  useEffect( () => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  })

  return (
    
    <main id="projects" ref={container} className={styles.main}>
      <h1
        ref={headingRef}
        className="
        text-white
          text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
          font-poppins font-light text-center
          max-w-4xl mx-auto leading-tight
        "
      >
        Projects
      </h1>
      {
        projects.map( (project, i) => {
          const targetScale = 1 - ( (projects.length - i) * 0.05);
          return <Card key={`p_${i}`} i={i} {...project} progress={scrollYProgress} range={[i * .25, 1]} targetScale={targetScale}/>
        })
      }
    </main>
  )
}
