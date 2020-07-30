document.addEventListener('DOMContentLoaded', function () {
    
    //only add the listen for submit if needed
    if (!loggedUsername) {
        return;
    }

    //publish post
    document.querySelector('#new-post').onsubmit = () => {
        fetch('/new', {
            method: 'POST',
            body: JSON.stringify({
                content: document.querySelector('#post-content').value
            })
        })
            .then(response => response.json())
            .then(() => {
                document.querySelector('#post-content').value = ""; //clear the input, just to be sure

                location.reload(true);
            });

        return false;
    }
});