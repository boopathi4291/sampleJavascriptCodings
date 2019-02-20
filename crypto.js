var cryto= require('crypto');

function generatePwd(){
    let pwd = cryto.randomBytes(8).toString('hex');
    return pwd;
}
console.log(generatePwd());

function *passGen(){
    while(true){
        yield generatePwd();
    }
}
console.log(passGen().next().value);
console.log(passGen().next().value);
console.log(passGen().next().value);
console.log(passGen().next().value);
console.log(passGen().next().value);
console.log(passGen().next().value);