import { deleteAsync } from 'del';
export const reset = () => {
	return deleteAsync(myApp.path.build.html);
}
