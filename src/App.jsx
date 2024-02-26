import { useState } from "react";
import "./App.css"

function App() {
  
  const [input1, setInput1] = useState(0);
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState(0);
  const [output, setOutput] = useState(0);

  function calculate(value, number){
    
    if(number === 'first'){
      setInput1(value);
    }
    if(number === 'second'){
      setInput2(value);
    }
    
    if(number === 'third'){
      setInput3(value);
    
    }   
    sum();
  }

  function sum(){
    if(input2 === '+'){
      setOutput(input1 + input3)
    } if(input2 === '*'){
      setOutput(input1 * input3);
    }if(input2 === '/'){
      setOutput(input1/input3);
    } if(input2 === '-'){
      setOutput(input1 - input3);
    }
  }

  return (
    <div className="calculator">
      <div className="panel">
        <p>{input1}</p>
        <div className="numbers">
          <button onClick={() => calculate(1, 'first')}>1</button>
          <button onClick={() => calculate(2,'first')}>2</button>
          <button onClick={() => calculate(3,'first')}>3</button>
          <button onClick={() => calculate(4,'first')}>4</button>
          <button onClick={() => calculate(5,'first')}>5</button>
          <button onClick={() => calculate(6,'first')}>6</button>
          <button onClick={() => calculate(7,'first')}>7</button>
          <button onClick={() => calculate(8,'first')}>8</button>
          <button onClick={() => calculate(9,'first')}>9</button>
          <button onClick={() => calculate(0,'first')}>0</button>
          <button onClick={() => calculate('','first')}>Clear</button>
        </div>
      </div>

      <div className="panel">
        <p>{input2}</p>
        <div className="numbers">
          <button onClick={() => calculate('+','second')}>+</button>
          <button onClick={() => calculate('-','second')}>-</button>
          <button onClick={() => calculate('*','second')}>*</button>
          <button onClick={() => calculate('/','second')}>÷</button>
        </div>
      </div>

      <div className="panel">
        <p>{input3}</p>
        <div className="numbers">
          <button onClick={() => calculate(1,'third')}>1</button>
          <button onClick={() => calculate(2,'third')}>2</button>
          <button onClick={() => calculate(3,'third')}>3</button>
          <button onClick={() => calculate(4,'third')}>4</button>
          <button onClick={() => calculate(5,'third')}>5</button>
          <button onClick={() => calculate(6,'third')}>6</button>
          <button onClick={() => calculate(7,'third')}>7</button>
          <button onClick={() => calculate(8,'third')}>8</button>
          <button onClick={() => calculate(9,'third')}>9</button>
          <button onClick={() => calculate(0,'third')}>0</button>
          <button onClick={() => calculate('','third')}>Clear</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{output}</p>
        <div>
          <button onClick={() => calculate(0)}>=</button>
        </div>
      </div>
    </div>
  )
}

export default App
