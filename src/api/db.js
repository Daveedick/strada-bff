import mongoose from "mongoose";
import config from "./config.js";

const connectDB = async () => {
	try {
		// Устанавливаем соединение с MongoDB используя URL из конфигурации
		await mongoose.connect(config.mongoUrl);
		console.log("MongoDB подключена успешно");
	} catch (err) {
		console.error("Ошибка подключения к MongoDB:", err);
		process.exit(1);
	}
};

export default connectDB;
