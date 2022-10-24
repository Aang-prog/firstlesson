function ButtonKeyPad(props) {
    let buttons =[];

    for(let i = 0;  i < 10; i++) {buttons.push(
    <button 
    className='AppButton'
    onClick={() => props.updateCalculation(i)} 
    key={i}>
        {i}
        </button>
        
        );
      
    }
    
    return<div>{buttons}
<button onClick={() => props.updateCalculation(".")}>.</button>
<button onClick={() => props.updateCalculation("del")}>del</button>
      </div>;
}
export default ButtonKeyPad;