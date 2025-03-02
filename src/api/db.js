import mongoose from "mongoose";
import config from "./config.js";

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

export default connectDB;
