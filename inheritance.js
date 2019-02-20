class Parent{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    disp(){
        console.log(this.name);
    }
    static callMe(){
        (function(){
            console.log("iife works only inside the method not inside the class")
        })()
        console.log("my static method cant be inherited");
    }
}
class Child extends Parent{
    constructor(a,b,mail){
        super(a,b);
        this.mail=mail;
    }
}
Child.prototype.disp= function(){
    console.log("child method");
}
var childObj = new Child("boopathi",28,'sfkjhsdfh');
childObj.disp();
Parent.callMe();// STATIC METHODS CANNOT BE INHERITED AND HAS TO BE CALLED USING THE CLASS ANME NOT BY INSTANCE OF THE CLASS.