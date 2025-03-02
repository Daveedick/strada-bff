// Обработчик ошибок вынесен в отдельную функцию для повторного использования
// во всех эндпоинтах API
const errorHandler = (error, res) => {
	console.error("Ошибка:", error.httpStatus || error);
	res.status(500).send("Internal Server Error");
};

// MongoDB utils
const createEntity = async (model, data) => {
	await model.create(data);
};

const updateEntity = async (model, id, data) => {
	await model.findByIdAndUpdate(id, data);
};

const deleteEntity = async (model, id) => {
	await model.findByIdAndDelete(id);
};

// Обработчик HTTP запросов
const handleRequest = (res, callback) => {
	try {
		callback();
	} catch (error) {
		errorHandler(error, res);
	}
};

export {
	errorHandler,
	createEntity,
	updateEntity,
	deleteEntity,
	handleRequest,
};
