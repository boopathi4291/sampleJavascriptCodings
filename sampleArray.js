var arr=['vanithashree','boopathi'];
arr.map((value,i)=> console.log(value));
var myStr = 'you r my string';
var u = [...myStr].reverse().join('').trim(' ');
console.log(u)

for(let i=0;i<10;i++){
    var x=10;//const

}
console.log(x);// returns not defined
//immediately invokable function expression
(function(){
    console.log("hi",x);
})()