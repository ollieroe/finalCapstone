let jsonWorkouts = []
// Get the myWorkouts from session storage and assins it to jsonWorkouts
jsonWorkouts = JSON.parse(sessionStorage.getItem("myWorkouts"));

// Initialises the array that will be used for session storage. 
let sessionSaveForLater = []

// Adds an event listener to the save for later button and function to add wokrouts to the session storage. 

document.querySelectorAll('.saveForLaterBtn').forEach(item => {
    item.addEventListener('click', e => {e.preventDefault();
        let workout = e.target.previousElementSibling.innerHTML
        if (sessionSaveForLater.includes(workout) === true){
            sessionSaveForLater
        }
        else {
        sessionSaveForLater.push(workout)
        sessionStorage.setItem('myWorkouts', JSON.stringify(sessionSaveForLater));
        alert(`The workout has been saved. You have ${sessionSaveForLater.length} items saved for later`);
    }
    })
})

    
// Stops the loop statement trying to put information into the saveforlater array if there is nothing in jsonWOrkouts. 
if (jsonWorkouts !== null) {for(i = 0; i < jsonWorkouts.length; i++){
    sessionSaveForLater.push(jsonWorkouts[i]);
    // Adds the information from the jsonWorkouts array onto the HTML document. 
    };
    for(i = 0; i < jsonWorkouts.length; i++){
        let workoutDisplay = document.querySelector('#saveForLater');
        let newWorkout = document.createElement('p')
    workoutDisplay.innerHTML += '\n' + (`${jsonWorkouts[i]} <br>`);
    workoutDisplay.appendChild(newWorkout)
    }
};












