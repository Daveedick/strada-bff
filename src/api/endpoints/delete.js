import { deleteEntity, handleRequest } from "../../utils.js";

const handleHTTPDeleteRequests = (app, config, models) => {
	// Проходим по всем маршрутам из конфигурации
	config.routes.forEach(route => {
		app.delete(`/${route}`, async (req, res) => {
			handleRequest(res, async () => {
				await deleteEntity(models[route], req.body.id);
				res.status(201).send(`${route} item deleted`);
			});
		});
	});
};

export default handleHTTPDeleteRequests;
