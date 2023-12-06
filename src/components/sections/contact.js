import React from "react";
import { CONFIG } from "../../config";
import "../../styles/contact.css";
import { ContactUs } from "../helpers/ContactUs";
import Toast from "../helpers/Toast";
import { ReactComponent as ContactDoodles } from "../../assets/contact_doodles.svg";

const Contact = (props) => {
  const [toastObject, setToastObject] = React.useState({});

  return (
    <section id="contact" ref={props.sectionRef}>
      <div className="vertical-line"></div>
      <div className="contact workspace">
        {CONFIG.contact[0].show_doodles && (
          <div className="hide-mid-and-down">
            <ContactDoodles />
          </div>
        )}
        <div className="contact-left-container">
          <div className="contact-title">
            <h1>
              <span>{CONFIG.contact[0].first_text}&nbsp;</span>
              <span className="primary-color">{CONFIG.contact[0].second_text}</span>
            </h1>
          </div>
          <div className="contact-image">{CONFIG.contact[0].contact_image}</div>
        </div>
        <Toast
          position="bottom-right"
          transition="rtl"
          textColor="#fff"
          bgColor={
            Object.keys(toastObject).length > 0 &&
            toastObject.title === "failure"
              ? "#DC3545"
              : "#198754"
          }
          autoDelete={true}
          autoDeleteTime={5000}
          toastObject={toastObject}
          clearToast={setToastObject}
        />
        <div className="contact-form">
          <ContactUs setToastObject={setToastObject} />
        </div>
      </div>
    </section>
  );
};

export default Contact;
