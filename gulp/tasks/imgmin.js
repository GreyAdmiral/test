import imagemin from "gulp-imagemin";

export const imgmin = () => {
	return app.gulp
		.src(app.path.src.images)
		.pipe(
			app.plugins.plumber(
				app.plugins.notify.onError({
					title: "IMGMIN",
					message: "Error: <%= error.message %>. File: <%= file.relative %>!",
				})
			)
		)
		.pipe(app.plugins.newer(app.path.build.images))
		.pipe(
			app.plugins.if(
				app.isBuild,
				imagemin({
					progressive: true,
					svgoPlugins: [{removeViewBox: false}],
					interlaced: true,
					optimizationLevel: 3, // 0 to 7
				})
			)
		)
		.pipe(app.gulp.dest(app.path.build.images));
};
