const main = (input) => {
    const args = input.split(" ");
    const A = parseInt(args, 10);
    const B = parseInt(args[1], 10);
    const C = parseInt(args[2], 10);

    const D = new Array(A, B, C);
    D.sort((a, b) => a > b ? -1 : 1);

    console.log(D[0] + D[1]);
    
  };
main(require('fs').readFileSync('/dev/stdin', 'utf8'));
