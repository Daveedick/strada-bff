import { updateEntity, handleRequest } from "../../utils.js";

const handleHTTPPutRequests = (app, config, models) => {
	// Проходим по всем маршрутам из конфигурации
	config.routes.forEach(route => {
		app.put(`/${route}`, async (req, res) => {
			handleRequest(res, async () => {
				await updateEntity(models[route], req.body.id, req.body);
				res.status(201).send(`${route} item updated`);
			});
		});
	});
};

export default handleHTTPPutRequests;
