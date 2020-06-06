import React from "react";
import styled from "styled-components";

const Icon = ({ iconName }) => {
  return (
    <>
      <FontAwesome className={`fa ${iconName}`}></FontAwesome>
    </>
  );
};

const FontAwesome = styled.div`
  //   border: 1px solid purple;
  font-size: 1.8rem;
  margin: auto;
  margin-left: 30%;
  margin-bottom: 11%;
  margin-top: 6%;
  @media (max-width: 850px) {
    font-size: 1.2rem;
    margin-top: 50%;
  }
`;

export default Icon;
