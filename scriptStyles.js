addStyle = (element) => {
  element.style.borderBottom = "3px solid green";
  element.readOnly = false;
};

noStyle = (element) => {
  element.style.borderBottom = "1px solid black";
};
studentItemBox = (item) => {
  item.style.maxWidth = "400px";
  item.style.backgroundColor = "white";
  item.style.margin = "auto";
  item.style.marginTop = "15px";
  item.style.lineHeight = "10px";
  item.style.paddingTop = "15px ";
  item.style.paddingLeft = "20px ";
  item.style.fontSize = "15px ";
};
studentItemBoxButtonStyles = (button) => {
  button.style.marginTop = "5px";
  button.style.width = "30%";
  button.style.height = "20px";
  button.style.fontSize = "10px";
  button.style.border = "none";
  button.style.outline = "none";
  button.style.backgroundColor = "lightgray";
  button.style.color = "white";
  button.style.cursor = "pointer";
  button.style.marginRight = "5px";
  button.style.marginBottom = "10px";
};
removeMessageText = (message) => {
  message.style.marginTop = "20px";
  message.style.fontSize = "20px";
  message.style.display = "flex";
  message.style.justifyContent = "center";
};

inputAlert = (imputName, placeholder) => {
  imputName.style.border = "none";
  imputName.style.borderBottom = "2px solid red";
  imputName.placeholder = placeholder;
  imputName.value = "";
  imputName.addEventListener("keydown", () => {
    imputName.style.border = "none";
    imputName.style.borderBottom = "1px solid black";
  });
};
createRangeEl = (container, label, input) => {
  container.style.marginTop = "30px";
  label.htmlFor = "rangeInput";
  label.innerHTML = "Grade your IT knowledge*: ";
  input.style.display = "block";
  label.style.width = "100%";
  label.style.marginTop = "50px";
  label.style.fontSize = "20px";
};

slectOption = (optionName, optionText) => {
  optionName.textContent = optionText;
  optionName.textContent = optionText;
  optionName.textContent = optionText;
  optionName.textContent = optionText;
  optionName.textContent = optionText;
};
slectOption = (optionName, optionText) => {
  optionName.textContent = optionText;
  optionName.textContent = optionText;
  optionName.textContent = optionText;
  optionName.textContent = optionText;
  optionName.textContent = optionText;
};

selectElementStyle = (style) => {
  style.style.border = "none";
  style.style.borderBottom = "1px solid black";
  style.style.marginLeft = "10px";
  style.style.outline = "none";
  style.name = "variations";
};
createElement = (itemContainer, input, type, placeholder, name) => {
  itemContainer.style.marginBottom = "10px";
  input.style.display = "block";
  input.style.width = "100%";
  input.style.height = "40px";
  input.style.border = "none";
  input.style.borderBottom = "1px solid black";
  input.style.outline = "none";
  input.style.marginBottom = "30px";

  input.type = type;
  input.placeholder = placeholder;
  input.name = name;
  input.required;
};

searchFormFunction = (form, input, button) => {
  form.setAttribute("id", "searchForm");
  form.style.height = "20px";
  form.style.marginTop = "50px";
  form.style.display = "flex";
  form.style.justifyContent = "center";
  input.style.width = "100%";
  input.type = "text";
  input.name = "search";
  input.setAttribute("id", "searchInput");
  input.placeholder = "Search for a student";
  input.style.outline = "none";
  input.style.border = "none";
  input.style.borderBottom = "1px solid black";
  input.style.width = "100%";
  button.type = "submit";
  button.value = "Search";
  button.style.fontSize = "10px";
  button.style.border = "none";
  button.style.color = "white";
  button.style.backgroundColor = "lightgray";
  button.style.width = "20%";
  button.style.marginLeft = "10px";
};
submitButtonFunction = (button, buttonContainer) => {
  button.innerHTML = "SUBMIT";
  button.style.width = "40%";
  button.style.height = "35px";
  button.style.border = "none";
  button.style.backgroundColor = "lightgray";
  button.style.color = "white";
  button.style.cursor = "pointer";
  button.style.fontSize = "15px";
  button.style.lineHeight = "35px";
  button.style.textAlign = "center";
  button.style.outline = "none";
  buttonContainer.style.margin = "auto";
  buttonContainer.style.textAlign = "center";
  buttonContainer.style.marginTop = "10px";
};
radioButtonStyle = (radioButton) => {
  radioButton.style.fontSize = "20px";
  radioButton.style.marginTop = "30px";
};
