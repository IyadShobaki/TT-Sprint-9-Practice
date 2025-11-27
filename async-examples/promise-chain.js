const newPromise = new Promise(function (resolve, reject) {
  reject("One Mississippi"); // immediately get the rejected promise
});

function firstAction(value) {
  return `${value}, two Mississippi`;
}

function secondAction(value) {
  return `${value}, three Mississippi`;
}

function thirdAction(value) {
  console.log(value);
}

newPromise.then(firstAction).then(secondAction).catch(thirdAction);

/* the console log: "One Mississippi" -- because newPromise was rejected,
and we immediately got to the catch() call */

// Always end a chain of promises with a catch() call.
// This will handle the error if it occurs in any of the then() calls in the chain.
