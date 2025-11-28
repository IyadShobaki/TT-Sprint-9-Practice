"use strict";

// create markup for the post
function createPostMarkup(post) {
  return "\n    <div class=\"post\">\n      <p class=\"post__title\">".concat(post.title, "</p>\n      <p class=\"post__text\">").concat(post.body, "</p>\n    </div>\n  ");
} // insert markup into the DOM


function addPostToDOM(container, markup) {
  container.insertAdjacentHTML("afterbegin", markup);
} // function getPosts() {
//   fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((res) => res.json())
//     .then((data) => {
//       data.forEach((post) => {
//         const container = document.querySelector(".container");
//         addPostToDOM(container, createPostMarkup(post));
//       });
//     })
//     .catch((err) => {
//       console.error("Error. The request failed: ", err);
//     });
// }
// getPosts();


function createPost(newPost) {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: newPost.title,
      body: newPost.body,
      userId: 1
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  }).then(function (res) {
    return res.json();
  }).then(function (post) {
    addPostToDOM(document.querySelector(".container"), createPostMarkup(post));
  });
} // form submit event handler


document.forms.post.addEventListener("submit", function (event) {
  event.preventDefault();
  var _event$currentTarget$ = event.currentTarget.elements,
      title = _event$currentTarget$.title,
      text = _event$currentTarget$.text;
  createPost({
    title: title.value,
    body: text.value
  });
});