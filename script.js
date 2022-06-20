///////////////////////////////////////////FORMA

const container = document.getElementById("container");
container.classList.add("container");

const formContainer = document.createElement("form");
formContainer.classList.add("form");
formContainer.style.maxWidth = "500px";
formContainer.style.margin = "auto";
formContainer.style.marginTop = "50px";

const nameItemContainer = document.createElement("div");
const nameInput = document.createElement("input");
nameInput.classList.add("input");
const nameLabel = document.createElement("label");

const lastNameItemContainer = document.createElement("div");
const lastNameInput = document.createElement("input");
lastNameInput.classList.add("input");
const lastNameLabel = document.createElement("label");

const ageItemContainer = document.createElement("div");
const ageInput = document.createElement("input");
ageInput.classList.add("input");
const ageLabel = document.createElement("label");

const phoneNumberContainer = document.createElement("div");
const phoneInput = document.createElement("input");
phoneInput.classList.add("input");
const phoneLabel = document.createElement("label");

const emailContainer = document.createElement("div");
const emailInput = document.createElement("input");
emailInput.classList.add("input");
const emailLabel = document.createElement("label");

const rangeContainer = document.getElementById("rangeContainer");
const sliderElement = document.createElement("div");

const rangeInput = document.getElementById("rangeInput");
const rangeLabel = document.createElement("label");
const rangeTicks = document.getElementById("ticks");
rangeInput.classList.add("input");
const radioButtonsMainContainer = document.createElement("div");

radioButtonsMainContainer.classList.add("radioButton2");
radioButtonsMainContainer.textContent = "Select your group*:";
const tick = document.querySelectorAll(".tick");

const submitButtonContainer = document.createElement("div");
const submitButton = document.createElement("button");
submitButton.setAttribute("id", "submitButton");
const submitButtonLabel = document.createElement("label");

const formHeader = document.createElement("div");
formHeader.style.width = "100%";
formHeader.style.height = "150px";
formHeader.style.margin = "0px";
formHeader.style.backgroundColor = "gray";

const headerTitle = document.createElement("p");
headerTitle.textContent = "Register a student";
headerTitle.style.color = "white";
headerTitle.style.lineHeight = "150px";
headerTitle.style.fontSize = "25px";
headerTitle.style.paddingLeft = "20px";

const formInputs = document.createElement("div");
formInputs.classList.add("form");
formInputs.style.padding = "40px";
formInputs.style.backgroundColor = "white";

const requiered = document.createElement("p");
requiered.style.marginTop = "20px";
requiered.style.fontSize = "13px";
requiered.textContent = "*Requiered";

