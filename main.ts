const Btn1 = document.getElementById("btn1") as HTMLElement;

const Buttons = document.getElementById("Buttons") as HTMLElement;

const down = document.getElementById("down") as HTMLElement
const down2 = document.getElementById("down2") as HTMLElement;

down2.addEventListener('click',()=>{
    down2.style.transform += `rotate(180deg)` 
})

Btn1.addEventListener("click",()=>{
    
    down.style.transform += `rotate(180deg)`

    Buttons.style.display = Buttons.style.display === 'block' ? "none" : "block"



    

})