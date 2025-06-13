import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/About.css";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef(null);
  const textRefs = useRef([]);
  
  useEffect(() => {
    gsap.fromTo(".about-title",
      {
        y: 30,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#about",
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );
    
    gsap.from(textRefs.current, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".about-content",
        start: "top 75%",
        toggleActions: "play none none reverse"
      }
    });
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  
  return (
    <section id="about" ref={aboutRef}>
      <div className="section-header">
        <span className="section-title about-title">About Me</span>
      </div>
      
      <div className="about-content">
        <div className="about-description">
          <p ref={el => textRefs.current[0] = el}>
          Hi, my name is Alex and I am a help Desk Analyst with a growing passion for Data Science and a strong drive to solve real-world problems through technology. My interest in data started back in 2022 when I read a book on Biomimetrics while simultaneously analyzing data for the effectiveness of Breakwaters.
          That’s when I realized how powerful data can be—and I’ve been hooked on analytics ever since.
          </p>
          
          <p ref={el => textRefs.current[1] = el}>
            Since then, I’ve earned a <a href= "https://www.coursera.org/account/accomplishments/professional-cert/23VONTTCZ349" target="_blank">Google Data Analytics Certificate</a> and built a strong foundation in <span className="highlight">SQL, Tableau, and Python</span>. I find the ability to extract insights from data and turn them into actionable solutions while communicating it effectively and clearly incredibly rewarding. 
          </p>
          
          <p ref={el => textRefs.current[3] = el}>
          When I’m not behind a screen, you’ll likely find me out exploring the world. I’m an avid traveler who loves experiencing new cultures and landscapes. My adventurous spirit extends beneath the surface—I enjoy scuba diving and discovering the vibrant marine ecosystems below. On land, I enjoy playing soccer and being social. 
          Whether I’m diving into data or diving into the ocean, I’m driven by curiosity, creativity, and the thrill of discovery.
          </p>
          
        </div>
        <p className="about-timeline-link" ref={el => textRefs.current[5] = el}>
          <a href="#timeline">
            <span role="img" aria-label="timeline">🗺️</span> 
            View my <span className="about-timeline-highlight">timeline</span> to learn more about my unique journey into data &rarr;
          </a>
        </p>     
        <div className="about-actions" ref={el => textRefs.current[6] = el}>
          <a href="https://docs.google.com/document/d/1YW2-LEXPqV5EpvwpLOC5uGRV-M5S2Zg4O1l25wYMaNY/edit?tab=t.0" className="resume-button btn-effect" target="_blank" rel="noopener noreferrer">
            View Resume
          </a>
        </div>
        <div className="about-actions" ref={el => textRefs.current[6] = el}>
          <a href="https://drive.google.com/file/d/1Y0VxCq3FXbEsBY01cCc1Gboqgeh30euK/view" className="resume-button btn-effect" target="_blank" rel="noopener noreferrer">
            View Diploma
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;