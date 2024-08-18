import React from "react";
import styled from "styled-components";
import Comment from "./comment";

const Container = styled.div``;
const NewComment = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
const Avatar = styled.img`
  width: 50px;
  height: 50px;
  background-color: #999;
  border-radius: 50%;
`;

const Input = styled.input`
  outline: none;
  border: none;
  background-color: transparent;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.soft};
  padding:7px
`;

const Comments = () => {
  return (
    <Container>
      <NewComment>
        <Avatar />
        <Input type="text" placeholder="Add a comment..." />
      </NewComment>
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </Container>
  );
};

export default Comments;
