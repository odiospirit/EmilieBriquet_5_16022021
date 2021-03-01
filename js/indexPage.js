// How to fill my index page with informations of API teddies

// the function fillIndexPage allows to make a request to an API for get to teddies datas

async function fillIndexPage() {

    await fetch("https://oc-p5-api.herokuapp.com/api/teddies") // make a request to API and get informations of API in json
        .then((response) => response.json())// when response of API arrive, this response is integrate on a variable response and then to this variable, it passed a function .json () to decode response in json


        .then((teddies) => {
            console.log(teddies)
            displayTeddiesInformation(teddies)
        })// when response is decode in json, then the result is integrate on a variable which called teddies and then what it make with this variable, it make a console.log for watch the response encoding in json and a function which is to build HTML on index page

};


// the function displayTeddiesInformation allows to build HTML with teddies informations

function displayTeddiesInformation(teddies) {

    let product = document.querySelector(".product");
    console.log(product);// select element in this case section part

    let productList = document.createElement("ul");
    productList.classList.add("product-list");

    product.append(productList);
    
    console.log(productList);// create in section part, ul element HTML with class product-list

    for (let teddy of teddies){
        let productListItem = document.createElement("li");
        productListItem.classList.add("product-list__item");
        productList.append(productListItem);
        
        console.log(productListItem);// create in ul element HTML, li element HTML with class product-list__item

        let productListItemImg = document.createElement("img");
        productListItemImg.classList.add("product-list__item__img");
        productListItem.append(productListItemImg);// create in li element HTML, img element HTML with class product-list__item__img
        productListItemImg.setAttribute("src", teddy.imageUrl);// display image of teddy in img element HTML

        let productListItemDescription = document.createElement("div");
        productListItemDescription.classList.add("product-list__item__description");
        productListItem.append(productListItemDescription);// create in li element HTML, div element HTML with class product-list__item__description

        let descriptionNode = `
            <p class="product-list__item__description__paragraphe">Mon nom est ${teddy.name}</p>
            <span class="product-list__item__description__span">Prix de vente : ${teddy.price/100} €</span>
            <button class="product-list__item__description__button">Voir le produit</button>`;// add HTML like <p>, <span> and <button> element in div element HTML to build this part with datas from API teddies (name, price)

        productListItemDescription.innerHTML = descriptionNode;

    }
};

// call function fillIndexPage

fillIndexPage();
    










