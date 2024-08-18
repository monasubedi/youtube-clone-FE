import React from 'react'
import styled from 'styled-components'
import Card from '../components/card'

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 15px;

`

const Home = () => {
  return (
    <Container>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
    </Container>
  )
}

export default Home