const main = (input) => {
	const args = input.split(" ");
	const x = parseInt(args, 10);
	const y = parseInt(args[1], 10);

	if(x === y) {
        	console.log(y);
    	} else {
        	console.log(3 - (x + y));
    }
};
main(require('fs').readFileSync('/dev/stdin', 'utf8'));

