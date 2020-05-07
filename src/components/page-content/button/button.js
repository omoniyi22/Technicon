import React from "react";
import styled from "styled-components";

export const Button = () => {
  return <ButtonWrapper>Edit profile</ButtonWrapper>;
};

const ButtonWrapper = styled.div`
  height: 2.5rem;
  width: 14rem;
  margin: auto;
  border-radius: 2rem;
  text-align: center;
  border: 2px solid #539dc2;
  color: #539dc2;
  font-weight: 600;
  font-size: 0.9rem;
  padding-top: 3%;
  cursor: pointer;
  &:hover {
    background-color: #539dc2;
    color: white;
  }
  transition: 0.3s ease-out;
`;
