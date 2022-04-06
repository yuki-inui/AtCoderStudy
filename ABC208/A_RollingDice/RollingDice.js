const main = (input) => {
  const args = input.split(" ");
  const A = parseInt(args, 10);
  const B = parseInt(args[1], 10);

  if (A <= B && B <= 6 * A) {
  console.log("Yes");
  } else {
  console.log("No");
}
};
main(require('fs').readFileSync('/dev/stdin', 'utf8'));  

