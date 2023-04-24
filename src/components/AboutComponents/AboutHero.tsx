import "../sass/Abouthero.scss"

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);


export default function AboutHero() {
  // const component = useRef(null);
  // const slider = useRef(null);

  // useLayoutEffect(() => {
  //   let ctx = gsap.context(() => {
  //     const pixelsPause = 300;
  //     let panels = gsap.utils.toArray(".panel");
  //     gsap.to(panels, {
  //       xPercent: -100 * (panels.length - 1),
  //       ease: "none",
  //       scrollTrigger: {
  //         trigger: slider.current,
  //         scrub: 1,
  //         snap: 1 / (panels.length - 1),
  //         start: `top+=${pixelsPause} top`,
  //         end: () => "+=" + window.innerWidth * panels.length,
  //         markers: { startColor: "fuchsia", endColor: "fuchsia", indent: 200 },
  //       },
  //     });
  //     ScrollTrigger.create({
  //       trigger: slider.current,
  //       end: () => "+=" + (window.innerWidth * panels.length + pixelsPause),
  //       markers: true,
  //       pin: true,
  //     });
  //   }, component);
  //   return () => ctx.revert();
  // });
  return (
    <div className="wrapper" 
    // ref={component}
    >
      
    </div>
  )
}
