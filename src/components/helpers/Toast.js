import React from "react";
import "./Toast.css";

const Toast = (props) => {
  const {
    position,
    transition,
    textColor,
    bgColor,
    autoDelete,
    autoDeleteTime,
    toastObject,
    clearToast
  } = props;

  const deleteToast = () => {
    clearToast({});
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (autoDelete && Object.keys(toastObject).length > 0) {
        deleteToast();
      }
    }, autoDeleteTime);
    return () => {
      clearInterval(interval);
    };
  }, [toastObject]);

  if (Object.keys(toastObject).length > 0) {
    return (
      <div
        className="toast-container"
        position={position}
        style={{
          color: textColor
        }}
      >
        <div
          className="toast"
          transition={transition}
          style={{
            background: bgColor
          }}
        >
          <div className="main-container">
            {toastObject.img && toastObject.img !== "" && (
              <div className="toast-image">
                <img src={toastObject.img} alt="" />
              </div>
            )}
            <div className="toast-text-container">
              <div className="toast-title">{toastObject.title}</div>
              <div className="toast-message">{toastObject.message}</div>
            </div>
          </div>
          <button
            className="toast-close-button"
            style={{
              color: textColor
            }}
            onClick={deleteToast}
          >
            &#10006;
          </button>
        </div>
      </div>
    );
  }

  return null;
};

export default Toast;
