const main = (input) => {
  const args  = input.split(" ");
  const N = parseInt(args, 10);
  let ans;

  for (let k = 0; ; k++) {
    if(2 ** k <= N) ans = k;
    else break;
  }
  console.log(ans);
};

main(require('fs').readFileSync('/dev/stdin', 'utf8'));