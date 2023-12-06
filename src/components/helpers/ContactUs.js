import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { CONFIG } from "../../config";
import "./ContactUs.css";

export const ContactUs = (props) => {
  const form = useRef();

  const [values, setValues] = React.useState({
    name: "",
    email: "",
    message: ""
  });
  const [buttonText, setButtonText] = React.useState(
    CONFIG.contact[0].send_button_text
  );

  const sendEmail = (e) => {
    setButtonText("Sending...");
    e.preventDefault();

    emailjs
      .sendForm(
        "default_service",
        "template_ezky04m",
        form.current,
        "56P5dx6IjMjag6a8o"
      )
      .then(
        (result) => {
          setButtonText("Sent");
          props.setToastObject({
            title: "Success",
            message: "Message has been sent",
            img: CONFIG.contact[0].toast_icon
          });
          setTimeout(function () {
            setButtonText(CONFIG.contact[0].send_button_text);
          }, 5000);
          console.log(result.text);
        },
        (error) => {
          setButtonText("Failure");
          props.setToastObject({
            title: "Failure",
            message: error.text,
            img: "https://cdn-icons-png.flaticon.com/128/149/149145.png"
          });
          setTimeout(function () {
            setButtonText(CONFIG.contact[0].send_button_text);
          }, 5000);
          console.log(error.text);
        }
      );

    setValues({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className="half-on-large">
        <label>{CONFIG.contact[0].name_label}</label>
        <input
          required
          type="text"
          name="name"
          placeholder={CONFIG.contact[0].name_placeholder}
          value={values.name}
          onChange={(e) => {
            setValues({ ...values, name: e.target.value });
          }}
        />
      </div>
      <div className="half-on-large">
        <label>{CONFIG.contact[0].email_label}</label>
        <input
          required
          type="email"
          name="email"
          placeholder={CONFIG.contact[0].email_placeholder}
          value={values.email}
          onChange={(e) => {
            setValues({ ...values, email: e.target.value });
          }}
        />
      </div>
      <div className="full-on-large">
        <label>{CONFIG.contact[0].message_label}</label>
        <textarea
          required
          name="message"
          placeholder={CONFIG.contact[0].message_placeholder}
          rows="7"
          value={values.message}
          onChange={(e) => {
            setValues({ ...values, message: e.target.value });
          }}
        />
      </div>
      <button type="submit" className="primary-button">
        <span id="button">{buttonText}</span>
        <div className="button-image">{CONFIG.contact[0].send_button_icon}</div>
      </button>
    </form>
  );
};
