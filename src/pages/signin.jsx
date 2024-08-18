import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 56px);
`;

const Wrapper = styled.div`
  padding: 20px 56px;
  background-color: ${({ theme }) => theme.bgLighter};
  border: 1px solid ${({ theme }) => theme.soft};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.text};
  font-size: 25px;
`;
const SubTitle = styled.h2`
  font-size: 14px;
  font-weight: 300;
  color: ${({ theme }) => theme.text};
`;
const Input = styled.input`
  outline: none;
  padding: 10px;
  background-color: transparent;
  width: 100%;
  border: 3px;
  border: 1px solid ${({ theme }) => theme.soft};
`;
const Button = styled.button`
  border: none;
  border-radius: 3px;
  background-color: ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.textSoft};
  padding: 10px 20px;
  cursor: pointer;
`;
const More = styled.div`
  display: flex;
  font-size: 12px;
  color: ${({ theme }) => theme.textSoft};
  margin-top: 10px;
`;
const Links = styled.div`
  margin-left: 50px;
`;
const Link = styled.span`
  margin-left: 30px;
`;

const SignIn = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:3001/auth/signin", {
        name,
        password,
      });
      if (res.ok) {
        console.log(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleRegister = async () => {
    try {
      const res = await axios.post("http://localhost:3001/auth/signup", {
        name,
        email,
        password,
      });
      if (res.ok) {
        console.log(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>Sign in</Title>
        <SubTitle>to continue to myYoutube</SubTitle>
        <Input
          placeholder="username"
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleLogin}>Sign in</Button>
        <Title>Or</Title>
        <Input
          placeholder="username"
          onChange={(e) => setName(e.target.value)}
        />
        <Input placeholder="email" onChange={(e) => setEmail(e.target.value)} />
        <Input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleRegister}>Sign up</Button>
      </Wrapper>
      <More>
        English (USA)
        <Links>
          <Link>Help</Link>
          <Link>Privacy</Link>
          <Link>Terms</Link>
        </Links>
      </More>
    </Container>
  );
};

export default SignIn;
