
const idInput = document.getElementById('idInput');
const colorInput = document.getElementById('colorInput');
console.log("Hello");
// console.log(idInput);
// console.log(colorInput);
function setCard(){
    console.log(idInput.value);
    console.log(colorInput.value);
    const card = document.getElementById(idInput.value);
    card.style.color = colorInput.value;
}