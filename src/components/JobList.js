import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import "../styles/Experience.css";

const experienceItems = {
  Brightline: {
    jobTitle: "Implementation Analyst / System Administrator @",
    duration: "MAY 2025 - Present",
    desc: [
      "Administer Microsoft 365 and Intune for device and endpoint management, while supporting secure deployments across Windows and macOS environments using Addigy and Meraki.",
      "Implement and maintain enterprise applications such as Okta, ensuring proper configuration, access control, and integration with other systems.",
      "Use Jira and Confluence to manage project workflows, document implementation processes, and collaborate with cross-functional teams on IT solutions.",
      "Automate routine tasks and streamline IT operations using Python and PowerShell; monitor systems and endpoints through NinjaRMM for proactive issue resolution."
    ]
  },
  "One Sotheby’s International Realty": {
    jobTitle: "Help Desk Analyst / Level 2 Support @",
    duration: "JUL 2021 - MAY 2025",
    desc: [
      "Provided Level 1-3  technical support for over 1,600 agents and 100+ staff, ensuring prompt resolution of IT issues and maintaining high levels of customer satisfaction using the ITSM tool, Freshservice. ",
      "Experience in troubleshooting IT issues and working with Active Directory, the full MS Suite, Windows and Mac OS, Meraki and Anti-virus software.",
      "Developed and implemented an IT asset tracking process to improve inventory management and streamline equipment deployment.",
      "Analyzed recurring help desk tickets to improve user guides and streamline processes, enhancing efficiency and reducing response times from 50%."
    ]
  },

};

const JobList = () => {
  const [value, setValue] = useState(0);
  const [isHorizontal, setIsHorizontal] = useState(window.innerWidth < 600);
  const keys = Object.keys(experienceItems);
  
  const contentRef = useRef(null);
  const listsRef = useRef({});
  const oldValueRef = useRef(value);
  
  useEffect(() => {
    const handleResize = () => {
      setIsHorizontal(window.innerWidth < 600);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const handleTabChange = (index) => {
    const oldIndex = oldValueRef.current;
    
    if (oldIndex === index) return;
    
    oldValueRef.current = index;
    
    const currentPanel = document.querySelector('.joblist-panel');
    
    if (currentPanel) {
      gsap.to(currentPanel, {
        opacity: 0,
        duration: 0.3,
        onComplete: () => {
          setValue(index);
          animateJobDetails();
          
          const newPanel = contentRef.current.querySelector(`.joblist-panel:nth-child(${index + 1})`);
          if (newPanel) {
            gsap.fromTo(newPanel, { opacity: 0 }, { opacity: 1, duration: 0.3 });
          }
        }
      });
    } else {
      setValue(index);
      animateJobDetails();
    }
  };
  
  const animateJobDetails = () => {
    const listItems = contentRef.current?.querySelectorAll('.job-description li');
    
    if (listItems?.length) {
      gsap.set(listItems, { opacity: 0, x: 20 });
      
      gsap.to(listItems, {
        opacity: 1,
        x: 0,
        duration: 0.4,
        stagger: 0.1,
        ease: "power2.out"
      });
    }
  };
  
  useEffect(() => {
    animateJobDetails();
  }, []);
  
  return (
    <div className={`joblist-root ${isHorizontal ? "horizontal" : "vertical"}`}>
      <div className={`joblist-tabs ${isHorizontal ? "horizontal" : "vertical"}`}>
        {keys.map((key, i) => (
          <button
            key={key}
            className={`joblist-tab${value === i ? " active" : ""}`}
            onClick={() => handleTabChange(i)}
          >
            {isHorizontal ? `0${i+1}.` : key}
          </button>
        ))}
      </div>
      
      <div className="joblist-content" ref={contentRef}>
        {keys.map((key, i) =>
          value === i ? (
            <div key={key} className="joblist-panel">
              <span className="joblist-job-title">
                {experienceItems[key]["jobTitle"] + " "}
              </span>
              <span className="joblist-job-company">{key}</span>
              <div className="joblist-duration">
                {experienceItems[key]["duration"]}
              </div>
              <ul className="job-description">
                {experienceItems[key]["desc"].map((descItem, j) => (
                  <li key={j}>{descItem}</li>
                ))}
              </ul>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default JobList;