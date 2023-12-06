import React from "react";
import { setGlobalState } from "../state";

const CheckScrollBar = (props) => {
  React.useEffect(() => {
    function updateState() {
      const el = props.scrollRef.current;
      el &&
        setGlobalState(
          "hasScrollBar",
          el.scrollHeight > el.getBoundingClientRect().height
        );
    }

    updateState();

    window.addEventListener("resize", updateState);
    return () => window.removeEventListener("resize", updateState);
  }, [props.scrollRef]);

  return null;
};

export default CheckScrollBar;
