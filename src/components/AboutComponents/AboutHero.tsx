import "../sass/Abouthero.scss"

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
gsap.registerPlugin(ScrollTrigger);


export default function AboutHero() {
  return (
    <div className="main-container">
      <div className="scroll-container">
        <div className="content">
          <div className="about-container">

          </div>
        </div>
      </div>
    </div>
  )
}
