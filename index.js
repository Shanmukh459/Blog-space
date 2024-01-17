document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault()
    const postTitle = document.getElementById("post-title")
    const postBody = document.getElementById("post-body")
    const data = {
        title: postTitle,
        body: postBody,
    }

    fetch("https://apis.scrimba.com/jsonplaceholder/posts",
    {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(res => res.json())
        .then(data => console.log(data))
})

fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then(res => res.json())
    .then(data => {
        const postsArr = data.slice(0, 5)
        console.log(postsArr)
        const postsHtml = postsArr.map(post => {
            return `
                    <div class="post">
                        <h2>${post.title}</h2>
                        <p>${post.body}</p>
                    </div>`
        }).join('')
        document.getElementById("posts-container").innerHTML = postsHtml
    })