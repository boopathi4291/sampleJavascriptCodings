const pi1 = Symbol(3.14);
const pi2 = Symbol(3.14);
console.log(pi1 === pi2);
console.log(pi1);


const numbers = [100,200,300,400,500];
console.log(numbers[Symbol.iterator]());

let nextNum = numbers[Symbol.iterator]();
console.log(nextNum.next());
console.log(nextNum.next());
console.log(nextNum.next());
console.log(nextNum.next());
console.log(nextNum.next());
console.log(nextNum.next());


let autoNumGen = {
    [Symbol.iterator](){
        let intialNumber=1;
        return {
            next(){
                let value = intialNumber>100?undefined:intialNumber++;
                let done = !value;
                return {
                    value,
                    done
                }
            }
        }
    }
};
let myval = autoNumGen[Symbol.iterator]();
console.log(myval.next());
console.log(myval.next());
console.log(myval.next());
console.log(myval.next());
console.log(myval.next());
console.log(myval.next());
console.log(myval.next());console.log(myval.next());
console.log(myval.next());
console.log(myval.next());console.log(myval.next());
console.log(myval.next());
console.log(myval.next());

for(num of autoNumGen){
    console.log(num);
}
/**
 *  generator examples
 * 
 */

 function* getNextNumber(){
     yield 100;
     yield 101;
     yield 102;
 }

 let num1 = getNextNumber();
 console.log(num1.next());
 console.log(num1.next());
 console.log(num1.next());
 console.log(num1.next());
 for(num2 of getNextNumber()){
    console.log(num2);
}