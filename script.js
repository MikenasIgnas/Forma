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
sliderElement.classList.add("sliderElement");

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

const searchForm = document.createElement("Form");
const searchInput = document.createElement("input");
const searchButton = document.createElement("input");
const selectElement = document.createElement("select");
const nameOption = document.createElement("option");
const lastNameOption = document.createElement("option");
const ageOption = document.createElement("option");
const phoneOption = document.createElement("option");
const emailOption = document.createElement("option");
const groupOption = document.createElement("option");
const interestOption = document.createElement("option");

const interestContainer = document.createElement("div");
interestContainer.style.width = "100%";
interestContainer.style.height = "70px";
interestContainer.style.marginTop = "20px";
interestContainer.style.marginBottom = "20px";

const interestContainerTitle = document.createElement("p");
interestContainerTitle.textContent = "Interests:";
interestContainerTitle.style.fontSize = "20px";

const checkboxContainer = document.createElement("div");
checkboxContainer.style.display = "flex";
checkboxContainer.style.justifyContent = "space-around";
checkboxContainer.style.alignItems = "center";

const checkBox1 = document.createElement("input");
const checkBox2 = document.createElement("input");
const checkBox3 = document.createElement("input");
const checkBox4 = document.createElement("input");
const checkBox1Label = document.createElement("label");
const checkBox2Label = document.createElement("label");
const checkBox3Label = document.createElement("label");
const checkBox4Label = document.createElement("label");

interestCheckBoxes = (element, name, value) => {
  element.type = "checkbox";
  element.name = name;
  element.value = value;
};
interestCheckBoxLabels = (element, textContent, labelName) => {
  element.style.fontSize = "15px";
  element.textContent = textContent;
  element.htmlFor = labelName;
};
interestCheckBoxes(checkBox1, "checkBox", "JAVA");
interestCheckBoxes(checkBox2, "checkBox", "JavaScript");
interestCheckBoxes(checkBox3, "checkBox", "C++");
interestCheckBoxes(checkBox4, "checkBox", "Python");

interestCheckBoxLabels(checkBox1Label, "JAVA");
interestCheckBoxLabels(checkBox2Label, "JavaScript");
interestCheckBoxLabels(checkBox3Label, "C++");
interestCheckBoxLabels(checkBox4Label, "Python");

interestContainer.append(interestContainerTitle, checkboxContainer);
checkboxContainer.append(
  checkBox1Label,
  checkBox1,
  checkBox2Label,
  checkBox2,
  checkBox3Label,
  checkBox3,
  checkBox4Label,
  checkBox4
);
selectElement.append(
  nameOption,
  lastNameOption,
  ageOption,
  phoneOption,
  emailOption,
  groupOption,
  interestOption
);
searchForm.append(searchInput, selectElement, searchButton);
formContainer.append(formHeader, formInputs);
formInputs.append(
  nameItemContainer,
  lastNameItemContainer,
  ageItemContainer,
  phoneNumberContainer,
  emailContainer,
  rangeContainer,
  radioButtonsMainContainer,
  interestContainer,
  requiered,
  submitButtonContainer,
  searchForm
);

searchFormFunction(searchForm, searchInput, searchButton);

slectOption(nameOption, "Name");
slectOption(lastNameOption, "Last name");
slectOption(ageOption, "Age");
slectOption(phoneOption, "Phone");
slectOption(emailOption, "Email");
slectOption(groupOption, "Group");
slectOption(interestOption, "Interest");
selectElementStyle(selectElement);

sliderElement.style.marginTop = "20px";
sliderElement.style.width = "100%";

