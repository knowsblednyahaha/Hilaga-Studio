import "../sass/Abouthero.scss"

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);


export default function AboutHero() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    if (scrollContainer) {
      // Disable native scrolling on the container
      scrollContainer.style.overflowX = 'hidden';

      // Calculate the width of the scrollable content
      const scrollWidth = scrollContainer.scrollWidth - scrollContainer.clientWidth;

      // Set up the GSAP animation
      const timeline = gsap.timeline({ repeat: -1, paused: true });
      timeline.to(scrollContainer, { duration: 10, x: -scrollWidth });

      // Start the animation
      timeline.play();
    }
  }, []);
  return (
    <div ref={scrollContainerRef}>
      <div className="main-container">
      </div>
    </div>
  )
}
