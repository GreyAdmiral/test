import webp from "gulp-webp";

export const imgwebp = () => {
	return app.gulp
		.src(app.path.src.images)
		.pipe(
			app.plugins.plumber(
				app.plugins.notify.onError({
					title: "IMGWEBP",
					message: "Error: <%= error.message %>. File: <%= file.relative %>!",
				})
			)
		)
		.pipe(webp())
		.pipe(app.gulp.dest(app.path.build.images));
};
