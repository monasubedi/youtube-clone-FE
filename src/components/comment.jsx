import React from "react";
import styled from "styled-components";

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

const Comment = () => {
  return (
    <Container>
      <Avatar />
      <Details>
        <Name>
          John Doe
          <Date>3 days ago</Date>
        </Name>
        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci,
          quidem libero veritatis quae consectetur eum nesciunt facere
          accusantium dolore vel magni tempore ipsa asperiores, voluptatum quas
          natus non soluta vero.
        </Text>
      </Details>
    </Container>
  );
};

export default Comment;
