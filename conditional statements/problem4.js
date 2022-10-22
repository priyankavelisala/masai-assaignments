//Problem 4: Given stored username and password and input username and password, Print if the user can login or not.

let user_name="krishna369";
let pass_word="krishna6";

let username="krishna369";
let password="krishna369";

if(user_name==username){
  if(pass_word==password){
    console.log("user can be login");
  }
  else {
    console.log("verify your password");
  }
}else{
  console.log("user can not login");
}