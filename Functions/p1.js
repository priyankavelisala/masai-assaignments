//Problem 2: Use the above function to print the Primes from 2 to a given limit?


function prime_number(num){
  let factors=0;
  for(let i=1;i<=num;i++){
    if(num%i==0){
      factors++;
  }
  }

  if(factors==2){
    return true;
  }else{
    return false;
  }
}

for(let i=2;i<=100;i++){
  let x=prime_number(i);
  if(x==true){
    console.log(i," is a prime");
  }
}
