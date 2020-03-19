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
  let cardNumer = document.querySelectorAll(".cardnumber");
  if (e.target.name === "cvc") {
    if (e.target.value.length > 3) return;
    checkValue(e, ".cccvc", "cvc");
  }

  if (e.target.name === "ccname") {
    checkValue(e, ".ccname", "Full Name");
  }

  if (e.target.name === "cardnumber") {
    let lastValueIndex = [e.target.value.length - 1];
    if (e.target.value.length > 16) return;

    if (e.inputType === "deleteContentBackward") {
      cardNumer[e.target.value.length].textContent = "•";
      if (e.target.value === "") {
        cardNumer.forEach(number => {
          number.textContent = "•";
        });
      }
    } else {
      cardNumer[lastValueIndex].textContent = e.target.value[lastValueIndex];
    }
  }

  if (e.target.name === "ccmonth") {
    document.querySelector(".ccmonth").textContent = e.target.value;
  }

  if (e.target.name === "ccyear") {
    document.querySelector(".ccyear").textContent = e.target.value;
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
