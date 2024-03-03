let equation = "";

function addToScreen(character) {
  equation += character;
  document.getElementById("screen").value = equation;
}

function clearScreen() {
  equation = "";
  document.getElementById("screen").value = "";
}

function calculate() {
  let result = eval(equation);
  equation = result.toString();
  document.getElementById("screen").value = equation;
}
