/*How to fill my index page with informations of API teddies*/

/*the function fillIndexPage allows to make a request to an API for get to teddies datas*/

async function fillIndexPage() {

    await fetch("https://oc-p5-api.herokuapp.com/api/teddies") /*make a request to API and get informations of API in json*/
        .then((response) => response.json())/*when response of API arrive, this response is integrate on a variable response and then to this variable, it passed a function .json () to decode response in json*/

        /*.then((teddies) => {console.log(teddies); return teddies;})*/

        .then((teddies) => displayTeddiesInformation(teddies))/*when response is decode in json, then the result is integrate on a variable which called teddies and then what it make with this variable, it make a function which is to build HTML on index page*/

};


/*the function displayTeddiesInformation allows to build HTML with teddies informations*/

function displayTeddyDetailsView(teddies[]) {







};


displayTeddyDetailsView(teddies[]);


