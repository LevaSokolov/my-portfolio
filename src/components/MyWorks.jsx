"use client";
import React, { useState } from "react";
import "../styles/MyWorks.css";

const WorksGallery = () => {
  // Массив работ с фотографиями и описаниями
  const works = [
    {
      title: "Исследование трафика",
      description: "Исследование трафика",
      photos: [
        "/images/trafic1.jpg",
        "/images/trafic2.jpg",
        "/images/trafic3.jpg",
        "/images/trafic4.jpg",
        "/images/trafic5.jpg",
      ],
    },
    {
      title: "Фотосессия на природе",
      description: "Пейзажная фотография в горах Кавказа",
      photos: [
        "/images/nature1.jpg",
        "/images/nature2.jpg",
        "/images/nature3.jpg",
      ],
    },
    {
      title: "Ивент-съёмка",
      description: "Охват музыкального фестиваля с разных ракурсов",
      photos: [
        "/images/event1.jpg",
        "/images/event2.jpg",
        "/images/event3.jpg",
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
