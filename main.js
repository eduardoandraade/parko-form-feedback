// Adicionando Estilo

const inputs = document.querySelectorAll(".input");

function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc() {
    let parent = this.parentNode;
    if (this.value == "") {
        parent.classList.remove("focus");
    }
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc)
    input.addEventListener("blur", blurFunc)
})

// document.querySelector('.teste').addEventListener('submit', function(e) {
//     e.preventDefault();
  
//     let formData = new FormData(this);
  
//     // Itera sobre os dados de formulário
//     formData.forEach(function(value, key) {
//       localStorage.setItem(key, value);
//     });
//   });
// Adicionando Avaliação usando estrelas 

let stars = document.querySelectorAll(".ratings span");
let ratings = [];

for(let star of stars){
    star.addEventListener("click", function(){
        let children = star.parentElement.children;
        for (let child of children) {
            if (child.getAttribute("data-clicked")) {
                child.removeAttribute("data-clicked");
                this.setAttribute("data-clicked", "true");
            } else {
                this.setAttribute("data-clicked", "true");
            }
        }
            setRating(this.getAttribute("data-rating"));

        // let rating = this.dataset.rating;
        // let productId = this.parentElement.dataset.productid;
        
        // let data = {
        //     "stars": rating,
        //     "product-id": productId
        // }

        // ratings.push(data);
        // localStorage.setItem("rating", JSON.stringify(ratings))
    })

// Recuperando value do span clicado

    const ratingDiv = document.querySelector('.ratings');
    const ratingInput = document.querySelector('#ratingSelected')

    const ratingStars = ratingDiv.querySelectorAll('span')
    ratingStars.forEach((star) => {
    star.addEventListener('click', () => {
        const ratingValue = star.getAttribute('data-rating')

        ratingInput.value = ratingValue;
    })
})
}

// if(localStorage.getItem("rating")){

//     ratings = JSON.parse(localStorage.getItem("rating"))
//     for(let product of products){
//         if(ratings["product-id"] == product.dataset.productid){
//             let reversedStars = Array.from(product.children).reverse()
//             let index = parseInt(rating["stars"]) -1;

//             reversedStars[index].setAttribute("data-clicked", "true")
//         }
//     }
// }
// Enviando dados do formulário

const form = document.getElementById('feedback-form')
const ratingSelected = document.getElementById('ratingSelected')

form.addEventListener('submit', (ev) => {
    ev.preventDefault();

    const formData = new FormData(form);
    const feedback = {
        name: formData.get('name'),
        email: formData.get('email'),
        rating: formData.get('rating'),
        message: formData.get('message')
    };

    fetch('http://localhost:3000/feedback', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(feedback)
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error))

    form.reset()
})

function setRating(value){
    const ratingSelected = document.getElementById('ratingSelected');
    ratingSelected.value = value;
    // console.log(ratingSelected.value);
}