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

const stars = document.querySelector('.star-icon');
                  
function removeMouseListener() {
  stars.forEach(function(star){
    star.removeEventListener('mouseover', function(e){
        e.stopPropagation();
    });
  });
}

document.getElementById('avaliacao').addEventListener('click', function(e){
  const classStar = e.target.classList;
  if(!classStar.contains('ativo')){
    stars.forEach(function(star){
      star.classList.remove('ativo');
    });
    classStar.add('ativo');
    console.log(e.target.getAttribute('data-avaliacao'));
    
    removeMouseListener();
  }
});
