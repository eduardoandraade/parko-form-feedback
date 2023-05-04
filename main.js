let feedbacks = []

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

// form 

const form = document.getElementById('feedback-form');

form.addEventListener('submit', async (ev) => {
    ev.preventDefault();
  
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const rating = document.getElementById('ratingSelected').value;
    const message = document.getElementById('message').value;
  
    try {
      const response = await fetch('http://177.71.170.79:3000/app/feedbacks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          email,
          rating,
          message
        })
      });
  
      const responseData = await response.json();
      console.log(responseData);
    } catch (error) {
        console.log(error);
    }

    ev.target.reset()
  });