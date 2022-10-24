function CalcButtons(props) {
    return (
<div>
  <button onClick={() => props.updateCalculation("+")}>+</button>
  <button onClick={() =>props.updateCalculation("-")}>-</button>
  <button onClick={() => props.updateCalculation("*")}>x</button>
  <button onClick={() => props.updateCalculation("/")}>÷</button>
  <button onClick={() => props.updateCalculation("=")}>=</button>
  <button onClick={() => props.updateCalculation("clear")}>C</button>
  
</div>
    );
}
export default CalcButtons;