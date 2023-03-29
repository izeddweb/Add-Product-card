// Set variable

const container = document.querySelector(".container");
const input = document.querySelector("input");
const buttonAdd = document.querySelector(".btn");
var inputValue = 1;

function gettingValue() {
  buttonAdd.onclick = function () {
    inputValue = Number(input.value);
    console.log(inputValue);

    function addingElement() {
      console.log(inputValue);

      for (let item = 1; item <= inputValue; item++) {
        const myPProd = document.createElement("div");
        const textProd = document.createTextNode(`${item}-- textProd`);
        console.log(textProd);
        console.log(inputValue);
        myPProd.appendChild(textProd);
        myPProd.classList.add('styling-card')
        // myPProd.appendChild(item);
        container.appendChild(myPProd);
      }
    }
    addingElement();
  };
}
gettingValue();

// function AddingElement() {
//   let star = 1;
//   let end = 10;
//   for (let i = star; i <= end; i++) {
//     const mydiv = document.createElement("div");
//     const myPara = document.createElement("p");
//     const myLink = document.createElement("a");
//     const myTextPara = document.createTextNode(`Prod: ${i}`);
//     const myTextlink = document.createTextNode(`Link: ${i} `);
//     mydiv.appendChild(myTextPara);
//     mydiv.appendChild(myPara);
//     mydiv.appendChild(myLink);
//     myLink.appendChild(myTextlink);
//     myPara.appendChild(myTextPara);
//     myLink.setAttribute("class", "link");
//     mydiv.classList.add("styling-card");
//     container.appendChild(mydiv);
//   }
// }
// AddingElement();

// buttonAdd.onclick = function () {
//   console.log(inputValue);
//   inputValue = input.value;
// };
