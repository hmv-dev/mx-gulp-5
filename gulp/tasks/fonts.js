import ttf2woff2 from 'gulp-ttf2woff2';
import ttf2woff from 'gulp-ttf2woff';

export const fonts = () => {
  // берём файлы .ttf
  return myApp.gulp.src(myApp.path.src.fonts, {
    encoding: false, // Important!
    removeBOM: false,
  })
  // обработка ошибок
  .pipe(myApp.plugins.plumber(
    myApp.plugins.notify.onError({
      title: 'FONTS',
      message: 'Error: <%= error.message %>',
    })
  ))
  // преобразуем в woff
  .pipe(ttf2woff())
  // кладём в dist/fonts/
  .pipe(myApp.gulp.dest(myApp.path.build.fonts))
  // снова берём .ttf
  .pipe(myApp.gulp.src(myApp.path.src.fonts, {
    encoding: false, // Important!
    removeBOM: false,
  }))
  // преобразуем в woff2
  .pipe(ttf2woff2())
  // кладём в dist/fonts/
  .pipe(myApp.gulp.dest(myApp.path.build.fonts))
  // снова берём .ttf
  .pipe(myApp.gulp.src(myApp.path.src.fonts, {}))
  // кладём в dist/fonts/
  .pipe(myApp.gulp.dest(myApp.path.build.fonts))
  .pipe(myApp.plugins.browserSync.stream());
}
