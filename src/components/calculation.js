import React from "react";
import styled from "styled-components/native";

const CalculationStyle = styled.View`
  flex: 1;
  background-color: #d6d6c2;
  align-items: flex-end;
  justify-content: center;
`;

const CalculationText = styled.Text`
  font-size: 20px;
  color: black;
  font-weight: bold;
`;

export const Calculation = ({ resultText }) => {
  return (
    <CalculationStyle>
      <CalculationText>{resultText}</CalculationText>
    </CalculationStyle>
  );
};
