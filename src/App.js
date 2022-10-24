
import './App.css';
import { useEffect, useState} from "react";
import CalcButtons from "./Components/calcbuttons";
import Inputs from './Components/inputs';
import ButtonKeyPad from './Components/buttonkeypad';
function App() {
  
  const [answer, setAnswer] = useState("");
  const [first, setFirst] = useState(10);
  const [second, setSecond] = useState(22);

  useEffect(() => {
    console.log("useEffect",first);
  }, [first]);
const [calculation, setCalculation] = useState("");

const Calculate = (value) => {
  console.log("value", value);
  if (value !== ""){
    switch (value) {
  
  case "-":
    setAnswer(first - second);
    break;
    case "+":
    setAnswer(first + second);
    break;
    case "*":
      setAnswer(first * second);
      break;
      case "/":
        setAnswer(first / second);
        break;
   
        default:
          setAnswer("error");
          break;
    }
  }
};
const updateCalculation = (value) => {
  console.log("updateCalculation", value + " " + calculation);
  setCalculation(calculation + String(value));

  if (value == "=") {
    setCalculation(new Function("return " + calculation ));
  }

  if (value == "clear") {
    const result = calculation;
    console.log("updateCalculation CLEAR", result);
    setCalculation("");
  }


  if (value == "del") {
    const result = calculation.slice(0, -1);
    console.log("updateCalculation DEL", result);
    setCalculation(result);
  }

 
};
  return (
    <div className='calc-box'>
      <h1>Calculator</h1>

      <div className='output'>{calculation || "Enter a number"}</div>

      <CalcButtons updateCalculation={updateCalculation} />
      <div className='digits'>
        <ButtonKeyPad updateCalculation={updateCalculation} />
        
      </div>
    </div>
    );
};

export default App;
