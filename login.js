//n preventing form from submission
let form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
} );

let phone = document.querySelector('#Phone');
let password = document.querySelector('#pass');

// getting login info from localstorage
let login = document.querySelector('.login-btn');
login.addEventListener('click', () => {
    // checking if login info is correct
    let user = JSON.parse(localStorage.getItem('user'));
    if (user.phone === phone.value && user.password === password.value) {
        localStorage.setItem('isLoginSuccessful', 'yes');
        // reseting input fields
        phone.value = password.value = "";
        // showing success alert and redirect
        alert("Login Successfull");
        window.location.href = "home.html";
    } else {
        alert("Invalid Credentials");
    }
} );