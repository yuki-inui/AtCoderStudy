const main = (input) => {
	const args = input.split(" ");
	const A = input.split(" ").map((n) => parseInt(n, 10));

	A.sort((n, m) => n > m ? -1 : 1);
	if(A[2] - A[1] == A[1] - A[0]) {
		console.log("YES");
	}else{
		console.log("NO");
	}
	};
main(require('fs').readFileSync('/dev/stdin', 'utf8'));  

