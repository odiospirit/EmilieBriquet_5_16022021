// on loading page - display number of items on cart


document.addEventListener('DOMContentLoaded', function() {

    let linkCart = document.querySelector(".link");
        console.log(linkCart);
        localStorage.length;

    let iconCart = linkCart.querySelector('.articles');

    let articleInfosStorage = JSON.parse(localStorage.getItem("articleInfosStorage")).length;

        console.log(iconCart);
        iconCart.textContent = articleInfosStorage;
        console.log(iconCart);
        console.log(articleInfosStorage);
  });





// How to fill my index page with informations of API teddies

// the function fillIndexPage allows to make a request to an API for get to teddies datas

async function fillIndexPage() {

    await fetch("http://127.0.0.1:3000/api/teddies") // make a request to API and get informations of API in json
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
    product.append(productList);// create in section part, ul element HTML with class product-list
    
    console.log(productList);

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

        let descriptionElements = `
            <p class="product-list__item__description__paragraphe">Mon nom est ${teddy.name}</p>
            <span class="product-list__item__description__span" data-name="${teddy.name}">Prix de vente : ${teddy.price/100} €</span>
            <button class="product-list__item__description__button" data-id="${teddy._id}">Voir le produit</button>`;// add HTML like <p>, <span> and <button> element in div element HTML to build this part with datas from API teddies (name, price) - add an attribut data-id on element button HTML

        productListItemDescription.innerHTML = descriptionElements;// add elements HTML in div element HTML
    }

    const buttons = document.querySelectorAll('.product-list__item__description__button');// select all node with class product-list__item__description__button in document

    for (var i = 0; i < buttons.length; i++) {
        var button = buttons[i];// for each loop, integrate in variable button, the actual element

        console.log(button);

        button.addEventListener('click', function(event) {
        console.log(event);// add an event listener on variable button and on event click

            const id = event.target.getAttribute("data-id")// integrate on variable id, attribute with parameter data-id of actual element
            console.log(id);

            console.log("/product.html?id=" + id);

            window.location = "/orinoco/product.html?id=" + id;// modify url on page with url + id wich is in variable id
        })
    }

};



fillIndexPage();// call function fillIndexPage
    










