var c =0;
var aa = function(){
    var b =(function(){
        c++;
        console.log(c);
    })();
};
aa();
aa();
aa();