import "../sass/Abouthero.scss"

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


export default function AboutHero() {


  let sections = gsap.utils.toArray(".panel");

  gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: ".container",
      pin: true,
      scrub: 1,
      snap: 1 / (sections.length - 1),
      end: () => "+=" + document.querySelector(".container").offsetWidth
    }
  });

  return (
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
  )
}
