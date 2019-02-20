/** 
* this module has a string split and combine methods
*/
const MyLib = function(){
    this.Person = function(name,age,email){
        this.name=name;
        this.age=age;
        this.email=email;
    }
    this.myRev = function(a){
        //let str = '';
        let b = [...a].reverse.slice('');
        //str = b; 
        return b;
    }
    this.myCombiner = function(a,b){
        let bb=[];
        bb=[...a,...b];
        return bb;
    }
};

module.exports=MyLib;