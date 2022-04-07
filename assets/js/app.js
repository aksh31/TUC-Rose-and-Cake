let cl = console.log;

let cakeShop = document.getElementById("cake-time");
let searchBar = document.getElementById("search");
let arrow = document.getElementById("arrow");

let cakeArray = [
    {
        img : "./assets/images/cake-1.jpg",
        flavour : "Designer cake with Biscuit and Cones",
        prize : "Rs.1500/-",
        weight : "2 Kg",
    },
    {
        img : "./assets/images/white-1.jpg",
        flavour : "White Forest with blackberry loaded cake",
        prize : "Rs.1250/-",
        weight : "2 Kg",
    },
    {
        img : "./assets/images/fruitcake-2.jpg",
        flavour : "Strawberry Tripple layerd delight Cake",
        prize : "Rs.2100/-",
        weight : "3 Kg",
    },
    {
        img : "./assets/images/fruitcake-5.jpg",
        flavour : "Fruits Delight over loaded Cake",
        prize : "Rs.1800/-",
        weight : "1.5 Kg",
    },

    {
        img : "./assets/images/cake-2.jpg",
        flavour : "Birthday Rose Cake",
        prize : "Rs.800/-",
        weight : "1 Kg",
    },
    {
        img : "./assets/images/cake-3.jpg",
        flavour : "Birthday Choco Layer Cake",
        prize : "Rs.1500/-",
        weight : "2 Kg",
    },
    {
        img : "./assets/images/cake-4.jpg",
        flavour : "Creamy classic Delicious cake",
        prize : "Rs.1000/-",
        weight : "1 Kg",
    },
    {
        img : "./assets/images/cake-5.jpg",
        flavour : "Fruit velvet cake",
        prize : "Rs.600/-",
        weight : "1 Kg",
    },
    {
        img : "./assets/images/choco-1.jpg",
        flavour : "Chocolate Delight Cake",
        prize : "Rs.800/-",
        weight : "1.5 Kg",
    },
    {
        img : "./assets/images/choco-2.jpg",
        flavour : "Choco-Fruits layerd Cake",
        prize : "Rs.1800/-",
        weight : "2.5 Kg",
    },
    {
        img : "./assets/images/choco-3.jpg",
        flavour : "Chocolate crunchy Cake",
        prize : "Rs.800/-",
        weight : "1 Kg",
    },
    {
        img : "./assets/images/choco-4.jpg",
        flavour : "Bubble velvet Chocolate Cake",
        prize : "Rs.800/-",
        weight : "1 Kg",
    },
    {
        img : "./assets/images/choco-5.jpg",
        flavour : "Chocolate Oreo biscuit Cake",
        prize : "Rs.500/-",
        weight : "1 Kg",
    },
    {
        img : "./assets/images/fruitcake-1.jpg",
        flavour : "Fully Loaded Strawberry Cake",
        prize : "Rs.1000/-",
        weight : "1 Kg",
    },
   
    {
        img : "./assets/images/fruitcake-3.jpg",
        flavour : "Strawberry lily loaded Cake",
        prize : "Rs.1500/-",
        weight : "2 Kg",
    },
    {
        img : "./assets/images/fruitcake-4.jpg",
        flavour : "Fruits and jam layered Cake",
        prize : "Rs.1000/-",
        weight : "1 Kg",
    },
    
    {
        img : "./assets/images/pasrty-1.jpg",
        flavour : "Pastry Cake",
        prize : "Rs.600/-",
        weight : "1 Kg",
    },
    {
        img : "./assets/images/pastry-2.jpg",
        flavour : "Pastry Cake",
        prize : "Rs.600/-",
        weight : "1 Kg",
    },
    {
        img : "./assets/images/pastry-3.jpg",
        flavour : "Pastry Cake",
        prize : "Rs.600/-",
        weight : "1 Kg",
    },
    {
        img : "./assets/images/pastry-4.jpg",
        flavour : "Pastry Cake",
        prize : "Rs.600/-",
        weight : "1 Kg",
    },
    {
        img : "https://rosencakes.com/product_photo/237.jpg",
        flavour : "Chocolate oreo Cake",
        prize : "Rs.950/-",
        weight : "1.5 Kg",
    },
    {
        img : "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=726&q=80",
        flavour : "Birthday Cake",
        prize : "Rs.600/-",
        weight : "1 Kg",
    },
    {
        img : "https://rosencakes.com/product_photo/97326c6bde0bf244a97b41e3ed2144c9.jpg",
        flavour : "roses & pearls chocolate Cake",
        prize : "Rs.950/-",
        weight : "1.5 Kg",
    },
    {
        img : "https://rosencakes.com/product_photo/00(4409.jpg",
        flavour : "Fruit Overload Cake",
        prize : "Rs.999/-",
        weight : "1.5 Kg",
    },

    
    
];

function printData(arr){
    arr.forEach(ele =>{
        cakeShop.innerHTML += `
        <div class="col-md-3">
            <div class="cake-info">
                <img src="${ele.img}">
                <span>${ele.flavour}</span>
                <h3>${ele.prize}</h3>
                <h4>${ele.weight}</h4>
                <button class="btn1">Add to Cart</button>
                <button class="btn2">Buy Now</button>
            </div>    
        </div>`;
    })
}

printData(cakeArray);


searchBar.addEventListener("keyup", findCake);


function findCake(e){
        cakeShop.innerHTML ='';
        e.target.value.toLowerCase();
        let newCakeArray = cakeArray.filter(ele =>{
            let a = ele.flavour.toLowerCase();
            return a.includes(e.target.value);
        })
        // cakeArray = newCakeArray;
        printData(newCakeArray);
}






// ===========================================================

window.onscroll = function(){onScrollBtn()};

function onScrollBtn(){
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
        arrow.style.display="block";
    }
    else{
        arrow.style.display="none";
    }
}

arrow.addEventListener("click", topToScreen);

// function topToScreen(){
//     document.body.scrollTop = 0;
//     document.documentElement.scrollTop = 0;
// }

function topToScreen(){
    window.scrollTo({top:0 , behavior:"smooth"});
}

// ===========================================================






// debouncing=>

// function debounce(fn, delay){
//     let timer;
//     return(() =>{
//         clearTimeout(timer);
//         timer = setTimeout(() => fn(), delay);
//     })();
// }

// function printValue(){
//     cl("Hello javaScript");
// }

// debounce(printValue, 10000);