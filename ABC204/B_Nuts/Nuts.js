const main = (input) => {
	const args = input.split("\n");
	const N = parseInt(args, 10);
	const A = args[1].split(" ").map((n) => parseInt(n, 10));
	
	let result = 0;
	for(const n of A) {
		if(n > 10) {
			result += n -10;
		}
	}
	console.log(result);
};
main(require('fs').readFileSync('/dev/stdin', 'utf8'));

