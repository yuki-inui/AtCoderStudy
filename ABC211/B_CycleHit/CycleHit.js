const main = (input) => {
  const args = input.trim().split("\n");
  if(args.include("H") &&
     args.include("2B") &&
     args.include("3B") &&
     args.include("HR"))
     {
       console.log("YES");
     }else{
       console.log("NO");
     }
};

main(require('fs').readFileSync('/dev/stdin', 'utf8'));