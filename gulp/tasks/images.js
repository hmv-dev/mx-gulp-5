import imagemin from 'gulp-imagemin';
import webp from 'gulp-webp';

export const images = () => {
	return myApp.gulp.src(myApp.path.src.images) // берём файлы из scr
		.pipe(myApp.plugins.plumber( // проверка на ошибки
			myApp.plugins.notify.onError({
				title: 'IMAGES',
				message: 'Error: <%= error.message %>',
			})
		))
    .pipe(myApp.plugins.newer(myApp.path.build.images)) // проверяем на новизну и если новые то кладём в ...build.images
		.pipe(imagemin({ // оптимизируем файлы
      progressive: true,
      svgoPlugins: [{ removeVieBox: false }],
      interlaced: true,
      optimizationLevel: 3 // 0 to 7
    }))
    .pipe( webp() ) // переводим в webp
    .pipe(myApp.gulp.dest(myApp.path.build.images)) // сохраняем webp в build
		.pipe(myApp.gulp.src(myApp.path.src.svg)) // берём svg в src
		.pipe(myApp.gulp.dest(myApp.path.build.images)) // кладём в build
		.pipe(myApp.plugins.browserSync.stream()); // обновляем браузер
  }
