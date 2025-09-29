// Data AOS Animation
    AOS.init();

// checking if user is logged in
    if (localStorage.getItem('isLoginSuccessful') === 'yes') {
        document.querySelector("nav").innerHTML = `
            <ul>
                <li>
                    <a href="./home.html">
                        Home
                    </a>
                </li>
                <li>
                    <a href="./contact.html">
                        Contact
                    </a>
                </li>
                <li>
                    <a href="./cart.html">
                        <i class="fa-solid fa-cart-shopping">0</i>
                    </a>
                </li>
                <li class="logout">
                    <a href="">
                        <strong>Log out</strong>
                        <i class="fa-solid fa-right-from-bracket"></i>
                    </a>
                </li>
            </ul>
        `;

        // Logout
            document.querySelector('.logout').addEventListener('click', () => {
                localStorage.setItem('isLoginSuccessful', 'no');
                window.location.href = "./home.html";
            } );
    }
    

// importing food Array of Objects
    import {foodItems} from './MenuItems.js';

let count = 1;
let value = 1;
let menu = document.querySelector('.menu-items');

// Adding food items
    let addMenu = (foodItems) => {
        foodItems.forEach(item => {
            let div = document.createElement("div");
            div.classList.add("food-item");
            div.setAttribute("data-aos", "fade-down");
            div.setAttribute("data-aos-once", "true");
            div.innerHTML = `
                <div class="food-img img${count++}">
                    <img src="${item.image}">
                </div>
                <div class="food-info">
                    <div class="food-padding">
                        <h2>${item.name}</h2>
                        <p>&#8377; ${item.price}</p>
                        <button class="add-to-cart">Add to Cart</button>
                    </div>
                </div>
            `;
            menu.append(div);
        } );
    }
    addMenu(foodItems); //dunction calling on page load

// Animation on food item cards
    document.querySelectorAll('.food-item').forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.transform = "scale(1.1)";
        } );
        item.addEventListener('mouseout', () => {
            item.style.transform = "scale(1)";
        } );
    } );

// Sorting & Filtering
    let asc = document.querySelector(".sort-ascend");
    let desc = document.querySelector(".sort-descend");
    let filter = document.querySelector(".filter");
    // Filtering
        let filterMenu = () => {
            menu.innerHTML = "";
            let cuisineValue = document.getElementById("cuisines").value;
            let courseValue = document.getElementById("course").value;
            let typeValue = document.getElementById("type").value;
            
            if (cuisineValue == "All" && courseValue == "All" && typeValue == "All") { // all + all + all
                return foodItems;  
            } else if (cuisineValue == "All" && courseValue == "All" && typeValue != "All") { // type
                return foodItems.filter(item => item.type == typeValue);
            } else if (cuisineValue == "All" && courseValue != "All" && typeValue == "All") { // course
                return foodItems.filter(item => item.course == courseValue);
            } else if (cuisineValue != "All" && courseValue == "All" && typeValue == "All") { // cuisine
                return foodItems.filter(item => item.cuisine == cuisineValue); 
            } else if (cuisineValue != "All" && courseValue != "All" && typeValue == "All") { // cuisine + course
                return foodItems.filter(item => item.cuisine == cuisineValue && item.course == courseValue);
            } else if (cuisineValue != "All" && courseValue == "All" && typeValue != "All") { // cuisine + type
                return foodItems.filter(item => item.cuisine == cuisineValue && item.type == typeValue);
            } else if (cuisineValue == "All" && courseValue != "All" && typeValue != "All") { // course + type
                return foodItems.filter(item => item.course == courseValue && item.type == typeValue);
            } else { // cuisine + course + type
                return foodItems.filter(item => item.cuisine == cuisineValue && item.course == courseValue && item.type == typeValue);
            }
        }

        filter.addEventListener("click", () => {
            addMenu(filterMenu());
        });

    // Sorting
        // Ascending
            let sortAscMenu = (list) => {
                menu.innerHTML = "";
                list.sort( (a, b) => {
                    for(let i=0; i<list.length; i++) {
                        if (a.price <= b.price) return -1;
                        if (a.price > b.price) return 1;
                    }
                } );
                addMenu(list);
            }

            asc.addEventListener("click", () => {
                let list = filterMenu();
                sortAscMenu(list);
            });

        // Descending
            let sortDescMenu = (list) => {
                menu.innerHTML = "";
                list.sort( (a, b) => {
                    for(let i=0; i<list.length; i++) {
                        if (a.price <= b.price) return 1;
                        if (a.price > b.price) return -1;
                    }
                } );
                addMenu(list);
            }

            desc.addEventListener("click", () => {
                let list = filterMenu();
                sortDescMenu(list);
            } );

// Render cart
    // getting food cart item form localStorage
    let foodCart = localStorage.getItem("foodCart");
    //n parsing items
    let cartItems = foodCart ? JSON.parse(foodCart) : [];
    // updating cart count
    document.querySelector(".fa-cart-shopping").innerText = cartItems.length;
    value = cartItems.length;

// Adding food items to cart
    let addToCart = (event) => {
        document.querySelector(".fa-cart-shopping").innerText = ++value;
        let foodName = event.target.previousElementSibling.previousElementSibling.innerText;
        cartItems.push(foodName);
        localStorage.setItem("foodCart", JSON.stringify(cartItems));
    }

    document.querySelectorAll(".add-to-cart").forEach(btn => {
        btn.addEventListener("click", (event) => addToCart(event));
    } );