import React from 'react';
import './App.css';


const isValidNumber = (input) => {

  var number = input.toString();
  
  if(number.length > 0) {
    // check for zero at begining
    if(number.length > 0) {
      if(number[0] === "0") {
        return false;
      }
    }
    // check for multiple decimal(.)
    if((number.match(/\./g) || []).length > 1) {
      return false;
    }
  }

  return true;
}



const App = () => {

  const [inputState, setInputState] = React.useState("0");
  const [inputNumber, setInputNumber] = React.useState("");

  const clear = () => {
    setInputState("0");
    setInputNumber("");
  };



  const setInput = (digit) => {
    var update;
    var numberUpdate;
    // if the entered new digit comprises a valid number
    // only then we will update the inputState and inputNumber
    if(isValidNumber(inputNumber + digit)) {
      // if inputState is in initial state then only consider the digit
      if(inputState.toString() === "0") {
        update = digit;
        numberUpdate = digit;
      }
      else {
        update = inputState + digit;
        numberUpdate = inputNumber + digit;
      }

      // tracking the number seperately
      setInputNumber(numberUpdate);
      setInputState(update);
    }
  }

  const setSign = (sign) => {
    var update = "0";
    
    // only allowing input starts with + and -
    if(inputState.toString() === "0" && (sign.toString() !== "*" && sign.toString() !== "/")) {
      update = sign;
    }
    if(inputState.toString() !== "0") {
      update = inputState + sign;
    }

    if (update !== "0" ) {
      // extracting the latest signs and deciding which to keep and which to reject
      var latestSigns = update.match(/[+*/-]+$/gm)[0];
      if(latestSigns.length > 1) {
        if(latestSigns[latestSigns.length-1] !== '-') {
          update = update.slice(0, update.length-latestSigns.length) + latestSigns[latestSigns.length-1];
        }
      }
    }

    // reseting input number when a sign is entered
    // because after sign, new number will begin
    setInputNumber("");
    setInputState(update);
  }


  const Result = () => {
    // cleaning symbols at the end of the expresstion
    var result = inputState.replace(/[+*/-]+$/gm, "");
    
    result = eval(result);
    setInputState(result);
  }



  return (
    <div>

      <div id="display">
        {inputState}
      </div>

      <div id="signes">
        <button type="button" id="zero" onClick={() => setInput("0")}>0</button>
        <button type="button" id="one" onClick={() => setInput("1")}>1</button>
        <button type="button" id="two" onClick={() => setInput("2")}>2</button>
        <button type="button" id="three" onClick={() => setInput("3")}>3</button>
        <button type="button" id="four" onClick={() => setInput("4")}>4</button>
        <button type="button" id="five" onClick={() => setInput("5")}>5</button>
        <button type="button" id="six" onClick={() => setInput("6")}>6</button>
        <button type="button" id="seven" onClick={() => setInput("7")}>7</button>
        <button type="button" id="eight" onClick={() => setInput("8")}>8</button>
        <button type="button" id="nine" onClick={() => setInput("9")}>9</button>
        <button type="button" id="decimal" onClick={() => setInput(".")}>.</button>

        <br />

        <button type="button" id="add" onClick={() => setSign("+")}>+</button>
        <button type="button" id="subtract" onClick={() => setSign("-")}>-</button>
        <button type="button" id="multiply" onClick={() => setSign("*")}>*</button>
        <button type="button" id="divide" onClick={() => setSign("/")} >/</button>
      </div>

      <div id="operations">
        <Operation operationId={"equals"} operationSign={"="} operation={Result} />
        <Operation operationId={"clear"} operationSign={"AC"} operation={clear} />
      </div>
    </div>
  );
}



const Operation = ({operationId, operationSign, operation}) => {


  return (
    <div>
      <button type="button" id={operationId} onClick={operation}>{operationSign}</button>
    </div>
  );
}



export default App;
