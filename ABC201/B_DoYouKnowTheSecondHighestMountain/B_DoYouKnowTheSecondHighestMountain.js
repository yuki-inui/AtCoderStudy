const main = (input) => {
	const args = input.split("\n");
	const N = parseInt(args, 10);
	const num = args.slice(1, N + 1).map((n) => parseInt(" "));
	const x = num.map((n) => parseInt(n[0], 10));
	const y = num.map((n) => parseInt(n[1], 10));
	const z = num.map((n) => parseInt(n[2], 10));

