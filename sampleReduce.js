// Accumulator
function myRed(sum,val) {
    sum +=val;
    return sum;
}
let arr=[10,20,30,40];

var total = arr.reduce(myRed);
let sum = arr.reduce((a,b)=> a+=b);
console.log(sum);