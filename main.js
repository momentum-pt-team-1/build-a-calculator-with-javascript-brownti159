const display =document.getElementById('display')

const numbers = document.getElementsByClassName('#number')
const operators = document.getElementsByClassName('#operator')

for(let number of numbers){
    number.addEventListener('click', event =>{
    display.textContent += event.target.value
});
};

for(let operator of operators){
    operator.addEventListener("click", event =>{
    display.textContent += event.target.value
});
};