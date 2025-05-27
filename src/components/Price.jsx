import React from "react";
import "../styles/Price.css";

const Pricing = () => {
  const pricingItems = [
    {
      title: "Видеосъёмка с дрона",
      description:
        "До 3-х часов нахождения на площадке (общее время полёта 1 час)",
      price: "7000 руб.",
    },
    {
      title: "Видеосъёмка с дрона",
      description:
        "Последующие часы нахождения на площадке по истечению 3-х часов",
      price: "1000 руб./час",
    },
    {
      title: "Фотографии с дрона",
      description: "Время полета 25 минут",
      price: "5000 руб.",
    },
    {
      title: "Смена 10 часов",
      description: "Время полёта до 3 часов",
      price: "12000 руб.",
    },
    {
      title: "Транспортные расходы",
      description: "За границей города",
      price: "от 1000 руб.",
    },
    {
      title: "Видеомонтаж",
      description: "За минуту ролика",
      price: "2000 руб.",
    },
  ];

  return (
    <section className="pricing-section">
      <h2 className="section-title">Тарифы на услуги</h2>
      <div className="pricing-grid">
        {pricingItems.map((item, index) => (
          <div key={index} className="pricing-card">
            <h3 className="service-title">{item.title}</h3>
            <p className="service-description">{item.description}</p>
            <p className="service-price">{item.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
