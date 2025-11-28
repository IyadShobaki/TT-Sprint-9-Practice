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

// function getPosts() {
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
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => res.json())
    .then((post) => {
      addPostToDOM(
        document.querySelector(".container"),
        createPostMarkup(post)
      );
    });
}

// form submit event handler
document.forms.post.addEventListener("submit", function (event) {
  event.preventDefault();

  const { title, text } = event.currentTarget.elements;

  createPost({
    title: title.value,
    body: text.value,
  });
});
