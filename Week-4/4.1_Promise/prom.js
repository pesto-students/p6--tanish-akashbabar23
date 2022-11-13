const getNo  = () => (Math.random()*100);
//function gerneratedNumber which is generates a random number. 

const gerneratedNumber= getNo();

console.log(`Generated Number ${gerneratedNumber}`);
// printing generated random no

let prom = new Promise((resolve, reject)=>{ 
    /* creating custom promise for resolve and reject*/
    console.log(`fetching data please wait`);
   setTimeout(() => {
    if (gerneratedNumber % 5 === 0)
    {
        resolve('Divisible by 5'); /*resolve */
    }
    else
    {
        reject('Not Divisible by 5'); /*reject*/
    }
   }, 1000);
});

let onfullFillment= (result)=>{
    /*for receiving value from resolve */
    console.log(result);
}
let onRejection= (error)=>{
      /*for receiving value from reject */
    console.log(error);
}
prom.then(onfullFillment).catch(onRejection);
  /*if promise get resolved it will run .then function and if rejected then it will run .catch */

