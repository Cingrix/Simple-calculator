let isSign = (sign) => ("+-/xX%".indexOf(sign) !== -1 ? true : false);
var calculated = false;
var memory = null;
let append = (key) => {
  let result = document.getElementById("display").value;
  if (calculated) {
    result = "";
    calculated = false;
  }
  if (result.charAt(0) === "0") result = key;
  else result += key;
  if (isSign(key) && isSign(result.charAt(result.length - 2)))
    result = result.slice(0, -1);
  document.getElementById("display").value = result;
};

let calculate = () => {
  let result = document.getElementById("display").value;
  try {
    let output = eval(result);
    document.getElementById("display").value = output;
  } catch (error) {
    document.getElementById("display").value = "Error: Invalid expression";
  }
  calculated = true;
};

let backSpace = () => {
  let result = document.getElementById("display").value;
  if (result.length > 1) {
    result = result.slice(0, -1);
    document.getElementById("display").value = result;
  } else document.getElementById("display").value = "0";
};

let memorySave = () => {
  let result = document.getElementById("display").value;
  memory = result;
  // localStorage.setItem("memory", result);
  // localStorage.getItem();
  // localStorage.removeItem("memory");
};

let memoryRestore = () => {
  if (memory) {
    document.getElementById("display").value = memory;
  }
};

let memoryCancel = () => {
  memory = null;
};

let memoryAdd = () => {
  let result = document.getElementById("display").value;
  if (memory) {
    result = parseInt(memory) + parseInt(result);
  }
  memory = result;
};

let memoryMinus = () => {
  let result = document.getElementById("display").value;
  if (memory) {
    result = parseInt(memory) - parseInt(result);
  }
  memory = result;
};

let clearAll = () => {
  document.getElementById("display").value = "0";
  memory = null;
};

let clearEntry = () => {
  document.getElementById("display").value = "0";
};

const buttonMs = document.getElementById("btnMs");
const buttonsToEnable = document.querySelectorAll("#btnMc, #btnMr");
const buttonMc = document.getElementById("btnMc");
buttonMs.addEventListener("click", function () {
  buttonsToEnable.forEach(function (button) {
    button.disabled = false;
  });
});

buttonMc.addEventListener("click", function () {
  buttonsToEnable.forEach(function (button) {
    button.disabled = true;
  });
});

let signChange = () => {
  const currentValue = document.getElementById("display").value;
  if (currentValue.startsWith("-")) {
      document.getElementById("display").value = currentValue.substring(1);
  } else if (currentValue !== "") {
      document.getElementById("display").value = "-" + currentValue;
  }
};
