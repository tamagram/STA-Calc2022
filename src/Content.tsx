import { useState, useEffect } from "react";
import styles from "./Content.module.scss";

import Button from "./components/Button";

const Content = () => {
  const [formula, setFormula] = useState("");
  const [result, setResult] = useState("0");

  const calculate = () => {
    try {
      setResult(String(eval(formula)));
    } catch (e) {
      setResult("Error");
    }
  };

  const reset = () => {
    setFormula("");
    setResult("0");
  };

  return (
    <main className={styles.main}>
      <div className={styles.main__wrapper}>
        <div className={styles.main__wrapper__emoji}>🚑</div>
      </div>
      <div className={styles.main__display}>
        <input
          className={styles.main__display__formula}
          type="text"
          value={formula + " ="}
          readOnly
        />
        <input
          className={styles.main__display__result}
          type="text"
          value={result}
        />
      </div>
      <div className={styles.main__buttons}>
        <Button onClick={() => setFormula(formula + "(")}>{"("}</Button>
        <Button onClick={() => setFormula(formula + ")")}>{")"}</Button>
        <Button onClick={() => {}}> </Button>
        <Button onClick={() => reset()}>AC</Button>
        <Button onClick={() => setFormula(formula + "7")}>7</Button>
        <Button onClick={() => setFormula(formula + "8")}>8</Button>
        <Button onClick={() => setFormula(formula + "9")}>9</Button>
        <Button onClick={() => setFormula(formula + "/")}>/</Button>
        <Button onClick={() => setFormula(formula + "4")}>4</Button>
        <Button onClick={() => setFormula(formula + "5")}>5</Button>
        <Button onClick={() => setFormula(formula + "6")}>6</Button>
        <Button onClick={() => setFormula(formula + "*")}>*</Button>
        <Button onClick={() => setFormula(formula + "8")}>1</Button>
        <Button onClick={() => setFormula(formula + "9")}>2</Button>
        <Button onClick={() => setFormula(formula + "3")}>3</Button>
        <Button onClick={() => setFormula(formula + "-")}>-</Button>
        <Button onClick={() => setFormula(formula + "0")}>0</Button>
        <Button onClick={() => setFormula(formula + ".")}>.</Button>
        <Button onClick={() => calculate()}>=</Button>
        <Button onClick={() => setFormula(formula + "+")}>+</Button>
      </div>
    </main>
  );
};

export default Content;
