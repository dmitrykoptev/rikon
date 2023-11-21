// Подключение библиотеки mongoose
import mongoose from "mongoose";

// Определение схемы для модели Note
const noteSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  date: { type: String, required: true },
});

// Создание модели Note на основе схемы
const Note = mongoose.model("Note", noteSchema);

export default Note; // Экспорт модели Note
