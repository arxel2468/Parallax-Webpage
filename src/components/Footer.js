import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #0a0a0a;
  color: white;
  padding: 60px 0 30px;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0 20px;
`;

const FooterLogo = styled.div`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 20px;
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 30px;
  margin-bottom: 40px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
  }
`;

const FooterLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1rem;
  opacity: 0.8;
  transition: opacity 0.3s ease;
  
  &:hover {
    opacity: 1;
  }
`;

const FooterCopyright = styled.div`
  font-size: 0.9rem;
  opacity: 0.6;
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterLogo>Parallax</FooterLogo>
        <FooterLinks>
          <FooterLink href="#home">Home</FooterLink>
          <FooterLink href="#discover">Discover</FooterLink>
          <FooterLink href="#create">Create</FooterLink>
          <FooterLink href="#inspire">Inspire</FooterLink>
          <FooterLink href="#contact">Contact</FooterLink>
        </FooterLinks>
        <FooterCopyright>
          © {new Date().getFullYear()} Parallax Experience. All rights reserved.
        </FooterCopyright>
      </FooterContent>
    </FooterContainer>
  );
}

export default Footer;