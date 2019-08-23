import React from "react";
import "./Footer.css";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <div className="footer">
      <p>
        HealthApp &copy;{" "}
        {date === 2019 ? (
          <span className="inline">2019</span>
        ) : (
          <span className="inline">2019 - {date}</span>
        )}
        &nbsp; Developed By{" "}
        <a
          href="https://github.com/cbessjr"
          target="_blank"
          rel="noopener noreferrer"
        >
          Charles Bess
        </a>
        ,{" "}
        <a
          href="https://github.com/jamesbarker585"
          target="_blank"
          rel="noopener noreferrer"
        >
          James Barker
        </a>
        ,{" "}
        <a
          href="https://github.com/ghost0fharambe"
          target="_blank"
          rel="noopener noreferrer"
        >
          Adam Karman
        </a>
        ,{" "}
        <a
          href="https://github.com/danrsolomon"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dan Solomon
        </a>
        , and{" "}
        <a
          href="https://github.com/nevermindthelabel"
          target="_blank"
          rel="noopener noreferrer"
        >
          Matt Kilcup
        </a>
      </p>
    </div>
  );
};

export default Footer;
