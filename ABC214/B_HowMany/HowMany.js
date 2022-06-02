function main(input) {
  const args = input.split(" ");
  const S = parseInt(args[0])
  const T = parseInt(args[1])
  let ctn =0
  
  for (let a = 0; a <= S; a++) {
    for (let b = 0; b <= S; b++) {
      for (let c = 0; c <= S; c++) {
        if (a+b+c<=S && a*b*c<=T) {
          ctn++
        }
      }
    }
  }

  console.log(ctn);
  
  
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));