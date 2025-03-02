// Импортируем библиотеку mongoose для работы с MongoDB
import mongoose from "mongoose";

// Схема для фильмов - определяет структуру документа фильма в базе данных
const MovieSchema = new mongoose.Schema({
	title: String, // название фильма
	category: String, // категория/жанр фильма (устаревшее поле)
	year: Number, // год выпуска фильма
	duration: Number, // продолжительность фильма в минутах
	director: String, // режиссер фильма
	rating: Number, // рейтинг фильма (от 0 до 10)
	category: {
		type: "ObjectId", // ID категории как внешний ключ
		ref: "Category", // Ссылка на модель Category для связи между коллекциями
	},
});

// Схема для категорий фильмов - определяет структуру документа категории
const CategorySchema = new mongoose.Schema({
	title: String, // название категории/жанра фильма
});

// Схема для комментариев к фильмам
const CommentSchema = new mongoose.Schema({
	content: String, // текст комментария
	movieId: String, // ID фильма, к которому относится комментарий
});

// Создаем модели Mongoose на основе определенных схем
const movies = mongoose.model("Movie", MovieSchema); // Модель для работы с коллекцией фильмов
const categories = mongoose.model("Category", CategorySchema); // Модель для работы с коллекцией категорий
const comments = mongoose.model("Comment", CommentSchema); // Модель для работы с коллекцией комментариев

// Экспортируем объект со всеми моделями для использования в других модулях приложения
export default {
	movies,
	categories,
	comments,
};
