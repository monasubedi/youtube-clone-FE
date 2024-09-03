import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import Comments from "../components/comments";
import Card from "../components/card";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { dislike, fetchSuccess, like } from "../redux/videoSlice";
import { format } from "timeago.js";
import { ThumbDown, ThumbUp } from "@mui/icons-material";
import { subscribe } from "../redux/userSlice";
import Recommendation from "../components/recommendation";

const Container = styled.div`
  display: flex;
  gap: 24px;
`;

const Content = styled.div`
  flex: 5;
`;

const VideoWrapper = styled.div``;
const Title = styled.h1`
  font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};
`;
const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Info = styled.div`
  color: ${({ theme }) => theme.textSoft};
`;
const Buttons = styled.div`
  display: flex;
  gap: 20px;
  color: ${({ theme }) => theme.text};
`;
const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

const Hr = styled.div`
  margin: 24px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ChannelInfo = styled.div`
  display: flex;
  gap: 20px;
`;
const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #999;
  width: 7%;
`;
const ChannelDetail = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
  width: 95%;
`;
const ChannelName = styled.span`
  font-weight: 500;
`;

const ChannelCounter = styled.span`
  margin-top: 5px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.textSoft};
  font-size: 12px;
`;

const Description = styled.span`
  font-size: 14px;
`;

const Subscribe = styled.button`
  background-color: #cc1a00;
  font-weight: 500;
  color: white;
  border: none;
  border-radius: 3px;
  height: max-content;
  padding: 10px 20px;
  cursor: pointer;
`;
const VideoFrame = styled.video`
  max-height: 720px;
  width: 100%;
  object-fit: cover;
`;

const Video = () => {
  const { currentUser } = useSelector((state) => state.user);
  const { currentVideo } = useSelector((state) => state.video);
  const dispatch = useDispatch();
  const path = useLocation().pathname.split("/")[2];

  const [channel, setChannel] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const videoRes = await axios.get(`/videos/find/${path}`);
        const channelRes = await axios.get(
          `/users/find/${videoRes.data.userId}`
        );

        setChannel(channelRes.data);
        dispatch(fetchSuccess(videoRes.data));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [path, dispatch]);

  const likeVideo = async () => {
    try {
      let res = await axios.put(`/users/like/${currentVideo._id}`);
      dispatch(like(currentUser._id));
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const dislikeVideo = async () => {
    try {
      let res = await axios.put(`/users/dislike/${currentVideo._id}`);
      dispatch(dislike(currentUser._id));
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const subscribeChannel = async () => {
    try {
      if (currentUser?.subscribedUsers.includes(channel._id)) {
        await axios.put(`/users/unsubscribe/${channel._id}`);
      } else {
        await axios.put(`/users/subscribe/${channel._id}`);
      }
      dispatch(subscribe(channel._id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Content>
        <VideoWrapper>
          <VideoFrame src={currentVideo?.videoUrl} controls />
        </VideoWrapper>
        <Title>{currentVideo?.title}</Title>
        <Details>
          <Info>
            {currentVideo?.views} views. {format(currentVideo?.createdAt)}
          </Info>
          <Buttons>
            <Button onClick={likeVideo}>
              {currentVideo?.likes?.includes(currentUser?._id) ? (
                <ThumbUp />
              ) : (
                <ThumbUpAltOutlinedIcon />
              )}{" "}
              {currentVideo?.likes?.length}
            </Button>
            <Button onClick={dislikeVideo}>
              {currentVideo?.dislikes?.includes(currentUser?._id) ? (
                <ThumbDown />
              ) : (
                <ThumbDownAltOutlinedIcon />
              )}
              dislikes
            </Button>
            <Button>
              <ReplyOutlinedIcon /> Share
            </Button>
            <Button>
              <AddTaskOutlinedIcon />
              Save
            </Button>
          </Buttons>
        </Details>
        <Hr />
        <Channel>
          <ChannelInfo>
            <Image />
            <ChannelDetail>
              <ChannelName>{channel?.name}</ChannelName>
              <ChannelCounter>
                {channel?.subscribers} subscribers
              </ChannelCounter>
              <Description>{currentVideo?.desc}</Description>
            </ChannelDetail>
          </ChannelInfo>
          <Subscribe onClick={subscribeChannel}>
            {currentUser.subscribedUsers?.includes(channel?._id)
              ? "SUBSCRIBED"
              : "SUBSCRIBE"}
          </Subscribe>
        </Channel>
        <Hr />
        <Comments videoId={currentVideo?._id} />
      </Content>
      <Recommendation tags={currentVideo?.tags} />
    </Container>
  );
};

export default Video;
