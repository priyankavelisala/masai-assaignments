//Problem 2: Print Prime Numbers from 1 to given limit?

for(let i=1; i<=20; i++){
let factor=0;

  for(let j=1; j<=i; j++){
    if(i%j==0){
      factor++;
    }
  }
if(factor==2){
  console.log(i,"is  a prime number")
}
 console.log(i,"is not a prime number")
}