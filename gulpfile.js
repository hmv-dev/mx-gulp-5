import gulp from 'gulp';
import { path } from './gulp/config/path.js';
import { plugins } from './gulp/config/plugins.js';

// Передаём значения в глобальную переменную
global.myApp = {
	isBuild: process.argv.includes('--build'),
	isDev: !process.argv.includes('--build'),
	gulp: gulp,
	path: path,
	plugins: plugins,
}

// Импорт задач
import { html } from './gulp/tasks/html.js';
import { images } from './gulp/tasks/images.js';
import { js } from './gulp/tasks/js.js';
import { reset } from './gulp/tasks/reset.js';
import { scss } from './gulp/tasks/scss.js';
import { server } from './gulp/tasks/server.js';

// Наблюдатель за изменениями в файлах
function watcher() {
	gulp.watch(path.watch.html, html);
	gulp.watch(path.watch.scss, scss);
	gulp.watch(path.watch.js, js);
	gulp.watch(path.watch.images, images);
}

// Основные задачи
const mainTask = gulp.series(gulp.parallel(html, scss, js, images));

// Построение сценариев выполнения задач
const dev = gulp.series(reset, mainTask, gulp.parallel(watcher, server));

gulp.task('default', dev);
