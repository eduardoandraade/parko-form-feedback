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

document.querySelector('.teste').addEventListener('submit', function(e) {
    e.preventDefault();
  
    let formData = new FormData(this);
  
    // Itera sobre os dados de formulário
    formData.forEach(function(value, key) {
      localStorage.setItem(key, value);
    });
  });

let stars = document.querySelectorAll(".ratings span");
let products = document.querySelectorAll(".ratings");
let ratings = [];

for(let star of stars){
    star.addEventListener("click", function(){
        let children = star.parentElement.children;
        for(let child of children){
            if(child.getAttribute("data-clicked")){
                return false;
            }
        }


        this.setAttribute("data-clicked", "true")

        let rating = this.dataset.rating;
        let productId = this.parentElement.dataset.productid;
        
        let data = {
            "stars": rating,
            "product-id": productId
        }

        ratings.push(data);
        localStorage.setItem("rating", JSON.stringify(ratings))
    })
}

if(localStorage.getItem("rating")){

    ratings = JSON.parse(localStorage.getItem("rating"))
    for(let product of products){
        if(ratings["product-id"] == product.dataset.productid){
            let reversedStars = Array.from(product.children).reverse()
            let index = parseInt(rating["stars"]) -1;

            reversedStars[index].setAttribute("data-clicked", "true")
        }
    }
}



