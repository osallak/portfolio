import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const CustomSlider = (props) => {
  const { options, tabs, selectedTab, cardRef } = props;

  const handleSlideClick = (url) => {
    if (url !== "") {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  const allTabDetail = React.useMemo(() => {
    let localObj = {
      id: 1,
      title: "All",
      project_detail: []
    };
    tabs.forEach((obj) => {
      localObj.project_detail = localObj.project_detail.concat(
        obj.project_detail
      );
    });
    return localObj;
  }, [tabs]);

  if (selectedTab === "All") {
    return (
      <div>
        <div>
          <Splide options={options}>
            {allTabDetail.project_detail.map((obj) => (
              <SplideSlide key={`${obj.name}${obj.id}`}>
                <div
                  className="card"
                  ref={cardRef}
                  onClick={() => handleSlideClick(obj.url)}
                  key={obj.id}
                >
                  <img src={obj.image} alt={obj.name} />
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    );
  }

  return (
    <div>
      {tabs.map((value) => (
        <div key={`${value.title}${value.id}`}>
          {value.title === selectedTab && (
            <Splide options={options}>
              {value.project_detail.map((obj) => (
                <SplideSlide key={`${value.title}${obj.id}`}>
                  <div
                    className="card"
                    ref={cardRef}
                    onClick={() => handleSlideClick(obj.url)}
                    key={obj.id}
                  >
                    <img src={obj.image} alt={obj.name} />
                  </div>
                </SplideSlide>
              ))}
            </Splide>
          )}
        </div>
      ))}
    </div>
  );
};

export default CustomSlider;
