let submit = document.querySelector('.submit-btn');

// preventing form submission
let form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
} );

submit.addEventListener('click', () => {
    //array of input element
    let input = document.querySelectorAll('input'); 
    let count = 1;

    for(i=0; i<input.length; i++) {
        // if any input field is empty
        if(input[i].value != "") { 
            count++;
        }

        // if all the fields are filled
        if(count === 5) { 
            localStorage.setItem('checkoutName', JSON.stringify(`${input[0].value}`) );
            document.querySelector('section').innerHTML = `<h1>
                Thank You, ${JSON.parse(localStorage.getItem("checkoutName"))}! Your Order has been placed and will be delivered soon.
            </h1>`;
            document.querySelector('h1').style.color = 'white';
            document.querySelector('h1').classList.add('animation');
        }
    }
    // checking if all the required input fields are filled or not
    if(count < 5) {
        alert('Please fill all the fields');
    }
} );

// reset button
let reset = document.querySelector('.clear-btn');
reset.addEventListener('click', () => {
    let input = document.querySelectorAll('input'); //array of input element
    for(i=0; i<input.length; i++) {
        input[i].value = "";
        document.querySelector('textarea').value = "";
    }
    submit.innerText = "Place Order";
    submit.style.backgroundColor = 'orangered';
});