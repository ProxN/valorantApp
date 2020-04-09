import React from 'react';
import { ReactComponent as Cover } from '../cover.svg';
import { HeroContainer, HeroContent, CoverContainer } from './Hero.styles';
import SearchFrom from '../../../components/SearchForm';

const Hero = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <SearchFrom />
      </HeroContent>
      <CoverContainer>
        <Cover />
      </CoverContainer>
    </HeroContainer>
  );
};

export default Hero;
