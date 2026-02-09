// // Call() Bind() and apply() /////////////////


// const stores = [
//     {
//         storeName: "Apple",
//         price: 1000
//     },
//     {
//         storeName: "Bakery",
//         price: 300
//     }
// ]


// const printStoreName = function(){
//     console.log(this.storeName);
// }

// stores


// store = stores have 5 items: itemname, itemprice:

// function: add all price of items:
// const stores = [
//     {
//         storeName: "Apple Store",
//         items: [
//             { name: "iPhone 15", price: 79900 },
//             { name: "MacBook Air M2", price: 114900 },
//             { name: "AirPods Pro", price: 24900 }
//         ]
//     },
//     {
//         storeName: "Samsung Store",
//         items: [
//             { name: "Galaxy S24", price: 74999 },
//             { name: "Galaxy Tab S9", price: 58999 },
//             { name: "Galaxy Buds 2", price: 11999 }
//         ]
//     },
//     {
//         storeName: "Nike Store",
//         items: [
//             { name: "Air Jordan 1", price: 12999 },
//             { name: "Nike Air Max", price: 9999 },
//             { name: "Nike Dri-FIT T-Shirt", price: 2499 }
//         ]
//     },
//     {
//         storeName: "Adidas Store",
//         items: [
//             { name: "Ultraboost Shoes", price: 15999 },
//             { name: "Adidas Tracksuit", price: 6999 },
//             { name: "Adidas Cap", price: 1999 }
//         ]
//     },
//     {
//         storeName: "Amazon Store",
//         items: [
//             { name: "Echo Dot", price: 4499 },
//             { name: "Fire TV Stick", price: 3999 },
//             { name: "Kindle Paperwhite", price: 13999 }
//         ]
//     },
//     {
//         storeName: "Reliance Digital",
//         items: [
//             { name: "Sony LED TV", price: 45999 },
//             { name: "HP Pavilion Laptop", price: 64999 },
//             { name: "Boat Rockerz Headphones", price: 2999 }
//         ]
//     }
// ];


// const sumFunction = function () {
//     let sum = 0;
//     this.items.forEach((elem)=>{
//         sum += elem.price
//     })

//     console.log(`${this.storeName} => ${sum}`);
// }


// stores.forEach((store)=>{
//     // let res = sumFunction.bind(store);
//     // res();
//     // sumFunction.call(store)
//     sumFunction.apply(store)
// })


// Client & Server side render = next.Js

//            WEB STORAGE                   //
// web worker server worker



// document.cookie = 'token=#29ASJFDYG38873452SG376512';
// document.cookie = 'User=Suryakumar';
// document.cookie = 'Lecture=Yoyo';
// document.cookie = 'Theme=Dark';
// document.cookie = 'isLiked=true';
// document.cookie = 'isUser=true';
// document.cookie = 'isStudent=true';
// document.cookie = 'isOk=false';
// function readAllCookies() {
//     let cookies = document.cookie;
//     console.log(cookies);
// }

// readAllCookies();

// localStorage.setItem('username', 'ali');
// let ver = localStorage.getItem('username');

// console.log(ver)

