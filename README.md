# Movie Database API

Простой REST API сервер для управления базой данных фильмов, построенный на Express.js и MongoDB.

## Технологии

- Node.js
- Express.js
- MongoDB с Mongoose
- ES Modules

## Требования

- Node.js (версия 14.0 или выше)
- MongoDB (версия 4.0 или выше)
- npm или yarn

## Установка

1. Клонируйте репозиторий:

```bash
git clone <your-repo-url>
cd <project-directory>
```

2. Установите зависимости:

```bash
npm install
```

3. Убедитесь, что MongoDB запущен локально на порту 27017

4. Запустите сервер:

```bash
node app.js
```

Сервер запустится на `http://localhost:3000`

## Структура базы данных

### Коллекция Movies

```javascript
{
    title: String,      // Название фильма
    category: String,   // Категория
    year: Number,       // Год выпуска (мин. 1895)
    duration: Number,   // Продолжительность в минутах
    director: String,   // Режиссер
    rating: Number      // Рейтинг (0-10)
}
```

### Коллекция Categories

```javascript
{
	title: String; // Название категории (уникальное)
}
```

## API Endpoints

### Фильмы

- `POST /movies` - Создать новый фильм
  ```json
  {
  	"title": "Inception",
  	"category": "Sci-Fi",
  	"year": 2010,
  	"duration": 148,
  	"director": "Christopher Nolan",
  	"rating": 8.8
  }
  ```

### Категории

- `POST /categories` - Создать новую категорию
  ```json
  {
  	"title": "Sci-Fi"
  }
  ```

## Оптимизация

В проекте используются индексы MongoDB для оптимизации частых запросов:

- Составной индекс по категории и году: `{ category: 1, year: -1 }`
- Индекс по названию фильма
- Уникальный индекс по названию категории

## Разработка

Проект использует современный ES Modules синтаксис. Структура проекта:
# strada-bff
