let cl = console.log;

let cakeShop = document.getElementById("cake-time");

let cakesOnly = document.getElementById("cakes-only");
let rosesOnly = document.getElementById("roses-only");
let pastriesOnly = document.getElementById("pastries-only");
cl(pastriesOnly);

let searchBar = document.getElementById("search");
let arrow = document.getElementById("arrow");

let cakeArray = [
    {
        img : "./assets/images/cake-1.jpg",
        name : "Designer cake with Biscuit and Cones",
        prize : "Rs.1500/-",
        weight : "2 Kg",
    },
    {
        img : "./assets/images/white-1.jpg",
        name : "White Forest with blackberry loaded cake",
        prize : "Rs.1250/-",
        weight : "2 Kg",
    },
    {
        img : "./assets/images/fruitcake-2.jpg",
        name : "Strawberry Tripple layerd delight Cake",
        prize : "Rs.2100/-",
        weight : "3 Kg",
    },
    {
        img : "./assets/images/fruitcake-5.jpg",
        name : "Fruits Delight over loaded Cake",
        prize : "Rs.1800/-",
        weight : "1.5 Kg",
    },

    {
        img : "./assets/images/cake-2.jpg",
        name : "Birthday Rose Cake",
        prize : "Rs.800/-",
        weight : "1 Kg",
    },
    {
        img : "./assets/images/cake-3.jpg",
        name : "Birthday Choco Layer Cake",
        prize : "Rs.1500/-",
        weight : "2 Kg",
    },
    {
        img : "./assets/images/cake-4.jpg",
        name : "Creamy classic Delicious cake",
        prize : "Rs.1000/-",
        weight : "1 Kg",
    },
    {
        img : "./assets/images/cake-5.jpg",
        name : "Fruit velvet cake",
        prize : "Rs.600/-",
        weight : "1 Kg",
    },
    {
        img : "./assets/images/choco-1.jpg",
        name : "Chocolate Delight Cake",
        prize : "Rs.800/-",
        weight : "1.5 Kg",
    },
    {
        img : "./assets/images/choco-2.jpg",
        name : "Choco-Fruits layerd Cake",
        prize : "Rs.1800/-",
        weight : "2.5 Kg",
    },
    {
        img : "./assets/images/choco-3.jpg",
        name : "Chocolate crunchy Cake",
        prize : "Rs.800/-",
        weight : "1 Kg",
    },
    {
        img : "./assets/images/choco-4.jpg",
        name : "Bubble velvet Chocolate Cake",
        prize : "Rs.800/-",
        weight : "1 Kg",
    },
    {
        img : "./assets/images/choco-5.jpg",
        name : "Chocolate Oreo biscuit Cake",
        prize : "Rs.500/-",
        weight : "1 Kg",
    },
    {
        img : "./assets/images/fruitcake-1.jpg",
        name : "Fully Loaded Strawberry Cake",
        prize : "Rs.1000/-",
        weight : "1 Kg",
    },
   
    {
        img : "./assets/images/fruitcake-3.jpg",
        name : "Strawberry lily loaded Cake",
        prize : "Rs.1500/-",
        weight : "2 Kg",
    },
    {
        img : "./assets/images/fruitcake-4.jpg",
        name : "Fruits and jam layered Cake",
        prize : "Rs.1000/-",
        weight : "1 Kg",
    },

    {
        img : "https://rosencakes.com/product_photo/237.jpg",
        name : "Chocolate oreo Cake",
        prize : "Rs.950/-",
        weight : "1.5 Kg",
    },
    {
        img : "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=726&q=80",
        name : "Birthday Cake",
        prize : "Rs.600/-",
        weight : "1 Kg",
    },
    {
        img : "https://rosencakes.com/product_photo/97326c6bde0bf244a97b41e3ed2144c9.jpg",
        name : "roses & pearls chocolate Cake",
        prize : "Rs.950/-",
        weight : "1.5 Kg",
    },
    {
        img : "https://rosencakes.com/product_photo/00(4409.jpg",
        name : "Fruit Overload Cake",
        prize : "Rs.999/-",
        weight : "1.5 Kg",
    },

    //Pastries
    

    {
        img : "./assets/images/pasrty-1.jpg",
        name : "Chocolate Pastry",
        prize : "Rs.400/-",
        weight : "1 Kg",
    },
    {
        img : "./assets/images/pastry-2.jpg",
        name : "Flavoured Kitkat Pastry",
        prize : "Rs.400/-",
        weight : "1 Kg",
    },
    {
        img : "./assets/images/pastry-3.jpg",
        name : "Mix-Fruit Pastry",
        prize : "Rs.500/-",
        weight : "1 Kg",
    },
    {
        img : "./assets/images/pastry-4.jpg",
        name : "Creamy Cup-cake Pastry",
        prize : "Rs.300/-",
        weight : "1 Kg",
    },
    {
        img : "https://rosencakes.com/product_photo/309.jpg",
        name : "Pineapple pastry 6pc",
        prize : "Rs.750/-",
    },
    {
        img : "https://rosencakes.com/product_photo/00(4236.jpg",
        name : "mango cup-cake pastry",
        prize : "Rs.950/-",
    },
    {
        img : "https://rosencakes.com/product_photo/00(4215.jpg",
        name : "chco lava pastry",
        prize : "Rs.999/-",
    },
    {
        img : "https://rosencakes.com/product_photo/00(4052.jpg",
        name : "Mocha pastry",
        prize : "Rs.850/-",
    },
    {
        img : "https://rosencakes.com/product_photo/00(4049.jpg",
        name : "Choco special pastry",
        prize : "Rs.850/-",
    },
    {
        img : "https://rosencakes.com/product_photo/00(4050.jpg",
        name : "Chocolate vanilla pastry",
        prize : "Rs.899/-",
    },
    {
        img : "https://rosencakes.com/product_photo/00(354~0.jpg",
        name : "Vanilla cup-cakes pastry",
        prize : "Rs.699/-",
    },
    {
        img : "https://rosencakes.com/product_photo/00(361~0.jpg",
        name : "Pink rose cup pastry",
        prize : "Rs.799/-",
    },


    // flowers
    {
        img : "https://rosencakes.com/product_photo/96~0.jpg",
        name : "Mixed Gerberas Vase flowers",
        prize : "Rs.750/-",
    },
    {
        img : "https://rosencakes.com/product_photo/28~2.jpg",
        name : "Sweet Pink Heart flowers",
        prize : "Rs.1850/-",
    },
    {
        img : "https://rosencakes.com/product_photo/25~3.jpg",
        name : "heartshaped arrangement flowers",
        prize : "Rs.1899/-",
    },
    {
        img : "https://rosencakes.com/product_photo/24~2.jpg",
        name : "Pink Roses Vase flowers",
        prize : "Rs.950/-",
    },
    {
        img : "https://rosencakes.com/product_photo/23~2.jpg",
        name : "Red Roses vase flowers",
        prize : "Rs.900/-",
    },
    {
        img : "https://rosencakes.com/product_photo/17~2.jpg",
        name : "Roses in wooden flowers basket",
        prize : "Rs.899/-",
    },
    {
        img : "https://rosencakes.com/product_photo/16~2.jpg",
        name : "Pink roses in wooden flowers basket",
        prize : "Rs.899/-",
    },
    {
        img : "https://rosencakes.com/product_photo/305.jpg",
        name : "Birthday red roses bouqet flowers",
        prize : "Rs.1350/-",
    },
    {
        img : "https://rosencakes.com/product_photo/293.jpg",
        name : "elegent basket flowers",
        prize : "Rs.1500/-",
    },
    {
        img : "https://rosencakes.com/product_photo/294.jpg",
        name : "classic rose basket flowers",
        prize : "Rs.999/-",
    },
    {
        img : "https://rosencakes.com/product_photo/292.jpg",
        name : "sparkling Flowers basket",
        prize : "Rs.1250/-",
    },
    {
        img : "https://rosencakes.com/product_photo/239.jpg",
        name : "Pink roses valentine arrg flowers",
        prize : "Rs.1650/-",
    },
    {
        img : "https://rosencakes.com/product_photo/81.jpg",
        name : "flowers vase full of love",
        prize : "Rs.950/-",
    },
    {
        img : "https://rosencakes.com/product_photo/68.jpg",
        name : "red & yellow gerberas flowers arrg",
        prize : "Rs.999/-",
    },
    {
        img : "https://rosencakes.com/product_photo/58~0.jpg",
        name : "yellow rose & lily flowers bouquet",
        prize : "Rs.900/-",
    },
    {
        img : "https://rosencakes.com/product_photo/66.jpg",
        name : "zesty youthful flowers beauty",
        prize : "Rs.1250/-",
    },
    {
        img : "https://rosencakes.com/product_photo/00(2913.jpg",
        name : "precious hearty love flowers",
        prize : "Rs.2200/-",
    },
    
];

