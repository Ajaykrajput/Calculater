import React from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

const NumberStyle = styled.View`
  flex: 3;
  background-color: #434343;
`;

const NumberRow = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const NumberText = styled.Text`
  font-size: 50px;
  color: white;
  font-weight: bold;
`;

export const NumbersButton = ({ onButtonClick }) => {
  return (
    <NumberStyle>
      <NumberRow>
        <TouchableOpacity
          onPress={() => {
            onButtonClick(1);
          }}
        >
          <NumberText>1</NumberText>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            onButtonClick(2);
          }}
        >
          <NumberText>2</NumberText>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            onButtonClick(3);
          }}
        >
          <NumberText>3</NumberText>
        </TouchableOpacity>
      </NumberRow>
      <NumberRow>
        <TouchableOpacity
          onPress={() => {
            onButtonClick(4);
          }}
        >
          <NumberText>4</NumberText>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            onButtonClick(5);
          }}
        >
          <NumberText>5</NumberText>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            onButtonClick(6);
          }}
        >
          <NumberText>6</NumberText>
        </TouchableOpacity>
      </NumberRow>
      <NumberRow>
        <TouchableOpacity
          onPress={() => {
            onButtonClick(7);
          }}
        >
          <NumberText>7</NumberText>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            onButtonClick(8);
          }}
        >
          <NumberText>8</NumberText>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            onButtonClick(9);
          }}
        >
          <NumberText>9</NumberText>
        </TouchableOpacity>
      </NumberRow>
      <NumberRow>
        <TouchableOpacity
          onPress={() => {
            onButtonClick(".");
          }}
        >
          <NumberText>.</NumberText>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            onButtonClick(0);
          }}
        >
          <NumberText>0</NumberText>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            onButtonClick("=");
          }}
        >
          <NumberText>=</NumberText>
        </TouchableOpacity>
      </NumberRow>
    </NumberStyle>
  );
};
