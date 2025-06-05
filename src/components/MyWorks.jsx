"use client";
import React, { useState } from "react";
import "../styles/MyWorks.css";

const WorksGallery = () => {
  // Массив работ с фотографиями и описаниями
  const works = [
    {
      title: "Исследование трафика",
      description:
        "Здача заключалась в необходимости посчитать количество трафика в утренний и вечерний час пик. Запись велась по 20 минут на каждом этапе. С помощью специальной программы было посчитано количество трафика из видеозаписей",
      photos: [
        "/images/trafic1.jpg",
        "/images/trafic2.jpg",
        "/images/trafic3.jpg",
        "/images/trafic4.jpg",
        "/images/trafic5.jpg",
      ],
    },
    {
      title: "Агронеделя в Экспоцентре",
      description:
        "Важная промышленная выставка с большим количеством техники. Задача показать масштаб выставки. Полеты проходили на улице и в помещении",
      photos: [
        "/images/expo1.png",
        "/images/expo2.jpg",
        "/images/expo3.png",
        "/images/expo4.png",
      ],
    },
    {
      title: "Зеленый марафон от Сбера",
      description:
        "Крупнейшее беговое событие. Огромное количество участников и активностей",
      photos: [
        "/images/sber2.jpg",
        "/images/sber3.jpg",
        "/images/sber4.jpg",
        "/images/sber6.jpg",
        "/images/sber7.jpg",
        "/images/sber8.jpg",
        "/images/sber9.jpg",
      ],
    },
  ];

  // Состояние для текущих фото в каждом блоке
  const [currentPhotos, setCurrentPhotos] = useState([0, 0, 0]);

  // Функция для переключения фото
  const nextPhoto = (workIndex) => {
    setCurrentPhotos((prev) => {
      const newPhotos = [...prev];
      newPhotos[workIndex] =
        (prev[workIndex] + 1) % works[workIndex].photos.length;
      return newPhotos;
    });
  };

  const prevPhoto = (workIndex) => {
    setCurrentPhotos((prev) => {
      const newPhotos = [...prev];
      newPhotos[workIndex] =
        (prev[workIndex] - 1 + works[workIndex].photos.length) %
        works[workIndex].photos.length;
      return newPhotos;
    });
  };

  return (
    <section className="works-gallery">
      <h2 className="gallery-title">Мои работы</h2>
      <div className="works-container">
        {works.map((work, index) => (
          <div key={index} className="work-block">
            <div className="photo-carousel">
              <img
                src={work.photos[currentPhotos[index]]}
                alt={work.title}
                className="work-photo"
              />
              <div className="carousel-controls">
                <button
                  onClick={() => prevPhoto(index)}
                  className="control-btn"
                >
                  &lt;
                </button>
                <span className="photo-counter">
                  {currentPhotos[index] + 1}/{work.photos.length}
                </span>
                <button
                  onClick={() => nextPhoto(index)}
                  className="control-btn"
                >
                  &gt;
                </button>
              </div>
            </div>
            <div className="work-info">
              <h3>{work.title}</h3>
              <p>{work.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorksGallery;
