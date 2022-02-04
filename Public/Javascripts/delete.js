const postId = document.getElementById('post-id');


const deletePostHandler = async function(event) {
    event.preventDefault();

    await fetch(`/api/post/${postId}`, {
        method: 'DELETE'
      });
    
      document.location.replace('/dashboard');
}

document.querySelector("#delete-btn").addEventListener("click", deletePostHandler);