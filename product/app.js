

async function fetchDAta() {
    let productsUrl =await fetch('https://dummyjson.com/products');
    // console.log(products);
    let productsInfo = await productsUrl.json();  
    console.log(productsInfo);
    return productsInfo
}
fetchDAta();
let createProduct = fetchDAta();
createProduct.then((productsInfo)=>{
    let mainInfo=document.querySelector(".maininfo")
   productsInfo.products.forEach(mainProduct => {
    let mainCard =`<div class="card" style="width: 18rem;">
  <img src="${mainProduct.images[0]}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${mainProduct.brand}</h5>
    <p class="card-text">${mainProduct.description}</p>
    <a href="#" class="btn btn-primary">${mainProduct.price} <i class="bi bi-bag"></i></a>
  </div>
</div>`
mainInfo.innerHTML+=mainCard
   }); 
   
    



});
async function fetchfoods() {
    let foodsUrl =await fetch('https://dummyjson.com/recipes');
    // console.log(products);
    let foodInfo = await foodsUrl.json();  
    console.log(foodInfo);
    return foodInfo
}
fetchfoods();
let createfoods = fetchfoods();
createfoods.then((foodInfo)=>{
    let mainFood=document.querySelector(".Foodsinfo")
   foodInfo.recipes.forEach(mainFoods => {
    let foodCard =`<div class="card" style="width: 18rem;">
  <img src="${mainFoods.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${mainFoods.name}</h5>
    <p class="card-text">${mainFoods.instructions[2]}</p>
    <a href="#" class="btn btn-primary">${mainFoods.prepTimeMinutes} </a>
  </div>
</div>`
mainFood.innerHTML+=foodCard
   }); 
   
    



});

let mainDiv =document.getElementById("user");
console.log(mainDiv);

async function dataFech() {
let user = await fetch("https://jsonplaceholder.typicode.com/users");
console.log(user);
let userInfo = await user.json();
console.log(userInfo);
let post = await fetch("https://jsonplaceholder.typicode.com/posts")
console.log(post);
let postInfo = await post.json();
console.log(postInfo);
return {userInfo,postInfo}

}
dataFech() ;
let userData =dataFech() ;
userData.then(({userInfo,postInfo})=>{
   for (let i=0;i<userInfo.length;i++){
    let mainUser =userInfo[i];
// console.log(mainUser);

    let createH1=document.createElement("h1");
    createH1.innerHTML=`userId : ${mainUser.id}`;
    // console.log(createH1);
    mainDiv.appendChild(createH1)

    let createH2=document.createElement("h2");
    createH2.innerHTML=`userName : ${mainUser.name}`;
    // console.log(createH2);
    mainDiv.appendChild(createH2);
for (let j=0;j<postInfo.length;j++){
    let mainPost =postInfo[j];
    if(mainPost.userId===mainUser.id ){
    let createh3=document.createElement("h3");
    createh3.innerHTML=`post : ${mainPost.userId}`
    mainDiv.appendChild(createh3);
    let body=document.createElement("p");
    body.innerHTML=`post body : ${mainPost.body}`
    mainDiv.appendChild(body)

    let title=document.createElement("p");
    title.innerHTML=`post title : ${mainPost.title}`
    mainDiv.appendChild(title)

    }
}


   }

}).catch((error)=>{
    console.log(error);
    
})