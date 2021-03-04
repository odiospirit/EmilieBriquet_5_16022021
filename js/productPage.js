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



/*How to fill my index page with informations of API teddies*/

/*the function fillIndexPage allows to make a request to an API for get to teddies datas*/

let teddyInfos = {};


async function fillPageProduct(id) {

    await fetch("http://127.0.0.1:3000/api/teddies/" + id) /*make a request to API and get informations of API in json*/
        .then((response) => response.json())/*when response of API arrive, this response is integrate on a variable response and then to this variable, it passed a function .json () to decode response in json*/

        .then((teddy) => displayTeddyDetailsView(teddy))/*when response is decode in json, then the result is integrate on a variable which called teddy and then what it make with this variable, it make a function which is to build HTML on product page*/

};



/*the function displayTeddyDetailsView allows to build HTML with teddy informations*/

function displayTeddyDetailsView(teddy) {

    teddyInfos = teddy;

    let details = document.querySelector(".details");
    console.log(details);// select element in this case section part

    let detailsTeddy = document.createElement("div");
    detailsTeddy.classList.add("details-teddy");
    details.append(detailsTeddy);// create in section part, div element HTML with class details-teddy
    
    console.log(detailsTeddy);

    let imageTeddy = document.createElement("img");
    imageTeddy.setAttribute("src",teddy.imageUrl);
    detailsTeddy.append(imageTeddy);// create in div element HTML, img element HTML and display image of teddy concerned

    let detailsTeddyList = `
        <ul class="details-teddy__list">
            <li id="name_teddy">${teddy.name}</li>
            <li id="description_teddy">${teddy.description}</li>
            <li id="color_teddy">
                <label for="color_option">Choississez la couleur de votre ours en peluche :</label>
                <select name="color" id="color_option">
                </select>
                <label id="name_quantity" for="quantity_option">Quantité :</label>
                <select name="quantity" id="quantity_option">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>        
            </li>
            <li id="price_teddy">Prix d'achat : ${teddy.price/100} €</li>
            <li id="li_button"><button class="btn_addcart">Ajouter au panier</button></li>
        </ul>`;

        detailsTeddy.innerHTML += detailsTeddyList;// create in div element HTML, elements HTML like <ul>, <li>, <select> with variables of teddy concerned and add to div element HTML


    for (teddy.color in teddy.colors){// in loop teddy.colors for each element teddy.color

        let numberColor = teddy.colors.length;
        console.log(numberColor);// in a variable numberColor, get number of color for teddy concerned

        let eachNameColor = `<option value="${teddy.colors[teddy.color]}">${teddy.colors[teddy.color]}</option>`;
        console.log(eachNameColor);// in a variable eachNameColor, integrate option element HTML 

        let optionColor =  document.querySelector("#color_option");// in variable optionColor, get on document the element which have id color_option in this case is select element HTML
        
        optionColor.innerHTML += eachNameColor;// add to select element HTML, option element HTML (in variable eachNameColor)
    };



    const addToCartBtn = document.querySelector('.btn_addcart'); // select node with class btn_addcart in document

    addToCartBtn.addEventListener('click', function(event) {

        teddyInfos.quantity = parseInt(document.querySelector('#quantity_option option:checked').value);
        console.log(typeof teddyInfos.quantity);

        console.log(teddyInfos);
           // let teddyInfosJson = JSON.stringify(teddyInfos);

          //  console.log(teddyInfosJson);
         
         // console.log(JSON.stringify(datas));

        console.log(localStorage.getItem("articleInfosStorage"));
        console.log(JSON.parse(localStorage.getItem("articleInfosStorage")));

        let datas = JSON.parse(localStorage.getItem("articleInfosStorage"));

        console.log(datas);

        let isUpdated = false;

        if(!datas) {
            datas = new Array();
        } else {
            for (let data of datas){
                if (data._id === teddyInfos._id){
                    data.quantity += teddyInfos.quantity
                    isUpdated = true;
                }
            }
        }

        if(!isUpdated) {
            datas.push(teddyInfos)
        }
        

        localStorage.setItem("articleInfosStorage", JSON.stringify(datas));
           

        console.log(JSON.parse(localStorage.getItem("articleInfosStorage")));


        window.location.reload(); // reload page when click on button add cart

        console.log(localStorage.length);

    });
};




const queryString = window.location.search;
console.log(queryString);// integrate parameter url in variable queryString after "?" on url

const urlParams = new URLSearchParams(queryString);// integrate on variable urlParams a new object URLSearchParams with like parameter : the variable queryString
const id = urlParams.get('id')// on variable id, apply to variable urlParams a method get with parameter id 
console.log(id);



fillPageProduct(id);


