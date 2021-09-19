const btn = document.querySelector("button");
let number = 1;
const addElement = function () {
    // console.log(`click!`);
    const div = document.createElement("div");
    div.textContent = number;
    if (number % 5 !== 0) {
        document.body.appendChild(div);
    } else {
        document.body.appendChild(div).classList.add("circle");
    }
    number++;
    // console.log(div);
}
btn.addEventListener("click", addElement)