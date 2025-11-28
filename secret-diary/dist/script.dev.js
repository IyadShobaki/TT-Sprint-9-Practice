"use strict";

// create markup for the post
function createPostMarkup(post) {
  return "\n    <div class=\"post\">\n      <p class=\"post__title\">".concat(post.title, "</p>\n      <p class=\"post__text\">").concat(post.body, "</p>\n    </div>\n  ");
} // insert markup into the DOM


function addPostToDOM(container, markup) {
  container.insertAdjacentHTML("afterbegin", markup);
}

function getPosts() {// write your code here
}

getPosts();