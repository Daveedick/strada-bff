import express from "express";
import handleEndpoints from "./api/endpoints.js";
import handleCors from "./api/cors.js";

// Создаем экземпляр приложения и настраиваем порт
const app = express();
const port = process.env.PORT || 3000;

// Подключаем middleware для парсинга JSON
app.use(express.json());
handleCors(app);

// Обработка запросов
handleEndpoints(app);

// Запускаем сервер
app.listen(port, () => {
	console.log(`Сервер запущен на порту ${port}`);
});
