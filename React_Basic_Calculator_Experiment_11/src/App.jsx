import { useState } from "react";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operator, setOperator] = useState("+");
  const [result, setResult] = useState("");

  const calculate = () => {
    if (num1 === "" || num2 === "") {
      setResult("Please enter both numbers");
      return;
    }
    const a = Number(num1);
    const b = Number(num2);
    let answer;
    if (operator === "+") answer = a + b;
    else if (operator === "-") answer = a - b;
    else if (operator === "*") answer = a * b;
    else if (operator === "/") answer = b !== 0 ? a / b : "Cannot divide by zero";
    setResult(answer);
  };

  const clearCalculator = () => {
    setNum1(""); setNum2(""); setOperator("+"); setResult("");
  };

  return (
    <div className="page">
      <nav className="navbar"><h2>Calc<span>Lab</span></h2><p>REACT APPLICATION</p></nav>
      <main className="container">
        <div className="intro">
          <p className="eyebrow">EXPERIMENT 11</p>
          <h1>Basic Calculator</h1>
          <p className="subtitle">Perform simple arithmetic operations with ease.</p>
        </div>
        <section className="calculator">
          <div className="calculator-heading">
            <div><p className="card-label">CALCULATOR</p><h2>Calculate Numbers</h2></div>
            <span className="status">Ready</span>
          </div>
          <div className="input-group">
            <label htmlFor="num1">First Number</label>
            <input id="num1" type="number" placeholder="Enter first number" value={num1} onChange={e => setNum1(e.target.value)} />
          </div>
          <div className="input-group">
            <label htmlFor="operator">Select Operation</label>
            <select id="operator" value={operator} onChange={e => setOperator(e.target.value)}>
              <option value="+">Addition (+)</option><option value="-">Subtraction (-)</option>
              <option value="*">Multiplication (×)</option><option value="/">Division (÷)</option>
            </select>
          </div>
          <div className="input-group">
            <label htmlFor="num2">Second Number</label>
            <input id="num2" type="number" placeholder="Enter second number" value={num2} onChange={e => setNum2(e.target.value)} />
          </div>
          <div className="button-group">
            <button className="calculate-btn" onClick={calculate}>Calculate Result</button>
            <button className="clear-btn" onClick={clearCalculator}>Clear</button>
          </div>
          <div className="result-box" aria-live="polite">
            <p className="card-label">CALCULATION RESULT</p><h2>{result === "" ? "—" : result}</h2>
          </div>
        </section>
        <section className="operations">
          <p className="card-label">SUPPORTED OPERATIONS</p>
          <div className="operation-grid">
            <div><strong>+</strong> Addition</div><div><strong>−</strong> Subtraction</div>
            <div><strong>×</strong> Multiplication</div><div><strong>÷</strong> Division</div>
          </div>
        </section>
        <footer>React Basic Calculator · Experiment 11</footer>
      </main>
    </div>
  );
}
export default App;