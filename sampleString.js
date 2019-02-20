var x = 'this is a string to reverse';

function reverse(x){
    var str='';
var len=x.length-1;
while(len >=0){
str +=x [len];
len--;

}
return str;
}
console.log(reverse(x));
var myArr=['boopi','vanithashree'];
myArr.forEach(v=>console.log(reverse(v).toUpperCase()));

const fun3= (a,b)=> a+b;
console.log(fun3(10,20));