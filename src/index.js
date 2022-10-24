import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { useState} from "react";


function app() {

  const [answer, setAnswer] = useState("");
  const [first, setFirst] = useState(10);
  const [second, setSecond] = useState(22);
}
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
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
