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
radioButtonsMainContainer.textContent = "Select your group*:";
const tick = document.querySelectorAll(".tick");

const submitButtonContainer = document.createElement("div");
const submitButton = document.createElement("input");
submitButton.setAttribute("id", "submitButton");
const submitButtonLabel = document.createElement("label");

const requiered = document.createElement("p");
requiered.style.marginTop = "20px";
requiered.style.fontSize = "7px";
requiered.textContent = "*Requiered";

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
  requiered,
  submitButtonContainer
);

//
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

  createRangeEl();

  createEmailEl();
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
  nameInput.required = true;

  nameLabel.htmlFor = "nameLabel";
  nameLabel.innerHTML = "Name* :";
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
  lastNameInput.required = true;

  lastNameLabel.htmlFor = "lastNameLabel";
  lastNameLabel.innerHTML = "Last Name*: ";
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
  ageLabel.innerHTML = "Age*: ";
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
  emailInput.required = true;

  emailLabel.htmlFor = "emailLabel";
  emailLabel.innerHTML = "Email*: ";
  emailLabel.style.fontSize = "10px";
}

//RANGE\
function createRangeEl() {
  rangeContainer.style.display = "flex";
  rangeContainer.style.flexDirection = "space-between";
  rangeLabel.htmlFor = "rangeInput";
  rangeLabel.innerHTML = "Grade your IT knowledge*: ";
  rangeLabel.style.width = "100%";
  rangeLabel.style.fontSize = "10px";
  rangeLabel.style.lineHeight = "12px";
}

//RADIO BUTTONS
radioButtonsMainContainer.style.fontSize = "10px";
radioButtonsMainContainer.style.marginTop = "10px";

//SUBMIT

submitButtonContainer.style.margin = "auto";
submitButtonContainer.style.textAlign = "center";
submitButtonContainer.style.marginTop = "10px";
submitButton.type = "submit";

let radioValue;

function setRadioValue(e) {
  if (e.target.checked) {
    radioValue = e.target.value;
  }
}

function createRadioButton() {
  const radioButtonsContainer = document.createElement("div");
  radioButtonsContainer.classList.add("radioButton");
  radioButtonsContainer.style.fontSize = "10px";
  radioButtonsContainer.style.marginTop = "10px";
  formContainer.append(radioButtonsContainer);
  radioButtonsMainContainer.append(radioButtonsContainer);
  for (let i = 1; i <= 15; i++) {
    const radioInput = document.createElement("input");
    const radioLabel = document.createElement("label");

    radioInput.type = "radio";
    radioInput.setAttribute("value", `TYPE ${i}gr`);
    radioInput.name = `radioLabel`;
    radioInput.setAttribute("Id", "radioInput");
    radioLabel.innerHTML = `TYPE ${i}gr:`;

    radioInput.addEventListener("click", setRadioValue);

    radioButtonsContainer.style.textAlign = "center";
    radioButtonsContainer.style.alignItems = "center";
    radioLabel.style.fontSize = "6px";
    radioButtonsContainer.append(radioLabel, radioInput);
  }
}
const buttonSubmit = document.getElementById("submitButton");

firstNameAlert = () => {
  nameInput.style.border = "2px solid red";
  nameInput.style.borderRadius = "2px ";
  nameInput.placeholder = "REQUIERED";
  nameInput.value = "";
  nameInput.addEventListener("keydown", () => {
    nameInput.style.border = "1px solid black";
    nameInput.style.borderRadius = "2px ";
  });
};
lastNameAlert = () => {
  lastNameInput.style.border = "2px solid red";
  lastNameInput.style.borderRadius = "2px ";
  lastNameInput.placeholder = "REQUIERED";
  lastNameInput.value = "";
  lastNameInput.addEventListener("keydown", () => {
    lastNameInput.style.border = "1px solid black";
    lastNameInput.style.borderRadius = "2px ";
  });
};
ageAlert = () => {
  ageInput.style.border = "2px solid red";
  ageInput.style.borderRadius = "2px ";
  ageInput.placeholder = "REQUIERED";
  ageInput.value = "";
  ageInput.addEventListener("keydown", () => {
    ageInput.style.border = "1px solid black";
    ageInput.style.borderRadius = "2px ";
  });
};
phoneAlert = () => {
  phoneInput.style.border = "2px solid red";
  phoneInput.style.borderRadius = "2px ";
  phoneInput.placeholder = "REQUIERED";
  phoneInput.value = "";
  phoneInput.addEventListener("keydown", () => {
    phoneInput.style.border = "1px solid black";
    phoneInput.style.borderRadius = "2px ";
  });
};

emailAlert = () => {
  emailInput.style.border = "2px solid red";
  emailInput.style.borderRadius = "2px ";
  emailInput.placeholder = "REQUIERED";
  emailInput.value = "";
  emailInput.addEventListener("keydown", () => {
    emailInput.style.border = "1px solid black";
    emailInput.style.borderRadius = "2px ";
  });
};

