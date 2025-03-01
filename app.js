import express from "express";
import handleReqs from "./src/api.js";

// Создаем экземпляр приложения и настраиваем порт
const app = express();
const port = process.env.PORT || 3000;

// Подключаем middleware для парсинга JSON
app.use(express.json());

// Обработка запросов
handleReqs(app);

// Запускаем сервер
app.listen(port, () => {
	console.log(`Сервер запущен на порту ${port}`);
});
