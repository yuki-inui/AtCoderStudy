const main = (input) => {
  const args = input.split(" ");
  const N = parseInt(args, 10);
  const A = Math.floor(N * 1.08);

  if(A < 206) {
    console.log("Yay!");
  }else if(A == 206){
    console.log("so-so");
  }else {
    console.log(":(");
  }

};

main(require('fs').readFileSync('/dev/stdin', 'utf8'));
