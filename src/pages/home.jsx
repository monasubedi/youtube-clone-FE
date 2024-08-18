import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Card from "../components/card";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;

const Home = ({ type }) => {
  const [videos, setVideos] = useState([]);
  
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await axios.get(`http://localhost:3001/api/videos/${type}`);
        if (res.ok) {
          setVideos(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchVideos();
  }, [type]);

  return (
    <Container>
      {videos &&
        videos.length > 0 &&
        videos.map((video) => <Card key={video._id} video={video} />)}
    </Container>
  );
};

export default Home;
