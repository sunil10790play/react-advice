// https://api.adviceslip.com/advice

import { useEffect, useState } from "react";

export default function App() {
  [advice, setAdvice] = useState("");
  [adviceCount, setAdviceCount] = useState(0);

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setAdviceCount((count) => {
      return count + 1;
    });
  }

  useEffect(function () {
    getAdvice();
  }, []);

  return (
    <div>
      <h1>{advice}</h1>
      <button onClick={getAdvice}>Get Advice</button>
      <Message count={adviceCount} />
    </div>
  );
}

function Message(props) {
  return <p>You have read {props.count} advices</p>;
}
