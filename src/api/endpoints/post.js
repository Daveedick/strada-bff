import { createEntity, handleRequest } from "../../utils.js";

// Основная функция для настройки POST эндпоинтов
const handleHTTPPostRequests = (app, config, models) => {
	// Проходим по всем маршрутам из конфигурации
	config.routes.forEach(route => {
		// Создаем POST обработчик для каждого маршрута
		app.post(`/${route}`, async (req, res) => {
			// Оборачиваем логику в обработчик ошибок
			handleRequest(res, async () => {
				// Специальная обработка для комментариев к фильмам
				if (route.includes("comments")) {
					await createEntity(models.comments, {
						content: req.body.content,
						movieId: req.params.movieId,
					});

					res
						.status(201)
						.send(`New comment for id ${req.params.movieId} is created`);
				} else {
					// Для остальных сущностей (фильмы, категории)
					await createEntity(models[route], req.body);
					res.status(201).send(`${route} item created`);
				}
			});
		});
	});
};

export default handleHTTPPostRequests;
