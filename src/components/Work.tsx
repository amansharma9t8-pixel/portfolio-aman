import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const projectData = [
  {
    name: "Social Media Design",
    category: "Social Media",
    description: "Engaging and creative visual content for various social media platforms to boost brand presence.",
    link: "https://drive.google.com/drive/folders/1yXBymowATRu13yjnfCrxw4se2lHKQR-A?usp=sharing",
    image: "/images/placeholder.webp" // Can be replaced with actual image paths
  },
  {
    name: "UX Design",
    category: "UX/UI",
    description: "Creating seamless, user-centric, and intuitive user experiences for various applications.",
    link: "https://drive.google.com/drive/folders/1jwS_G4Qg2jGfUc96-shjv2T-pk6yFj5c?usp=drive_link",
    image: "/images/placeholder.webp"
  },
  {
    name: "Website Design",
    category: "Website Design",
    description: "Website design for your startup. Graphic design for a client in the music and entertainment industry.",
    link: "https://drive.google.com/drive/folders/14A80XvvoJ0VVG8ETAzOyScDkuWUTiK8R?usp=drive_link",
    image: "/images/placeholder.webp"
  },
  {
    name: "Print Design",
    category: "Print Design",
    description: "Graphic design and poster design for an arts and culture center and interior design industries.",
    link: "https://drive.google.com/drive/folders/19t1dwKgl4lQqLZ9oXPffxo1BzPfh1E1u?usp=drive_link",
    image: "/images/placeholder.webp"
  },
  {
    name: "Web Design",
    category: "Web Design",
    description: "Design of personal and professional web pages for clients in the arts, photography, design, and entertainment industries.",
    link: "https://drive.google.com/drive/folders/14A80XvvoJ0VVG8ETAzOyScDkuWUTiK8R?usp=drive_link",
    image: "/images/placeholder.webp"
  }
];

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const workContainer = document.querySelector(".work-container");
      if (!workContainer || !box[0]) return;
      const rectLeft = workContainer.getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentElement = box[0].parentElement;
      if (!parentElement) return;
      const parentWidth = parentElement.getBoundingClientRect().width;
      let paddingStr = window.getComputedStyle(box[0]).paddingLeft || window.getComputedStyle(box[0]).padding || "80px";
      let padding: number = parseInt(paddingStr) / 2 || 40;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`, // Use actual scroll width
        scrub: true,
        pin: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    // Clean up (optional, good practice)
    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projectData.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Description</h4>
                <p>{project.description}</p>
              </div>
              <WorkImage image={project.image} alt={project.name} link={project.link} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
