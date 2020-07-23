import React from "react";
import { Button } from "antd";
import { Input } from "antd";
import styled from "styled-components";
import { newsLetter } from "../../services/services";

export default function CustomButton({ name = "Subscribe" }) {
  return <Button type="primary">{name}</Button>;
}

export function InputWithButton({ name = "Subscribe" }) {
  const [data, setState] = React.useState({
    firstName: "",
    email: "",
    loading: false,
    name,
  });

  return (
    <InputContainer>
      <Input
        onChange={({ target: { value, name } }) =>
          setState({
            ...data,
            [name]: value,
          })
        }
        name="firstName"
        placeholder="Your first name"
        style={{ width: "100%", marginRight: 20, marginBottom: 10 }}
      />
      <Input
        onChange={({ target: { value, name } }) => {
          setState({
            ...data,
            [name]: value,
          });
        }}
        name="email"
        placeholder="Enter your email"
        style={{ width: "100%", marginRight: 20 }}
      />

      <Button
        onClick={async () => {
          if (!data.email) {
            return alert("Please enter your email");
          }

          if (!data.firstName) {
            return alert("Please enter your first name");
          }

          setState({
            ...data,
            loading: true,
          });

          try {
            await newsLetter(data.email, data.firstName);
            setState({
              ...data,
              name: "Subscribed",
              loading: false,
            });
          } catch (error) {
            console.log(error);
            setState({
              ...data,
              loading: false,
            });
          }
        }}
        style={{
          backgroundColor: "#01364D",
          borderRadius: 4,
          outline: "none",
          border: "none",
          width: "100%",
          height: 44,
          marginTop: 20,
        }}
        type="primary"
      >
        <>{data.loading ? "Subscribing..." : <>{data.name}</>}</>
      </Button>
    </InputContainer>
  );
}

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
