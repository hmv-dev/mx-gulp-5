// Получаем имя папки проекта
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());


const buildFolder = './dist';
const srcFolder = './src';

export const path = {
	build: {
		css: `${buildFolder}/css/`,
		html: `${buildFolder}/`,
		js: `${buildFolder}/js/`,
		images: `${buildFolder}/images/`,
	},
	src: {
		scss: `${srcFolder}/scss/style.scss`,
		html: `${srcFolder}/**/*.html`,
		js: `${srcFolder}/js/app.js`,
		images: `${srcFolder}/images/**/*.{jpg,jpeg,png,gif,webp}`,
		svg: `${srcFolder}/images/**/*.svg`,
	},
	watch: {
		scss: `${srcFolder}/scss/**/*.scss`,
		html: `${srcFolder}/*.html`,
		js: `${srcFolder}/js/**/*.js`,
		images: `${srcFolder}/images/**/*.{jpg,jpeg,png,svg,gif,ico,webp}`,
	}
}