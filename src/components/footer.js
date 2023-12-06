import React from "react";
import "../styles/footer.css";
import "../styles/nav.css";
import { CONFIG } from "../config";

const Footer = (props) => {
  return (
    <section id="footer">
      <div className="vertical-line"></div>
      <div className="footer workspace">
        <div className="footer-top-section">
          {CONFIG.footer[0].showNavLinks && (
            <nav className="nav-options-copy footer-nav-options">
              <ul>
                {CONFIG.navLinks.map((obj) => (
                  <li key={obj.name}>
                    <a href={obj.url}>
                      {obj.icon && (
                        <div className="footer-icons">
                          <img src={obj.icon} alt={obj.name} />
                        </div>
                      )}
                      {obj.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          )}
          {CONFIG.footer[0].showSocialMedia && (
            <div className="media">
              {CONFIG.socialMedia.map((obj) => (
                <div
                  key={obj.name}
                  className="media-icon"
                  onClick={() => {
                    window.open(obj.url);
                  }}
                >
                  <img src={obj.icon} alt="x" />
                </div>
              ))}
            </div>
          )}
        </div>
        {CONFIG.design && (
          <div
            className="credits"
            onClick={() => {
              window.open(CONFIG.design[0].url);
            }}
          >
            Design By: <b className="primary-color">{CONFIG.design[0].name}</b>
          </div>
        )}
        {CONFIG.footer[0].footerText && (
          <div className="footer-bottom-section">
            <div>{CONFIG.footer[0].footerText}</div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Footer;
