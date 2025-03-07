import React from 'react';
import styled from 'styled-components';
import { Parallax } from 'react-scroll-parallax';

const HeroContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  background-color: #0a0a0a;
`;

const HeroBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/images/hero-bg.jpg');
  background-size: cover;
  background-position: center;
  z-index: 1;
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  color: white;
  max-width: 800px;
  padding: 0 20px;
`;

const HeroTitle = styled.h1`
  font-size: 5rem;
  margin-bottom: 1rem;
  font-weight: 700;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  color: white;
  font-size: 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0.8;
  
  &::after {
    content: '';
    display: block;
    width: 20px;
    height: 20px;
    border-right: 2px solid white;
    border-bottom: 2px solid white;
    transform: rotate(45deg);
    margin-top: 10px;
    animation: bounce 2s infinite;
  }
  
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0) rotate(45deg);
    }
    40% {
      transform: translateY(-10px) rotate(45deg);
    }
    60% {
      transform: translateY(-5px) rotate(45deg);
    }
  }
`;

function Hero() {
  return (
    <HeroContainer>
      <Parallax y={[-20, 20]} tagOuter="div">
        <HeroBackground />
      </Parallax>
      <HeroContent>
        <Parallax y={[-50, 50]} tagOuter="div">
          <HeroTitle>Parallax Experience</HeroTitle>
          <HeroSubtitle>Scroll to explore a world of depth and motion</HeroSubtitle>
        </Parallax>
      </HeroContent>
      <ScrollIndicator>Scroll</ScrollIndicator>
    </HeroContainer>
  );
}

export default Hero;