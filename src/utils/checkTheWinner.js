import { WIN_PATTERNS } from '../constans/constans';

export function checkTheWinner(field, currentPlayer) {
	for (let i = 0; i < WIN_PATTERNS.length; i++) {
		let count = 0;
		for (let j = 0; j <= 2; j++) {
			if (field[WIN_PATTERNS[i][j]] === currentPlayer) {
				count = count + 1;
			}
		}
		if (count === 3) {
			return true;
		}
	}
}
