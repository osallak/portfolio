import React from "react";
import { CONFIG } from "../config";
import "../styles/nav.css";
import { setGlobalState, useGlobalState } from "./state";
import { ReactComponent as MenuIcon } from "../assets/menu_icon.svg";

const Nav = (props) => {
  const [hasScrollBar] = useGlobalState("hasScrollBar");
  const [isNavOpen] = useGlobalState("isNavOpen");
  const [windowWidth] = useGlobalState("windowWidth");

  return (
    <header
      className="nav"
      style={{
        width: hasScrollBar
          ? windowWidth <= 600
            ? "calc(100% - 5px)"
            : "calc(100% - var(--scrollbar-width))"
          : "100%"
      }}
    >
      <div className="vertical-line vertical-line-nav"></div>
      <div className="logo-container">
        <a className="logo" href={CONFIG.logo[0].url}>
          {CONFIG.logo[0].name}
        </a>
      </div>
      <div
        className="menu-icon"
        onClick={() => {
          setGlobalState("isNavOpen", !isNavOpen);
        }}
      >
        {isNavOpen ? (
          <div style={{ fontSize: "1.5rem" }}>&#x2716;</div>
        ) : (
          <MenuIcon />
        )}
      </div>
      <nav
        className="nav-options"
        style={{
          display: windowWidth <= 600 && !isNavOpen ? "none" : "block"
        }}
      >
        <ul>
          {CONFIG.navLinks.map((obj) => (
            <li key={obj.name}>
              <a
                href={obj.url}
                onClick={() => {
                  setGlobalState("isNavOpen", false);
                }}
              >
                {obj.icon && (
                  <div className="nav-icons">
                    <img src={obj.icon} alt={obj.name} />
                  </div>
                )}
                <span>{obj.name}</span>
              </a>
            </li>
          ))}
          {!isNavOpen && <div></div>}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
