import React from "react";
import "./Footer.css";
import { links } from "../../assets/about";

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        Built with 💚 by <a href={links.mailto}>Athena Liu</a> in 2019
      </p>
    </footer>
  );
};

export default Footer;
