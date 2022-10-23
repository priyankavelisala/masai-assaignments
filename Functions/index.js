//Problem 1: Create a function to check if a number is Prime or Not?


function prime_number(number){
  let factor=0;

  for(let i=1; i<=number; i++){
  if(number%i==0){
        factor++;
      }
    }
  
  if(factor==2){
    console.log(number,"is a prime number")
  }else{
     console.log(number,"is not a prime number")
  }
}

prime_number(67)