let expression = "1 * !(!1 + 1)";
let convertedExpression = [];
for (let i = 0; i < expression.length; i++) {
  if (expression[i] === "1") {
    convertedExpression.push("true");
  } else if (expression[i] === "0") {
    convertedExpression.push("false");
  } else if (expression[i] === "!") {
    convertedExpression.push("!");
  } else if (expression[i] === "×" || expression[i] === "*") {
    convertedExpression.push("&&");
  } else if (expression[i] === "+") {
    convertedExpression.push("||");
  } else {
    convertedExpression.push(expression[i]);
  }
}
let jsLogicalExpression = convertedExpression.join("");

console.log("Original Expression:");
console.log(expression, " = ", eval(jsLogicalExpression));
console.log(" \nConverted Expression:");
console.log(jsLogicalExpression, " = ", eval(jsLogicalExpression));