import "../sass/Abouthero.scss"

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);


export default function AboutHero() {

  return (
      <div className="main-container">
        <div className="red"></div>
        <div className="blue"></div>
      </div>
  )
}
