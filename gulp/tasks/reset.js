import { deleteAsync } from 'del';
export const reset = () => {
	return deleteAsync([
    myApp.path.build.html,
    myApp.path.build.css,
    myApp.path.build.js,
    myApp.path.build.images,
    myApp.path.build.fonts
  ]);
}
