import React from "react";
import { CONFIG } from "../../config";
import "../../styles/about.css";
import { ReactComponent as AboutDoodles } from "../../assets/about_doodles.svg";
import { setGlobalState, useGlobalState } from "../state";

const About = (props) => {
  const [isReadingMore] = useGlobalState("isReadingMore");
  const [readMoreButton] = useGlobalState("readMoreButton");

  const paragraphRef = React.useRef(null);
  const spanRef = React.useRef(null);

  React.useEffect(() => {
    if (paragraphRef.current.clientHeight > spanRef.current.offsetHeight) {
      setGlobalState("readMoreButton", false);
    } else {
      setGlobalState("readMoreButton", true);
    }
  }, []);

  const handleToggleReadMoreClick = () => {
    setGlobalState("isReadingMore", !isReadingMore);
  };

  React.useEffect(() => {
    const handleResize = () => {
      setGlobalState("windowWidth", window.innerWidth);
      if (!isReadingMore) {
        if (paragraphRef.current.clientHeight > spanRef.current.offsetHeight) {
          if (readMoreButton) {
            setGlobalState("readMoreButton", false);
          }
        } else {
          setGlobalState("readMoreButton", true);
        }
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isReadingMore]);

  return (
    <section id="about" ref={props.sectionRef}>
      <div className="vertical-line"></div>
      <div className="horizontal-line"></div>
      <div className="about workspace">
        {CONFIG.about[0].show_doodles && (
          <div className="hide-mid-and-down">
            <AboutDoodles />
          </div>
        )}
        <div
          className="about-left-container"
          style={{
            marginBottom: isReadingMore && "20vmin",
            width: (isReadingMore || !CONFIG.about[0].image) && "100%"
          }}
        >
          <div className="about-text-container">
            <div className="about-title">
              <h1>
                <span>{CONFIG.about[0].first_text}&nbsp;</span>
                <span className="primary-color">{CONFIG.about[0].second_text}</span>
              </h1>
            </div>
            <div className="about-subtitle">
              <p
                style={{
                  display: isReadingMore ? "block" : "-webkit-box",
                  WebkitLineClamp: CONFIG.about[0].paragraph_lines_to_show.toString()
                }}
                ref={paragraphRef}
              >
                <span ref={spanRef}>{CONFIG.about[0].paragraph}</span>
              </p>
              <b
                style={{
                  display: !readMoreButton && "none"
                }}
                className="read-more-botton"
                onClick={handleToggleReadMoreClick}
              >
                {isReadingMore
                  ? CONFIG.about[0].button_text.less
                  : CONFIG.about[0].button_text.more}
              </b>
            </div>
          </div>
        </div>
        <div
          className="about-image"
          style={{
            display: isReadingMore && "none"
          }}
        >
          {CONFIG.about[0].image}
        </div>
      </div>
    </section>
  );
};

export default About;
