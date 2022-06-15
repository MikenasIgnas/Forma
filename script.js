///////////////////////////////////////////FORMA

const container = document.getElementById("container");
container.classList.add("container");

const formContainer = document.createElement("form");
formContainer.classList.add("form");

const nameItemContainer = document.createElement("div");
const nameInput = document.createElement("input");
const nameLabel = document.createElement("label");

const lastNameItemContainer = document.createElement("div");
const lastNameInput = document.createElement("input");
const lastNameLabel = document.createElement("label");

const ageItemContainer = document.createElement("div");
const ageInput = document.createElement("input");
const ageLabel = document.createElement("label");

const phoneNumberContainer = document.createElement("div");
const phoneInput = document.createElement("input");
const phoneLabel = document.createElement("label");

const emailContainer = document.createElement("div");
const emailInput = document.createElement("input");
const emailLabel = document.createElement("label");

const rangeContainer = document.getElementById("rangeContainer");
const sliderElement = document.createElement("div");
const rangeInput = document.getElementById("rangeInput");
const rangeLabel = document.createElement("label");
const rangeTicks = document.getElementById("ticks");

const radioButtonsMainContainer = document.createElement("div");
radioButtonsMainContainer.classList.add("radioButton2");
radioButtonsMainContainer.textContent = "Select your group:";

const submitButtonContainer = document.createElement("div");
const submitButton = document.createElement("input");
const submitButtonLabel = document.createElement("label");

container.style.width = "100%";

formContainer.style.width = "210px";
formContainer.style.margin = "auto";
formContainer.style.border = "1px solid black";
formContainer.style.borderRadius = "7px";
formContainer.style.padding = "7px";

formContainer.append(
  nameItemContainer,
  lastNameItemContainer,
  ageItemContainer,
  phoneNumberContainer,
  emailContainer,
  rangeContainer,
  radioButtonsMainContainer,
  submitButtonContainer
);

function createForm() {
  container.appendChild(formContainer);
  nameItemContainer.append(nameLabel, nameInput);
  lastNameItemContainer.append(lastNameLabel, lastNameInput);
  ageItemContainer.append(ageLabel, ageInput);
  phoneNumberContainer.append(phoneLabel, phoneInput);
  emailContainer.append(emailLabel, emailInput);
  rangeContainer.append(rangeLabel, sliderElement);
  sliderElement.append(rangeInput, rangeTicks);
  submitButtonContainer.append(submitButton, submitButtonLabel);

  createNameEl();
  createLastNameEl();
  createAgeEl();
  createPhoneEl();
  createEmailEl();
  createRangeEl();
  submit();
  createRadioButton();
}
createForm();
//CONTAINER

