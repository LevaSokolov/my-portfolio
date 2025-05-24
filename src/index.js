import React from "react";
import ReactDOM from "react-dom/client"; // Импорт ReactDOM
import "./styles/App.css"; // Подключаем глобальные стили (если нужно)
import App from "./App"; // Главный компонент

// Создаём корневой элемент для рендеринга
const root = ReactDOM.createRoot(document.getElementById("root"));

// Рендерим приложение
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
