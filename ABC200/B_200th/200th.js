const main = (input) => {
	const args = input.split(" ");
	const N = parseInt(args, 10);
	const K = parseInt(args[1], 10);
	
	const WantNumber = () => {
	let DecNum = 0;
	if( N % 200 == 0){
		DecNum = N / 200;
	} else {
		DecNum = N + `200`;
	}
	console.log(DecNum);
	};

	while(i <= K) {
		let FinalNum = WantNumber(i);
	
	console.log(FinalNumber);
	}
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));  


