import styled, { ThemeProvider } from 'styled-components';
import Menu from './components/menu';
import Navbar from './components/navbar';
import { darkTheme, lightTheme } from './utils/theme';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Video from './pages/video';

const Container = styled.div`
   display:flex;

`

const Main = styled.div`
  flex:7;
  background-color: ${({ theme }) => theme.bg};

`
const Wrapper = styled.div`
   padding: 22px 30px;
`

function App() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <BrowserRouter>
          <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
          <Main>
            <Navbar />
            <Wrapper>
              <Routes>
                <Route index element={<Home />} />
                <Route path='/video/:id' element={<Video />} />
              </Routes>
            </Wrapper>
          </Main>

        </BrowserRouter>
      </Container>
    </ThemeProvider>

  );
}

export default App;