//NAME
function createNameEl() {
  nameItemContainer.style.display = "flex";
  nameItemContainer.style.justifyContent = "space-between";
  nameItemContainer.style.alignItems = "center";
  nameItemContainer.style.marginBottom = "10px";

  nameInput.style.width = "150px";
  nameInput.style.height = "20px";

  nameInput.type = "text";
  nameInput.placeholder = "Name";
  nameInput.name = "nameLabel";
  nameInput.required;

  nameLabel.htmlFor = "nameLabel";
  nameLabel.innerHTML = "Name :";
  nameLabel.style.fontSize = "10px";
}
//LAST NAME
function createLastNameEl() {
  lastNameItemContainer.style.display = "flex";
  lastNameItemContainer.style.justifyContent = "space-between";
  lastNameItemContainer.style.alignItems = "center";
  lastNameItemContainer.style.marginBottom = "10px";

  lastNameInput.style.width = "150px";
  lastNameInput.style.height = "20px";

  lastNameInput.type = "text";
  lastNameInput.placeholder = "Last Name";
  lastNameInput.name = "lastNameLabel";
  lastNameInput.required;

  lastNameLabel.htmlFor = "lastNameLabel";
  lastNameLabel.innerHTML = "Last Name: ";
  lastNameLabel.style.fontSize = "10px";
  lastNameLabel.style.lineHeight = "10px";
}
//AGE
function createAgeEl() {
  ageItemContainer.style.display = "flex";
  ageItemContainer.style.justifyContent = "space-between";
  ageItemContainer.style.alignItems = "center";
  ageItemContainer.style.marginBottom = "10px";

  ageInput.style.width = "150px";
  ageInput.style.height = "20px";

  ageInput.type = "number";
  ageInput.placeholder = "Age";
  ageInput.name = "ageLabel";
  ageInput.required;

  ageLabel.htmlFor = "ageLabel";
  ageLabel.innerHTML = "Age: ";
  ageLabel.style.fontSize = "10px";
}
//PHONE
function createPhoneEl() {
  phoneNumberContainer.style.display = "flex";
  phoneNumberContainer.style.justifyContent = "space-between";
  phoneNumberContainer.style.alignItems = "center";
  phoneNumberContainer.style.marginBottom = "10px";

  phoneInput.style.width = "150px";
  phoneInput.style.height = "20px";

  phoneInput.type = "number";
  phoneInput.placeholder = "Phone Nr.";
  phoneInput.name = "phoneLabel";

  phoneLabel.htmlFor = "phoneLabel";
  phoneLabel.innerHTML = "Phone: ";
  phoneLabel.style.fontSize = "10px";
}
//EMAIL
function createEmailEl() {
  emailContainer.style.display = "flex";
  emailContainer.style.justifyContent = "space-between";
  emailContainer.style.alignItems = "center";
  emailContainer.style.marginBottom = "10px";

  emailInput.style.width = "150px";
  emailInput.style.height = "20px";

  emailInput.type = "email";
  emailInput.placeholder = "Email";
  emailInput.name = "emailLabel";
  emailInput.required;

  emailLabel.htmlFor = "emailLabel";
  emailLabel.innerHTML = "Email: ";
  emailLabel.style.fontSize = "10px";
}
//RANGE\
function createRangeEl() {
  rangeContainer.style.display = "flex";
  rangeContainer.style.flexDirection = "space-between";
  rangeLabel.htmlFor = "rangeInput";
  rangeLabel.innerHTML = "Grade your IT knowledge: ";
  rangeLabel.style.width = "100%";
  rangeLabel.style.fontSize = "10px";
  rangeLabel.style.lineHeight = "12px";
}

//RADIO BUTTONS
radioButtonsMainContainer.style.fontSize = "10px";
radioButtonsMainContainer.style.marginTop = "10px";

//SUBMIT
function submit() {
  submitButtonContainer.style.margin = "auto";
  submitButtonContainer.style.textAlign = "center";
  submitButtonContainer.style.marginTop = "20px";
  submitButton.type = "submit";
}

function ticks(element) {
  if (
    element.hasOwnProperty("list") &&
    element.hasOwnProperty("min") &&
    element.hasOwnProperty("max") &&
    element.hasOwnProperty("step")
  ) {
    var datalist = document.createElement("datalist"),
      minimum = parseInt(element.getAttribute("min")),
      step = parseInt(element.getAttribute("step")),
      maximum = parseInt(element.getAttribute("max"));
    datalist.id = element.getAttribute("list");
    for (var i = minimum; i < maximum + step; i = i + step) {
      datalist.innerHTML += "<option value=" + i + "></option>";
    }
    element.parentNode.insertBefore(datalist, element.nextSibling);
  }
}
var lists = document.querySelectorAll("input[type=range][list]"),
  arr = Array.prototype.slice.call(lists);
arr.forEach(ticks);

function createRadioButton() {
  const radioButtonsContainer = document.createElement("div");
  radioButtonsContainer.classList.add("radioButton");
  radioButtonsContainer.style.fontSize = "10px";
  radioButtonsContainer.style.marginTop = "10px";

  for (let i = 1; i <= 15; i++) {
    const radioInput = document.createElement("input");
    const radioLabel = document.createElement("label");

    radioButtonsContainer.style.gridColumne;

    formContainer.append(radioButtonsContainer);
    radioButtonsContainer.append(radioLabel, radioInput);

    radioInput.type = "radio";
    radioInput.name = `radiolLabel`;

    radioLabel.htmlFor = "radiolLabel";
    radioLabel.innerHTML = `TYPE ${i}gr:`;

    radioButtonsContainer.style.textAlign = "center";
    radioButtonsContainer.style.alignItems = "center";

    radioLabel.style.fontSize = "6px";
  }
  radioButtonsMainContainer.append(radioButtonsContainer);
}
