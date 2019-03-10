import React, { Component } from "react";
import "../../App.css";

const operator = new RegExp("^[-/+*^]$");
const numberInputArray = [];
const operatorArray = [];
let indexInString;
const historyArray = [];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: "",
      ans: ""
    };
  }

  createArrays = str => {
    const numberArray = [];
    const operatorArray = [];
    const indexArray = [];
    let j = 0;

    for (let i = 0; i < str.length; i++) {
      if (operator.test(str.charAt(i))) {
        if (
          !(i === 0 && str.charAt(i) === "-") &&
          !operator.test(str.charAt(i - 1))
        ) {
          operatorArray.push(str.charAt(i));
          if (indexArray.length == 0) {
            const number = parseFloat(str.slice(0, i));
            numberArray.push(number);
          } else {
            const number = parseFloat(str.slice(indexArray[j - 1] + 1, i));
            numberArray.push(number);
          }
          indexArray.push(i);
          j++;

          console.log(str.charAt(i));
        }
      }
    }
    return [numberArray, operatorArray, indexArray];
  };

  performOperation = (numberArray, operatorArray, indexArray, symbol, str) => {
    for (let i = 0; i < operatorArray.length; i++) {
      if (operatorArray[i] === symbol) {
        const operator = operatorArray[i];
        const num1 = numberArray[i];
        const num2 = numberArray[i + 1];
        let ans;
        if (symbol === "^") {
          ans = Math.pow(num1, num2);
        }
        if (symbol === "*") {
          ans = num1 * num2;
        }
        if (symbol === "/") {
          ans = num1 / num2;
        }
        if (symbol === "+") {
          ans = num1 + num2;
        }
        if (symbol === "-") {
          ans = num1 - num2;
        }
        let newString;

        if (operatorArray.length === 1) {
          return { finalBool: true, finalAns: ans };
        } else if (i === 0) {
          newString = ans + str.slice(indexArray[i + 1], str.length);
        } else if (i === operatorArray.length - 1) {
          newString = str.slice(0, indexArray[i - 1] + 1) + ans;
        } else {
          newString =
            str.slice(0, indexArray[i - 1] + 1) +
            ans +
            str.slice(indexArray[i + 1], str.length);
        }
        console.log("New String", newString);
        return newString;
      }
    }
  };

  calcStr = (str, first, last) => {
    let arrays = this.createArrays(str);
    let numberArray = arrays[0];
    let operatorArray = arrays[1];
    let indexArray = arrays[2];

    numberArray.push(
      parseFloat(str.slice(indexArray[indexArray.length - 1] + 1, str.length))
    );

    let currentOperator;
    let iPlus = operatorArray.indexOf("+");
    let iMinus = operatorArray.indexOf("-");
    let iTimes = operatorArray.indexOf("*");
    let iDivide = operatorArray.indexOf("/");
    let iPower = operatorArray.indexOf("^");

    if (iPower !== -1) {
      currentOperator = "^";
    } else if (iTimes !== -1 && iDivide !== -1) {
      if (iTimes < iDivide) {
        currentOperator = "*";
      } else {
        currentOperator = "/";
      }
    } else if (iTimes !== -1) {
      currentOperator = "*";
    } else if (iDivide !== -1) {
      currentOperator = "/";
    } else if (iPlus !== -1 && iMinus !== -1) {
      if (iPlus < iMinus) {
        currentOperator = "+";
      } else {
        currentOperator = "-";
      }
    } else if (iPlus !== -1) {
      currentOperator = "+";
    } else if (iMinus !== -1) {
      currentOperator = "-";
    }

    const newString = this.performOperation(
      numberArray,
      operatorArray,
      indexArray,
      currentOperator,
      str
    );

    if (!newString.finalBool) {
      this.calcStr(newString, first, last);
    } else {
      let returnString = first + newString.finalAns + last;
      console.log(returnString);
      this.calcInput(returnString);
    }
  };

  verifyInput = input => {
    if (operator.test(input.charAt(input.length - 1))) {
      input = input + "0";
    }
    const inputReg = new RegExp(
      "^(\\(*-?\\d*\\.?\\d+\\)*[-/+*^%{]\\(*(-?\\d*\\.?\\d*\\)*)*)+$"
    );
    if (!inputReg.test(input)) {
      alert("input is not in the correct form");
    } else {
      this.calcInput(input);
    }
  };

  calcInput = input => {
    console.log("CALCULATE INPUT", input);
    input = input.toString();
    input = input.replace("+-", "-");
    input = input.replace("--", "+");
    let newString;
    let parenthesis = false;
    let calculatedSubString;
    for (let i = 0; i < input.length; i++) {
      if (input.charAt(i) === ")") {
        for (let j = i; j >= 0; j--) {
          if (input.charAt(j) === "(") {
            const minusStr = input.slice(j, i + 1);
            const calcStr = minusStr.slice(1, -1);
            const first = input.slice(0, j);
            const last = input.slice(i + 1, input.length);
            this.calcStr(calcStr, first, last);
            break;
          }
        }
        break;
      }
    }

    if (input.indexOf(")") == -1 && input.indexOf("(") == -1) {
      let onceMore = false;
      for (let i = 0; i < input.length; i++) {
        if (operator.test(input.charAt(i))) {
          if (!(i === 0 && input.charAt(i) === "-")) {
            console.log(input.charAt(i));
            console.log("voila", i);
            this.calcStr(input, "", "");
            onceMore = true;
          }
        }
      }
      if (!onceMore) {
        if (historyArray.indexOf(this.state.inputText) === -1) {
          historyArray.length = 0;
          if (operator.test(this.state.inputText.charAt(this.state.inputText.length - 1))) {
            historyArray.push(this.state.inputText + "0");
          }
          else {
            historyArray.push(this.state.inputText);
          }
          historyArray.push("ANSWER " + input);
          this.scrollToBottom();
        }
        this.setState({ ans: input, inputText: "" });
      }
    }
  };

  scrollToBottom = () => {
    this.historyDiv.scrollIntoView({ behavior: "smooth" });
  };

  enterPressed = e => {
    let code = e.keyCode || e.which;
    if (code === 13) {
      console.log(code);
      this.verifyInput(this.state.inputText);
    }
  };

  inputChange = text => {
    const inputReg = new RegExp(
      "^\\(*-?\\d*\\.?\\d*$|^(\\(*-?\\d*\\.?\\d+\\)*[-/+*^%{]\\(*(-?\\d*\\.?\\d*\\)*)*)+$"
    );
    console.log(inputReg.test(text));
    if (inputReg.test(text)) {
      let newText = text.replace("+-", "-");
      newText = newText.replace("--", "+");
      if (text.indexOf("%") !== -1) {
        const percentIndex = text.indexOf("%");
        for (let i = percentIndex; i > 0; i--) {
          if (operator.test(text.charAt(i))) {
            const number = text.slice(i + 1, percentIndex);
            const slice = text.slice(0, i + 1);
            const newInputString = slice + parseFloat(number) / 100;
            this.setState({ inputText: newInputString });
            break;
          }
          const number = text.slice(0, percentIndex);
          const newInputString = parseFloat(number) / 100;
          this.setState({ inputText: newInputString });
        }
      } else {
        this.setState({ inputText: newText });
      }
    }
  };

  setInput = text => {
    const newText = this.state.inputText + text;
    this.inputChange(newText);
  };

  render() {
    console.log("Calculator Input", this.state.inputText);
    return (
      <div className="Container">
        <svg width="600" height="600">

        <defs>
            <pattern id="imgpattern" x="0" y="0" width="1" height="1">
              <image width="120" height="250"
                     href="http://lorempixel.com/animals/120/250/"/>
            </pattern>
        </defs>

        <path
       class="path" stroke="black" stroke-width="4" fill="url(#imgpattern)"
              d="M 100,50 L 120,110 150,90 170,220 70,300 50,250 50,200 70,100 50,70 Z" />
      </svg>
      </div>
    );
  }
}

export default App;
