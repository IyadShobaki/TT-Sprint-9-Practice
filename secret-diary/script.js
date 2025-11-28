// create markup for the post
function createPostMarkup(post) {
  return `
    <div class="post">
      <p class="post__title">${post.title}</p>
      <p class="post__text">${post.body}</p>
    </div>
  `;
}

// insert markup into the DOM
function addPostToDOM(container, markup) {
  container.insertAdjacentHTML("afterbegin", markup);
}

function getPosts() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((post) => {
        const container = document.querySelector(".container");

        addPostToDOM(container, createPostMarkup(post));
      });
    })
    .catch((err) => {
      console.error("Error. The request failed: ", err);
    });
}

getPosts();
