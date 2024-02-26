import { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  
  const [input1, setInput1] = useState(0);
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState(0);
  const [output, setOutput] = useState(0);
  const [inputArr1, setInputArr1] = useState([]);
  const [inputArr2, setInputArr2] = useState([]);
  let values ='';

  function calculate(value, number) {
    if(number === 'first') {
      let newValue = value.toString();
      
      setInputArr1(currentArr => {
        const updatedArr = [...currentArr, newValue];
        
        if(updatedArr.length > 1) {
          values = updatedArr.join('');
          setInput1(parseInt(values, 10));
        } else {
          setInput1(value !== '' ? parseInt(value, 10) : 0);
        }

        return updatedArr;
      });

      if(value === '') {
        setInput1(0);
        setInputArr1([]); // Reset the array state
        values = '';
      }
    }

    if(number === 'second') {
      setInput2(value);
    }

    if(number === 'third') {
      let newValue = value.toString();
      
      setInputArr2(currentArr => {
        const updatedArr = [...currentArr, newValue];
        
        if(updatedArr.length > 1) {
          values = updatedArr.join('');
          setInput3(parseInt(values, 10));
        } else {
          setInput3(value !== '' ? parseInt(value, 10) : 0);
        }

        return updatedArr;
      });

      if(value === '') {
        setInput3(0);
        setInputArr2([]);
        values = '';
      }
    } // This is where the missing closing brace should be
  } // Correctly close the calculate function

  function sum() {
    if(input2 === '+') {
      setOutput(input1 + input3);
    } if(input2 === '*') {
      setOutput(input1 * input3);
    } if(input2 === '/') {
      setOutput(input1 / input3);
    } if(input2 === '-') {
      setOutput(input1 - input3);
    }
  }
  
  useEffect(() => {
    console.log(`Calculating sum with: ${input1}, ${input2}, ${input3}`);
    sum();
  }, [input1, input2, input3]);

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
