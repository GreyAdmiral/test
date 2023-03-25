import replace from "gulp-replace"; //Поиск и замена
import plumber from "gulp-plumber"; //Обработка ошибок
import notify from "gulp-notify"; //Вывод ошибок
import browsersync from "browser-sync"; //Локальный сервер
import sourcemaps from "gulp-sourcemaps"; //Карта кода
import newer from "gulp-newer"; // Проверка обновления
import ifPlugin from "gulp-if"; // Условное ветвление
import typograf from "gulp-typograf"; // Типограф

export const plugins = {
	replace: replace,
	plumber: plumber,
	notify: notify,
	browsersync: browsersync,
	newer: newer,
	if: ifPlugin,
	sourcemaps: sourcemaps,
	typograf: typograf
};