buttonSubmit.addEventListener("click", (e) => {
  const radioInput = document.getElementById("radioInput");
  e.preventDefault();

  let secretEmailSymbols = "";
  for (let i = 0; i < emailInput.value.length; i++) {
    secretEmailSymbols = `${secretEmailSymbols}*`;
  }

  let secretPhoneSymbols = "";
  for (let i = 0; i < phoneInput.value.length; i++) {
    secretPhoneSymbols = `${secretPhoneSymbols}*`;
  }

  if (nameInput.value === "") {
    firstNameAlert();
  }
  if (lastNameInput.value === "") {
    lastNameAlert();
  }
  if (ageInput.value === "") {
    ageAlert();
  }
  if (phoneInput.value === "") {
    phoneAlert();
  }
  if (emailInput.value === "") {
    emailAlert();
  }
  if (
    nameInput.value === "" &&
    lastNameInput.value === "" &&
    ageInput.value === "" &&
    phoneInput.value === "" &&
    emailInput.value === ""
  ) {
    alert("Required fields are not filled");
  }
  if (lastNameInput.value.length < 3 && nameInput.value.length < 3) {
    alert("Name and LastName has to be at least 3 letters long");
    lastNameAlert();
    firstNameAlert();
  } else if (nameInput.value.length < 3) {
    alert("Name has to be atleast 3 letters long");
    firstNameAlert();
  } else if (lastNameInput.value.length < 3) {
    alert("LastName has to be atleast 3 letters long");
    lastNameAlert();
  } else if (ageInput.value <= 0) {
    alert(
      "Age must be a positive number (Must be more than 0 and less than 120)"
    );
    ageAlert();
  } else if (ageInput.value >= 120) {
    alert("Age is invalid (Must be more than 0 and less than 120)");
    ageAlert();
  } else if (phoneInput.value.length < 9 || phoneInput.value.length > 12) {
    alert("Incorect phone number (Must be between 9 and 12 numbers)");
    phoneAlert();
  } else if (emailInput.value.length < 5 || !emailInput.value.includes("@")) {
    alert("Incorect Email (must contain @ and be atleast 5 symbols long)");
    emailAlert();
  } else {
    const studentItem = document.createElement("div");
    const showButton = document.createElement("button");

    showButton.type = "submit";

    for (let i = 0; i < 7; i++) {
      const studentInfo = document.createElement("p");
      studentItem.append(studentInfo);
      studentInfo.setAttribute("value", `${i}`);

      if (i === 0 && nameInput.value !== "") {
        studentInfo.textContent += `Name: ${nameInput.value}`;
      }
      if (i === 1 && lastNameInput.value !== "") {
        studentInfo.textContent += `Last name: ${lastNameInput.value}`;
      }
      if (i === 2 && ageInput.value !== "") {
        studentInfo.textContent += `Age: ${ageInput.value}`;
      }

      if (i === 3 && phoneInput.value !== "") {
        studentInfo.innerHTML += `Phone: ${secretPhoneSymbols}`;
      }
      if (i === 4 && emailInput.value !== "") {
        studentInfo.textContent += `Email:${secretEmailSymbols}`;
      }
      if (i === 5 && rangeTicks.checked !== "") {
        studentInfo.textContent += `It knowledge: ${rangeInput.value}`;
      }
      if (i === 6 && radioInput.checked !== "") {
        studentInfo.textContent += `Group: ${radioValue}`;
      }
      let hiddenData = true;
      showButton.textContent = "Show";
      showButton.addEventListener("click", () => {
        if (i === 3 && hiddenData) {
          showButton.textContent = "Hide";
          studentInfo.innerHTML = "Phone:" + phoneInput.value;
        } else if (i === 3 && !hiddenData) {
          showButton.textContent = "Show";
          studentInfo.innerHTML = `Phone: ${secretPhoneSymbols}`;
        }
        if (i === 4 && hiddenData) {
          showButton.textContent = "Hide";
          studentInfo.innerHTML = "Email:" + emailInput.value;
        } else if (i === 4 && !hiddenData) {
          showButton.textContent = "Show";
          studentInfo.innerHTML = `Email: ${secretEmailSymbols}`;
        }
        hiddenData = !hiddenData;
      });
    }

    studentItem.style.maxWidth = "200px";
    studentItem.style.height = "125px";

    studentItem.style.margin = "auto";
    studentItem.style.marginTop = "20px";
    studentItem.style.border = "1px solid black";
    studentItem.style.borderRadius = "5px ";
    studentItem.style.padding = "8px ";
    studentItem.style.fontSize = "7px ";

    showButton.style.margin = "auto";
    showButton.style.width = "30%";
    showButton.style.height = "12px";
    showButton.style.fontSize = "7px";
    showButton.style.display = "flex";
    showButton.style.justifyContent = "center";

    container.append(studentItem);
    studentItem.append(showButton);
  }
  // nameInput.value = "";
  // lastNameInput.value = "";
  // emailInput.value = "";
  // ageInput.value = "";
  // phoneInput.value = "";
});

//CTR+C from internet
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
