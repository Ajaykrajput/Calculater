import React from "react";
import styled from "styled-components/native";
import { NumbersButton } from "./numbers";
import { OperationButton } from "./operations";

const ButtonStyle = styled.View`
  flex: 7;
  flex-direction: row;
`;

// const ButtonText = styled.Text`
//   font-size: 20px;
//   color: white;
//   font-weight: bold;
// `;

export const Button = ({ onOperationClick, onButtonClick }) => {
  return (
    <ButtonStyle>
      <NumbersButton onButtonClick={onButtonClick} />
      <OperationButton onOperationClick={onOperationClick} />
    </ButtonStyle>
  );
};
