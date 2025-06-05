"use client";

import React, { useState } from "react";
import "../styles/ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    agreement: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Форма отправлена:", formData);
    // Здесь можно добавить отправку данных на сервер
    alert("Спасибо! Ваша заявка отправлена.");
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2 className="section-title">Контактная информация</h2>

        <div className="contact-content">
          <div className="contact-info">
            <p className="contact-description">
              Оставьте заявку и я свяжусь с вами по поводу услуг и цен.
            </p>

            <div className="contact-details">
              <a href="mailto:leva1sokolov@gmail.com" className="contact-link">
                leva1sokolov@gmail.com
              </a>
              <a href="tel:+79831368066" className="contact-link">
                +7 983 136-80-66
              </a>
              <p className="contact-address">г. Новосибирск</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Ваше имя</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Телефон</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+7 (999) 999-99-99"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Комментарии</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
              />
            </div>

            <div className="form-agreement">
              <input
                type="checkbox"
                id="agreement"
                name="agreement"
                checked={formData.agreement}
                onChange={handleChange}
                required
              />
              <label htmlFor="agreement">
                Нажимая на кнопку, вы даете согласие на обработку персональных
                данных и соглашаетесь с политикой конфиденциальности
              </label>
            </div>

            <button type="submit" className="submit-btn">
              Связаться
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
