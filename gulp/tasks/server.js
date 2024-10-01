export const server = (done) => {
	myApp.plugins.browserSync.init({
		server: {
			baseDir: `${myApp.path.build.html}`
		},
		notify: false,
		port: 3000,
	})
}
