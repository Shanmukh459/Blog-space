let postsArray = []
const titleInput = document.getElementById("post-title")
const bodyInput = document.getElementById("post-body")
const inputForm = document.getElementById("input-form")

function renderPosts() {
    const postsHtml = postsArray.map(post => {
        return `
                <div class="post">
                    <h2>${post.title}</h2>
                    <p>${post.body}</p>
                </div>`
    }).join('')
    document.getElementById("posts-container").innerHTML = postsHtml
}

// function clearForm() {
//     titleInput.value = ""
//     bodyInput.value = ""
// }

fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then(res => res.json())
    .then(data => {
        postsArray = data.slice(0, 5)
        renderPosts()        
})

inputForm.addEventListener("submit", function(e) {
    e.preventDefault()
    const postTitle = titleInput.value
    const postBody = bodyInput.value
    const data = {
        title: postTitle,
        body: postBody,
    }

    const options = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    }

    fetch("https://apis.scrimba.com/jsonplaceholder/posts", options)
        .then(res => res.json())
        .then(post => {
            postsArray.unshift(post)
            renderPosts()  
            // clearForm()
            inputForm.reset()
        })
})

