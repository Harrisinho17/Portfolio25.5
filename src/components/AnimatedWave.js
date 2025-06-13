import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "../styles/AnimatedWave.css";
import { MorphSVGPlugin, DrawSVGPlugin } from "gsap/all";

export default function AnimatedWave() {
  const tridentRef = useRef();
  const waveRef = useRef();
  const barsRef = useRef([]);
  const textRef = useRef();

  useEffect(() => {
    // Trident bobbing animation
    gsap.to(tridentRef.current, {
      y: -10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    // Wave motion animation
    gsap.to(waveRef.current, {
      x: 20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    // Bars pulsing animation
    barsRef.current.forEach((bar, i) => {
      gsap.to(bar, {
        scaleY: 1.5,
        transformOrigin: "bottom center",
        duration: 1 + i * 0.3,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: i * 0.2
      });
    });

    // Text fade-in animation
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 2, ease: "power2.out", delay: 1 }
    );
  }, []);

  const handleClick = () => {
    // Amplify animations temporarily
    gsap.to(tridentRef.current, {
      y: -30,
      duration: 0.3,
      yoyo: true,
      repeat: 1,
      ease: "power1.inOut"
    });

    gsap.to(waveRef.current, {
      x: 40,
      duration: 0.3,
      yoyo: true,
      repeat: 1,
      ease: "power1.inOut"
    });

    gsap.to(barsRef.current, {
      scaleY: 2,
      transformOrigin: "bottom center",
      duration: 0.3,
      yoyo: true,
      repeat: 1,
      ease: "power1.inOut"
    });

    gsap.to(textRef.current, {
      scale: 1.1,
      duration: 0.3,
      yoyo: true,
      repeat: 1,
      ease: "power1.inOut"
    });
  };

  return (
    <div className="biomimicry-container" onClick={handleClick}>
      <svg viewBox="0 0 800 600" className="biomimicry-svg">
        {/* Trident */}
        <g ref={tridentRef} fill="#0077be" stroke="#004f7a" strokeWidth="3">
          <line x1="400" y1="100" x2="400" y2="300" />
          <polygon points="390,100 400,70 410,100" />
          <line x1="380" y1="150" x2="420" y2="150" />
          <line x1="380" y1="200" x2="420" y2="200" />
        </g>

        {/* Wave */}
        <path
          ref={waveRef}
          d="M100,400 Q200,350 300,400 T500,400 T700,400 L700,600 L100,600 Z"
          fill="#00aaff"
          opacity="0.6"
        />

        {/* Bars */}
        <g>
          {[0, 1, 2, 3, 4].map((i) => (
            <rect
              key={i}
              ref={(el) => (barsRef.current[i] = el)}
              x={150 + i * 50}
              y={450 - i * 20}
              width="20"
              height={50 + i * 20}
              fill="#00ffcc"
              opacity="0.8"
            />
          ))}
        </g>

        {/* Text */}
        <text
          ref={textRef}
          x="400"
          y="550"
          textAnchor="middle"
          fontSize="48"
          fill="#004f7a"
          fontFamily="Arial, sans-serif"
        >
          Wave
        </text>
      </svg>
    </div>
  );
}