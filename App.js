import React, { useState } from "react";
import { Result } from "./src/components/result";
import { Calculation } from "./src/components/calculation";
import { Button } from "./src/components/buttons";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
`;

export default function App() {
  const [resultText, setResulttext] = useState("");
  const [calcText, setCalcText] = useState("");

  const onButtonClick = (text) => {
    // console.log(text);
    if (text == "=") {
      return calculation();
    }
    setResulttext(resultText + text);
  };

  const calculation = () => {
    let lastTxt = resultText[resultText.length - 1];
    if (
      lastTxt === "/" ||
      lastTxt === "*" ||
      lastTxt === "-" ||
      lastTxt === "+" ||
      lastTxt === "."
    ) {
      setResulttext(resultText);
    } else {
      setCalcText(eval(resultText));
    }
  };

  const onOperationClick = (operation) => {
    let operations = ["DEL", "AC", "+", "-", "*", "/"];
    // console.log(operation);
    if (operation == "AC") {
      setResulttext("");
      setCalcText(0);
      return;
    }
    if (operation == "DEL") {
      return setResulttext(
        resultText.toString().substring(0, resultText.length - 1)
      );
    }
    if (operations.includes(resultText.toString().split("").pop())) return;
    setResulttext(resultText + operation);
  };

  return (
    <Container>
      <Result calcText={calcText} />
      <Calculation resultText={resultText} />
      <Button
        onButtonClick={onButtonClick}
        onOperationClick={onOperationClick}
      />
    </Container>
  );
}
