import imagemin from 'gulp-imagemin';
import imageminWebp from 'imagemin-webp';
import webp from 'gulp-webp';

export const images = async () => {
	return myApp.gulp
    .src(myApp.path.src.images, {encoding: false}) // берём файлы из scr
		.pipe(myApp.plugins.plumber( // проверка на ошибки
			myApp.plugins.notify.onError({
				title: 'IMAGES',
				message: 'Error: <%= error.message %>',
			})
		))
    .pipe(myApp.plugins.newer(myApp.path.build.images)) // проверяем на новизну и если новые то кладём в ...build.images
		.pipe(imagemin({ // оптимизируем файлы
      progressive: true,
      svgoPlugins: [{ removeViewBox: false }],
      interlaced: true,
      optimizationLevel: 3 // 0 to 7
    }))
    .pipe(myApp.plugins.browserSync.stream())
    .pipe( webp() ) // переводим в webp
    .pipe(myApp.gulp.dest(myApp.path.build.images)) // сохраняем webp в build
		.pipe(myApp.gulp.src(myApp.path.src.svg)) // берём svg в src
		.pipe(myApp.gulp.dest(myApp.path.build.images))
   // кладём в build
		.pipe(myApp.plugins.browserSync.stream()); // обновляем браузер
  }








// Обработка всех картинок
// const processImages = () => {
//   return myApp.gulp.src(myApp.path.src.images, {encoding: false})
//     .pipe(myApp.plugins.plumber( // проверка на ошибки
// 			myApp.plugins.notify.onError({
// 				title: 'IMAGES',
// 				message: 'Error: <%= error.message %>',
// 			})
// 		))
//     .pipe(myApp.plugins.newer(myApp.path.build.images)) // проверяем на новизну и если новые то кладём в ...build.images
// 		.pipe(imagemin({ // оптимизируем файлы
//       progressive: true,
//       svgoPlugins: [{ removeViewBox: false }],
//       interlaced: true,
//       optimizationLevel: 3 // 0 to 7
//     }))
//     .pipe( webp() ) // переводим в webp
//     .pipe(myApp.gulp.dest(myApp.path.build.images))
//     .pipe(myApp.plugins.browserSync.stream()); // сохраняем webp в build
// }

// // Обработка SVG
// const processSVG = () => {
//   return myApp.gulp.src(myApp.path.src.svg)
//     .pipe(myApp.gulp.dest(myApp.path.build.images))
//     .pipe(myApp.plugins.browserSync.stream());
// }

// export const images = myApp.gulp.parallel(processImages, processSVG);
