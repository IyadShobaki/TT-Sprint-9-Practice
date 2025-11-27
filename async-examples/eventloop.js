/* setTimeout() or setInterval() they are macro task that they will executed on the next event loop.
 But promises (micro task) will executed/callback before the start of the next event loop.  */
// example
console.log("Synchronous 1");

setTimeout((_) => console.log("Timeout 2"), 0);

Promise.resolve().then((_) => console.log("Promise 3"));

console.log("Synchronous 4");

/* Synchronous 1
Synchronous 4
Promise 3
Timeout 2 */
