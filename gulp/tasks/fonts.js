export const fonts = () => {
  return myApp.gulp.src(myApp.path.src.fonts)
    .pipe(myApp.gulp.dest(myApp.path.build.fonts))
    .pip(myApp.plugins.browserSync.stream());
}
