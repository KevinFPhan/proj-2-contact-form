function handleFormSubmit(event) {
    event.preventDefault();
    
    const data = new FormData(event.target);   
    const formJSON = Object.fromEntries(data.entries());   
    const results = document.querySelector('.results pre');
    results.innerText = JSON.stringify(formJSON, null, 2);
}
  
const form = document.querySelector('form');

const username = document.querySelector("#username");
const email = document.querySelector('#email');
const message = document.querySelector('#message');
const errorMsg = document.getElementsByClassName('error');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    validation(username, 0, "Username cannot be blank!");
    if (email.value === '') {
        errorMsg[1].innerHTML = "Email cannot be blank!";
    } else if (!isEmail(email.value)) {
        errorMsg[1].innerHTML = "Email is not valid!"; 
    } else {
        errorMsg[1].innerHTML = '';
    }
    validation(message, 2, "Message cannot be blank!");
})

form.addEventListener('submit', handleFormSubmit);

let validation = (id, serial, message) => {
    if (id.value.trim() === '') {
        errorMsg[serial].innerHTML = message;
    } else {
        errorMsg[serial].innerHTML = '';
    }
}



function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

