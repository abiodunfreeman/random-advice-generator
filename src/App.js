import "./styles.css";

export default function App() {
  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    const advice = data.slip.advice;
    console.log(advice);
  }
  getAdvice();

  return (
    <div className="App">
      <h1>Advice</h1>
    </div>
  );
}