formContainer.append(formHeader, formInputs);
formInputs.append(
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
  container.append(formContainer);
  formHeader.append(headerTitle);
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

//NAME

function createNameEl() {
  nameItemContainer.style.marginBottom = "10px";

  nameInput.style.display = "block";
  nameInput.style.width = "100%";
  nameInput.style.height = "40px";
  nameInput.style.border = "none";
  nameInput.style.borderBottom = "1px solid black";
  nameInput.style.outline = "none";
  nameInput.style.marginBottom = "30px";

  nameInput.type = "text";
  nameInput.placeholder = "Name*";
  nameInput.name = "nameLabel";
  nameInput.required;
}
//LAST NAME
function createLastNameEl() {
  lastNameItemContainer.style.marginBottom = "10px";
  lastNameInput.style.display = "block";
  lastNameInput.style.width = "100%";
  lastNameInput.style.height = "40px";
  lastNameInput.style.border = "none";
  lastNameInput.style.borderBottom = "1px solid black";
  lastNameInput.style.marginBottom = "30px";
  lastNameInput.style.outline = "none";

  lastNameInput.type = "text";
  lastNameInput.placeholder = "Last Name*";
  lastNameInput.name = "lastNameLabel";
  lastNameInput.required;
}
//AGE
function createAgeEl() {
  ageItemContainer.style.marginBottom = "10px";

  ageInput.style.display = "block";
  ageInput.style.width = "100%";
  ageInput.style.height = "40px";
  ageInput.style.border = "none";
  ageInput.style.borderBottom = "1px solid black";
  ageInput.style.marginBottom = "30px";
  ageInput.style.outline = "none";
  ageInput.type = "text";
  ageInput.placeholder = "Age*";
  ageInput.name = "ageLabel";
  ageInput.required;
}
//PHONE
function createPhoneEl() {
  phoneNumberContainer.style.marginBottom = "10px";

  phoneInput.style.display = "block";
  phoneInput.style.width = "100%";
  phoneInput.style.height = "40px";
  phoneInput.style.border = "none";
  phoneInput.style.borderBottom = "1px solid black";
  phoneInput.style.marginBottom = "30px";
  phoneInput.style.outline = "none";

  phoneInput.type = "text";
  phoneInput.placeholder = "Phone Nr.*";
  phoneInput.required;
  phoneInput.name = "phoneLabel";
}
//EMAIL
function createEmailEl() {
  emailContainer.style.marginBottom = "10px";

  emailInput.style.display = "block";
  emailInput.style.width = "100%";
  emailInput.style.height = "40px";
  emailInput.style.border = "none";
  emailInput.style.borderBottom = "1px solid black";
  emailInput.style.outline = "none";

  emailInput.type = "email";
  emailInput.placeholder = "Email*";
  emailInput.name = "emailLabel";
  emailInput.required;
}

//RANGE\
function createRangeEl() {
  rangeContainer.style.marginTop = "30px";
  rangeLabel.htmlFor = "rangeInput";
  rangeLabel.innerHTML = "Grade your IT knowledge*: ";
  rangeInput.style.display = "block";
  rangeLabel.style.width = "100%";
  rangeLabel.style.marginTop = "50px";
  rangeLabel.style.fontSize = "20px";
}

//RADIO BUTTONS
radioButtonsMainContainer.style.fontSize = "20px";
radioButtonsMainContainer.style.marginTop = "30px";

sliderElement.style.marginTop = "20px";
sliderElement.style.width = "100%";

//SUBMIT

submitButton.innerHTML = "SUBMIT";
submitButton.style.width = "40%";
submitButton.style.height = "35px";
submitButton.style.border = "none";
submitButton.style.backgroundColor = "lightgray";
submitButton.style.color = "white";
submitButton.style.cursor = "pointer";
submitButton.style.fontSize = "15px";
submitButton.style.lineHeight = "35px";
submitButton.style.textAlign = "center";
submitButton.style.outline = "none";

submitButtonContainer.style.margin = "auto";
submitButtonContainer.style.textAlign = "center";
submitButtonContainer.style.marginTop = "10px";

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
    radioInput.classList.add("input");
    const radioLabel = document.createElement("label");

    radioInput.type = "radio";
    radioInput.setAttribute("value", `TYPE ${i}gr`);
    radioInput.name = `radioLabel`;
    radioInput.setAttribute("Id", "radioInput");
    radioLabel.innerHTML = `TYPE ${i}gr:`;

    radioInput.addEventListener("click", setRadioValue);

    radioInput.style.width = "20px";
    radioInput.style.height = "20px";

    radioButtonsContainer.style.textAlign = "center";
    radioButtonsContainer.style.alignItems = "center";
    radioButtonsContainer.style.marginTop = "25px";
    radioLabel.style.fontSize = "13px";
    radioLabel.style.lineHeight = "20px";
    radioButtonsContainer.append(radioLabel, radioInput);
  }
}
const buttonSubmit = document.getElementById("submitButton");

firstNameAlert = () => {
  nameInput.style.border = "none";
  nameInput.style.borderBottom = "2px solid red";
  nameInput.placeholder = "Name requiered";
  nameInput.value = "";
  nameInput.addEventListener("keydown", () => {
    nameInput.style.border = "none";
    nameInput.style.borderBottom = "1px solid black";
  });
};
lastNameAlert = () => {
  lastNameInput.style.border = "none";
  lastNameInput.style.borderBottom = "2px solid red";
  lastNameInput.placeholder = "Last name requiered";
  lastNameInput.value = "";
  lastNameInput.addEventListener("keydown", () => {
    lastNameInput.style.border = "none";
    lastNameInput.style.borderBottom = "1px solid black";
  });
};
ageAlert = () => {
  ageInput.style.border = "none";
  ageInput.style.borderBottom = "2px solid red";
  ageInput.placeholder = "Age requiered";
  ageInput.value = "";
  ageInput.addEventListener("keydown", () => {
    ageInput.style.border = "none";
    ageInput.style.borderBottom = "1px solid black";
  });
};
phoneAlert = () => {
  phoneInput.style.border = "none";
  phoneInput.style.borderBottom = "2px solid red";
  phoneInput.placeholder = "Phone requiered";
  phoneInput.value = "";
  phoneInput.addEventListener("keydown", () => {
    phoneInput.style.border = "none";
    phoneInput.style.borderBottom = "1px solid black";
  });
};

