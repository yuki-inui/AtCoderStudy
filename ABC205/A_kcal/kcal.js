const main = (input) => {
  	const args = input.split(" ");
  	const A = parseInt(args, 10);
  	const B = parseInt(args[1], 10);
  	
  	console.log(
      	A * (B / 100));
};
main(require('fs').readFileSync('/dev/stdin', 'utf8'));


