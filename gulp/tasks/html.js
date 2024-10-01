
export const html = () => {
	return myApp.gulp.src(myApp.path.src.html)
		.pipe(myApp.plugins.plumber(
			myApp.plugins.notify.onError({
				title: 'HTML',
				message: 'Error: <%= error.message %>'
			})
		))
		.pipe(myApp.gulp.dest(myApp.path.build.html))
		.pipe(myApp.plugins.browserSync.stream());
}
