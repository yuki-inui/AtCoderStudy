function main(input){
  const data = input.replace(/\r/g,"").split("\n")
  const data1 = data[0].split(" ")
  const N = data1[0]
  const X = data1[1]
  const price = data[1].split(" ")

  var calc = 0
  var flag = 0;
  for(let i = 0; i < N ; i++){
      calc = calc + parseInt(price[i])
      if( i % 2 == 1){
          calc = calc - 1
      }
      if(calc > X){
          flag = 1
          break
      }
  }

  if(flag == 0){
      console.log("Yes")
  }else{
      console.log("No")
  }

  //console.log(N,X,price)////
}
main(require("fs").readFileSync("/dev/stdin","utf8"))