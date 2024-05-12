import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function MyComponent() {
  useEffect(() => {
    const growTl = gsap.timeline({
      scrollTrigger: {
        trigger: "#grow",
        scrub: 1.5,
        start: "top center",
        end: "+=400",
        ease: "power1.out"
      }
    });
    growTl.to("#grow", {
      duration: 1,
      scale: 1
    });
    growTl.to("#grow-tagline", {
      duration: 0.4,
      delay: -0.7,
      opacity: 1,
      y: 0
    });

    const shrinkTl = gsap.timeline({
      scrollTrigger: {
        trigger: "#shrink",
        scrub: 1.5,
        start: "top center",
        end: "+=400",
        ease: "power1.in"
      }
    });

    shrinkTl.to("#shrink", {
      duration: 2,
      scale: 0.8,
      filter: "blur(0px)"
    });
    shrinkTl.to("#shrink-tagline", {
      duration: 0.4,
      delay: -0.7,
      opacity: 1,
      y: 0,
      ease: "power2.out"
    });
  }, []);

  // Render your component here
  return <div>...</div>;
}

export default MyComponent;