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
- `src/App.jsx`: Uses useState, event handling and conditional statements to perform calculations.
- `src/App.css`: Styles the calculator interface.
- `src/main.jsx`: Initializes the React application using createRoot and StrictMode.

## Output
### 1. Basic Calculator Interface
The browser displays two number input fields, an operator selection dropdown, Calculate Result and Clear buttons.

### 2. Arithmetic Operations

| Operation | Input | Output |
|---|---|---|
| Addition | 10 + 5 | 15 |
| Subtraction | 10 - 5 | 5 |
| Multiplication | 10 * 5 | 50 |
| Division | 10 / 5 | 2 |

### 3. Division by Zero
When 10 is divided by 0, the application displays `Cannot divide by zero`.

### 4. Clear Operation
The Clear button resets both input fields, the selected operator and the result.

## Observation
The calculator successfully performs the four basic arithmetic operations using React state variables and event handling. Conditional statements are used to select the operation, division by zero is handled separately, and the Clear operation resets the calculator values.

## Result
Thus, a basic calculator application was successfully implemented using React with useState, event handling and conditional statements to perform arithmetic operations.

## How to Run
```bash
npm install
npm run dev
```
Open the local URL displayed in the terminal, usually `http://localhost:5173/`.

## Build
```bash
npm run build
```