const main = (input) => {
	const args = input.split(" ");
	const N = parseInt(args, 10);
	const K = parseInt(args[1], 10);
	
	let  WantNumber = () => {
	let DecNum;
	if( N % 200 === 0){
		DecNum = N / 200;
	} else {
		DecNum = N + `200`;
	}
	console.log(DecNum);
	};

	let FinalNum (n) => {
		for(n <= K) {
		let FNum = WantNumber(i);
	}
	console.log(FNum);
	};
};
main(require('fs').readFileSync('/dev/stdin', 'utf8'));  


