import * as readline from 'readline/promises'
import { stdin as input, stdout as output } from 'process';

class CLI {
	constructor() {

	}

	start() {
		const rl = readline.createInterface({ input, output });
		rl.on('line', (input) => {
			console.log(`enter: ${input}`)
		})
	}
}

export {CLI};