import cors from "cors";

// Массив разрешенных источников запросов (origins)
const allowedOrigins = [""];

// Функция для настройки CORS в приложении
const handleCors = app => {
	app.use(
		cors({
			origin: allowedOrigins,
		}),
	);
};

export default handleCors;
