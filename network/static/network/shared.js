//this file will have things other views might share

let loggedUsername = document.querySelector("#shared-script").dataset.user;

function edit(postId) {
    let contentElement = document.querySelector(`#content-${postId}`);

    //get the current content
    let content = contentElement.innerHTML;

    //get the edit button and hide it
    let editBtn = document.querySelector(`#edit-${postId}`);
    editBtn.style.display = "none";
    
    //make a form show up
    contentElement.innerHTML = /*html*/`
        <form id="edit-form">
            <textarea type="text" id="edit-content" class="form-control" required>${content}</textarea>
            <button class="btn btn-primary" type="submit">Edit</button>
        </form>
    `;

    //change the content
    document.querySelector('#edit-form').onsubmit = () => {
        fetch('/edit', {
            method: 'PUT',
            body: JSON.stringify({
                postId: postId,
                content: document.querySelector('#edit-content').value
            })
        })
            .then(response => response.json())
            .then(result => {
                console.log(result);

                //hide the form/go back to just showing the content
                contentElement.innerHTML = document.querySelector('#edit-content').value;

                //show the hide button again
                editBtn.style.display = "block";
            });

        return false;
    }
}

function like(postId) {
    fetch('/like', {
        method: 'PUT',
        body: JSON.stringify({
            postId: postId
        })
    })
        .then(response => response.json())
        .then(result => {
            let heartChar = document.querySelector(`#heart-${postId}`);
            
            let likeCount = parseInt(document.querySelector(`#counter-${postId}`).innerHTML);

            //change the heart to filled or empty
            //update likes count
            if (result["liked"]) {
                heartChar.innerHTML = '&hearts;';
                likeCount++;
                document.querySelector(`#counter-${postId}`).innerHTML = likeCount;
            } else {
                heartChar.innerHTML = '&#9825;';
                likeCount--;
                document.querySelector(`#counter-${postId}`).innerHTML = likeCount;
            }
        });
}
