const main = (input) => {
  const args = input.split(" ");
  const N = parseInt(args, 10);
  const A = parseInt(args[1], 10);
  const X = parseInt(args[2], 10);
  const Y = parseInt(args[3], 10);

  if(A < N){
    const calca = (A * X) + (N - A) * Y;
    console.log(calca);
  } else {
    console.log(N * X);
  }
};

main(require('fs').readFileSync('/dev/stdin', 'utf8'));
