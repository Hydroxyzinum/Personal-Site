import React from "react";
import "../styles/portfolio.css";
import weatherImg from "../styles/petimages/weather.png";
const Portfolio = () => {
  const openWeatherProject = () => {
    window.open("https://hydroxyzinum.github.io/Build-Weather/", "_blank");
  };
  return (
    <div className="protfolio-container">
      <div className="project-container">
        <a className="project-btn" onClick={openWeatherProject}>
          <img className="project-img" src={weatherImg} alt="weather" />
        </a>
        <div className="project-links_container">
          <p className="project-name">Weather App</p>
          <a href="#" className="project-git">
            git
          </a>
          <a href="#" className="project-link">
            link
          </a>
        </div>
        <p className="project-decs">
          Это веб-приложение, разработанное с
          использованием библиотеки React, которое позволяет пользователям
          получать актуальную информацию о погоде для различных местоположений.
          Приложение обладает простым и интуитивно понятным интерфейсом, что
          делает его удобным для использования как опытными пользователями, так
          и новичками.
        </p>
        <p className="project-tech">React - Axios - Integrations</p>
      </div>
      <div className="project-container">
        <a className="project-btn" onClick={openWeatherProject}>
          <img className="project-img" src={weatherImg} alt="weather" />
        </a>
        <p className="project-name">Weather App</p>
        <p className="project-decs"></p>
        <p className="project-tech"></p>
      </div>
    </div>
  );
};

export default Portfolio;
