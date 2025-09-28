const foodItems = [
    // Indian
        // Main Course
            // Veg
            {
                name: "Butter Naan",
                cuisine : "Indian",
                price : 7,
                type : "Veg",
                course : "main",
                image : "images/menu-items/butter-naan_11zon.webp"
            },
            {
                name: "Roti",
                cuisine : "Indian",
                price : 5,
                type : "Veg",
                course : "main",
                image : "images/menu-items/roti_11zon.webp"
            },
            {
                name: "Palak Paneer",
                cuisine : "Indian",
                price : 120,
                type : "Veg",
                course : "main",
                image : "images/menu-items/palak-paneer_11zon.webp"
            },
            {
                name: "Shahi Paneer",
                cuisine : "Indian",
                price : 150,
                type : "Veg",
                course : "main",
                image : "images/menu-items/shahi-paneer_11zon.webp"
            },
            {
                name: "Paneer Lababdar",
                cuisine : "Indian",
                price : 150,
                type : "Veg",
                course : "main",
                image : "images/menu-items/paneer-lababdar_11zon.webp"
            },
            {
                name: "Kadhai Paneer",
                cuisine : "Indian",
                price : 120,
                type : "Veg",
                course : "main",
                image : "images/menu-items/kadhai-paneer_11zon.webp"
            },
            {
                name: "Malai Kofta",
                cuisine : "Indian",
                price : 150,
                type : "Veg",
                course : "main",
                image : "images/menu-items/malai-kofta_11zon.webp"
            },
            {
                name: "Daal Makhani",
                cuisine : "Indian",
                price : 100,
                type : "Veg",
                course : "main",
                image : "images/menu-items/daal-makhani_11zon.webp"
            },
            {
                name: "Veg Biryani",
                cuisine : "Indian",
                price : 150,
                type : "Veg",
                course : "main",
                image : "images/menu-items/veg-biryani_11zon.webp"
            },
            {
                name: "Idli-Sambhar-chatni",
                cuisine : "Indian",
                price : 120,
                type : "Veg",
                course : "main",
                image : "images/menu-items/idli_11zon.webp"
            },
            {
                name: "Dosa-Sambhar-Chatni",
                cuisine : "Indian",
                price : 150,
                type : "Veg",
                course : "main",
                image : "images/menu-items/dosa_11zon.webp"
            },
            
            // Non-Veg
            {
                name: "Butter Chicken",
                cuisine : "Indian",
                price : 250,
                type : "Non-Veg",
                course : "main",
                image : "images/menu-items/butter-chicken_11zon.webp"
            },
            {
                name: "Non-Veg Biryani",
                cuisine : "Indian",
                price : 200,
                type : "Non-Veg",
                course : "main",
                image : "images/menu-items/non-veg-biryani_11zon.webp"
            },
            {
                name: "Carp Fish",
                cuisine : "Indian",
                price : 250,
                type : "Non-Veg",
                course : "main",
                image : "images/menu-items/carp-fish_11zon.webp"
            },
            {
                name: "Egg Curry",
                cuisine : "Indian",
                price : 100,
                type : "Non-Veg",
                course : "main",
                image : "images/menu-items/egg-curry_11zon.webp"
            },
            {
                name: "Mutton Chaap",
                cuisine : "Indian",
                price : 150,
                type : "Non-Veg",
                course : "main",
                image : "images/menu-items/mutton-chaap_11zon.webp"
            },
            {
                name: "Omlet",
                cuisine : "Indian",
                price : 50,
                type : "Non-Veg",
                course : "main",
                image : "images/menu-items/omlet_11zon.webp"
            },

        // Starters
            // Veg
            {
                name: "Padake",
                cuisine : "Indian",
                price : 30,
                type : "Veg",
                course : "starters",
                image : "images/menu-items/padake_11zon.webp"
            },
            {
                name: "Samosa",
                cuisine : "Indian",
                price : 20,
                type : "Veg",
                course : "starters",
                image : "images/menu-items/samosa_11zon.webp"
            },
            {
                name: "Dhokla",
                cuisine : "Indian",
                price : 20,
                type : "Veg",
                course : "starters",
                image : "images/menu-items/dhokla_11zon.webp"
            },
            {
                name: "Salad",
                cuisine : "Indian",
                price : 40,
                type : "Veg",
                course : "starters",
                image : "./images/menu-items/salad_11zon.webp"
            },

            // Non-Veg

        // Drinks
            {
                name: "Nimbu Pani",
                cuisine : "Indian",
                price : 20,
                type : "Veg",
                course : "drinks",
                image : "./images/menu-items/nimbu-pani_11zon.webp"
            },
            {
                name: "Jal Jeera",
                cuisine : "Indian",
                price : 20,
                type : "Veg",
                course : "drinks",
                image : "./images/menu-items/jal-jeera_11zon.webp"
            },
            {
                name: "Mango Juice",
                cuisine : "Indian",
                price : 20,
                type : "Veg",
                course : "drinks",
                image : "./images/menu-items/aam-ras_11zon.webp"
            },
            {
                name: "Orange Juice",
                cuisine : "Indian",
                price : 10,
                type : "Veg",
                course : "drinks",
                image : "./images/menu-items/orange-juice_11zon.webp"
            },
        
        // Deserts
            {
                name: "Rasgulla",
                cuisine : "Indian",
                price : 30,
                type : "Veg",
                course : "sweets",
                image : "images/menu-items/rasgulla_11zon.webp"
            },
            {
                name: "Gulab Jamun",
                cuisine : "Indian",
                price : 30,
                type : "Veg",
                course : "sweets",
                image : "images/menu-items/gulab-jamun_11zon.webp"
            },
            {
                name: "Rasmalai",
                cuisine : "Indian",
                price : 40,
                type : "Veg",
                course : "sweets",
                image : "images/menu-items/rasmalai_11zon.webp"
            },
            {
                name: "Gajar Ka Halwa",
                cuisine : "Indian",
                price : 50,
                type : "Veg",
                course : "sweets",
                image : "images/menu-items/gajar-ka-halwa_11zon.webp"
            },
            {
                name: "Shrikhand",
                cuisine : "Indian",
                price : 60,
                type : "Veg",
                course : "sweets",
                image : "images/menu-items/shrikhand_11zon.webp"
            },
            {
                name: "Mysore Pak",
                cuisine : "Indian",
                price : 25,
                type : "Veg",
                course : "sweets",
                image : "images/menu-items/mysore-pak_11zon.webp"
            },

    // Western
        // Main Course
            // Veg
            

            // Non-Veg


        // starters
            // Veg
            {
                name: "Burger",
                cuisine : "Western",
                price : 50,
                type : "Veg",
                course : "main",
                image : "./images/menu-items/burger_11zon.webp"
            },
            {
                name: "Margarita Pizza",
                cuisine : "Western",
                price : 80,
                type : "Veg",
                course : "main",
                image : "./images/menu-items/margarita-pizza_11zon.webp"
            },
            {
                name: "Pizza with mixed Toppings",
                cuisine : "Western",
                price : 100,
                type : "Veg",
                course : "main",
                image : "./images/menu-items/pizza-different-toppings_11zon.webp"
            },
            {
                name: "Pan Cake",
                cuisine : "Western",
                price : 80,
                type : "Veg",
                course : "main",
                image : "./images/menu-items/pancake_11zon.webp"
            },
            {
                name: "Italian Creamy Pasta",
                cuisine : "Western",
                price : 100,
                type : "Veg",
                course : "main",
                image : "./images/menu-items/italian-pasta_11zon.webp"
            },

            // Non-Veg


        // Drinks
            // Veg
            {
                name: "Coke",
                cuisine : "Western",
                price : 30,
                type : "Veg",
                course : "drinks",
                image : "./images/menu-items/coke_11zon.webp"
            },
            {
                name: "Beer",
                cuisine : "Western",
                price : 60,
                type : "Veg",
                course : "drinks",
                image : "./images/menu-items/beer_11zon.webp"
            },

        // sweets
            // Veg
                {
                    name: "Croissant",
                    cuisine : "Western",
                    price : 30,
                    type : "Veg",
                    course : "sweets",
                    image : "images/menu-items/croissant_11zon.webp"
                },

    // South-Asian
        // Main Course
            // Veg


            // Non-Veg

        // starters
            // veg
                // {
                //     name: "Steamed Momos",
                //     cuisine : "South Asian",
                //     price : 60,
                //     type : "Veg",
                //     course : "starters",
                //     image : ""
                // },
                // {
                //     name: "Fried Momos",
                //     cuisine : "South Asian",
                //     price : 60,
                //     type : "Veg",
                //     course : "starters",
                //     image : ""
                // },

            // Non-Veg
                // {
                //     name: "Kimchi",
                //     cuisine : "South Asian",
                //     price : 80,
                //     type : "Non-Veg",
                //     course : "starters",
                //     image : ""
                // },
                // {
                //     name: "Sushi",
                //     cuisine : "South Asian",
                //     price : 80,
                //     type : "Non-Veg",
                //     course : "starters",
                //     image : ""
                // },
                // {
                //     name: "Steamed Momos",
                //     cuisine : "South Asian",
                //     price : 80,
                //     type : "Non-Veg",
                //     course : "starters",
                //     image : ""
                // },
                // {
                //     name: "Fried Momos",
                //     cuisine : "South Asian",
                //     price : 80,
                //     type : "Non-Veg",
                //     course : "starters",
                //     image : ""
                // },

        // Drinks

        // sweets
        // Veg

];      

export { foodItems };