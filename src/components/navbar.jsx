import React from "react";
import styled from "styled-components";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const Container = styled.div`
  height: 56px;
  background-color: ${({ theme }) => theme.bgLighter};
  position: sticky;
  top: 0px;
`;
const Wrapper = styled.div`
  padding: 0 15px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
`;
const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  left: 0px;
  right: 0px;
  width: 40%;
  margin: auto;
  border: 1px solid #ccc;
  border-radius: 3px;
  padding: 3px 7px;
`;
const Input = styled.input`
  border: none;
  background-color: transparent;
  outline: none;
  flex: 1;
`;
const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  font-weight: 500;
  border-radius: 3px;
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <SearchContainer>
          <Input placeholder="Search..." />
          <SearchOutlinedIcon />
        </SearchContainer>
        <Button>Sign In</Button>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
