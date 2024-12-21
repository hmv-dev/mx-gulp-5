import browserSync from 'browser-sync'; // Локальный сервер
import gulpIf from 'gulp-if';
import newer from 'gulp-newer';
import notify from 'gulp-notify';
import plumber from 'gulp-plumber';
import imageminWebp from 'imagemin-webp';

export const plugins = {
	browserSync: browserSync,
	plumber: plumber,
	notify: notify,
	gulpIf: gulpIf,
	newer: newer,
  imageminWebp: imageminWebp,
}
