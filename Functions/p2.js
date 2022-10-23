//Problem 3: Use the same function to print Non-Primes from 2 to a given limit?

function not_prime_number(number){
  let factor=0;
  for(let i=0;i<=number; i++){
    if(number%i==0){
      factor++;
    }
  }
  if(factor==2){
    return true;
  }else{
    return false;
    }
}
  for(let i=2; i<=100; i++){
    let x=not_prime_number(i)
    if(x==true){
      console.log(i,"is not a prime number")
    }
  }

