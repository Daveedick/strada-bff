import models from "../../models.js";
import connectDB from "../db.js";
import config from "../config.js";
import handleHTTPPostRequests from "./post.js";
import handleHTTPPutRequests from "./put.js";
import handleHTTPDeleteRequests from "./delete.js";

// Основная функция настройки конечных точек API
const handleEndpoints = app => {
	// Подключаемся к БД при инициализации приложения
	connectDB();

	// Временная заглушка
	app.get("/", (_, res) => {
		res.send("Got a GET request!");
	});

	// Настраиваем обработку POST запросов для всех маршрутов
	handleHTTPPostRequests(app, config, models);

	// Настраиваем обработку PUT запросов для всех маршрутов
	handleHTTPPutRequests(app, config, models);

	// Настраиваем обработку DELETE запросов для всех маршрутов
	handleHTTPDeleteRequests(app, config, models);
};

export default handleEndpoints;
