let card = document.querySelector(".front");
let itemsCard = document.querySelectorAll(".cc-item");
let inputs = document.querySelectorAll(".cc-input");

function onFocus(e) {
  document
    .querySelector(`label[for='${e.target.id}']`)
    .classList.add("cc-label--animation");
  if (e.target.name === "cvc") card.classList.add("active");
}

function onBlur(e) {
  if (e.target.value === "") {
    document
      .querySelector(`label[for='${e.target.id}']`)
      .classList.remove("cc-label--animation");
  }
  card.classList.remove("active");
}

function checkValue(element, classElement, text) {
  element.target.value === ""
    ? (document.querySelector(classElement).textContent = text)
    : (document.querySelector(classElement).textContent = element.target.value);
}

function onChange(e) {
  let cardNumber = document.querySelectorAll(".cardnumber");

  if (e.target.name === "ccname") {
    checkValue(e, ".ccname", "Full Name");
  }

  if (e.target.name === "ccmonth") {
    checkValue(e, ".ccmonth", "MM");
  }

  if (e.target.name === "ccyear") {
    checkValue(e, ".ccyear", "YY");
  }

  if (e.target.name === "cvc") {
    if (e.target.value.length > 3) return;
    checkValue(e, ".cccvc", "cvc");
  }

  if (e.target.name === "cardnumber") {
    // e.target.value.replace(/^[0-9]{4}+$/, "($1) $2-$3");
    if (e.target.value.length > 16) return;

    cardNumber.forEach(number => {
      if (e.target.value === "") {
        number.textContent = "•";
        number.classList.remove("numberAnimation");
      }
    });

    Array.from(e.target.value).forEach((number, index) => {
      cardNumber[index].classList.add("numberAnimation");
      cardNumber[index].textContent = number;
    });

    if (
      e.inputType === "deleteContentBackward" ||
      e.inputType === "deleteContentForward"
    ) {
      cardNumber[e.target.value.length].textContent = "•";
      cardNumber[e.target.value.length].classList.remove("numberAnimation");
    }
  }
}

function onLabelClick(e) {
  document.querySelector(`.cc-input[name='${e.target.dataset.name}']`).focus();
}

for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("focus", onFocus);
  inputs[i].addEventListener("blur", onBlur);
  inputs[i].addEventListener("input", onChange);
}

for (let i = 0; i < itemsCard.length; i++) {
  itemsCard[i].addEventListener("click", onLabelClick);
}
