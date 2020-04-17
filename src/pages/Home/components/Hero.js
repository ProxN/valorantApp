import React from 'react';
import { ReactComponent as Logo } from '../../../logo.svg';
import { ReactComponent as Cover } from '../cover.svg';
import {
  HeroContainer,
  HeroContent,
  CoverContainer,
  LogoContainer,
  LogoName,
} from './Hero.styles';
import SearchFrom from '../../../components/SearchForm';

const Hero = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <LogoContainer>
          <Logo />
          <LogoName>
            <span>V</span>
            alorant
          </LogoName>
        </LogoContainer>
        <SearchFrom />
      </HeroContent>
      {/* <CoverContainer>
        <Cover />
      </CoverContainer> */}
    </HeroContainer>
  );
};

export default Hero;
