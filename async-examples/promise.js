// create a promise
const newPromise = new Promise(function (resolve, reject) {
  /* whether a promise will resolve or reject will be determined by logic
  that has been written inside the promise's executor. In this example   
  we are simply randomly determining whether to resolve or reject */
  const rand = Math.random() > 0.5 ? true : false;

  if (rand) {
    resolve("Request processed successfully");
  } else {
    reject("Request rejected");
  }
});

newPromise
  .then(function (value) {
    // executed if the promise has been resolved

    /* the value parameter stores the value passed to 
    the resolve() method when creating the promise, i.e. 
    the string "Request processed successfully" */
    console.log(value);
  })
  .catch(function (value) {
    // executed if the promise has been rejected

    /* in this case, the value parameter stores the value
    passed to the reject() method, i.e. 
    the string "Request rejected" */
    console.log(value + ". We are sorry for the inconvenience.");
  })
  .finally(function () {
    // executed in either case
    console.log("We promise we got your request");
  });
