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



function displayCart(articleCart){

    for (let article of articleCart){

        let cartItems = document.querySelector(".cart-items");

        let cartItemsList = 
        
        `<ul class="cart-items__list">
            <li class="cart-items__list__li"><p class="cart-items__list__li__entitled">Article</p><img src="${article.imageUrl}"/></li>
            <li id="description" class="cart-items__list__li">
                <p class="cart-items__list__li__entitled">Descriptif</p>
                <span class="name">${article.name}</span>
                <span class="description">${article.description}</span>
            </li>
            <li class="cart-items__list__li"><p class="cart-items__list__li__entitled">Quantité</p>
                <select name="quantity" id="quantity_option">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select> 
            </li>
            <li class="cart-items__list__li"><p class="cart-items__list__li__entitled">Total</p></li>
            <li id="delete"><i class="far fa-trash-alt"></i></li>

        </ul>`

        cartItems.innerHTML += cartItemsList;

    }

};

let articleCart = JSON.parse(localStorage.getItem("articleInfosStorage"));
displayCart(articleCart);




























