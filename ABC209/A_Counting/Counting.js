const main = (input) => {
  const args = input.split(" ");
  const A = parseInt(args, 10);
  const B = parseInt(args[1], 10);
  
  if(B > A){
    let result = (B - A) + 1;
    console.log(result);
  }else {
    console.log(0);
  }
  
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
