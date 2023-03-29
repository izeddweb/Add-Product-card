// Set variable

const container = document.querySelector(".container");
const input = document.querySelector("input");
const buttonAdd = document.querySelector(".btn");

function AddingElement() {
  let star = 1;
  let end = 10;
  for (let i = star; i <= end; i++) {
    const mydiv = document.createElement("div");
    const myPara = document.createElement("p");
    const myLink = document.createElement("a");
    const myTextPara = document.createTextNode(`Prod: ${i}`);
    const myTextlink = document.createTextNode(`Link: ${i} `);
    mydiv.appendChild(myTextPara);
    mydiv.appendChild(myPara);
    mydiv.appendChild(myLink);
    myLink.appendChild(myTextlink);
    myPara.appendChild(myTextPara);
    myLink.setAttribute("class", "link");
    mydiv.classList.add("styling-card");
    container.appendChild(mydiv);
  }
}
AddingElement();

buttonAdd.onclick = function () {
  console.log(inputValue);
  inputValue = input.value;
};

// for(let i = 1; i<=10;i++){
//   let myD = document.createElement("div");
//   let myH= document.createElement("h3");
//   let myP = document.createElement("p");
//   let myText=document.createTextNode("product title" +[i] );
//   let myT= document.createTextNode("paragraph discreption" +[i] );
//   myD.className="prudoct";
//   myD.classList.add('styling-card')
//       myH.appendChild(myText);
//       myP.appendChild(myT);
//       myD.appendChild(myH);
//       myD.appendChild(myP);
// document.body.appendChild(myD);
// }
