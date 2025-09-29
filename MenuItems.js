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
                name: "Salad",
                cuisine : "Indian",
                price : 40,
                type : "Veg",
                course : "starters",
                image : "./images/menu-items/salad_11zon.webp"
            },
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
                name: "Aloo Tikki",
                cuisine : "Indian",
                price : 25,
                type : "Veg",
                course : "starters",
                image : "images/menu-items/aloo-tikki.webp"
            },
            {
                name: "Paneer Tikka",
                cuisine : "Indian",
                price : 40,
                type : "Veg",
                course : "starters",
                image : "images/menu-items/paneer-tikka.webp"
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
                name: "Khandvi",
                cuisine : "Indian",
                price : 30,
                type : "Veg",
                course : "starters",
                image : "images/menu-items/khandvi_11zon.webp"
            },

            // Non-Veg

        // Drinks
            {
                name: "Special Chai",
                cuisine : "Indian",
                price : 25,
                type : "Veg",
                course : "drinks",
                image : "./images/menu-items/chai.webp"
            },
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
                name: "Special Lassi",
                cuisine : "Indian",
                price : 30,
                type : "Veg",
                course : "drinks",
                image : "./images/menu-items/lassi_11zon.webp"
            },
            {
                name: "Special Thandai",
                cuisine : "Indian",
                price : 30,
                type : "Veg",
                course : "drinks",
                image : "./images/menu-items/thandai_11zon.webp"
            },
            {
                name: "Aam Ras",
                cuisine : "Indian",
                price : 20,
                type : "Veg",
                course : "drinks",
                image : "./images/menu-items/aam-ras.webp"
            },
            {
                name: "Kanji",
                cuisine : "Indian",
                price : 20,
                type : "Veg",
                course : "drinks",
                image : "./images/menu-items/kanji.webp"
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
            {
                name: "Burger",
                cuisine : "Western",
                price : 50,
                type : "Veg",
                course : "main",
                image : "./images/menu-items/burger_11zon.webp"
            },
            {
                name: "Hotdog",
                cuisine : "Western",
                price : 50,
                type : "Veg",
                course : "main",
                image : "./images/menu-items/hotdog_11zon.webp"
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
                name: "Italian Creamy Pasta",
                cuisine : "Western",
                price : 100,
                type : "Veg",
                course : "main",
                image : "./images/menu-items/italian-pasta_11zon.webp"
            },
            
            // Non-Veg
            {
                name: "Cod Fish",
                cuisine : "Western",
                price : 130,
                type : "Non-Veg",
                course : "main",
                image : "./images/menu-items/cod-fish_11zon.webp"
            },
            {
                name: "Pork Chops",
                cuisine : "Western",
                price : 100,
                type : "Non-Veg",
                course : "main",
                image : "./images/menu-items/pork-chops_11zon.webp"
            },

        // starters
            // Veg
            {
                name: "Avacado Toast",
                cuisine : "Western",
                price : 40,
                type : "Veg",
                course : "starters",
                image : "./images/menu-items/avocado-toast_11zon.webp"
            },
            {
                name: "Cheese Crisp",
                cuisine : "Western",
                price : 40,
                type : "Veg",
                course : "starters",
                image : "./images/menu-items/cheese-crisp_11zon.webp"
            },
            {
                name: "Pan Cake",
                cuisine : "Western",
                price : 80,
                type : "Veg",
                course : "starters",
                image : "./images/menu-items/pancake_11zon.webp"
            },
            {
                name: "French Fries",
                cuisine : "Western",
                price : 40,
                type : "Veg",
                course : "starters",
                image : "./images/menu-items/french-fries_11zon.webp"
            },
            
            // Non-Veg
            {
                name: "Varenyky Dumplings",
                cuisine : "Western",
                price : 60,
                type : "Non-Veg",
                course : "starters",
                image : "./images/menu-items/varenyky-dumplings_11zon.webp"
            },
            {
                name: "Meatballs",
                cuisine : "Western",
                price : 60,
                type : "Non-Veg",
                course : "starters",
                image : "./images/menu-items/meatballs_11zon.webp"
            },
            
        // Drinks
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
            {
                name: "Pad Thai",
                cuisine : "South East Asian",
                price : 120,
                type : "Veg",
                course : "main",
                image : "./images/menu-items/pad-thai.webp"
            },

            // Non-Veg
            {
                name: "Khao Soi",
                cuisine : "South East Asian",
                price : 150,
                type : "Non-Veg",
                course : "main",
                image : "./images/menu-items/khao-soi.webp"
            },
            {
                name: "Filipino Stew",
                cuisine : "South East Asian",
                price : 180,
                type : "Non-Veg",
                course : "main",
                image : "./images/menu-items/filipino-stew.webp"
            },
            

        // starters
            // veg
            {
                name: "Veg Steamed Momos",
                cuisine : "South East Asian",
                price : 60,
                type : "Veg",
                course : "starters",
                image : "./images/menu-items/steamed-momos_11zon.webp"
            },
            {
                name: "Veg Fried Momos",
                cuisine : "South East Asian",
                price : 60,
                type : "Veg",
                course : "starters",
                image : "./images/menu-items/fried-momos_11zon.webp"
            },

            // Non-Veg
            {
                name: "Kimchi",
                cuisine : "South East Asian",
                price : 80,
                type : "Non-Veg",
                course : "starters",
                image : "./images/menu-items/kimchi_11zon.webp"
            },
            {
                name: "Sushi",
                cuisine : "South East Asian",
                price : 80,
                type : "Non-Veg",
                course : "starters",
                image : "./images/menu-items/sushi_11zon.webp"
            },
            {
                name: "Non-Veg Steamed Momos",
                cuisine : "South East Asian",
                price : 80,
                type : "Non-Veg",
                course : "starters",
                image : "./images/menu-items/steamed-momos_11zon.webp"
            },
            {
                name: "Non-Veg Fried Momos",
                cuisine : "South East Asian",
                price : 80,
                type : "Non-Veg",
                course : "starters",
                image : "./images/menu-items/fried-momos_11zon.webp"
            },

        // Drinks
        {
            name: "Veitnamese Iced Coconut Coffee",
            cuisine : "South East Asian",
            price : 30,
            type : "Veg",
            course : "drinks",
            image : "./images/menu-items/iced-coconut-coffee.webp"
        },
        {
            name: "Veitnamese Yogurt Coffee",
            cuisine : "South East Asian",
            price : 30,
            type : "Veg",
            course : "drinks",
            image : "./images/menu-items/yogurt-coffee.webp"
        },
        {
            name: "Singapore Sling",
            cuisine : "South East Asian",
            price : 60,
            type : "Veg",
            course : "drinks",
            image : "./images/menu-items/singapore-sling.webp"
        },

        // sweets
            // Veg
            {
                name: "Pisang Goreng",
                cuisine : "South East Asian",
                price : 40,
                type : "Veg",
                course : "sweets",
                image : "images/menu-items/pisang-goreng.webp"
            },
            {
                name: "Apam Balik",
                cuisine : "South East Asian",
                price : 40,
                type : "Veg",
                course : "sweets",
                image : "images/menu-items/apam-balik.webp"
            },
            {
                name: "Kleon",
                cuisine : "South East Asian",
                price : 50,
                type : "Veg",
                course : "sweets",
                image : "images/menu-items/klepon_11zon.webp"
            },
            {
                name: "Sorbetes Ice Cream",
                cuisine : "South East Asian",
                price : 60,
                type : "Veg",
                course : "sweets",
                image : "images/menu-items/sorbetes-ice-cream_11zon.webp"
            },
            {
                name: "Odading",
                cuisine : "South East Asian",
                price : 50,
                type : "Veg",
                course : "sweets",
                image : "images/menu-items/odading_11zon.webp"
            },

            // Non-Veg
            {
                name: "Leche Flan",
                cuisine : "South East Asian",
                price : 40,
                type : "Veg",
                course : "sweets",
                image : "images/menu-items/leche-flan.webp"
            }
];      

export { foodItems };