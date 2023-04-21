import "../sass/Abouthero.scss"

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);


export default function AboutHero() {
  useEffect(() => {
    let sections = gsap.utils.toArray(".panel");
    const container = document.getElementById(".container");
    const wrapper = document.getElementById(".wrapper");
    // const wrapper = useRef(null);
    // const container = useRef(null);
  
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: container,
        pin: wrapper,
        scrub: 1,
        pinSpacing: true,
        markers: true,
        snap: 1 / (sections.length - 1),
        end: () => "+=" + window.innerWidth
      }
    });
  },[])
  return (
    <div className="wrapper">
      <div className="container">
        <div className='about-hero-container panel'>
          <div className="text-header">
              <h1>Hilaga About</h1>
          </div>
          <div className="text-info-1">
              <p>Lorem Ipsum is simply dummy text of the 
                printing and typesetting industry. Lorem 
                Ipsum has been the industry's standard 
                dummy text ever since the 1500s, when an 
                unknown printer took a galley of type and 
                scrambled </p>
          </div>
          <div className="img-1">
            <img src="/1.jpg" alt="image-1" />
          </div>
        </div>
        <div className='about-hero-container panel'>
          <div className="text-header">
              <h1>Hilaga About</h1>
          </div>
          <div className="text-info-1">
              <p>Lorem Ipsum is simply dummy text of the 
                printing and typesetting industry. Lorem 
                Ipsum has been the industry's standard 
                dummy text ever since the 1500s, when an 
                unknown printer took a galley of type and 
                scrambled </p>
          </div>
          <div className="img-1">
            <img src="/1.jpg" alt="image-1" />
          </div>
        </div>
      </div>
    </div>
  )
}
