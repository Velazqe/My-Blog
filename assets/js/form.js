document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const title = document.querySelector('#title').value;
        const content = document.querySelector('#content').value;
        const username = document.querySelector('#username').value;

        if (!title || !content || !username) {
            alert('Please complete all fields!');
            return;
        }
        
        const blogPost = { title, content, username };

        let blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
        blogPosts.push(blogPost);

        localStorage.setItem('blogPosts', JSON.stringify(blogPosts));

        form.reset();
    
         window.location.href = '../my-blog/my-blog.html'; 
    });
});
