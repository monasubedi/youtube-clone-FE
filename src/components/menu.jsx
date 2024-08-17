import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  background-color: #202020;
  color: white;
  height: 100vh;
  font-size: 14px;
`;

const Wrapper = styled.div`
  padding: 18px 26px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 25px;
  font-weight: bold;
`;

const Img = styled.img`
  height: 25px;
`;

const Menu = () => {
  return (
    <Container>
      <Wrapper>
        <Logo>
          <Img src="https://i.ibb.co/s9Qys2j/logo.png" alt="img" />
          Youtube
        </Logo>
      </Wrapper>
    </Container>
  );
};

export default Menu;
