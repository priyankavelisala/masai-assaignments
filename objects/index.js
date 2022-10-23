//Create an object with the following functionality ?

//Ability to add 3 students details and their marks in 3 subjects
//Method to find the student with the least total.
//Method to find the student with the highest total.


  let arr= [{name: "narasamma",marks:[46,39,28]},
            {name:"kantamma", marks:[96,79, 98]},
            {name:"mangamma", marks:[66,89,78]}
           ]

let min=Infinity;
let max=-Infinity;
let least_name="";
let hightest_name="";

for(let i=0; i<=arr.length-1;i++){
let str=arr[i]["marks"]
if(max<check_sum(str)){
  max=check_sum(str)
 highest_name=arr[i]["name"]
}
  if(min>check_sum(str)){
    min=check_sum(str)
    least_name=arr[i]["name"]
  }

}

function check_sum(str){
  let sum=0;
  for(let j=0; j<=str.length-1; j++){
    sum+=str[j]
  }
  return sum;
}
console.log(max,highest_name)
console.log(min,least_name)