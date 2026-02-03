const myPromise = new Promise((resolve, reject) => {
 let age=5;
 if(age>18){
    resolve("eligible for vote");
 } else{
    reject("Not Eligible";)
 }
});
//console.log(myPromise);
myPromise.then((msg) => console.log(msg))
//.catch((error) => console.log(error));