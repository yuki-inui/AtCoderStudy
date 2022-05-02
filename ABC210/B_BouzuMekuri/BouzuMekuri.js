const main = (input) => {
  const args = input.split("\n");
  const N = parseInt(args, 10);  //カード枚数"N"
  const S = args[1];  //文字列S(0or1でなるもの)

  //高橋が偶数番目にとる青木が奇数版
  for(let i = 0; i < N; i++){
    if(S[i] === 1){
      if(i % 2 === 0){
        console.log("Takahashi");
        break;
      }else{
        console.log("Aoki");
        break;
      }
    }
  }
};

main(require("fs").readFileSync("/dev/stdin","utf8"));