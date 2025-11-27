"use strict";

// Promise Static Methods
// You don't necessarily need to call new Promise()
// when you want to immediately create a resolved or rejected promise

/* Promise.resolve("This promise has been resolved").then(function (value) {
  console.log(value); // "This promise has been resolved"
});

Promise.reject("This promise has been rejected").catch(function (value) {
  console.log(value); // "This promise has been rejected"
}); */
//--------------------------------------
//  Promise.all()  - example

/* only when the state of each promise is "resolved".
     If one of the promises is rejected,
     the Promise.all() returns rejected promise
    and we have to add catch() call in the chain to handle it */
// create the first promise
var picturePromise = new Promise(function (resolve, reject) {
  var someCondition = true;

  if (someCondition) {
    resolve("Picture");
  } else {
    reject("Picture rejected");
  }
}); // create the second promise

var textPromise = new Promise(function (resolve, reject) {
  var secondCondition = true;

  if (secondCondition) {
    resolve("Text");
  } else {
    reject("Text rejected");
  }
}); // create an array of promises

var promises = [picturePromise, textPromise]; // pass the array of promises to the Promise.all() method

Promise.all(promises).then(function (results) {
  console.log(results); // ["Picture", "Text"]
})["catch"](function (error) {
  console.log(error);
})["finally"](function () {
  console.log("Request received!");
}); //-------------------------------
// Timeout example

function wait(ms) {
  return new Promise(function (resolve) {
    setTimeout(resolve, ms);
  });
}

wait(2000).then(function () {
  return console.log("2000ms has passed");
});