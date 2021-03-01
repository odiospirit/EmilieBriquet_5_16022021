/*How to fill my index page with informations of API teddies*/

/*the function fillIndexPage allows to make a request to an API for get to teddies datas*/

async function fillPageProduct(id) {

    await fetch("https://oc-p5-api.herokuapp.com/api/teddies/" + id) /*make a request to API and get informations of API in json*/
        .then((response) => response.json())/*when response of API arrive, this response is integrate on a variable response and then to this variable, it passed a function .json () to decode response in json*/

        .then((teddy) => displayTeddyDetailsView(teddy))/*when response is decode in json, then the result is integrate on a variable which called teddy and then what it make with this variable, it make a function which is to build HTML on product page*/

};


/*the function displayTeddyDetailsView allows to build HTML with teddy informations*/

function displayTeddyDetailsView(teddy) {

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
            </li>
            <li id="price_teddy">Prix d'achat : ${teddy.price/100} €</li>      
        </ul>`;

        detailsTeddy.innerHTML += detailsTeddyList;// create in div element HTML, elements HTML like <ul>, <li>, <select> with variables of teddy concerned and add to div element HTML

    for (teddy.color in teddy.colors){

        let numberColor = teddy.colors.length;
        console.log(numberColor);

        let eachNameColor = `<option value="${teddy.colors[teddy.color]}">${teddy.colors[teddy.color]}</option>`;
        console.log(eachNameColor);

        let optionColor =  document.querySelector("#color_option");
        
        optionColor.innerHTML += eachNameColor;
    
    };

};



const queryString = window.location.search;
console.log(queryString);// integrate parameter url in variable queryString before ? on url

const urlParams = new URLSearchParams(queryString);// integrate on variable urlParams a new object URLSearchParams with like parameter the variable queryString
const id = urlParams.get('id')// on variable id, apply to variable urlParams a method get with parameter id 
console.log(id);



fillPageProduct(id);


