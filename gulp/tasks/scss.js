import dartSass from "sass";
import gulpSass from "gulp-sass";
import rename from "gulp-rename";
import cleanCss from "gulp-clean-css"; //Сжатие CSS-файла
import webpcss from "gulp-webpcss"; //Вывод WEBP-изображений
import autoprefixer from "gulp-autoprefixer"; //Добавление вендорных префиксов
import groupCssMediaQueries from "gulp-group-css-media-queries"; //Группировка медиазапросов

const sass = gulpSass(dartSass);

export const scss = () => {
	return (
		app.gulp
			.src(app.path.src.scss)
			.pipe(
				app.plugins.plumber(
					app.plugins.notify.onError({
						title: "SCSS Error",
						message: "Error: <%= error.message %>. File: <%= file.relative %>!",
					})
				)
			)
			.pipe(app.plugins.if(app.isDev, app.plugins.sourcemaps.init()))
			.pipe(
				sass({
					outputStyle: "expanded",
				})
			)
			.pipe(app.plugins.replace(/(['"])(\.\.\/)+(img|images|ico|icons|svgicons|fonts|css|scss|js)([^'"]*)\1/gi, "$1$2$3$4$1"))
			.pipe(app.plugins.replace(/(['"])(\.\.\/)+(vendor\/)?(css|js|fonts|images|files|audio|video)([^'"]*)\1/gi, "$1$2$4$5$1"))
			.pipe(groupCssMediaQueries())
			.pipe(
				app.plugins.if(
					app.isBuild,
					webpcss({
						webpClass: ".webp",
						noWebpClass: ".no-webp",
					})
				)
			)
			.pipe(
				app.plugins.if(
					app.isBuild,
					autoprefixer({
						grid: true,
						overrideBrowserslist: ["last 5 versions"],
						cascade: true,
					})
				)
			)
			//Раскоментировать при необходимости
			// .pipe(app.isDev, app.gulp.dest(app.path.build.css))
			.pipe(app.plugins.if(app.isBuild, cleanCss()))
			.pipe(
				rename({
					extname: ".min.css",
				})
			)
			.pipe(app.plugins.if(app.isDev, app.plugins.sourcemaps.write(".")))
			.pipe(app.gulp.dest(app.path.build.css))
			.pipe(app.plugins.browsersync.stream())
	);
};
