import React from "react";
import { useIntersection } from "use-intersection";
import CheckScrollBar from "./components/helpers/check-scroll-bar";
import Nav from "./components/nav";
import ScrollDownArrow from "./components/scroll-down-arrow";
import About from "./components/sections/about";
import Hero from "./components/sections/hero";
import Projects from "./components/sections/projects";
import { setGlobalState } from "./components/state";
import "./styles.css";
// Needed
import "@splidejs/react-splide/css/skyblue";
import Footer from "./components/footer";
import Contact from "./components/sections/contact";

export default function App() {
  const scrollRef = React.useRef(null);
  const section1Ref = React.useRef(null);
  const section2Ref = React.useRef(null);
  const section3Ref = React.useRef(null);
  const section4Ref = React.useRef(null);

  const section1Visible = useIntersection(section1Ref, {
    threshold: 0.5
  });
  const section2Visible = useIntersection(section2Ref, {
    threshold: 0.5
  });
  const section3Visible = useIntersection(section3Ref, {
    threshold: 0.5
  });
  const section4Visible = useIntersection(section4Ref, {
    threshold: 0.5
  });

  const sectionsVisibility = {
    "1": [section1Ref, section1Visible],
    "2": [section2Ref, section2Visible],
    "3": [section3Ref, section3Visible],
    "4": [section4Ref, section4Visible]
  };

  React.useEffect(() => {
    Object.keys(sectionsVisibility).map((key) => {
      if (sectionsVisibility[key][1]) {
        setGlobalState("nextSection", Number(key) + 1);
        return null;
      }
      return null;
    });
  }, [section1Visible, section2Visible, section3Visible, section4Visible]);

  return (
    <div className="App" ref={scrollRef}>
      <ScrollDownArrow sectionsVisibility={sectionsVisibility} />
      <Nav />
      <Hero sectionRef={section1Ref} />
      <About sectionRef={section2Ref} />
      <Projects sectionRef={section3Ref} />
      <Contact sectionRef={section4Ref} />
      <Footer />
      <CheckScrollBar scrollRef={scrollRef} />
    </div>
  );
}
