// let likeClass = document.getElementsByClassName("like");

let element = document.getElementsByTagName("span");

for (let i = 0; i < element.length; i++) {
    element[i].addEventListener("click", () => {
        element[i].classList.toggle("likes")
    })
}


function addLike() {
}


