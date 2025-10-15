// DATA AOS Animation
    AOS.init();

// checking is user is logged in
    if (localStorage.getItem('isLoginSuccessful') === 'yes') {
        document.querySelector(".user").innerHTML = `
            <p class="logout">
                <a href="">
                    <strong>Log out</strong>
                    <i class="fa-solid fa-right-from-bracket"></i>
                </a>
            </p>    
        `;   
    }

// Logout
    document.querySelector('.logout').addEventListener('click', () => {
        localStorage.setItem('isLoginSuccessful', 'no');
        window.location.href = "./index.html";
    } );