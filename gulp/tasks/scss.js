import autoPrefixer from 'gulp-autoprefixer';
import cleanCss from 'gulp-clean-css';
import rename from 'gulp-rename';
import gulpSass from 'gulp-sass';
import dartSass from 'sass';


const sass = gulpSass(dartSass);


export const scss = () => {
	return myApp.gulp.src(myApp.path.src.scss)
		.pipe(myApp.plugins.plumber(
			myApp.plugins.notify.onError({
				title: 'SCSS',
				message: 'Error: <%= error.message %>',
			})
		))
		.pipe(sass({
      outputStyle: 'compressed',
      silenceDeprecations: ['legacy-js-api'] // TODO этот параметр отключает предупреждение sass, но это временно
    }))
    // .pipe(myApp.plugins.gulpIf(
    // 	myApp.isBuild,
    // 	cleanCss()
    // ))
    .pipe(rename({
      extname: '.css',
    }))
    .pipe(autoPrefixer({
      grid: true,
      cascade: true,
      overrideBrowserslist: ["last 4 versions"],
    }))
  .pipe(myApp.gulp.dest(myApp.path.build.css))
  .pipe(myApp.plugins.browserSync.stream())
}
