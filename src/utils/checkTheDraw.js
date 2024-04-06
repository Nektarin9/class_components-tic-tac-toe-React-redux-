export function checkTheDraw(field) {
	let count = 0;
	for (let i = 0; i < field.length; i++) {
		if (field[i]) {
			count = count + 1;
		}
	}
	if (count === field.length) {
		return true;
	} else {
		return false;
	}
}
