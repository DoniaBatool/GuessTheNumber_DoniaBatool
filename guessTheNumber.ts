#! /usr/bin/env node
import inquirer from "inquirer";

let autoNum=Math.floor(Math.random()*10);

type userType={
"userNum":number
}
let user:userType= await inquirer.prompt([
    {
        type:"number",
        name:"userNum",
        message:"Please Enter a number between 1 to 10 : "
}])
let {userNum}=user

if(userNum===autoNum){

    console.log("System generated Nummber was: "+ autoNum +"\n You have guess the correct number!")
}
else{
    console.log("System generated Nummber was: "+ autoNum +"\n Wrong Guess, Try Again! ")

}




