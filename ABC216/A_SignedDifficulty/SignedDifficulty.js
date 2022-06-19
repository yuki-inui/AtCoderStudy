const main = (input) => {
  const args = input.split(".");
  const X = parseInt(args, 10);
  const Y = parseInt(args[1], 10);

  if(Y >= 0 && Y <= 2){
    console.log(X + "-");
  }else if(Y >= 3 && Y <= 6){
    console.log(X);
  }else if(Y >= 7 && Y <= 9){
    console.log(X + "+");
  }
  };

  main(require('fs').readFileSync('/dev/stdin', 'utf8'));

