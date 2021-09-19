const btn = document.body.querySelector("button");
const list = document.body.querySelector("ul");
let number = 1;
btn.addEventListener("click", () => {
    const listItem = document.createElement('li');
    listItem.textContent = number;
    if (number % 3 !== 0) {
        list.appendChild(listItem);
    } else {
        list.appendChild(listItem).classList.add("big");
    }
    number += 2;
});
