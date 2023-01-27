function generateNum(){
    let number = Math.floor(Math.random() * 100);// returns a random integer between 0 and 99 (both included)
    return number;
}

function guessNum(){

    let enteredNum = document.getElementById("number").value;
    let genNum =generateNum();//calls the function and store its value to this variable
    
   if(isNaN(enteredNum)){//check if a string or character was entered
    document.getElementById("message").innerHTML = "The value must be a number";
   }
   else{

    if(enteredNum == genNum){
 
    document.getElementById("message").innerHTML ="Your guess is correctly the generated number is "+genNum;

    } 
    else if (enteredNum > genNum && enteredNum < 100){
        document.getElementById("message").innerHTML ="You guessed too high, the generated number is "+genNum;
    } 
    else if(enteredNum < genNum && enteredNum > 1){
        document.getElementById("message").innerHTML ="You guessed too low, the generated number is "+genNum;
    }
    else if(enteredNum < 1)
    {
        document.getElementById("message").innerHTML ="lower, the guessed number must be beween 1 and 100";
    }
    else if(enteredNum >100){
        document.getElementById("message").innerHTML ="Higher, the  guessed number must be between 1 and 100;"
    }


   }

}   