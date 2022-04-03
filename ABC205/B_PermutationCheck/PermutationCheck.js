const main = (input) => {
    const args = input.split("\n");
    const N = parseInt(args, 10);
    const A = args[1].split(" ").map((n) => parseInt(n, 10));
    
    A.sort((n, m) => n > m ? -1 : 1);
    for(let i = 1; i <= N; i++){
      if(A[i] - A[i - 1] === 1){
        console.log("YES");
      } else{
        console.log("NO");
      }
    }
};
main(require('fs').readFileSync('/dev/stdin', 'utf8'));
