
# Experiment 11 – Basic Calculator (React)

### Name: HANIEL REENA D R
### Register No: 2305001008

## Aim
To develop a basic calculator using React that performs addition, subtraction, multiplication, division and clear operations using useState, event handling and conditional statements.

## Algorithm
1. Create a React application using Vite.
2. Import useState from React.
3. Initialize state variables for the first number, second number, operator and result.
4. Create input fields to accept two numbers.
5. Provide a selection option for mathematical operators.
6. Create a calculate function to perform arithmetic operations.
7. Use conditional statements to select the required operation.
8. Handle division by zero.
9. Display the calculated result.
10. Create a clear function to reset all values.
11. Apply CSS styling to design the calculator interface.
12. Run and test the application in the browser.

## Program

### File: src/App.jsx
```jsx
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

    if (operator === "+") {
      answer = a + b;
    } else if (operator === "-") {
      answer = a - b;
    } else if (operator === "*") {
      answer = a * b;
    } else if (operator === "/") {
      answer = b !== 0
        ? a / b
        : "Cannot divide by zero";
    }

    setResult(answer);
  };

  const clearCalculator = () => {
    setNum1("");
    setNum2("");
    setOperator("+");
    setResult("");
  };

  return (
    <div className="page">

      <nav className="navbar">
        <h2>Calc<span>Lab</span></h2>
        <p>REACT APPLICATION</p>
      </nav>

      <main className="container">

        <div className="intro">
          <p className="eyebrow">EXPERIMENT 11</p>
          <h1>Basic Calculator</h1>
          <p className="subtitle">
            Perform simple arithmetic operations with ease.
          </p>
        </div>

        <section className="calculator">

          <div className="calculator-heading">
            <div>
              <p className="card-label">CALCULATOR</p>
              <h2>Calculate Numbers</h2>
            </div>
            <span className="status">Ready</span>
          </div>

          <div className="input-group">
            <label>First Number</label>
            <input
              type="number"
              placeholder="Enter first number"
              value={num1}
              onChange={(e) => setNum1(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label>Select Operation</label>
            <select
              value={operator}
              onChange={(e) => setOperator(e.target.value)}
            >
              <option value="+">Addition (+)</option>
              <option value="-">Subtraction (-)</option>
              <option value="*">Multiplication (×)</option>
              <option value="/">Division (÷)</option>
            </select>
          </div>

          <div className="input-group">
            <label>Second Number</label>
            <input
              type="number"
              placeholder="Enter second number"
              value={num2}
              onChange={(e) => setNum2(e.target.value)}
            />
          </div>

          <div className="button-group">
            <button className="calculate-btn" onClick={calculate}>
              Calculate Result
            </button>

            <button className="clear-btn" onClick={clearCalculator}>
              Clear
            </button>
          </div>

          <div className="result-box">
            <p className="card-label">CALCULATION RESULT</p>
            <h2>{result === "" ? "—" : result}</h2>
          </div>

        </section>

        <section className="operations">
          <p className="card-label">SUPPORTED OPERATIONS</p>

          <div className="operation-grid">
            <div> <strong>+</strong> Addition </div>
            <div> <strong>−</strong> Subtraction </div>
            <div> <strong>×</strong> Multiplication </div>
            <div> <strong>÷</strong> Division </div>
          </div>
        </section>

        <footer>
          React Basic Calculator · Experiment 11
        </footer>

      </main>
    </div>
  );
}

export default App;
```
### File: src/App.css
```jsx

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Segoe UI", sans-serif;
  background: #f5f3ef;
  color: #252321;
}

.navbar {
  height: 76px;
  padding: 0 8%;
  background: #252321;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar h2 {
  font-size: 25px;
}

.navbar h2 span {
  color: #c49a6c;
}

.navbar p {
  color: #d0c7bc;
  font-size: 10px;
  letter-spacing: 2px;
}

.container {
  max-width: 720px;
  margin: 65px auto;
  padding: 0 22px;
}

.intro {
  margin-bottom: 30px;
}

.eyebrow,
.card-label {
  color: #a47b50;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 2px;
}

.intro h1 {
  font-family: Georgia, serif;
  font-size: 43px;
  font-weight: 500;
  color: #000;
  margin-top: 12px;
}

.subtitle {
  color: #77736e;
  margin-top: 10px;
  font-size: 14px;
}

.calculator {
  background: white;
  padding: 32px;
  border: 1px solid #e8e2da;
  border-radius: 13px;
  box-shadow: 0 12px 35px #2920160d;
}

.calculator-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 23px;
  border-bottom: 1px solid #eeeae4;
  margin-bottom: 25px;
}

.calculator-heading h2 {
  font-family: Georgia, serif;
  font-size: 23px;
  margin-top: 8px;
  color: #111;
}

.status {
  background: #e9f2e9;
  color: #426b45;
  padding: 7px 15px;
  border-radius: 20px;
  font-size: 12px;
}

.input-group {
  margin-bottom: 20px;
}

.input-group label {
  display: block;
  margin-bottom: 9px;
  font-size: 13px;
  font-weight: 600;
  color: #403b35;
}

.input-group input,
.input-group select {
  width: 100%;
  height: 48px;
  border: 1px solid #ded8d0;
  border-radius: 7px;
  padding: 0 14px;
  background: #fff;
  color: #252321;
  font-size: 14px;
  outline: none;
}

.input-group input:focus,
.input-group select:focus {
  border-color: #a47b50;
  box-shadow: 0 0 0 3px #a47b5018;
}

.button-group {
  display: flex;
  gap: 12px;
  margin-top: 25px;
}

.button-group button {
  flex: 1;
  height: 47px;
  border: none;
  border-radius: 7px;
  cursor: pointer;
  font-size: 13px;
  font-weight: 600;
}

.calculate-btn {
  background: #292724;
  color: white;
}

.calculate-btn:hover {
  background: #51483d;
}

.clear-btn {
  background: #eee8df;
  color: #514b44;
}

.clear-btn:hover {
  background: #e2d9cc;
}

.result-box {
  margin-top: 28px;
  padding: 22px;
  background: #f8f5f0;
  border: 1px solid #eee6db;
  border-radius: 9px;
}

.result-box h2 {
  margin-top: 12px;
  font-family: Georgia, serif;
  font-size: 30px;
  color: #000;
  overflow-wrap: anywhere;
}

.operations {
  margin-top: 25px;
  padding: 24px;
  background: white;
  border: 1px solid #e8e2da;
  border-radius: 12px;
}

.operation-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
  margin-top: 18px;
  font-size: 13px;
  color: #77736e;
}

.operation-grid strong {
  color: #a47b50;
  font-size: 20px;
  margin-right: 9px;
}

footer {
  text-align: center;
  margin-top: 35px;
  font-size: 11px;
  color: #99928a;
}

@media (max-width: 500px) {
  .navbar {
    padding: 0 20px;
  }

  .container {
    margin-top: 40px;
  }

  .intro h1 {
    font-size: 34px;
  }

  .calculator {
    padding: 22px;
  }

  .operation-grid {
    grid-template-columns: 1fr;
  }
}
```

### File: src/main.jsx
```jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./App.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

```
## Output

<img width="661" height="704" alt="image" src="https://github.com/user-attachments/assets/eb957827-fba3-4db0-9d4a-ee8864841107" />


## Observation
The calculator successfully performs the four basic arithmetic operations using React state variables and event handling. Conditional statements are used to select the operation, and division by zero is handled separately. The Clear operation resets the calculator values.

## Result
Thus, a basic calculator application was successfully implemented using React with useState, event handling and conditional statements to perform arithmetic operations.
