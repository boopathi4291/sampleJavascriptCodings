var person = {name:'boopi',age:28}
const handler ={
    get (target,property,receiver){
            return target[property];
    }
}

var proxy = new Proxy(person,handler)
console.log(proxy.name);

class Mad{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
}
var obj = new Mad('fdskfh',30);

var proxy1 = new Proxy (obj,handler);
console.log(proxy1.age);