emailAlert = () => {
  emailInput.style.border = "none";
  emailInput.style.borderBottom = "2px solid red";
  emailInput.placeholder = "Email requiered";
  emailInput.value = "";
  emailInput.addEventListener("keydown", () => {
    emailInput.style.border = "none";
    emailInput.style.borderBottom = "1px solid black";
  });
};
nameInputStyle = () => {
  nameInput.style.borderBottom = "3px solid green";
  nameInput.readOnly = false;
};
lastNameInputStyle = () => {
  lastNameInput.style.borderBottom = "3px solid green";
  lastNameInput.readOnly = false;
};
ageInputStyle = () => {
  ageInput.style.borderBottom = "3px solid green";
  ageInput.readOnly = false;
};
phoneInputStyle = () => {
  phoneInput.style.borderBottom = "3px solid green";
  phoneInput.readOnly = false;
};
emailInputStyle = () => {
  emailInput.style.borderBottom = "3px solid green";
  emailInput.readOnly = false;
};

nameInputNoStyle = () => {
  nameInput.style.borderBottom = "1px solid black";
  nameInput.readOnly = true;
};
lastNameInputNoStyle = () => {
  lastNameInput.style.borderBottom = "1px solid black";
  lastNameInput.readOnly = true;
};
ageInputNoStyle = () => {
  ageInput.style.borderBottom = "1px solid black";
  ageInput.readOnly = true;
};
phoneInputNoStyle = () => {
  phoneInput.style.borderBottom = "1px solid black";
  phoneInput.readOnly = true;
};
emailInputNoStyle = () => {
  emailInput.style.borderBottom = "1px solid black";
  emailInput.readOnly = true;
};
buttonSubmit.addEventListener("click", (e) => {
  // nameInput.readOnly = true;
  // lastNameInput.readOnly = true;
  // ageInput.readOnly = true;
  // phoneInput.readOnly = true;
  // emailInput.readOnly = true;
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
  } else if (lastNameInput.value.length < 3 && nameInput.value.length < 3) {
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
    const removeStudent = document.createElement("button");
    const removeMessage = document.createElement("span");
    const changeInput = document.createElement("button");
    const changedData = "";
    for (let i = 0; i < 7; i++) {
      const studentInfo = document.createElement("p");
      studentInfo.setAttribute("id", `studentInfo`);
      studentItem.append(studentInfo);
      studentInfo.setAttribute("value", `${i}`);

      if (i === 0 && nameInput.value !== "") {
        studentInfo.textContent += nameInput.value;
      }
      if (i === 1 && lastNameInput.value !== "") {
        studentInfo.textContent += ` ${lastNameInput.value}`;
      }
      if (i === 2 && ageInput.value !== "") {
        studentInfo.textContent += ` ${ageInput.value}`;
      }
      if (i === 3 && phoneInput.value !== "") {
        studentInfo.innerHTML += `${secretPhoneSymbols}`;
      }
      if (i === 4 && emailInput.value !== "") {
        studentInfo.textContent += `${secretEmailSymbols}`;
      }
      if (i === 5 && rangeTicks.checked !== "") {
        studentInfo.textContent += `${rangeInput.value}`;
      }
      if (i === 6 && radioInput.checked !== "") {
        studentInfo.textContent += `${radioValue}`;
      }
      let hiddenData = true;
      showButton.textContent = "SHOW";
      showButton.addEventListener("click", () => {
        if (i === 3 && hiddenData) {
          showButton.textContent = "HIDE";
          studentInfo.innerHTML = phoneInput.value;
        } else if (i === 3 && !hiddenData) {
          showButton.textContent = "SHOW";
          studentInfo.innerHTML = ` ${secretPhoneSymbols}`;
        }
        if (i === 4 && hiddenData) {
          showButton.textContent = "HIDE";
          studentInfo.innerHTML = emailInput.value;
        } else if (i === 4 && !hiddenData) {
          showButton.textContent = "SHOW";
          studentInfo.innerHTML = `${secretEmailSymbols}`;
        }
        hiddenData = !hiddenData;
      });
      removeStudent.textContent = "Remove student";
      removeStudent.addEventListener("click", () => {
        container.prepend(removeMessage);
        container.removeChild(studentItem);
        removeMessage.textContent = `Student ${studentInfo.textContent} was removed`;
        setTimeout(() => {
          container.removeChild(removeMessage);
        }, 5000);
      });
    }
    console.log(formInputs.value);
    changeInput.textContent = "Change data";
    const allInputs = document.querySelectorAll("input");
    for (let i = 0; i < 7; i++) {
      console.log(allInputs[i].value);
    }
    changeInput.addEventListener("click", () => {
      if (changeInput.textContent === "Change data") {
        changeInput.textContent = "Submit";
        console.log(changeInput.textContent);
        nameInputStyle();
        lastNameInputStyle();
        ageInputStyle();
        phoneInputStyle();
        emailInputStyle();
      } else {
        changeInput.textContent = "Change data";
        console.log(changeInput.textContent);
        for (let i = 0; i < 7; i++) {
          studentInfo[i].textContent = allInputs[i].value;
        }
        nameInputNoStyle();
        lastNameInputNoStyle();
        ageInputNoStyle();
        phoneInputNoStyle();
        emailInputNoStyle();
      }
    });
    studentItem.style.maxWidth = "400px";
    studentItem.style.height = "250px";
    studentItem.style.backgroundColor = "white";
    studentItem.style.margin = "auto";
    studentItem.style.marginTop = "15px";
    studentItem.style.lineHeight = "10px";
    studentItem.style.paddingTop = "15px ";
    studentItem.style.paddingLeft = "20px ";
    studentItem.style.fontSize = "15px ";

    showButton.style.marginTop = "5px";
    showButton.style.width = "30%";
    showButton.style.height = "20px";
    showButton.style.fontSize = "10px";
    showButton.style.border = "none";
    showButton.style.outline = "none";
    showButton.style.backgroundColor = "lightgray";
    showButton.style.color = "white";
    showButton.style.cursor = "pointer";

    removeStudent.style.marginTop = "5px";
    removeStudent.style.marginLeft = "5px";
    removeStudent.style.width = "30%";
    removeStudent.style.height = "20px";
    removeStudent.style.fontSize = "10px";
    removeStudent.style.border = "none";
    removeStudent.style.outline = "none";
    removeStudent.style.backgroundColor = "lightgray";
    removeStudent.style.color = "white";
    removeStudent.style.cursor = "pointer";

    removeMessage.style.marginTop = "20px";
    removeMessage.style.fontSize = "20px";
    removeMessage.style.display = "flex";
    removeMessage.style.justifyContent = "center";

    changeInput.style.marginTop = "5px";
    changeInput.style.marginLeft = "5px";
    changeInput.style.width = "30%";
    changeInput.style.height = "20px";
    changeInput.style.fontSize = "10px";
    changeInput.style.border = "none";
    changeInput.style.outline = "none";
    changeInput.style.backgroundColor = "lightgray";
    changeInput.style.color = "white";
    changeInput.style.cursor = "pointer";

    container.appendChild(studentItem);
    studentItem.append(showButton, removeStudent, changeInput);
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

const INITIAL_STUDENT_DATA = [
  {
    name: "Vardas1",
    lastName: "Pavarde1",
    age: 21,
    phone: "+370611111111",
    email: "aaa@gmail.com",
    interests: ["javaScript", "PhP"],
    group: "type11",
    itKnowledge: 3,
  },
  {
    name: "Vardas2",
    lastName: "Pavarde2",
    age: 22,
    phone: "+37062222222",
    email: "bbb@gmail.com",
    interests: ["javaScript", "PhP"],
    itKnowledge: 5,
  },
  {
    name: "Vardas3",
    lastName: "Pavarde3",
    age: 23,
    phone: "+37063333333",
    email: "ccc@gmail.com",
    interests: ["javaScript", "PhP"],
    itKnowledge: 1,
  },
  {
    name: "Vardas4",
    lastName: "Pavarde4",
    age: 24,
    phone: "+37064444444",
    email: "ddd@gmail.com",
    interests: ["javaScript", "PhP"],
    itKnowledge: 2,
  },
  {
    name: "Vardas5",
    lastName: "Pavarde5",
    age: 25,
    phone: "+37065555555",
    email: "eee@gmail.com",
    interests: ["javaScript", "PhP"],
    itKnowledge: 4,
  },
];

function renderInitialData(students) {
  students.map((student) => {
    console.log(student);
    console.log(student.name);
  });
}
renderInitialData(INITIAL_STUDENT_DATA);
