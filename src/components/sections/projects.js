import React from "react";
import { CONFIG } from "../../config";
import "../../styles/projects.css";
import { setGlobalState, useGlobalState } from "../state";
import CustomSlider from "../helpers/custom-slider";

const Projects = (props) => {
  const [selectedTab] = useGlobalState("selectedTab");
  const [startIndex] = useGlobalState("startIndex");

  const cardRef = React.useRef(null);

  const options = {
    gap: "1rem",
    perPage: 3,
    perMove: 3,
    heightRatio: 0.75 / 3,
    drag: "free",
    snap: true,
    start: startIndex,
    classes: {
      arrows: "splide__arrows custom-arrows",
      arrow: "splide__arrow custom-arrow",
      prev: "splide__arrow--prev custom-prev",
      next: "splide__arrow--next custom-next",
      pagination: "splide__pagination custom-pagination",
      page: "splide__pagination__page custom-page"
    },
    breakpoints: {
      600: {
        perPage: 2,
        perMove: 2,
        heightRatio: 0.75 / 2
      },
      400: {
        perPage: 1,
        perMove: 1,
        heightRatio: 0.75
      }
    }
  };

  const handleTabClick = (title) => {
    setGlobalState("selectedTab", title);
    setGlobalState("startIndex", 0);
  };

  return (
    <section id="projects" ref={props.sectionRef}>
      <div className="vertical-line"></div>
      <div className="projects workspace">
        <div className="top-section">
          <div className="projects-title">
            <h1>
              <span>{CONFIG.projects[0].first_text}&nbsp;</span>
              <span className="primary-color">{CONFIG.projects[0].second_text}</span>
            </h1>
          </div>
          <div className="projects-tabs">
            <button
              onClick={() => {
                handleTabClick("All");
              }}
              className={`tab ${
                selectedTab === "All" ? "primary-button" : "secondary-button"
              }`}
            >
              All
            </button>
            {CONFIG.projects[0].tabs.map((obj) => (
              <button
                key={obj.id}
                onClick={() => {
                  handleTabClick(obj.title);
                }}
                className={`tab ${
                  selectedTab === obj.title
                    ? "primary-button"
                    : "secondary-button"
                }`}
              >
                {obj.title}
              </button>
            ))}
          </div>
        </div>
        <div className="cards-section">
          <CustomSlider
            options={options}
            tabs={CONFIG.projects[0].tabs}
            selectedTab={selectedTab}
            cardRef={cardRef}
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
