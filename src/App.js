import { useEffect, useState } from "react";
import "./styles.css";
import AdviceCard from "./AdviceCard";

export default function App() {
  const [advice, setAdvice] = useState();
  const [number, setNumber] = useState();

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();

    const advice = data.slip.advice;
    const number = data.slip.id;

    setNumber(number);
    setAdvice(advice); // sets advice to new advice
  }
  getAdvice(); // initially gets advice

  return (
    <div className="App">
      <AdviceCard advice={advice} number={number} getAdvice={getAdvice} />
    </div>
  );
}
