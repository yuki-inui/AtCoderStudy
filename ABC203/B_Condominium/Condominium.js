const main = (input) => {
	const args = input.split(" ");
	const N = parseInt(args, 10);
	const K = parseInt(args[1], 10);
	let result = 0;

	for( let i = 1; i <= N; i++) {
		for(let j = 1; j <= K; j++) {
			result += 100*i + j;
		}
	}
	console.log(result);
};

main(require('fs').readFileSync('/dev/stdin', 'utf8'));

