const toggleBox =document.querySelector('.toggle-box');
const circle=document.querySelector('.circle')

toggleBox.addEventListener("click", ()=>{
    circle.classList.toggle("circle-position2");
    let bool=circle.classList.contains('circle-position2')

    if(bool){
       toggleBox.addEventListener("click",()=>{
            circle.classList.toggle('.circle-position3');
            let bool=circle.classList.contains('.circle-position3');
            if(bool){
                circle.style.left="3em";
            }
            else{
                circle.style.left="0px";
            }

       })

    }
})