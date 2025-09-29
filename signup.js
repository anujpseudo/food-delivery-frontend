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
    // checking if phonen no. is filled correctly
    if (phone.value.split("").length == 10) {
        // checking if password doesn't match
        if (password.value === confirmPass.value) {
            let user = {
                phone : `${phone.value}`,
                password : `${password.value}`
            };
            // adding user details to localstorage
            localStorage.setItem('user', JSON.stringify(user));
            // resetting fields
            phone.value = password.value = confirmPass.value = "";
            // redirecting to login page
            alert("Signup Successfull");
            window.location.href = "login.html";
        } else {
            alert("Password doesn't Match or Mobile field is empty");
        }
    } else {
        alert('Enter a valid 10 digit phone no.');
    }
} );