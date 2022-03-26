const main = (input) => {
	const args = input.split("");
	const S = args.map((n) => parseInt(n, 10));

	// 数字の反転処理からリバース
	for(let i = 0; i <= S.length; i++) {
		if(S[i] === 9) {
			S[i] = 6;
		} else if(S[i] === 6) {
			S[i] = 9;
		}
	}

	const ans = S.reverse().join("");
	console.log(ans);

};

 main(require('fs').readFileSync('/dev/stdin', 'utf8'));
					
		
