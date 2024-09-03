import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Card from "./card";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap:20px;
`;

const Search = () => {
  const query = useLocation().search;
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchSearch = async () => {
      let res = await axios.get(`/videos/search${query}`);
      if (res.data) {
        setVideos(res.data);
      }
    };
    fetchSearch();
  }, []);

  return (
    <Container>
      {videos &&
        videos.map((video) => {
          return <Card key={video._id} video={video} />;
        })}
    </Container>
  );
};

export default Search;
