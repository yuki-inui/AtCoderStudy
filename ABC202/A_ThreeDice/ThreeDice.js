const main = (input) => {
	const args = input.split(" ");
	const N1 = parseInt(args, 10);
	const N2 = parseInt(args[1], 10);
	const N3 = parseInt(args[2], 10);

	console.log(
	Math.abs(N1 - 7) + Math.abs(N2 -7) + Math.abs(N3 -7));  //Math.absで絶対値をとる
	
	};
main(require('fs').readFileSync('/dev/stdin', 'utf8'));

