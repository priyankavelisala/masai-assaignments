//Problem 4: Write a function to check if the char is a small case or not.?

function check_lower(char){
  let lower="abcdefghijklmnopqrstuvwxyz";

  for(let i=0;i<=lower.length-1;i++){
    if(char==lower[i]){
      return true;
    }
  }
}

let x=check_lower("P");

if(x==true){
  console.log("yes");
}else{
  console.log("no");
}