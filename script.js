document.addEventListener("DOMContentLoaded" , function(){
    let counter = 0;
    const amount = document.querySelector("#item");
    const btns = document.querySelectorAll(".btn");

    btns.forEach(function(btn){
        btn.addEventListener('click',function(e){{
            let style = e.currentTarget.classList;
            if( style.contains('plus')){
                counter++;
            }
            else if( style.contains('minus')){
                counter--;
            }
            else {
                counter = 0;
            }

            amount.textContent = counter;
    
        }})
        
    })
})