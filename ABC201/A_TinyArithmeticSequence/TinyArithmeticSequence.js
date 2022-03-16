const main = (input) => {
	const args = input.split(" ");
	const A1 = parseInt(args, 10);
	const A2 = parseInt(args[1], 10);
	const A3 = parseInt(args[2], 10);

	if(A3 - A2 == A2 - A1) {
		console.log("YES");
	}else{
		console.log("NO");
	}
	};
main(require('fs').readFileSync('/dev/stdin', 'utf8'));  

