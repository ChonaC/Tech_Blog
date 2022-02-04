const postId = document.getElementById('post-id');

const editFormHandler = async function(event) {
    event.preventDefault();

    
    const titleEl = document.getElementById('post-title');
    const bodyEl = document.getElementById('post-body');


    await fetch(`/api/post/${postId}`, {
        method: 'PUT',
        body: JSON.stringify({
          titleEl,
          bodyEl
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
    
      document.location.replace('/dashboard');
}

document.querySelector("#edit-post-form").addEventListener("submit", editFormHandler);