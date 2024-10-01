import webpack from 'webpack-stream';

export const js = () => {
	return myApp.gulp.src(myApp.path.src.js)
		.pipe(myApp.plugins.plumber(
			myApp.plugins.notify.onError({
				title: 'JS',
				message: 'Error: <%= error.message %>'
			})
		))
		.pipe(webpack({
			mode: myApp.isBuild ? 'production' : 'development',
			output: {
				filename: 'app.min.js'
			}
		}))
		.pipe(myApp.gulp.dest(myApp.path.build.js))
		.pipe(myApp.plugins.browserSync.stream())
}
