// Подключение необходимых библиотек
import express from "express";
import mongoose from "mongoose";
import router from "./router.js"; // Подключение маршрутов из файла router.js

// Определение порта и URL для подключения к MongoDB
const PORT = 5005;
const DB_URL = `mongodb+srv://user:user@cluster0.pz7mle8.mongodb.net/?retryWrites=true&w=majority`;

const app = express(); // Создание экземпляра express-приложения

app.use(express.json()); // Использование middleware для обработки JSON
app.use("/api", router); // Использование маршрутов из файла router.js с префиксом "/api"

// Функция запуска приложения
const startApp = async () => {
  try {
    // Подключение к MongoDB
    await mongoose.connect(DB_URL);
    // Запуск сервера на указанном порту
    app.listen(PORT, () => console.log(`Server started on port ${PORT} ...`));
  } catch (e) {
    console.log(e);
  }
};

startApp(); // Вызов функции запуска приложения
