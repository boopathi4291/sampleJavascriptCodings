console.clear();
const myValues= function(sqrt,log10,loge){
    this.sqrt=sqrt;
    this.log10=log10;
    this.loge=loge;
};
var aa;
const myFunc = (a)=>{
    with (Math){
        MYSQRT= sqrt(a);
        MYLOG10 = log10(a);
        MYLOGE = log(a);
        aa = new myValues(MYSQRT,MYLOG10,MYLOGE);
        return aa;
    }
}
var p = myFunc(10);
console.log(JSON.stringify(p));