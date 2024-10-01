import imagemin from 'gulp-imagemin';
import webp from 'gulp-webp';

export const images = () => {
	return myApp.gulp.src(myApp.path.src.images)
		.pipe(myApp.plugins.plumber(
			myApp.plugins.notify.onError({
				title: 'IMAGES',
				message: 'Error: <%= error.message %>',
			})
		))
		.pipe(myApp.plugins.newer(myApp.path.build.images))
		.pipe(myApp.plugins.gulpIf(
			myApp.isBuild,
			webp()
		))
		.pipe(myApp.plugins.gulpIf(
			myApp.isBuild,
			myApp.gulp.dest(myApp.path.build.images)
		))
		.pipe(myApp.plugins.gulpIf(
			myApp.isBuild,
			myApp.gulp.src(myApp.path.src.images)
		))
		.pipe(myApp.plugins.gulpIf(
			myApp.isBuild,
			myApp.plugins.newer(myApp.path.build.images)
		))
		.pipe(myApp.plugins.gulpIf(
			myApp.isBuild,
			imagemin({
				progressive: true,
				svgoPlugins: [{ removeVieBox: false }],
				interlaced: true,
				optimizationLevel: 3 // 0 to 7
			})
		))
		.pipe(myApp.gulp.dest(myApp.path.build.images))
		.pipe(myApp.gulp.src(myApp.path.src.svg))
		.pipe(myApp.gulp.dest(myApp.path.build.images))
		.pipe(myApp.plugins.browserSync.stream());
}