submitButtonFunction(submitButton, submitButtonContainer);
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
  createElement(nameItemContainer, nameInput, "text", "Name*", "nameLabel");
  createElement(
    lastNameItemContainer,
    lastNameInput,
    "text",
    "Last Name*",
    "lastNameLabel"
  );
  createElement(ageItemContainer, ageInput, "number", "Age*", "ageLabel");
  createElement(
    phoneNumberContainer,
    phoneInput,
    "number",
    "Phone Nr.*",
    "phoneLabel"
  );
  createElement(emailContainer, emailInput, "email", "Email*", "emailLabel");
  createRangeEl(rangeContainer, rangeLabel, rangeInput);
  createRadioButton();
}
createForm();
let radioValue;
function setRadioValue(e) {
  if (e.target.checked) {
    radioValue = e.target.value;
  }
}
function setCheckBoxValue() {
  let checkboxValue = "";
  let checkBoxes = document.getElementsByName("checkBox");
  for (let i = 0; i < checkBoxes.length; i++) {
    if (checkBoxes[i].checked) checkboxValue += checkBoxes[i].value + " ";
  }
  return checkboxValue;
}
checkboxContainer.addEventListener("click", setCheckBoxValue);
function createRadioButton() {
  const radioButtonsContainer = document.createElement("div");
  radioButtonsMainContainer.style.fontSize = "20px";
  radioButtonsMainContainer.style.marginTop = "30px";
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
const createStudentInfo = (textContent, parent, addClass) => {
  const studentInfo = document.createElement("p");
  studentInfo.classList.add(addClass);
  parent.append(studentInfo);
  studentInfo.textContent = textContent;

  return studentInfo;
};

addNoStyleToElements = () => {
  noStyle(nameInput);
  noStyle(lastNameInput);
  noStyle(ageInput);
  noStyle(phoneInput);
  noStyle(emailInput);
};
addStyleToElements = () => {
  addStyle(nameInput);
  addStyle(lastNameInput);
  addStyle(ageInput);
  addStyle(phoneInput);
  addStyle(emailInput);
};

buttonSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  const checkboxValue = setCheckBoxValue();
  let secretEmailSymbols = "";
  for (let i = 0; i < emailInput.value.length; i++) {
    secretEmailSymbols = `${secretEmailSymbols}*`;
  }
  let secretPhoneSymbols = "";
  for (let i = 0; i < phoneInput.value.length; i++) {
    secretPhoneSymbols = `${secretPhoneSymbols}*`;
  }
  const studentItem = document.createElement("div");
  studentItem.classList.add("studentItem");
  const showButton = document.createElement("button");
  const removeStudent = document.createElement("button");
  const removeMessage = document.createElement("span");
  const changeInput = document.createElement("button");
  const nameInfo = createStudentInfo(
    nameInput.value,
    studentItem,
    "studentName"
  );

  const lastNameInfo = createStudentInfo(
    lastNameInput.value,
    studentItem,
    "studentLastName"
  );

  const ageInfo = createStudentInfo(ageInput.value, studentItem, "studentAge");

  const phoneInfo = createStudentInfo(
    secretPhoneSymbols,
    studentItem,
    "studentPhone"
  );

  const emailInfo = createStudentInfo(
    secretEmailSymbols,
    studentItem,
    "studentEmail"
  );

  const rangeInfo = createStudentInfo(
    rangeInput.value,
    studentItem,
    "studentRangeInfo"
  );
  const radioInfo = createStudentInfo(
    radioValue,
    studentItem,
    "studentRadioInfo"
  );
  const interests = createStudentInfo(
    checkboxValue,
    studentItem,
    "studentInterests"
  );
  if (
    nameInput.value === "" &&
    lastNameInput.value === "" &&
    ageInput.value === "" &&
    phoneInput.value === "" &&
    emailInput.value === ""
  ) {
    alert("Required fields are not filled");
    inputAlert(nameInput, "Name requiered");
    inputAlert(lastNameInput, "Last name requiered");
    inputAlert(ageInput, "Age requiered");
    inputAlert(phoneInput, "Phone requiered");
    inputAlert(emailInput, "Email requiered");
  } else if (lastNameInput.value.length < 3 && nameInput.value.length < 3) {
    alert("Name and LastName has to be at least 3 letters long");
    inputAlert(lastNameInput, "Last name requiered");
    inputAlert(nameInput, "Name requiered");
  } else if (nameInput.value.length < 3) {
    alert("Name has to be atleast 3 letters long");
    inputAlert(nameInput, "Name requiered");
  } else if (lastNameInput.value.length < 3) {
    alert("LastName has to be atleast 3 letters long");
    inputAlert(lastNameInput, "Last name requiered");
  } else if (ageInput.value <= 0) {
    alert(
      "Age must be a positive number (Must be more than 0 and less than 120)"
    );
    inputAlert(ageInput, "Age requiered");
  } else if (ageInput.value >= 120) {
    alert("Age is invalid (Must be more than 0 and less than 120)");
    inputAlert(ageInput, "Age requiered");
  } else if (phoneInput.value.length < 9 || phoneInput.value.length > 12) {
    alert("Incorect phone number (Must be between 9 and 12 numbers)");
    inputAlert(phoneInput, "Phone requiered");
  } else if (emailInput.value.length < 5 || !emailInput.value.includes("@")) {
    alert("Incorect Email (must contain @ and be atleast 5 symbols long)");
    inputAlert(emailInput, "Email requiered");
  } else {
    let hiddenData = true;
    showButton.textContent = "SHOW";
    showButton.addEventListener("click", () => {
      if (hiddenData) {
        showButton.textContent = "HIDE";
        phoneInfo.innerHTML = phoneInput.value;
        emailInfo.innerHTML = emailInput.value;
      } else if (!hiddenData) {
        showButton.textContent = "SHOW";
        phoneInfo.innerHTML = ` ${secretPhoneSymbols}`;
        emailInfo.innerHTML = `${secretEmailSymbols}`;
      }
      hiddenData = !hiddenData;
    });
    removeStudent.textContent = "Remove student";
    removeStudent.addEventListener("click", () => {
      container.prepend(removeMessage);
      container.removeChild(studentItem);
      removeMessage.textContent = `Student ${nameInfo.textContent} was removed`;
      setTimeout(() => {
        container.removeChild(removeMessage);
      }, 5000);
    });
    changeInput.textContent = "Change data";
    changeInput.addEventListener("click", () => {
      if (changeInput.textContent === "Change data") {
        changeInput.textContent = "Submit";
        nameInput.value = nameInfo.textContent;
        lastNameInput.value = lastNameInfo.textContent;
        ageInput.value = ageInfo.textContent;
        secretPhoneSymbols = phoneInfo.textContent;
        secretEmailSymbols = emailInfo.textContent;
        rangeInput.value = rangeInfo.textContent;
        radioValue = radioInfo.textContent;
        addStyleToElements();
      } else {
        nameInfo.textContent = nameInput.value;
        lastNameInfo.textContent = lastNameInput.value;
        ageInfo.textContent = ageInput.value;
        phoneInfo.textContent = secretPhoneSymbols;
        emailInfo.textContent = secretEmailSymbols;
        rangeInfo.textContent = rangeInput.value;
        radioInfo.textContent = radioValue;
        changeInput.textContent = "Change data";
        addNoStyleToElements();
      }
    });
    studentItemBox(studentItem);
    studentItemBoxButtonStyles(showButton);
    studentItemBoxButtonStyles(removeStudent);
    studentItemBoxButtonStyles(changeInput);
    removeMessageText(removeMessage);
    container.appendChild(studentItem);
    studentItem.append(showButton, removeStudent, changeInput);
  }
});

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  searchfunction = (option, student, studentInfo) => {
    let formInputData = e.target.elements.search.value.toLowerCase().trim();
    let searchVariation = e.target.elements.variations.value;
    if (searchVariation === option) {
      if (studentInfo.includes(formInputData)) {
        student.style.display = "block";
      } else {
        student.style.display = "none";
      }
    }
  };
  myfunction = (student, className) => {
    studentInputInfo = student
      .querySelector(className)
      .textContent.toLowerCase();
    return studentInputInfo;
  };
  let studentItems = document.querySelectorAll(".studentItem");
  studentItems.forEach((student) => {
    let studentName = myfunction(student, ".studentName");
    let studentLastName = myfunction(student, ".studentLastName");
    let studentAge = myfunction(student, ".studentAge");
    let studentPhone = myfunction(student, ".studentPhone");
    let studentEmail = myfunction(student, ".studentEmail");
    let studentGroup = myfunction(student, ".studentRadioInfo");
    let studentInterests = myfunction(student, ".studentInterests");
    searchfunction("Name", student, studentName);
    searchfunction("Last name", student, studentLastName);
    searchfunction("Age", student, studentAge);
    searchfunction("Phone", student, studentPhone);
    searchfunction("Email", student, studentEmail);
    searchfunction("Group", student, studentGroup);
    searchfunction("Interest", student, studentInterests);
  });
  searchInput.value = "";
});

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
