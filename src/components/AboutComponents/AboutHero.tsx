import "../sass/Abouthero.scss"

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
gsap.registerPlugin(ScrollTrigger);


export default function AboutHero() {
  const containerRef = useRef(null)
  return (
    <LocomotiveScrollProvider
  options={
    {
      smooth: true,
      // ... all available Locomotive Scroll instance options 
    }
  }
  watch={
    [
      //..all the dependencies you want to watch to update the scroll.
      //  Basicaly, you would want to watch page/location changes
      //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
    ]
  }
  containerRef={containerRef}
>
  <main data-scroll-container ref={containerRef}>
  <div className="main-container">
      <div className="scroll-container">
        <div className="content">
          <div className="about-container">

          </div>
        </div>
      </div>
    </div>
  </main>
</LocomotiveScrollProvider>
  )
}
