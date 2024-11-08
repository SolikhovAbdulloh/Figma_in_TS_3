"use strict";
const Btn1 = document.getElementById("btn1");
const Buttons = document.getElementById("Buttons");
const down = document.getElementById("down");
const down2 = document.getElementById("down2");
down2.addEventListener('click', () => {
    down2.style.transform += `rotate(180deg)`;
});
Btn1.addEventListener("click", () => {
    down.style.transform += `rotate(180deg)`;
    Buttons.style.display = Buttons.style.display === 'block' ? "none" : "block";
});
//# sourceMappingURL=main.js.map