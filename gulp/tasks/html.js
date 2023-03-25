import fileInclude from "gulp-file-include";
import webpHtmlNosvg from "gulp-webp-html-nosvg";
import versionNumber from "gulp-version-number";

export const html = () => {
	return (
		app.gulp
			.src(app.path.src.html)
			.pipe(
				app.plugins.plumber(
					app.plugins.notify.onError({
						title: "HTML Error",
						message: "Error: <%= error.message %>. File: <%= file.relative %>!",
					})
				)
			)
			.pipe(fileInclude())
			.pipe(webpHtmlNosvg())
			.pipe(app.plugins.replace(/(['"])(\.\.\/)+(img|images|ico|icons|svgicons|fonts|css|scss|js)([^'"]*)\1/gi, "$1$3$4$1"))
			.pipe(app.plugins.replace(/(['"])(\.(\.)?\/)*(vendor\/)?(css|js|fonts|images|files|audio|video)([^'"]*)\1/gi, "$1$5$6$1"))
			.pipe(
				app.plugins.if(
					app.isBuild,
					versionNumber({
						value: "%DT%",
						append: {
							key: "_v",
							cover: 0,
							to: ["css", "js"],
						},
						output: {
							file: "gulp/version.json",
						},
					})
				)
			)
			.pipe(
				app.plugins.if(
					app.isBuild,
					app.plugins.typograf({
						locale: ["ru", "en-US"],
						htmlEntity: {type: "digit"},
						safeTags: [
							["<\\?php", "\\?>"],
							["<no-typography>", "</no-typography>"],
						],
					})
				)
			)
			.pipe(app.gulp.dest(app.path.build.html))
			.pipe(app.plugins.browsersync.stream())
	);
};
