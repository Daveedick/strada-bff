import models from "../models.js";
import connectDB from "./db.js";
import config from "./config.js";

// Обработчик ошибок вынесен в отдельную функцию
const errorHandler = (error, res) => {
	console.error("Ошибка:", error.httpStatus || error);
	res.status(500).send("Internal Server Error");
};

const handleEndpoints = app => {
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
	config.routes.forEach(route => {
		app.put(`/${route}`, async (req, res) => {
			try {
				await models[route].findByIdAndUpdate(req.body.id, req.body);
				res.status(201).send(`${route} item updated`);
			} catch (error) {
				errorHandler(error, res);
			}
		});
	});

	// DELETE
	config.routes.forEach(route => {
		app.delete(`/${route}`, async (req, res) => {
			try {
				// console.log(await models[route].findById(req.body.id));
				await models[route].findByIdAndDelete(req.body.id);
				res.status(201).send(`${route} item deleted`);
			} catch (error) {
				errorHandler(error, res);
			}
		});
	});
};

export default handleEndpoints;
