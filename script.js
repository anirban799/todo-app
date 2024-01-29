let inputBox = document.querySelector(".inp");
let boxs = document.querySelector(".box");
let btn = document.querySelector("button");

btn.addEventListener("click", () => {
    if (inputBox.value === "") {
        alert("Enter something");
    } else {
        let card = document.createElement("ul");
        card.innerHTML = `<li>${inputBox.value}</li>`;
        card.classList.add("item");
        boxs.appendChild(card);
        inputBox.value=""
        
        let bot = document.createElement("button");
        bot.innerHTML = "Delete";
        bot.classList.add("delete-btn");
        bot.addEventListener("click", () => {
            card.remove();
        });
        
        card.appendChild(bot);
    }
});
