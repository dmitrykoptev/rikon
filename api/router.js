// Подключение библиотеки express
import Router from "express";
import noteController from "./NoteController.js"; // Подключение контроллера из файла NoteController.js

const router = new Router(); // Создание экземпляра маршрутизатора express

// Определение маршрутов для CRUD-операций
router.get("/posts", noteController.getAll);
router.post("/posts", noteController.create);
router.delete("/posts/:id", noteController.remove);

export default router; // Экспорт маршрутов
