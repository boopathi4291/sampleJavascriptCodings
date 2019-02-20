function myPromise(){
var promise = new Promise((resolve,reject)=>setTimeout(()=>resolve("welcome to promise examples"),1000));
promise.then((response)=> console.log(response));
}
//myPromise();
/**
 * Async and Await 
 */

 function toRun(){
     return "i am running";
 }

 function runAgain(){
     return 'running again';
 }
 async function callRun(){
        return toRun();
 }
 async function callAgain(){
     return runAgain();
 }

 async function callPromise(){
      await myPromise();// await works only when the promise is there
 }
 callRun().then(console.log);

 /**
  * promises chaining
  */
 callRun().then(callAgain).then(console.log);

 callPromise().then();

 /**
  * multiple promises calling
  */

let call1= new Promise((resolve,reject)=>setTimeout(()=>resolve('first promise'),1000));
let call2= new Promise((resolve,reject)=>setTimeout(()=>resolve('second promise'),2000));
let call3= new Promise((resolve,reject)=>setTimeout(()=>resolve('third promise'),3000));
let call4= new Promise((resolve,reject)=>setTimeout(()=>resolve('fourth promise'),4000));
let call5= new Promise((resolve,reject)=>setTimeout(()=>resolve('fifth promise'),5000));

let all= [call1,call2,call3,call4,call5];
Promise.all(all).then(values => { 
    console.log(values); 
  });