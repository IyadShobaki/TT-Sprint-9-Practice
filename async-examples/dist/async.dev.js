"use strict";

// Using sync callback functions
// forEach
var tweets1 = ["some weird thread", "a reply to a tech influencer's tweet", "reaction to breaking news"];

function forEach(arr, callback) {
  for (var i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}

forEach(tweets1, function (tweet) {
  console.log(tweet);
}); //-------------------------------
// map

var tweets2 = ["some weird thread", "a reply to a tech influencer's tweet", "reaction to breaking news"];

function map(arr, callback) {
  var newArr = [];

  for (var i = 0; i < arr.length; i++) {
    newArr[i] = callback(arr[i]);
  }

  return newArr;
} // map each tweet to the last word contained in it


var lastWords = map(tweets2, function (tweet) {
  return tweet.split(" ").pop();
});
console.log(lastWords); //---------------------------
// filter

var tweets3 = ["some weird thread", "a reply to a tech influencer's tweet", "reaction to breaking news"];

function filter(arr, callback) {
  var newArr = [];

  for (var i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      newArr.push(arr[i]);
    }
  }

  return newArr;
} // return an array of "weird" tweets


var weirdTweets = filter(tweets3, function (tweet) {
  return tweet.includes("weird");
});
console.log(weirdTweets); //---------------------------------------
/// Using callback async example to load images -
// (we can use onload or onerror attributes to call the callbacks func)

function handleImageLoad(evt) {
  // Add image element to the DOM after the image is loaded
  document.body.append(evt.target);
}

function handleLoadError() {
  console.log("Image not loaded. ERROR! ERROR!");
} // Complete the code of this function


function loadImage(imageUrl, loadCallback, errorCallback) {
  var img = document.createElement("img");
  img.src = imageUrl;
  img.onload = loadCallback;
  img.onerror = errorCallback;
}

loadImage("https://practicum-content.s3.us-west-1.amazonaws.com/frontend-developer/functions/moved_dog-1.jpg", handleImageLoad, handleLoadError);
loadImage("https://pictures.s3.yandex.net/frontend-developer/functions/dog-12345.jpg", handleImageLoad, handleLoadError);