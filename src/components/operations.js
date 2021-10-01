import React from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

const OperationStyle = styled.View`
  flex: 1;
  background-color: #636363;
  align-items: center;
  justify-content: space-around;
`;

const OperationText = styled.Text`
  font-size: 30px;
  color: white;
  font-weight: bold;
`;

export const OperationButton = ({ onOperationClick }) => {
  return (
    <OperationStyle>
      <TouchableOpacity
        onPress={() => {
          onOperationClick("DEL");
        }}
      >
        <OperationText>DEL</OperationText>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          onOperationClick("AC");
        }}
      >
        <OperationText>AC</OperationText>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          onOperationClick("+");
        }}
      >
        <OperationText>+</OperationText>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          onOperationClick("-");
        }}
      >
        <OperationText>-</OperationText>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          onOperationClick("/");
        }}
      >
        <OperationText>/</OperationText>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          onOperationClick("*");
        }}
      >
        <OperationText>*</OperationText>
      </TouchableOpacity>
    </OperationStyle>
  );
};
