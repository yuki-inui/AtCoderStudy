const main = (input) => {
  const args = input.split(" ");
  const N = parseInt(args, 10);

  if(N >= 1 && N < 126){
    console.log("4");
  }else if (N >= 126 && N < 212){
    console.log("6");
  }else if (N >= 212 && N < 215){
    console.log("8");
  }

};

main(require('fs').readFileSync('/dev/stdin', 'utf8'));