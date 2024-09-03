import React, { useState } from "react";
import styled from "styled-components";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { VideoCallOutlined } from "@mui/icons-material";
import Upload from "./upload";

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
  color: ${({ theme }) => theme.text};
`;
const Input = styled.input`
  border: none;
  background-color: transparent;
  outline: none;
  flex: 1;
  color: ${({ theme }) => theme.text};
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

const User = styled.div`
  color: ${({ theme }) => theme.text};
  display: flex;
  align-items: center;
`;
const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #999;
  margin: 0px 13px;
`;

const Navbar = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [open, setOpen] = useState(false);
  const [q, setQuery] = useState("");
  const navigate = useNavigate();
  return (
    <>
      <Container>
        <Wrapper>
          <SearchContainer>
            <Input
              placeholder="Search..."
              type="input"
              onChange={(e) => setQuery(e.target.value)}
            />
            <SearchOutlinedIcon onClick={() => navigate(`/search?q=${q}`)} />
          </SearchContainer>
          {currentUser ? (
            <User>
              <VideoCallOutlined onClick={() => setOpen(true)} />
              <Avatar src={currentUser.img} />
              {currentUser.name}
            </User>
          ) : (
            <Link to={"/signin"}>
              <Button>Sign In</Button>
            </Link>
          )}
        </Wrapper>
      </Container>
      {open && <Upload open={open} setOpen={setOpen} />}
    </>
  );
};

export default Navbar;
