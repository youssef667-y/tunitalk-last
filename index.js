// 1. Variables & Array (Page 10-12, 45-47)
let posts = []; // Tableau pour stocker les posts

// 2. Function to create post (Page 29-30)
function createPost(event) {
    // 3. Prevent form submission (Page 58 - Submit event)
    event.preventDefault();

    // 4. Get form values (Page 10 - Variables)
    let postTitle = document.getElementById('post-title').value;
    let postContent = document.getElementById('post-content').value;

    // 5. Input validation (Page 23 - Tests logiques)
    if (postTitle === "" || postContent === "") {
        alert("Veuillez remplir tous les champs!"); // (Page 14 - alert())
        return false;
    }

    // 6. Create new post object (Page 35 - Objets)
    let newPost = {
        id: posts.length + 1, // (Page 47 - length property)
        title: postTitle,
        content: postContent,
        author: "Anonyme",
        date: new Date(), // (Page 44 - Date object)
        upvotes: 0
    };

    // 7. Add to posts array (Page 47 - Array.push())
    posts.push(newPost);

    // 8. Display posts (Page 41 - document methods)
    displayPosts();

    // 9. Reset form (Page 41 - DOM manipulation)
    event.target.reset();

    return false;
}

// 10. Function to display posts (Page 29-30 - Functions)
function displayPosts() {
    let container = document.getElementById('posts-container');
    container.innerHTML = ''; // Clear container

    // Loop through posts
    for (let i = 0; i < posts.length; i++) {
        container.innerHTML += `
            <div class="post-card" onclick="upvotePost(${posts[i].id})" 
                 onmouseover="highlightPost(this)" 
                 onmouseout="unhighlightPost(this)">
                <div class="vote-section">
                    <button class="upvote-btn" onclick="event.stopPropagation(); upvotePost(${posts[i].id})">
                        ↑
                    </button>
                    <span class="vote-count">${posts[i].upvotes}</span>
                </div>
                <div class="post-content">
                    <h3 class="post-title">${posts[i].title}</h3>
                    <p class="post-text">${posts[i].content}</p>
                    <div class="post-footer">
                        <span class="post-author">Posté par ${posts[i].author}</span>
                        <span class="post-date">${posts[i].date.toLocaleDateString()}</span>
                    </div>
                </div>
            </div>
        `;
    }
}

// 13. Upvote function (Page 57 - onClick)
function upvotePost(postId) {
    // 14. Find post in array (Page 51 - Array methods)
    for (let i = 0; i < posts.length; i++) {
        if (posts[i].id === postId) {
            posts[i].upvotes++; // (Page 18 - Opérateurs)
            break;
        }
    }
    displayPosts();
}

// 15. Hover effects (Page 58 - onMouseOver/Out)
function highlightPost(element) {
    element.style.backgroundColor = "#f5f5f5"; // (Page 35 - Objet style)
}

function unhighlightPost(element) {
    element.style.backgroundColor = "";
}

// 16. Initialize on page load (Page 58 - onLoad)
window.onload = function() {
    // Optional: Add sample posts
    posts.push({
        id: 1,
        title: "Bienvenue sur TuniTalk!",
        content: "Commencez à discuter...",
        author: "Admin",
        date: new Date(),
        upvotes: 5
    });
    displayPosts();
};
// Form hover effects
function highlightCreatePost(element) {
    element.style.boxShadow = "0 0 10px rgba(0,0,0,0.1)";
    element.style.transform = "translateY(-2px)";
}

function unhighlightCreatePost(element) {
    element.style.boxShadow = "none";
    element.style.transform = "translateY(0)";
}

// Input field effects
function highlightInput(element) {
    element.style.borderColor = "#3498db";
    element.style.backgroundColor = "#f8f9fa";
}

function unhighlightInput(element) {
    element.style.borderColor = "#ddd";
    element.style.backgroundColor = "white";
}

// Textarea effects
function highlightTextarea(element) {
    element.style.borderColor = "#3498db";
    element.style.backgroundColor = "#f8f9fa";
}

function unhighlightTextarea(element) {
    element.style.borderColor = "#ddd";
    element.style.backgroundColor = "white";
}

// Button effects
function highlightButton(element) {
    element.style.backgroundColor = "#2c3e50";
    element.style.color = "white";
}

function unhighlightButton(element) {
    element.style.backgroundColor = "#3498db";
    element.style.color = "white";
}