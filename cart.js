// importing food Array of Object
import {foodItems} from './MenuItems.js';

// get item from local storage
let foodCart = localStorage.getItem("foodCart");
let cartItems = foodCart ? JSON.parse(foodCart) : [];

if(cartItems != []) {
    cartItems.forEach(item => {
        for(let i=0; i<foodItems.length; i++) {
            if (item == foodItems[i].name) {
                let div = document.createElement('div');
                div.classList.add("cart-item-card");
                div.id = `${foodItems[i].name}`;
                div.innerHTML = `
                    <div class="food-img-small">
                        <img src="${foodItems[i].image}" alt="${foodItems[i].name}"/>
                    </div>
                    <span>${foodItems[i].name} - ₹${foodItems[i].price}</span>
                    <button class="remove-item">Remove</button>
                `;
                document.querySelector('.container').append(div);
            }
        }
    } );
}

// Removing item from cart
let remove = document.querySelectorAll(".remove-item");
remove.forEach(item => {
    item.addEventListener("click", (event) => {
        removeFromCart(event.target);
    });
});

let removeFromCart = (target) => {
    // removing item from screen
    target.parentElement.remove();
    // getting food name to delete item from local storage
    let foodName = target.parentElement.id;
    // deleting item from local storage
        // getting cart items
        cartItems = localStorage.getItem("foodCart");
        // parsing
        cartItems = JSON.parse(cartItems);
        // filtering
        cartItems = cartItems.filter(item => item != foodName);
        // updating localStorage
        localStorage.setItem("foodCart", JSON.stringify(cartItems));
}

// Calculating Total Price
let total = 0;
cartItems.forEach(item => {
    for(let i=0; i<foodItems.length; i++) {
        if (item == foodItems[i].name) {
            total += foodItems[i].price;
        }

        if (total > 500) {
            document.querySelector('.total').innerHTML = `Total: <del>₹${total}</del> <br> 10% discount <br> Final Bill: ₹${Math.ceil(total - total*0.1)}`;
        } else if (total > 1000) {
            document.querySelector('.total').innerHTML = `Total: <del>₹${total}</del> <br> 20% discount <br> Final Bill: ₹${Math.ceil(total - total*0.2)}`;
        } else {
            document.querySelector('.total').innerText = `Total: ₹${total}`;
        }
    }
});

if(cartItems === [] || localStorage.getItem("foodCart") === null) {
    document.querySelector('.total').innerText = " Total: ₹0";
    document.querySelector('.checkout').innerText = "Your Cart is Empty";
}

// checkout button
    let anchor = document.getElementById("checkout");
    anchor.addEventListener("click", (e) => {
        if(cartItems === [] || localStorage.getItem("foodCart") === null) {
            e.preventDefault();
            alert("Your Cart is Empty");
        }
    } );