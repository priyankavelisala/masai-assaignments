//Problem 2 : Given a string in lower case convert it to upper case?

let str="masai is a tranformation of education";
let bag=" ";
let lower="abcdefghijklmnopqrstuvwxyz";
let upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";

for (let i=0; i<=str.length-1; i++){
for(let j=0; j<=lower.length-1; j++){
  if(str[i]==lower[j]){
    bag+=upper[j];
  }
}
}
console.log(bag);