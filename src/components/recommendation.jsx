
import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "./card";
import { useSelector } from "react-redux";

const Container = styled.div`
  flex: 2;
`;

const Recommendation = ({ tags }) => {
  const [videos, setVideos] = useState([]);
  const {currentVideo} = useSelector(state => state.video);

  useEffect(() => {
    const fetchVideos = async () => {
      const res = await axios.get(`/videos/tags?tags=${tags}`);
      setVideos(res.data);
    };
    fetchVideos();
  }, [tags]);

 

  return (
    <Container>
      {videos.map((video) => {
        if(video._id === currentVideo._id ){
          return "";
        }  
        return <Card type="sm" key={video._id} video={video} />
      })}
    </Container>
  );
};

export default Recommendation;
