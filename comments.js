// Adds event listener to the add income element
document.addEventListener('DOMContentLoaded', () => (
    document.getElementById('commentBtn').addEventListener('click', addComment)
))

let sessionComment = []

jsonComment = JSON.parse(sessionStorage.getItem("myComments"));

  // Function to add comments to the page. Shows the last written comment to the top. Adds the comment to session storage. 
function addComment(e){
    e.preventDefault()
    let comment = document.getElementById('comments').value
    let commentDisplay = document.getElementById('commentDisplay');
    let newComment = document.createElement('p')
    newComment.innerHTML += comment + '<br>'
    commentDisplay.insertBefore(newComment, commentDisplay.firstChild)

// Adds coments to the sessionStorage and the sessionComment Array. 
sessionComment.unshift(comment)
sessionStorage.setItem('myComments', JSON.stringify(sessionComment));


// let totalComments = 0

// for (i = 0; i < jsonComment.length; i++){
//     totalComments += parseInt(jsonComments[i])
// }

// commentDisplay.innerHTML = totalComments 

}

// Stops the loop statement trying to put information into the saveforlater array if there is nothing in jsonWOrkouts. 
if (jsonComment !== null) {for(i = 0; i < jsonComment.length; i++){
    sessionComment.unshift(jsonComment[i]);
    };};


// Adds the information from the jsonWorkouts array onto the HTML document. 
for(i = 0; i < jsonComment.length; i++){
    let commentDisplay = document.getElementById('commentDisplay');
    let newComment = document.createElement('p')
    newComment.innerHTML += jsonComment[i] + "<br>";
    commentDisplay.appendChild(newComment)
}