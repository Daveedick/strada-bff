import cors from "cors";

const allowedOrigins = [""];

const handleCors = app => {
	app.use(
		cors({
			origin: allowedOrigins,
		}),
	);
};

export default handleCors;
