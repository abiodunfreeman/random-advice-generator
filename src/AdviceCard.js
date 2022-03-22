export default function AdviceCard(props) {
  const { advice, number, getAdvice } = props;
  return (
    <div id="advice-card">
      <h3>ADVICE #{number}</h3>
      <h1>"{advice}"</h1>
      <img src="./img/pattern-divider-mobile.svg" alt="divider" />
      <div onClick={() => getAdvice()} id="dice-container">
        <img
          id="dice"
          src="./img/icon-dice.svg"
          alt="click die to get new advice"
        />
      </div>
    </div>
  );
}
