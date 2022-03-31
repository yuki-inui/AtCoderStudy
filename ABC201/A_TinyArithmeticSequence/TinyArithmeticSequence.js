function main(input) {
  const a = input.trim().split(" ").map(Number);
  a.sort((x,y) => x-y);
  console.log(a[1]-a[0]==a[2]-a[1] ? "Yes" : "No");
}

main(require("fs").readFileSync("/dev/stdin","utf8")); 

