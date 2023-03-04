import React from "react";
import "./Calculator.css";

export const Calculator: React.FC<any> = (props): JSX.Element => {
  const [result, setResult] = React.useState<string>("");

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {

    const el = e.target as HTMLButtonElement;
    if (el.name === "Clear") {
      return setResult("");
    }
    if (el.name === "C") {
      return setResult(result.toString().slice(0, -1));
    }
    if (el.name === "=") {
      try {
        setResult(eval(result));
      } catch (error) {
        setResult("Error");
      }
      return;
    }
    if (el.tagName === "BUTTON") {
      return print(el.name);
    }
    function print(op: string) {
      const lastChar = result[result.length - 1];
      if ((lastChar === "/" || lastChar === "*" || lastChar === "+" || lastChar === "-") && /[+\-*/]/.test(op)) {
        setResult(result.slice(0, -1).toString().concat(op));
      } else {
        setResult(result.toString().concat(op));
      }
    }
  };

  return (
    <main>
      <div className="container">
        <input type="text" value={result} readOnly={true} />
        <div className="keypad" onClick={handleClick}>
          <button name="Clear">Clear</button>
          <button name="C">C</button>
          <button name="/">&divide;</button>
          <button name="7">7</button>
          <button name="8">8</button>
          <button name="9">9</button>
          <button name="*">&times;</button>
          <button name="4">4</button>
          <button name="5">5</button>
          <button name="6">6</button>
          <button name="-">&ndash;</button>
          <button name="1">1</button>
          <button name="2">2</button>
          <button name="3">3</button>
          <button name="+">+</button>
          <button name="0">0</button>
          <button name=".">.</button>
          <button name="=">=</button>
        </div>
      </div>
    </main>
  );
};
