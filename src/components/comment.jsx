import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { format } from "timeago.js";

const Container = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin: 23px 0px;
`;
const Avatar = styled.img`
  width: 50px;
  height: 50px;
  background-color: #999;
  border-radius: 50%;
  width: 6%;
`;
const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 95%;
  color: ${({ theme }) => theme.text};
`;
const Name = styled.span`
  font-size: 13px;
  font-weight: 500;
`;
const Date = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.textSoft};
  margin-left: 5px;
`;
const Text = styled.span`
  font-size: 14px;
`;

const Comment = ({ comment }) => {
  const [channel, setChannel] = useState({});
  useEffect(() => {
    const fetchChannel = async () => {
      try {
        let res = await axios.get(`/users/find/${comment.userId}`);
        setChannel(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchChannel();
  }, [comment.userId]);
  return (
    <Container>
      <Avatar src={channel?.img} />
      <Details>
        <Name>
          {channel?.name}
          <Date>{format(comment?.createdBy)}</Date>
        </Name>
        <Text>{comment?.desc}</Text>
      </Details>
    </Container>
  );
};

export default Comment;
