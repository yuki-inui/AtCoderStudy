const main = (input) => {
    const args = input.split(" ");
    const N = parseInt(args, 10);

    let sum = 0;
    for(let i = 1; i <= N; i++) {
      sum += i;
      if(sum >= N){
        console.log(i);
        break
      }
    }
};
main(require('fs').readFileSync('/dev/stdin', 'utf8'));
