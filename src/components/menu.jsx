import React from "react";
import styled from "styled-components";
import HomeIcon from "@mui/icons-material/Home";
import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import MusicVideoOutlinedIcon from "@mui/icons-material/MusicVideoOutlined";
import SportsBarOutlinedIcon from "@mui/icons-material/SportsBarOutlined";
import GamesOutlinedIcon from "@mui/icons-material/GamesOutlined";
import NewspaperRoundedIcon from "@mui/icons-material/NewspaperRounded";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";

const Container = styled.div`
  flex: 1.3;
  background-color: ${({ theme }) => theme.bgLighter};
  color: ${({ theme }) => theme.text};
  height: 100%;
  font-size: 14px;
  position: sticky;
  top: 0px;
`;

const Wrapper = styled.div`
  padding: 18px 26px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 25px;
  font-weight: bold;
`;

const Img = styled.img`
  height: 25px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 7px 0px;
  &:hover {
    background-color: ${({ theme }) => theme.soft};
  }
`;

const Hr = styled.hr`
  border: 0.5px solid ${({ theme }) => theme.soft};
  margin: 15px 0;
`;

const Login = styled.div``;
const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  font-weight: 500;
  border-radius: 3px;
  margin-top: 10px;
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

const Title = styled.h2`
  font-size: 14px;
  color: #aaaaaa;
  margin-bottom: 20px;
`;

const Menu = ({ darkMode, setDarkMode }) => {
  return (
    <Container>
      <Wrapper>
        <Link to={"/"}>
          <Logo>
            <Img src="https://i.ibb.co/s9Qys2j/logo.png" alt="img" />
            Youtube
          </Logo>
        </Link>
        <Link to={"/"}>
          <Item>
            <HomeIcon />
            Home
          </Item>
        </Link>
        <Link to={"/trends"}>
          <Item>
            <ExploreOutlinedIcon />
            Explore
          </Item>
        </Link>
        <Link to={"/subscriptions"}>
          <Item>
            <SubscriptionsOutlinedIcon />
            Subscriptions
          </Item>
        </Link>
        <Hr />
        <Link to="signin">
          <Login>
            Sign in to like videos, comment, and subscribe.
            <Button>
              <AccountCircleOutlinedIcon />
              Sign In
            </Button>
          </Login>
        </Link>
        <Hr />
        <Title>Best of You_tube</Title>
        <Item>
          <LibraryBooksOutlinedIcon />
          Library
        </Item>
        <Item>
          <HistoryOutlinedIcon />
          History
        </Item>
        <Hr />
        <Item>
          <MusicVideoOutlinedIcon />
          Music
        </Item>
        <Item>
          <SportsBarOutlinedIcon />
          Sports
        </Item>
        <Item>
          <GamesOutlinedIcon />
          Gaming
        </Item>
        <Item>
          <MovieOutlinedIcon />
          Movies
        </Item>
        <Item>
          <NewspaperRoundedIcon />
          News
        </Item>
        <Item>
          <LiveTvOutlinedIcon />
          Live
        </Item>
        <Hr />
        <Item>
          <SettingsOutlinedIcon />
          Settings
        </Item>
        <Item>
          <FlagOutlinedIcon />
          Report
        </Item>{" "}
        <Item>
          <HelpOutlinedIcon />
          Help
        </Item>{" "}
        <Item onClick={() => setDarkMode(!darkMode)}>
          <LightModeOutlinedIcon />
          {darkMode ? "Light Mode" : "Dark Mode"}
        </Item>
      </Wrapper>
    </Container>
  );
};

export default Menu;
