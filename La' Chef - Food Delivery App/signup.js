// preventing form from submission
let form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
} );

let phone = document.getElementById('Phone');
let password = document.getElementById('newPass');
let password2 = document.getElementById('confirmPass');

// Adding signup info to localstorage
let signup = document.querySelector('.signup-btn');
signup.addEventListener('click', () => {
    // checking if password doesn't match
    if (password.value === confirmPass.value) {
        let user = {
            phone : `${phone.value}`,
            password : `${password.value}`
        };
        localStorage.setItem('user', JSON.stringify(user));

        // resetting the form
        let input = document.querySelectorAll('input');
        input.forEach((item) => {
            item.value = "";
        } );
    } else {
        alert("Password doesn't Match");
    }
} );