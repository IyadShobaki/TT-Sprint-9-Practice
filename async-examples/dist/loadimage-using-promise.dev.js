"use strict";

/* /// Using callback async example to load images -
// (we can use onload or onerror attributes to call the callbacks func)

function handleImageLoad(evt) {
  // Add image element to the DOM after the image is loaded
  document.body.append(evt.target);
}

function handleLoadError() {
  console.log("Image not loaded. ERROR! ERROR!");
}

// Complete the code of this function
function loadImage(imageUrl, loadCallback, errorCallback) {
  const img = document.createElement("img");
  img.src = imageUrl;
  img.onload = loadCallback;
  img.onerror = errorCallback;
}

loadImage(
  "https://practicum-content.s3.us-west-1.amazonaws.com/frontend-developer/functions/moved_dog-1.jpg",
  handleImageLoad,
  handleLoadError
);

loadImage(
  "https://pictures.s3.yandex.net/frontend-developer/functions/dog-12345.jpg",
  handleImageLoad,
  handleLoadError
); */
function handleLoadError() {
  console.log("Image not loaded. ERROR! ERROR!");
}

function handleImageLoad(evt) {
  // Add image element to the DOM after the image is loaded
  document.body.append(evt.target); //console.log("Image loaded.");
} // Complete the code of this function


function loadImage(imageUrl) {
  return new Promise(function (resolve, reject) {
    var img = document.createElement("img");
    img.src = imageUrl;
    img.onload = resolve;
    img.onerror = reject;
  });
}

loadImage("https://practicum-content.s3.us-west-1.amazonaws.com/frontend-developer/functions/moved_dog-1.jpg").then(handleImageLoad)["catch"](handleLoadError);
loadImage("https://practicum-content.s3.us-west-1.amazonaws.com/frontend-developer/functions/moved_dog-1.jpg").then(function (result) {
  document.body.append(result.target);
})["catch"](function () {
  console.log("Image not loaded. ERROR! ERROR!");
});
loadImage("https://pictures.s3.yandex.net/frontend-developer/functions/dog-12345.jpg").then(handleImageLoad)["catch"](handleLoadError);