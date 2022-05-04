const main = (input) => {
  const args = input.split(" ");
  const A = parseInt(args, 10);
  const B = parseInt(args[1], 10);  

  if(A > 0 && B === 0){
    console.log("Gold");
  } else if(A === 0 && B > 0){
    console.log("Silver");
  } else if(A > 0 && B > 0){
    console.log("Alloy");
  }
};

main(require('fs').readFileSync('/dev/stdin', 'utf8'));

