import React from "react";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-list">
          <div className="left-header-buttons">
            <li className="nav-item">
              <a href="#portfolio" className="nav-link">
                Обо мне
              </a>
            </li>
            <li className="nav-item">
              <a href="#portfolio" className="nav-link">
                Портфолио
              </a>
            </li>
            <li className="nav-item">
              <a href="#services" className="nav-link">
                Услуги
              </a>
            </li>
          </div>
          <div className="right-header-buttons">
            <li className="nav-item">
              <a href="#prices" className="nav-link">
                Цены
              </a>
            </li>
            <li className="nav-item">
              <a href="#reviews" className="nav-link">
                Отзывы
              </a>
            </li>
            <li className="nav-item">
              <a href="#contacts" className="nav-link">
                Контакты
              </a>
            </li>
          </div>
        </ul>
      </nav>
      <h1 className="header-title">
        Профессиональная аэросъемка в Новосибирске
      </h1>
      <button className="jump-to-order-btn">Оставить заявку</button>
    </header>
  );
};

export default Header;
