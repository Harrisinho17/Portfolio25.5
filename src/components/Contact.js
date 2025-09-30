import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Icon from "./Icons";
import "../styles/Contact.css";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {

  useEffect(() => {
      gsap.set(".contact-container", {
      width: "100%",
      maxWidth: "600px",
      height: "auto", 
      margin: "0 auto"
    });
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#contact",
        start: "top 75%",
        toggleActions: "play none none reverse"
      }
    });
    
    tl.fromTo(
      "#contact .section-title",
      {
        y: 30,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out"
      }
    );

    tl.fromTo(
      ".contact-intro",
      {
        y: 30,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out"
      },
      "-=0.3"
    );
    
    tl.fromTo(
      ".contact-container",
      {
        y: 50,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out"
      },
      "-=0.3"
    );
    
    tl.fromTo(
      ".form-group",
      {
        y: 20,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.15,
        duration: 0.5,
        ease: "power2.out"
      },
      "-=0.4"
    );
    
    tl.fromTo(
      [".contact-actions", ".contact-info"],
      {
        y: 15,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.5,
        ease: "power2.out"
      },
      "-=0.2"
    );
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section id="contact">
      <div className="section-header">
        <span className="section-title">Get In Touch</span>
      </div>
      <div className="contact-intro">
      <p>
        I’m currently exploring data analyst opportunities and always open to connecting with like-minded professionals. If you have a role, project, or collaboration in mind, I’d love to hear from you!
      </p>  
      </div>
      <div className="contact-container">
        <div className="contact-bg-elements">
          <div className="contact-circle"></div>
          <div className="contact-square"></div>
        </div>
        
        
        <form
          method="POST"
          action="https://formspree.io/f/xdkneqdv"
          className="contact-form"
        >
          <div className="form-group">
            <input
              type="text"
              name="name"
              className="contact-input"
              placeholder="Your Name"
              required
            />
            <Icon name="User" className="input-icon" />
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              className="contact-input"
              placeholder="Your Email"
              required
            />
            <Icon name="Mail" className="input-icon" />
          </div>

          <div className="form-group">
            <textarea
              name="message"
              className="contact-textarea"
              placeholder="Your Message"
              rows={6}
              required
            ></textarea>
            <Icon name="MessageSquare" className="input-icon textarea-icon" />
          </div>

          <div className="contact-actions">
            <button className="contact-send-btn btn-effect" type="submit">
              Send Message
              <Icon name="Send" className="btn-icon" />
            </button>
          </div>
        </form>
        
        <div className="contact-info">
          <div className="contact-info-item">
            <Icon name="Mail" className="contact-info-icon" />
            <a href="mailto:abelchior.harris@gmail.com" className="contact-email" target="_blank" rel="noopener noreferrer">

            </a>
          </div>
        </div>
      </div>
    </section>
  );
}