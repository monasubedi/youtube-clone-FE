import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Comment from "./comment";
import axios from "axios";

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
  padding: 7px;
`;

const Comments = ({ videoId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        let res = await axios.get(`/comments/${videoId}`);
        if (res.data) {
          setComments(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchComments();
  }, []);

  return (
    <Container>
      <NewComment>
        <Avatar />
        <Input type="text" placeholder="Add a comment..." />
      </NewComment>
      {comments?.map((comment) => (
        <Comment key={comment._id} comment={comment} />
      ))}
    </Container>
  );
};

export default Comments;
