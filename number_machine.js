
function reverseNum(int){
   
   let num =int.toString();//convert the integer into string
    let revNum ="";
    for(let i = num.length -1; i >= 0; i--){//display the values in descending
        revNum =revNum + num[i]; //to each indexed value in one variable
    }
console.log("Reverse Number: "+revNum);


let sum = 0;

while(int > 0){// while the passed value is greater than 0 go inside the loop
    let rem = int % 10;
    sum = sum + rem;
    int = parseInt(int / 10);
}
console.log("Sum is: "+sum);


let arr = num.split('');// create a new string from the passed digit

let intArr = arr.map((i)=> Number(i)); // convert the array of string into an array of integer

addedNum = intArr.map(i => i +1 );// add one to each value in the array of integer
let value =addedNum.join('');//eliminate the array into values of string

console.log("When one is added:" +value);

}

reverseNum(12345);

