import mongoose from "mongoose";

// Схема для фильмов - определяет структуру документа фильма в базе данных
const MovieSchema = new mongoose.Schema({
	title: String, // название фильма
	category: String, // категория/жанр фильма
	year: Number, // год выпуска
	duration: Number, // продолжительность в минутах
	director: String, // режиссер
	rating: Number, // рейтинг фильма
	category: {
		type: "ObjectId",
		ref: "Category",
	},
});

// Схема для категорий - определяет структуру документа категории
const CategorySchema = new mongoose.Schema({
	title: String, // название категории
});

// Создаем модели на основе схем
const movies = mongoose.model("Movie", MovieSchema);
const categories = mongoose.model("Category", CategorySchema);

// Экспортируем объект с моделями для использования в других модулях
export default {
	movies,
	categories,
};
