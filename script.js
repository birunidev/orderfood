const alertDisplay = $('.alert');

let foodArr = [];
window.onload = () => {
    fetch('./food.js')
        .then(res => res.json())
        .then(res => {
            foodArr = res;
            loadContent(foodArr);
        }
        );
}
let cardHTML = '';
let resetCardHTML = '';
let order = (id) => {
    $('#foods').html(resetCardHTML);
    let parsedId = id.toString();
    let food = foodArr.find(el => el.id === parsedId);
    foodArr = foodArr.filter(food => food.id !== parsedId);
    let filteredFood = foodArr;
    $(".toast").toast('show');
    $(".toast-body").text(`You Ordered ${food.name}`);
    loadContent(filteredFood);
};


let loadContent = (foods) => {
    cardHTML = '';
    foods.map((food, index) => {
        cardHTML += `<div class="col-md-3 m-2">
        <div class="card" style="width: 18rem;">
            <img src="${food.image}.png" class="card-img-top">
            <div class="card-body">
                <p class="card-text">${food.name}</p>
                <h5 class="card-title">Rp. ${food.price}</h5>
                <div class="input-group">
                    <select class="custom-select" id="inputGroupSelect04"
                        aria-label="Example select with button addon">
                        <option selected>Choose...</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    <div class="input-group-append">
                        <button class="btn btn-outline-success" onclick="order(${food.id})" type="button">Button</button>
                    </div>
                </div>
            </div>
        </div>
    </div>`
    });
    $('#foods').html(cardHTML);
}