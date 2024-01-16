/**
 Challenge:

 Style it up!
 
 * Add a short (~30px height) fixed navbar at the top with the text "BlogSpace". Remember to pad the top of your content so it doesn't get hidden behind the navbar.
 * Add a font from Google Fonts.
 * Any other styling you want to make it look nice!
 
 */

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