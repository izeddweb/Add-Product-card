// Set variable

const container = document.querySelector(".container");
const input = document.querySelector("input");
const buttonAdd = document.querySelector(".btn");
let inputValue;
const mydiv = document.createElement("div");
const textnode = document.createTextNode(` ${inputValue}`);


// Set function 
function AddingElement () {
  
  container.append(mydiv)

}
AddingElement()

buttonAdd.onclick =function() {
  inputValue =input.value;
  mydiv.innerHTML =inputValue
}