// all functions
// ===========================================================

function printData(arr){
    arr.forEach(ele =>{
        cakeShop.innerHTML += `
        <div class="col-md-3">
            <div class="cake-info">
                <img src="${ele.img}">
                <span>${ele.name}</span>
                <h3>${ele.prize}</h3>
                
                <button class="btn1">Add to Cart</button>
                <button class="btn2">Buy Now</button>
            </div>    
        </div>`;
    })
}

printData(cakeArray);




function findCake(e){
    cakeShop.innerHTML ='';
    e.target.value.toLowerCase();
    let newCakeArray = cakeArray.filter(ele =>{
        let a = ele.name.toLowerCase();
        return a.includes(e.target.value);
    })
    printData(newCakeArray);
}

function findCakesOnly(){
    cakeShop.innerHTML ="";
    let onlyCakeArray = cakeArray.filter(ele =>{
        let item = ele.name.toLowerCase();
        return item.includes("cake")
    })
    printData(onlyCakeArray);
}

function findRosesOnly(){
    cakeShop.innerHTML ="";
    let roseArray = cakeArray.filter(ele =>{
        let item = ele.name.toLowerCase();
        return item.includes("flowers")
    })
    printData(roseArray);
}

function findPastriesOnly(){
    cakeShop.innerHTML ="";
    let pastryArray = cakeArray.filter(ele =>{
        let item = ele.name.toLowerCase();
        return item.includes("pastry")
    })
    printData(pastryArray);
}


// All event listener
// ===========================================================
searchBar.addEventListener("keyup", findCake);

cakesOnly.addEventListener("click", findCakesOnly);
rosesOnly.addEventListener("click", findRosesOnly);
pastriesOnly.addEventListener("click", findPastriesOnly);




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