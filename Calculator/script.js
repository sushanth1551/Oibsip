let expressionElement = document.getElementById("expression");
let resultElement = document.getElementById("result");
let lastAnswer = 0;

function appendSymbol(symbol) {
  if (expressionElement.textContent === "0") {
    expressionElement.textContent = symbol;
  } else {
    expressionElement.textContent += symbol;
  }
}

function clearDisplay() {
  expressionElement.textContent = "0";
  resultElement.textContent = "0";
}

function deleteLast() {
  const currentText = expressionElement.textContent;
  expressionElement.textContent =
    currentText.length > 1 ? currentText.slice(0, -1) : "0";
}

function calculateResult() {
  try {
    let evaluatedResult = eval(expressionElement.textContent);
    resultElement.textContent = evaluatedResult;
    lastAnswer = evaluatedResult;
  } catch (error) {
    resultElement.textContent = "Error";
  }
}

function useAnswer() {
  appendSymbol(lastAnswer);
}