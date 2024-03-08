let variables = [];
let operators = [];
let expressionLength = 4;

let brackets = Math.floor(Math.random() * 16); // set to 15 if brackets are not needed
let openedBracket = -1;
let closedBracket = -1;
let not_before_bracket = Math.floor(Math.random() * 2); // set to 0 if "NOT" before brackets is not needed

for (let i = 0; i < expressionLength; i++) {
  let variable = String(Math.floor(Math.random() * 2));
  let notOperator = Math.floor(Math.random() * 2);
  if (brackets < 11) {
    openedBracket = Math.floor(Math.random() * (expressionLength - 1));
    let shiftBracket = 0;
    if (openedBracket === 0) {
      shiftBracket = 1; // to avoid that situation: (0 + 0 + 0)
    }
    closedBracket = Math.floor(Math.random() * (expressionLength - 1 - openedBracket - shiftBracket) + openedBracket + 1);
    brackets = 15; // to not generate brackets position again
  }
  if (notOperator === 1) {
    variable = "!" + variable;
  }
  if (i === openedBracket) {
    variable = "(" + variable;
    if (not_before_bracket === 1) {
      variable = "!" + variable;
    }
  }
  if (i === closedBracket) {
    variable = variable + ")";
  }
  variables.push(variable);
}

// random operators
for (let i = 0; i < expressionLength - 1; i++) {
  let operator = Math.floor(Math.random() * 2);
  if (operator === 0) {
    operators.push("+");
  } else {
    operators.push("×");
  }
}

// gathering expression
let expression = [];
for (let i = 0; i < expressionLength - 1; i++) {
  expression.push(variables[i]);
  expression.push(operators[i]);
}
expression.push(variables[expressionLength - 1]);
expression = expression.join(" ");