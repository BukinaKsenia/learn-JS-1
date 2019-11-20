// ПЕРЕМЕННЫЕ 
var message; // a-z, A-Z, 0-9, $, _
var myMessage;
myMessage="Сообщение";

var myNumber=10.484;
var myString="Привет, Вася!"; // "10.484"
var myBoolean=true; // false
var myNull=null;
var myUndefined=undefined;


// ЧИСЛА
//console.log(40+myNumber);
//console.log(40-myNumber);
//console.log(40*myNumber);
//console.log(40/myNumber);
//myNumber --;
//console.log(myNumber);
//console.log(Math.round(5.45));
//console.log(Math.ceil(5.45));
//console.log(Math.floor(5.45));

//var newNumber=2.457;
//console.log(newNumber.toFixed(1));

//СТРОКИ
//console.log("40"+myNumber);
//console.log(myString+ " Как дела?");
//console.log(myString.toLowerCase());
//console.log(myString.toUpperCase());

//МАССИВЫ
//var names=["Вася", "Петя", "Женя"];
//console.log(names[0].toUpperCase());

//names[0]="Маша";
//console.log(names[0]);

//names.push("Света");
//console.log(names[3]);
//console.log(names);

//УСЛОВИЯ
//if("Вася" !== "Петя" || myNumber>20 ) {
//    console.log("Условие выполнено");
//}

//if(myNumber>20 ){
//  console.log("Число меньше 20");
//  } else{
//    console.log("Число больше 20");
//}

//ЦИКЛЫ
//for(var i=0; i<10; i++){
//    if(i==5){
//       continue;
//    }
//    console.log(i);
//}

//for(var j=0; j<names.length; j++){
//    console.log(names[j]);
//}

//var i=0;
//while(i<10){
//    console.log(i);
//    i++;
//}

//ФУНКЦИИ 
//function sum(x, y){
 //   return x+y;
//}

//console.log(sum(10, 59));
//console.log(sum(5, 76));

//ОБЪЕКТЫ
var myObject={
    name: "Вася",
    surname:" Васин",
    age:25,
    getFullName: function(){
        return this.name+""+this.surname;
    }
};

myObject.name="Петя"
console.log(myObject.name);
console.log(myObject.getFullName());