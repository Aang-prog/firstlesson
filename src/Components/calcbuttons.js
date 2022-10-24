function CalcButtons(props) {
    return (
<div>
  <button className="AppButton" onClick={() => props.Calculate("+")}>
    +
  </button>
  <button className="AppButton" onClick={() =>props.Calculate("-")}>
    -
  </button>
  <button className="AppButton" onClick={() => props.Calculate("X")}>
    X
  </button>
  <button className="AppButton" onClick={() => props.Calculate("/")}>
  ÷
  </button>
</div>
    );
}
export default CalcButtons;