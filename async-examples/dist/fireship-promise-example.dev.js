"use strict";

var tick = Date.now();

var log = function log(v) {
  return console.log("".concat(v, " \n Elapsed: ").concat(Date.now() - tick));
};
/* 
// Without promise (run on the main thread)

const codeBlock = () => {
  let i = 0;
  while (i < 1000000000) {
    i++;
  }

  return "Billion loops done";
};

log("Sync 1");

log(codeBlock());

log("sync 2");

// Sync 1
//  Elapsed: 0
// Billion loops done
//  Elapsed: 492
// sync 2
//  Elapsed: 493 */

/* // With promise (run on a micro task - only the resolve of the value)
const codeBlock = () => {
  return new Promise((resolve, reject) => {
    let i = 0;
    while (i < 1000000000) {
      i++;
    }
    resolve("Billion loops done");
  });
};
log("Sync 1");

log(codeBlock().then(log)); // The actual creation still happeneing on the main thread
// only the resolving of the value is happen on the micro task

log("sync 2");

// Sync 1
//  Elapsed: 0
// [object Promise]
//  Elapsed: 519
// sync 2
//  Elapsed: 520
// Billion loops done
//  Elapsed: 520 */
// With promise (run on a micro task) - the right way of doing it


var codeBlock = function codeBlock() {
  return Promise.resolve().then(function (v) {
    // by putting the code inside resolve promise,
    //  the code be executed after all the sync micro task has completed
    var i = 0;

    while (i < 1000000000) {
      i++;
    }

    return "Billion loops done";
  });
};

log("Sync 1");
codeBlock().then(log);
log("sync 2"); // Sync 1
//  Elapsed: 0
// sync 2
//  Elapsed: 8
// Billion loops done
//  Elapsed: 525
// For more https://github.com/codediodeio/async-await-pro-tips/blob/master/2-create-promise.ts