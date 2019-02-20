var arr1=[1,2,3,4,2,3,4,5];
var arr2=[];
arr2=new Set(arr1);
console.log(arr2);
var arr3 =['boopi','welcome','you'];

var myMap = new Map();
for (let i = 0; i < arr3.length; i++) {
    const a = arr3[i];
    const b = arr1[i];
    myMap.set(a,b);
}
console.log(myMap.has('boopi'));
for (let iterator of myMap.entries()) {
    console.log(iterator)
}
for (let iterator of myMap.keys()) {
    console.log(iterator)
}
for (let iterator of myMap.values()) {
    console.log(iterator)
}
console.log( myMap.entries());
Array.from(myMap.keys()).map((value,i)=>console.log(value,myMap.get(value)));

console.clear();
const myArr=[{id:1,name:'me'},{id:2,name:'u'},{id:3,name:'us'},];

myArr.forEach((value)=>{
    console.log(value)
});
for (const i in myArr) {
    console.log(myArr[i].name);
}
for (const iterator of myArr) {
    console.log(iterator);
    break;
}
console.log('\u{1F680}');

for (let ch of 'abc'){
    console.log(ch);
}
'doo'.repeat(5);