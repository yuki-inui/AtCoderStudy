const main = (input) => {
	const args = input.split(" ");
	const a = parseInt(args, 10);
	const b = parseInt(args[1], 10);
	const c = parseInt(args[2], 10);

	if(a === b) {
		console.log(c);
	} else if(b === c) {
		console.log(a);
	} else if(c === a) {
		console.log(b);
	} else{
		console.log(0);
	}

};

main(require('fs').readFileSync('/dev/stdin', 'utf8'));
