var myArr = ["boopathi",'vanithashree','divya','vijaya','krishnan'];
var myLen = myArr.length;

function *myGen(){
    let a =0;
    while(a<myLen){
        yield myArr[a];
        a++;
    }
}
let myIt= myGen();

console.log(myIt.next().value);