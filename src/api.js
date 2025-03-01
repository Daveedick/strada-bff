import mongoose from "mongoose";
import models from "./models.js";

// Константы вынесены в отдельный объект для удобства конфигурации
const config = {
	mongoUrl: "mongodb://localhost:27017/main",
	routes: ["movies", "categories"],
};

// Подключение к БД вынесено в отдельную асинхронную функцию
const connectDB = async () => {
	try {
		await mongoose.connect(config.mongoUrl);
		console.log("MongoDB подключена успешно");
	} catch (err) {
		console.error("Ошибка подключения к MongoDB:", err);
		process.exit(1);
	}
};

// Обработчик ошибок вынесен в отдельную функцию
const errorHandler = (error, res) => {
	console.error("Ошибка:", error.httpStatus || error);
	res.status(500).send("Internal Server Error");
};

const handleReqs = app => {
	// Подключаемся к БД при инициализации
	connectDB();

	// GET
	app.get("/", (_, res) => {
		res.send("Got a GET request!");
	});

	// POST - упрощенная обработка маршрутов
	config.routes.forEach(route => {
		app.post(`/${route}`, async (req, res) => {
			try {
				await models[route].create(req.body);
				res.status(201).send(`${route} item created`);
			} catch (error) {
				errorHandler(error, res);
			}
		});
	});

	// PUT
	app.put("/", (_, res) => {
		res.send("Got a PUT request!");
	});

	// DELETE
	app.delete("/", (_, res) => {
		res.send("Got a DELETE request");
	});
};

export default handleReqs;
