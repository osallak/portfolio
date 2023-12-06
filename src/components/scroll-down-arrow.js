import React from "react";
import { ReactComponent as BottomArrowIcon } from "../assets/bottom_arrow_icon.svg";
import { useGlobalState } from "./state";

const ScrollDownArrow = (props) => {
  const [nextSection] = useGlobalState("nextSection");
  const [hasScrollBar] = useGlobalState("hasScrollBar");

  const scrollToSection = (nextSection) => {
    props.sectionsVisibility[
      nextSection.toString()
    ][0].current.scrollIntoView();
  };

  return (
    <div
      className="scroll-down-arrow"
      onClick={() => scrollToSection(nextSection)}
      style={{
        display:
          nextSection > Object.keys(props.sectionsVisibility).length && "none",
        left: hasScrollBar && "calc(35% - 3.5px)"
      }}
    >
      <BottomArrowIcon />
    </div>
  );
};

export default ScrollDownArrow;
