import React from 'react';
import styled from 'styled-components';
import { Parallax } from 'react-scroll-parallax';

const SectionContainer = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px 0;
  background-color: ${props => props.bgColor || '#ffffff'};
  color: ${props => props.textColor || '#000000'};
`;

const SectionContent = styled.div`
  display: flex;
  flex-direction: ${props => props.imagePosition === 'left' ? 'row-reverse' : 'row'};
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const TextContainer = styled.div`
  flex: 1;
  padding: 0 40px;
  
  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  height: 500px;
  
  @media (max-width: 768px) {
    width: 90%;
    height: 300px;
    margin-bottom: 30px;
  }
`;

const Image = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
`;

const Title = styled.h2`
  font-size: 3rem;
  margin-bottom: 0.5rem;
`;

const Subtitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  opacity: 0.8;
`;

const Content = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  margin-bottom: 2rem;
`;

function Section({ title, subtitle, content, bgColor, textColor, image, imagePosition }) {
  return (
    <SectionContainer bgColor={bgColor} textColor={textColor}>
      <SectionContent imagePosition={imagePosition}>
        <TextContainer>
          <Parallax y={[-20, 20]} tagOuter="div">
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
            <Content>{content}</Content>
          </Parallax>
        </TextContainer>
        <ImageContainer>
          <Parallax y={[-30, 30]} tagOuter="div">
            <Image src={image} />
          </Parallax>
        </ImageContainer>
      </SectionContent>
    </SectionContainer>
  );
}

export default Section;