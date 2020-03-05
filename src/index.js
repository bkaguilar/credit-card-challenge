// let cvc = document.getElementById("frmCCCVC");
// let card = document.querySelector(".front");
// let cardCvc = document.querySelector("#figure-cvc");

// class ShowValue {
//   constructor(input, cardLabel, card) {
//     this.input = input;
//     this.card = card;
//     this.label = cardLabel;
//   }
//   log() {
//     this.input.onfocus = () => {
//       this.card.classList.add("active");
//     };
//     this.input.onblur = () => {
//       this.card.classList.remove("active");
//     };
//     this.input.onchange = () => {
//       this.label.textContent = this.input.value;
//       console.log(this.input.value);
//     };
//   }
// }

// let inpt = new ShowValue(cvc, cardCvc, card);

// inpt.log();

let card = document.querySelector(".front");
let inputs = document.querySelectorAll("input");

function onFocus(e) {
  document
    .querySelector(`label[for='${e.target.id}']`)
    .classList.add("cc-label--animation");
  if (e.target.name === "cvc") {
    card.classList.add("active");
  }
}
function onBlur(e) {
  if (e.target.value === "") {
    document
      .querySelector(`label[for='${e.target.id}']`)
      .classList.remove("cc-label--animation");
  }
  if (e.target.name === "cvc") {
    card.classList.remove("active");
  }
}

function onchange(e) {
  if (e.target.name === "cvc") {
    document.querySelector("#figure-cvc").textContent = e.target.value;
  }

  if (e.target.name === "ccname") {
    document.querySelector(".cc-name").textContent = e.target.value;
  }

  if (e.target.name === "cardnumber") {
    document.querySelector(
      ".cc-numbers"
    ).innerHTML = `<span class="cc-number">${e.target.value}</span>`;
  }
}

for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("focus", onFocus);
  inputs[i].addEventListener("blur", onBlur);
  inputs[i].addEventListener("change", onchange);
}
