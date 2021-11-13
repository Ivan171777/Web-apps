/*№1*/
let str = "#";
while (str.length<=7){
    console.log(str + "\n");
    str+="#";
}
/*№2*/
let num = 1;
for ( ; num < 100; num++ ) {
    if ( num % 5 === 0 && num % 3 === 0 ){
        console.log( num, " = FizzBuzz" )
    } else {
        if ( num%5 === 0 ){
            console.log( num, " = Buzz" );
        } else {
            if ( num%3 === 0 ){
                console.log( num, " = Fizz" );
            } else {
                console.log( num, " " );
            }
        }
    }
}
/*№3*/
let size = 8;
let board = "";
for (let y = 0; y < size; y++) {
for (let x = 0; x < size; x++) {
if ((x + y) % 2 == 0)
board += " ";
else
board += "#";
}
board += "\n";
}
console.log(board);
/*№4*/
let v1=7;
let v2=5;
function min(v1, v2) {
    return v1 <= v2 ? v1 : v2;
}
console.log(min(v1, v2));
/*№5*/
let number = 0;
countChar = function(str, charSrch){
  for (let i = 0; i<str.length; i++){
    if(str.charAt(i) === charSrch)
      number ++;
  }
  console.log(number);
};
countChar("allalalala", "l");
/*№6*/
let a=1
let b=10
let step=2
range = function (a, b, step){
    if(!step) step = 1;
    let range = [];
    if(a<b){
      for (let i = a; i<=b; i+=step)
        range.push(i);
    }else{
      for (let i = a; i>=b; i+=step)
        range.push(i);
    }
    return range;
  };
  sum = function(range){
    let sum = 0;
    for (let i = 0; i<=range.length; i++)
      sum +=i;
    return sum;
  };
console.log(sum(range(a, b)));
console.log(range(5, 2, -1));
/*№7*/
reverseArray = function (array){
    let arrayTemp = [];
    for (let i = array.length; i > 0; i--){
      arrayTemp.push(array.pop());
    }
    return arrayTemp;
  };
  reverseArrayInPlace = function (array){
    let arrayTemp = [];
    for (let i = array.length; i > 0; i--){
      arrayTemp.push(array.pop());
    }
    for (let j = arrayTemp.length; j > 0; j--){
      array.unshift(arrayTemp.pop());  
    }
    return array;
  };
  console.log(reverseArray(["A", "B", "C"]));  
  let arrayValue = [1, 2, 3, 4, 5];
  reverseArrayInPlace(arrayValue);
  console.log(arrayValue);