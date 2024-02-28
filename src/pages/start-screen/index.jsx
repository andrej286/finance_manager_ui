import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: lightblue; /* Change the background color as needed */
  color: #fff;
  text-align: center;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 1.5rem;
  margin-bottom: 40px;
`;

const GetStartedLink = styled(Link)`
  display: inline-block;
  background-color: #007bff;
  color: #fff;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 1.2rem;
`;

const StartScreen = () => {
  return (
    <Container>
      <Title>Welcome to Financial Tools</Title>
      <Description>Manage your finances and track your expenses with ease.</Description>
      <GetStartedLink to="/home">Get Started</GetStartedLink>
    </Container>
  );
};

export default StartScreen;