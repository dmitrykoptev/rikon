// Подключение модели Note
import Note from "./Note.js";

// Функция создания новой заметки
const create = async (req, res) => {
  try {
    const { title, content, date } = req.body;
    // Создание новой заметки в базе данных
    const note = await Note.create({ title, content, date });
    res.json(note); // Отправка созданной заметки в качестве ответа
  } catch (e) {
    res.status(500).json(e); // Обработка ошибок и отправка статуса 500 в случае ошибки
  }
};

// Функция получения всех заметок
const getAll = async (req, res) => {
  try {
    // Получение всех заметок из базы данных
    const notes = await Note.find();
    return res.json(notes); // Отправка списка заметок в качестве ответа
  } catch (e) {
    res.status(500).json(e); // Обработка ошибок и отправка статуса 500 в случае ошибки
  }
};

// Функция удаления заметки по идентификатору
const remove = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      res.status(400).json({ message: "ID не указан" });
    }
    // Удаление заметки из базы данных по идентификатору
    const note = await Note.findByIdAndDelete(id);
    return res.json(note); // Отправка удаленной заметки в качестве ответа
  } catch (e) {
    res.status(500).json(e); // Обработка ошибок и отправка статуса 500 в случае ошибки
  }
};

export default { create, getAll, remove }; // Экспорт функций контроллера
