const products = [
    {
        id : 1,
        name : "coffee ice latte",
        img : "img/coffe.jpg",
        price : 2.99,
        category : "coffee",
        description : "Coffee ice latte"
    },
    {
        id : 2,
        name : "Bubble Tea",
        img : "img/Bubble.png",
        price : 1.99,
        category : "coffee",
        description : "Chocolate ice cream"
    },
    {
        id : 3,
        name : "Mocha Frappes",
        img : "img/bubble1.jpg",
        price : 1.99,
        category : "food",
        description : "Making Mocha Frappes at Home"
    },
    {
        id : 4,
        name : "Fudgey",
        img : "img/fudgey.jpg",
        price : 1.99,
        category : "food",
        description : "The Latest Fudgey Starbucks"
    }
    ,
    {
        id : 5,
        name : "Hambergeur",
        img : "img/hamburger.jpg",
        price : 2.99,
        category : "bread",
        description : "Hambergeur cheese"
    },
    {
        id : 6,
        name : "fried chicken",
        img : "img/checken.jpg",
        price : 2.99,
        category : "frappe",
        description : " fried chicken with tomatoes"
    },
    {
        id : 7,
        name : "Milk",
        img : "img/Green-Milk-Tea.webp",
        price : 2.99,
        category : "milk",
        description : " strawberry milk "
    },
    {
        id : 8,
        name : "Hot Coffee",
        img : "img/hot.jpg",
        price : 2.99,
        category : "coffee",
        description : " cold Coffee "
    },
    {
        id : 9,
        name : "Coffee",
        img : "img/iced latte.jpg",
        price : 2.99,
        category : "coffee",
        description : " Coffee "
    },
    {
        id : 10,
        name : " Hot chocolate",
       img: "img/Hotcho.jpg",
        price : 2.99,
        category : "coffee",
        description : " Coffee "
    },
    {
        id : 11,
        name : "Hambergeur ",
        img : "img/ham.jpg",
        price : 2.99,
        category : "frappe ",
        description : " food "
    },
    {
        id : 12,
        name : "food",
        img : "img/checken.jpg",
        price : 2.99,
        category : "frappe",
        description : "coffee frappe"
    }
];

const allproducts = document.querySelector('.product-list');
function output(products){
    let html = '';
    products.forEach(p => {
        html += `
            <div class="col-lg-3 col-md-6 col-12 box">
                <div class="card mb-3">
                    <div class="card-img">
                    <img src="${p.img}" class="card-img-top" alt="...">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">${p.name}</h5>
                        <p class="card-text">${p.description}</p>
                        <p class=" card-text price">$${p.price}</p>
                        <a href="#" class="add">Add to cart</a>
                    </div>

                </div>
            </div>
        `;
    });
    return html;
}
function displaytohtml(products){
    allproducts.innerHTML = output(products);
}
displaytohtml(products);

// scroll to change background on navbar
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if(window.scrollY > 0){
        navbar.classList.add('fixed-top');
    }
    else{
        navbar.classList.remove('fixed-top');
    }
});

// search item
const search = document.getElementById('search-item');
search.addEventListener('input' ,function(e){
    let valueinput = e.target.value.toLowerCase(); //frappe
    const check = products.filter(p =>{
        return p.name.toLowerCase().includes(valueinput);//frappe
    })
    displaytohtml(check);
});
const Allproducts = document.querySelector('#showAll');

Allproducts.addEventListener('click', function(){
    displaytohtml(products);
});
const iconcoffe = document.querySelector('#btn-1');
iconcoffe.addEventListener('click', function(){
    displaytohtml(products.filter(p => p.category === 'coffee'));
}); 


const iconbreads = document.querySelector('#btn-2');

iconbreads.addEventListener('click', function(){
    displaytohtml(products.filter(p => p.category === 'bread'));
});

const iconmilk = document.querySelector('#btn-3');

iconmilk.addEventListener('click', function(){
    displaytohtml(products.filter(p => p.category ==='milk'));
});

const iconfood = document.querySelector('#btn-4');

iconfood.addEventListener('click', function(){
    displaytohtml(products.filter(p => p.category === 'food'));
});

const iconfrappe = document.querySelector('#btn-5');

iconfrappe.addEventListener('click', function(){
    displaytohtml(products.filter(p => p.category === 'frappe'));
});
const moon = document.querySelector('.moon'),
body = document.body,
header = document.querySelector('header');
//when user clicks on icon moon the  background changes to black all text white and change icon to sun
moon.addEventListener('click', () => {
   body.classList.toggle('dark');
   moon.classList.toggle('dark');
   moon.classList.toggle('bxs-sun');
   header.classList.toggle('dark');
});