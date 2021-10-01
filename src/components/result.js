import React from "react";
import styled from "styled-components/native";

const ResultStyle = styled.View`
  flex: 2;
  background-color: grey;
  align-items: flex-end;
  justify-content: center;
`;

const ResultText = styled.Text`
  font-size: 30px;
  color: white;
  font-weight: bold;
`;

export const Result = ({calcText}) => {
  return (
    <ResultStyle>
      <ResultText>{calcText}</ResultText>
    </ResultStyle>
  );
};
