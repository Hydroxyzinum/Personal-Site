import React from "react";
import "../styles/footer.css";
import hh from "../styles/images/footer/hh.png";
import git from "../styles/images/footer/git.png";
import email from "../styles/images/footer/mail.png";
import linkedin from "../styles/images/footer/in.png";

const Footer = () => {
  return (
    <footer>
      <div className="links-container">
        <div className="footer-link_block">
          <a className="footer-link" href="gmail.com">
            <img className="link-image" src={email} alt="email" />
            <span>Email</span>{" "}
          </a>
        </div>
        {/* <div className="footer-link_block"><a className="footer-link" href="#">Instagram</a></div> */}
        <div className="footer-link_block">
          <a className="footer-link" href="hh.ru">
            <img className="link-image" src={hh} alt="headhunter" />{" "}
            <span>Resume</span>
          </a>
        </div>
        <div className="footer-link_block">
          <a className="footer-link" href="linkedin.com">
            <img className="link-image" src={linkedin} alt="linkedin" />{" "}
            <span>LinkedIn</span>
          </a>
        </div>
        <div className="footer-link_block">
          <a className="footer-link" href="github.com">
            <img className="link-image" src={git} alt="github" />
            <span>GitHub</span>{" "}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
