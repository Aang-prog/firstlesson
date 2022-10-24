import logo from './logo.svg';
import './App.css';
import { useState} from "react";
import CalcButton from "./Components/calcbuttons";
import CalcButtons from './Components/calcbuttons';
function App() {
  
  const [answer, setAnswer] = useState("");
  const [first, setFirst] = useState(10);
  const [second, setSecond] = useState(22);
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
    case "X":
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
  return (
    <div className="App">
      <h1>Simple Calculator</h1>
      <input
      type="number"
      value={Number(first)}
      onChange={(event) => setFirst(event.target.value)}
/>
<input
      type="number"
      value={Number(second)}
      onChange={(event) => setSecond(event.target.value)}
/>
=
<input type= "number" defaultValue={answer} />
<CalcButtons Calculate={Calculate}/>
</div>
  );
};

export default App;
