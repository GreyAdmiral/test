import webpack from "webpack-stream";

export const js = () => {
	return app.gulp
		.src(app.path.src.js)
		.pipe(
			app.plugins.plumber(
				app.plugins.notify.onError({
					title: "JS Error",
					message: "Error: <%= error.message %>. File: <%= file.relative %>!",
				})
			)
		)
		.pipe(
			webpack({
				mode: app.isBuild ? "production" : "development",
				output: {
					filename: "script.min.js",
				},
				module: {
					rules: app.isBuild
						? [
								{
									test: /\.(js)$/,
									exclude: /(node_modules | bower_components)/,
									loader: "babel-loader",
									options: {
										presets: ["@babel/preset-env"],
									},
								},
						  ]
						: [],
				},
			})
		)
		.pipe(app.plugins.replace(/(['"`])(\.\.\/)+(img|images|ico|icons|svgicons|fonts|css|scss|js)([^'"`]*)\1/gi, "$1$3$4$1"))
		.pipe(app.plugins.replace(/(['"`])(\.\.\/)+(vendor\/)?(css|js|fonts|images|files|audio|video)([^'"`]*)\1/gi, "$1$4$5$1"))
		.pipe(app.plugins.if(app.isDev, app.plugins.sourcemaps.init()))
		.pipe(app.plugins.if(app.isDev, app.plugins.sourcemaps.write(".")))
		.pipe(app.gulp.dest(app.path.build.js))
		.pipe(app.plugins.browsersync.stream());
};
