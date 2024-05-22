document.addEventListener('DOMContentLoaded', function() {
    const postsContainer = document.querySelector('.posts-container');
    
    const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    
    blogPosts.forEach(blogPost => {
        const postContainer = document.createElement('div');
        postContainer.className = 'post';
        
        const postTitle = document.createElement('h2');
        postTitle.textContent = blogPost.title;
        postContainer.appendChild(postTitle);
        
        const postContent = document.createElement('p');
        postContent.textContent = blogPost.content;
        postContainer.appendChild(postContent);
        
        const postAuthor = document.createElement('p');
        postAuthor.className = 'author';
        postAuthor.textContent = `Posted by: ${blogPost.username}`;
        postContainer.appendChild(postAuthor);
        
        postsContainer.appendChild(postContainer);
    });
});


document.addEventListener('DOMContentLoaded', function() {
const button = document.querySelector('.back-button')
button.addEventListener('click', function(event) {
    event.preventDefault(); 
    console.log('it works');
    window.location.href = './index.html';
   });
});