var myModule = require('./myLibModule') ;
console.log(myModule);
var personCls = new myModule();
var person = new personCls.Person("dfs",23,"wwew");
console.log(JSON.stringify(person));

var arr1 = [10,20,30];
var arr2 = [40,50,60];
var com = personCls.myCombiner(arr1,arr2);
console.log(com);
