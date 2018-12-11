 

 axios.get("https://www.redbullshopus.com/products.json")
.then(res =>{
    for(let i = 0; i<res.data.products.length; ++i){
    
    let img = document.createElement("img")
    img.src = res.data.products[i].images[0].src;
    let p = document.createElement("p");
    let p2 = document.createElement("p");
    p2.innerHTML = res.data.products[i].vendor;
    let div = document.querySelector("div");
    let div1 = document.createElement("div");
    div1.style.border = "solid 2px";
    div1.style.padding = "15px";
    let price = document.createElement("p");
    price.innerHTML = res.data.products[i].variants[0].price;
    p.innerText = res.data.products[i].variants[0].title;
    div.appendChild(div1);
   
    div1.appendChild(img);
div1.appendChild(price);
div1.appendChild(p);
div1.append(p2);


    }
    

})