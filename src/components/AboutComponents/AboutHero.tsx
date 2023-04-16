import "../sass/Abouthero.scss"

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function AboutHero() {
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
    </div>
  )
}
