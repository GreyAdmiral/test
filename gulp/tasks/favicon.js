import favicons from "gulp-favicons";
import filter from "gulp-filter";

export const favicon = () => {
	return app.gulp
		.src(app.path.src.favicon)
		.pipe(
			app.plugins.plumber(
				app.plugins.notify.onError({
					title: "FAVICON",
					message: "Error: <%= error.message %>. File: <%= file.relative %>!",
				})
			)
		)
		.pipe(app.gulp.dest(app.path.build.favicon))
		.pipe(
			favicons({
				icons: {
					favicons: true,
					appleIcon: true,
					android: true,
					windows: false,
					yandex: false,
					coast: false,
					firefox: false,
					appleStartup: false,
				},
				path: `${app.path.build.images}/favicons/`,
			})
		)
		.pipe(app.gulp.dest(app.path.build.favicon))
		.pipe(filter(["favicon.ico", "apple-touch-icon.png", "manifest.json"]))
		.pipe(app.gulp.dest(app.path.build.html));
};
