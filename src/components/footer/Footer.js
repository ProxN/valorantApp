import React from 'react';
import { FooterContainer, FooterContent, FooterLinks, MadeWith } from './styles';
import Link from '../Link';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <MadeWith>
          Made with &nbsp;<span>&#9829;</span>&nbsp; in Morocco
        </MadeWith>
        <FooterLinks>
          <Link to="/agents">Agents</Link>
          <Link to="/weapons">Weapons</Link>
        </FooterLinks>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
